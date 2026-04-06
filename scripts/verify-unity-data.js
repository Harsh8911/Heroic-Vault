const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '..', 'public', 'museum', 'Build', 'final build.data');

function fail(message) {
  console.error('\n[verify-unity-data] ' + message + '\n');
  process.exit(1);
}

if (!fs.existsSync(dataFile)) {
  fail(`Missing Unity data file: ${dataFile}`);
}

const stats = fs.statSync(dataFile);
const fileSize = stats.size;
const head = fs.readFileSync(dataFile, { encoding: 'utf8', flag: 'r' }).slice(0, 80);

if (head.startsWith('version https://git-lfs.github.com/spec/v1')) {
  fail(
    'Unity data file is still a Git LFS pointer. Ensure your deploy pipeline runs "git lfs pull" and has LFS enabled before build.'
  );
}

if (fileSize < 1_000_000) {
  fail(`Unity data file is unexpectedly small (${fileSize} bytes). Expected full binary asset.`);
}

console.log(`[verify-unity-data] Unity data looks valid (${fileSize} bytes).`);
