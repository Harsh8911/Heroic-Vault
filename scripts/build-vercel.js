#!/usr/bin/env node
/**
 * Vercel Build Script
 * Handles:
 * - Git LFS pull (if available)
 * - Unity data verification (non-blocking)
 * - Model catalog generation
 * - React build
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const log = (message) => console.log(`[vercel-build] ${message}`);
const error = (message) => console.error(`[vercel-build] ❌ ${message}`);
const success = (message) => console.log(`[vercel-build] ✅ ${message}`);

function runCommand(cmd, description, canFail = false) {
  try {
    log(`Running: ${description}`);
    execSync(cmd, { stdio: 'inherit' });
    success(description);
    return true;
  } catch (err) {
    if (canFail) {
      error(`${description} (non-blocking failure)`);
      return false;
    }
    error(`${description} (FATAL)`);
    process.exit(1);
  }
}

// 1. Check and pull Git LFS (non-blocking)
try {
  execSync('git lfs version', { stdio: 'ignore' });
  log('Git LFS detected, attempting pull...');
  runCommand('git lfs pull', 'Git LFS pull', true);
} catch (err) {
  log('Git LFS not available (skipping)');
}

// 2. Verify Unity data (non-blocking)
const dataFile = path.join(__dirname, '..', 'public', 'museum', 'Build', 'final build.data');
try {
  if (fs.existsSync(dataFile)) {
    const head = fs.readFileSync(dataFile, { encoding: 'utf8', flag: 'r' }).slice(0, 80);
    if (head.startsWith('version https://git-lfs.github.com/spec/v1')) {
      error(`Unity data file is an LFS pointer (not pulled). Museum viewer will work but may be incomplete.`);
    } else {
      const stats = fs.statSync(dataFile);
      const fileSize = stats.size;
      if (fileSize > 1_000_000) {
        success(`Unity data verified (${(fileSize / 1024 / 1024).toFixed(2)} MB)`);
      } else {
        error(`Unity data file is unexpectedly small (${fileSize} bytes). Expected >1MB.`);
      }
    }
  } else {
    error(`Unity data file not found: ${dataFile} (museum viewer will use fallback)`);
  }
} catch (err) {
  error(`Could not verify Unity data: ${err.message}`);
}

// 3. Generate model catalog (critical)
log('Important: Generating model catalog before build...');
runCommand('node scripts/generate-model-catalog.js', 'Model catalog generation');

// 4. Build React app (critical)
runCommand('npm run build', 'React production build');

success('Vercel build completed successfully! 🚀');
