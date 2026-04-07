const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const outputFile = path.join(publicDir, 'models-catalog.json');
const viewerScriptPath = '../model-viewer.js';
const viewerStylePath = '../model-viewer.css';

const excludedDirectories = new Set([
  'fonts',
  'images',
  'museum',
  'static'
]);

const nameOverrides = {
  'apj abdul kalam': 'APJ Abdul Kalam',
  'bankim chndra chatterji': 'Bankim Chandra Chatterji',
  'chandra shekhar ajad': 'Chandra Shekhar Azad',
  dhyanchand: 'Dhyanchand',
  'god vishnu': 'God Vishnu',
  'homi bhabha': 'Homi Bhabha',
  'jawaharlal nehru': 'Jawaharlal Nehru',
  'lata mangeshkar': 'Lata Mangeshkar',
  'mother teresa': 'Mother Teresa',
  natraj: 'Natraj',
  'rajendra prasad': 'Rajendra Prasad',
  'rakesh sharma': 'Rakesh Sharma',
  ramanujan: 'Ramanujan',
  'sachin tendulkar': 'Sachin Tendulkar',
  'sardar vallabhai patel': 'Sardar Vallabhai Patel',
  'sarojini naidu': 'Sarojini Naidu',
  sarswati: 'Sarswati',
  shivaji: 'Shivaji',
  'shri ram': 'Shri Ram',
  'subhash chandra bose': 'Subhash Chandra Bose',
  'swami vivekanand': 'Swami Vivekanand',
  'tatya tope': 'Tatya Tope',
  trishul: 'Trishul',
  valmiki: 'Valmiki',
  visvesvaraya: 'Visvesvaraya',
  'vikram sarabhai': 'Vikram Sarabhai',
  'vinayak savarkar': 'Vinayak Savarkar'
};

const featuredSlugs = [
  'mahatma-gandhi',
  'jyotiba-phule',
  'savitribai-phule',
  'shri-ram',
  'natraj'
];

const modelTemplates = {
  'ambe maa': {
    title: 'Ambe Maa',
    subtitle: 'A devotional representation of the divine mother.',
    snapshotName: 'ambe-maa',
    modelFile: 'AMBE MAA-60 MM.stl',
    loader: 'stl',
    autoRotate: false,
    highlight: 'Blessing, strength, and protective energy.'
  },
  'apj abdul kalam': {
    title: 'APJ Abdul Kalam',
    subtitle: 'A tribute to the scientist, teacher, and statesman.',
    snapshotName: 'apj-abdul-kalam',
    modelFile: 'APJ Abdul Kalam.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Vision, discipline, and scientific inspiration.'
  },
  'bal gangadhar tilak': {
    title: 'Bal Gangadhar Tilak',
    subtitle: 'A digital homage to the great nationalist leader.',
    snapshotName: 'bal-gangadhar-tilak',
    modelFile: 'Bal Gangadhar Tilak.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Freedom, resolve, and political awakening.'
  },
  'bankim chndra chatterji': {
    title: 'Bankim Chandra Chatterji',
    subtitle: 'Celebrating the novelist and composer of Vande Mataram.',
    snapshotName: 'bankim-chandra-chatterji',
    modelFile: 'Bankim Chandra Chatterji.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Literature, patriotism, and cultural pride.'
  },
  'bhagat singh': {
    title: 'Bhagat Singh',
    subtitle: 'A fearless revolutionary who became a national icon.',
    snapshotName: 'bhagat-singh',
    modelFile: 'Bhagat Singh.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Courage, sacrifice, and youth-led resistance.'
  },
  buddha: {
    title: 'Buddha',
    subtitle: 'A serene form inspired by enlightenment and peace.',
    snapshotName: 'buddha',
    modelFile: 'Buddha.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Awareness, compassion, and inner stillness.'
  },
  'bust-of-rabindranath-tagore-gordon-square-ldn': {
    title: 'Rabindranath Tagore',
    subtitle: 'The poet, artist, and Nobel laureate in sculpture form.',
    snapshotName: 'rabindranath-tagore',
    modelFile: 'Bust of Rabindranath Tagore.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Art, song, and literary excellence.'
  },
  'chandra shekhar ajad': {
    title: 'Chandra Shekhar Azad',
    subtitle: 'A tribute to the fearless revolutionary of India\'s freedom movement.',
    snapshotName: 'chandra-shekhar-azad',
    modelFile: 'Pbr/base.obj',
    textureFile: 'Pbr/texture_diffuse.png',
    loader: 'obj-textured',
    autoRotate: true,
    highlight: 'Courage, sacrifice, and uncompromising resistance.'
  },
  chanakya: {
    title: 'Chanakya',
    subtitle: 'An homage to the strategist and teacher of statecraft.',
    snapshotName: 'chanakya',
    modelFile: 'Chanakya.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Wisdom, governance, and policy.'
  },
  dhyanchand: {
    title: 'Dhyanchand',
    subtitle: 'A tribute to the hockey legend and sporting icon.',
    snapshotName: 'dhyanchand',
    modelFile: 'Dhyanchand.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Athletic excellence, agility, and legacy.'
  },
  'elephanta-caves-mumbai-india': {
    title: 'Elephanta Caves',
    subtitle: 'Historic heritage rendered as an exhibition model.',
    snapshotName: 'elephanta-caves',
    modelFile: 'Elephanta Caves.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Architecture, heritage, and sacred sculpture.'
  },
  'gandhi charkha': {
    title: 'Gandhi Charkha',
    subtitle: 'A symbolic craft model representing self-reliance.',
    snapshotName: 'gandhi-charkha',
    modelFile: 'Gandhi Charkha.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Simplicity, independence, and dignity of labor.'
  },
  ganesha: {
    title: 'Ganesha',
    subtitle: 'A classical representation of the remover of obstacles.',
    snapshotName: 'ganesha',
    modelFile: 'ganapati__ganesha.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Beginnings, wisdom, and auspiciousness.'
  },
  ganpati: {
    title: 'Ganpati',
    subtitle: 'A devotional and celebratory idol model.',
    snapshotName: 'ganpati',
    modelFile: 'ganpati.json',
    loader: 'obj',
    autoRotate: true,
    highlight: 'Festivity, devotion, and artistry.'
  },
  'god vishnu': {
    title: 'God Vishnu',
    subtitle: 'A divine guardian form from the Hindu pantheon.',
    snapshotName: 'god-vishnu',
    modelFile: 'God Vishnu.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Preservation, balance, and cosmic order.'
  },
  hanuman: {
    title: 'Hanuman',
    subtitle: 'A heroic devotional figure of strength and service.',
    snapshotName: 'hanuman',
    modelFile: 'Hanuman.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Devotion, courage, and unwavering loyalty.'
  },
  'homi bhabha': {
    title: 'Homi Bhabha',
    subtitle: 'A tribute to the architect of India’s nuclear science program.',
    snapshotName: 'homi-bhabha',
    modelFile: 'Homi Bhabha.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Scientific leadership and institution building.'
  },
  'jawaharlal nehru': {
    title: 'Jawaharlal Nehru',
    subtitle: 'A portrait model of India’s first prime minister.',
    snapshotName: 'jawaharlal-nehru',
    modelFile: 'Jawaharlal Nehru.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Modern nation building and democratic vision.'
  },
  'kapil dev': {
    title: 'Kapil Dev',
    subtitle: 'A sporting tribute to India’s legendary cricket captain.',
    snapshotName: 'kapil-dev',
    modelFile: 'Kapil Dev.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Leadership, excellence, and sporting pride.'
  },
  kartikeyan: {
    title: 'Kartikeyan',
    subtitle: 'A divine warrior representation of Kartikeya.',
    snapshotName: 'kartikeyan',
    modelFile: 'Kartikeyan.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Valor, youth, and divine strength.'
  },
  krishna: {
    title: 'Krishna',
    subtitle: 'A graceful devotional model of Lord Krishna.',
    snapshotName: 'krishna',
    modelFile: 'Krishna.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Joy, wisdom, and transcendental playfulness.'
  },
  'lata mangeshkar': {
    title: 'Lata Mangeshkar',
    subtitle: 'A tribute to the nightingale of Indian cinema.',
    snapshotName: 'lata-mangeshkar',
    modelFile: 'Lata Mangeshkar.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Music, grace, and cultural memory.'
  },
  laxmi: {
    title: 'Laxmi',
    subtitle: 'A divine model symbolizing prosperity and abundance.',
    snapshotName: 'laxmi',
    modelFile: 'Laxmi.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Wealth, auspiciousness, and benevolence.'
  },
  'mother teresa': {
    title: 'Mother Teresa',
    subtitle: 'A sculptural tribute to compassion and service.',
    snapshotName: 'mother-teresa',
    modelFile: 'Mother Teresa.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Care, humility, and humanitarian work.'
  },
  'rajendra prasad': {
    title: 'Rajendra Prasad',
    subtitle: 'A founding-era portrait model of India’s first president.',
    snapshotName: 'rajendra-prasad',
    modelFile: 'Rajendra Prasad.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Constitutional leadership and public service.'
  },
  rajmudra: {
    title: 'Rajmudra',
    subtitle: 'The royal seal associated with Maratha identity.',
    snapshotName: 'rajmudra',
    modelFile: 'rajmudra.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Authority, sovereignty, and legacy.'
  },
  'rakesh sharma': {
    title: 'Rakesh Sharma',
    subtitle: 'India’s first astronaut, captured in a tribute model.',
    snapshotName: 'rakesh-sharma',
    modelFile: 'Rakesh Sharma.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Exploration, science, and national achievement.'
  },
  ramanujan: {
    title: 'Ramanujan',
    subtitle: 'A model honoring mathematical genius and intuition.',
    snapshotName: 'ramanujan',
    modelFile: 'Ramanujan.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Mathematics, ingenuity, and discovery.'
  },
  'sachin tendulkar': {
    title: 'Sachin Tendulkar',
    subtitle: 'A sporting icon rendered for the collection.',
    snapshotName: 'sachin-tendulkar',
    modelFile: 'Sachin Tendulkar.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Mastery, discipline, and cricketing excellence.'
  },
  'sambhaji maharaj': {
    title: 'Sambhaji Maharaj',
    subtitle: 'A tribute to the courageous Maratha ruler.',
    snapshotName: 'sambhaji-maharaj',
    modelFile: 'Sambhaji Maharaj.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Resistance, leadership, and sacrifice.'
  },
  sambhaji: {
    title: 'Sambhaji',
    subtitle: 'An alternate showcase of the Maratha monarch.',
    snapshotName: 'sambhaji',
    modelFile: 'Sambhaji.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Honor, resilience, and legacy.'
  },
  'sardar vallabhai patel': {
    title: 'Sardar Vallabhbhai Patel',
    subtitle: 'A unifying figure in India’s modern history.',
    snapshotName: 'sardar-vallabhbhai-patel',
    modelFile: 'Sardar Vallabhbhai Patel.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Unity, administration, and nation building.'
  },
  'sarojini naidu': {
    title: 'Sarojini Naidu',
    subtitle: 'The nightingale of India in sculptural form.',
    snapshotName: 'sarojini-naidu',
    modelFile: 'Sarojini Naidu.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Poetry, oratory, and civic leadership.'
  },
  sarswati: {
    title: 'Sarswati',
    subtitle: 'A devotional model representing knowledge and arts.',
    snapshotName: 'sarswati',
    modelFile: 'Sarswati.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Learning, speech, and creative grace.'
  },
  shankh: {
    title: 'Shankh',
    subtitle: 'A sacred conch model used in ritual and symbolism.',
    snapshotName: 'shankh',
    modelFile: 'Shankh.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Purity, invocation, and ceremonial sound.'
  },
  shiva: {
    title: 'Shiva',
    subtitle: 'A divine sculptural representation of Mahadev.',
    snapshotName: 'shiva',
    modelFile: 'Shiva.obj',
    loader: 'obj',
    autoRotate: true,
    highlight: 'Transformation, meditation, and cosmic balance.'
  },
  shivaji: {
    title: 'Shivaji Maharaj',
    subtitle: 'A regal tribute to the founder of the Maratha Empire.',
    snapshotName: 'shivaji-maharaj',
    modelFile: 'Shivaji.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Leadership, fortitude, and sovereignty.'
  },
  'statue-of-gandhi': {
    title: 'Statue of Gandhi',
    subtitle: 'A commemorative tribute to Mahatma Gandhi.',
    snapshotName: 'statue-of-gandhi',
    modelFile: 'Statue of Gandhi.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Nonviolence, moral clarity, and freedom.'
  },
  'subhash chandra bose': {
    title: 'Subhash Chandra Bose',
    subtitle: 'A tribute to the revolutionary leader Netaji.',
    snapshotName: 'subhash-chandra-bose',
    modelFile: 'Subhash Chandra Bose.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Resolve, mobilization, and independence.'
  },
  'swami vivekanand': {
    title: 'Swami Vivekanand',
    subtitle: 'An icon of spiritual philosophy and service.',
    snapshotName: 'swami-vivekanand',
    modelFile: 'Swami Vivekanand.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Unity, philosophy, and self-realization.'
  },
  'tatya tope': {
    title: 'Tatya Tope',
    subtitle: 'A heroic model honoring the 1857 uprising leader.',
    snapshotName: 'tatya-tope',
    modelFile: 'Tatya Tope.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Resistance, bravery, and revolutionary spirit.'
  },
  'teracotta figures': {
    title: 'Teracotta Figures',
    subtitle: 'A heritage craft collection rendered as a model.',
    snapshotName: 'teracotta-figures',
    modelFile: 'Teracotta Figures.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Craft, material culture, and handwork.'
  },
  'tipus tiger': {
    title: 'Tipu Tiger',
    subtitle: 'A historic emblem of resistance and engineering.',
    snapshotName: 'tipus-tiger',
    modelFile: 'Tipu Tiger.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Power, ingenuity, and historical memory.'
  },
  trishul: {
    title: 'Trishul',
    subtitle: 'A sacred trident symbolizing divine force.',
    snapshotName: 'trishul',
    modelFile: 'Trishul.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Protection, balance, and spiritual power.'
  },
  valmiki: {
    title: 'Valmiki',
    subtitle: 'The sage poet honored in a classic display page.',
    snapshotName: 'valmiki',
    modelFile: 'Valmiki.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Poetry, wisdom, and foundational storytelling.'
  },
  'vikram sarabhai': {
    title: 'Vikram Sarabhai',
    subtitle: 'The father of India’s space program in sculpture form.',
    snapshotName: 'vikram-sarabhai',
    modelFile: 'Vikram Sarabhai.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Innovation, vision, and scientific institution building.'
  },
  'vinayak savarkar': {
    title: 'Vinayak Savarkar',
    subtitle: 'A historical portrait model of a nationalist leader.',
    snapshotName: 'vinayak-savarkar',
    modelFile: 'Vinayak Savarkar.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Ideology, activism, and political thought.'
  },
  visvesvaraya: {
    title: 'Visvesvaraya',
    subtitle: 'A model honoring the engineer and statesman.',
    snapshotName: 'visvesvaraya',
    modelFile: 'Visvesvaraya.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Engineering, planning, and modernization.'
  },
  'vitthal & rukhmini': {
    title: 'Vitthal & Rukhmini',
    subtitle: 'A devotional pair rendered in sacred form.',
    snapshotName: 'vitthal-rukhmini',
    modelFile: 'Vitthal & Rukhmini.glb',
    loader: 'glb',
    autoRotate: true,
    highlight: 'Faith, devotion, and cultural celebration.'
  }
};

function toTitleCase(rawName) {
  const normalized = rawName.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  return normalized
    .split(' ')
    .map((word) => {
      if (!word) {
        return word;
      }

      if (/^[A-Z0-9&]+$/.test(word)) {
        return word;
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function listFilesRecursively(rootDir) {
  const stack = [rootDir];
  const files = [];

  while (stack.length > 0) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });

    entries.forEach((entry) => {
      const absPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(absPath);
        return;
      }

      files.push(absPath);
    });
  }

  return files;
}

function toRelativePosix(fromDir, absPath) {
  return path.relative(fromDir, absPath).replace(/\\/g, '/');
}

function selectModelAsset(directoryName) {
  const modelDir = path.join(publicDir, directoryName);
  const files = listFilesRecursively(modelDir);

  const meshFiles = files.filter((filePath) => /\.(glb|gltf|obj|stl)$/i.test(filePath) && !/\.meta$/i.test(filePath));
  if (!meshFiles.length) {
    return null;
  }

  const selectedMesh = meshFiles
    .slice()
    .sort((a, b) => {
      const relA = toRelativePosix(modelDir, a).toLowerCase();
      const relB = toRelativePosix(modelDir, b).toLowerCase();

      const score = (rel) => {
        if (rel.endsWith('pbr/base.obj')) {
          return 0;
        }
        if (/\/base\.(obj|glb|gltf|stl)$/.test(rel) || /^base\.(obj|glb|gltf|stl)$/.test(rel)) {
          return 1;
        }
        if (rel.endsWith('.glb') || rel.endsWith('.gltf')) {
          return 2;
        }
        if (rel.endsWith('.obj')) {
          return 3;
        }
        if (rel.endsWith('.stl')) {
          return 4;
        }
        return 9;
      };

      const diff = score(relA) - score(relB);
      if (diff !== 0) {
        return diff;
      }

      return relA.length - relB.length;
    })[0];

  const modelFile = toRelativePosix(modelDir, selectedMesh);
  const meshExt = path.extname(selectedMesh).toLowerCase();

  let textureFile = null;
  if (meshExt === '.obj') {
    const textureCandidates = files.filter((filePath) => /\.(png|jpg|jpeg|webp)$/i.test(filePath) && !/\.meta$/i.test(filePath));
    if (textureCandidates.length) {
      const meshDir = path.dirname(selectedMesh);
      const preferredTexture = textureCandidates.find((filePath) => {
        const isSameDir = path.dirname(filePath) === meshDir;
        const fileName = path.basename(filePath).toLowerCase();
        return isSameDir && /(texture_diffuse|diffuse|basecolor|albedo)/.test(fileName);
      });

      if (preferredTexture) {
        textureFile = toRelativePosix(modelDir, preferredTexture);
      }

      if (!textureFile) {
      const selectedTexture = textureCandidates
        .slice()
        .sort((a, b) => {
          const relA = toRelativePosix(modelDir, a).toLowerCase();
          const relB = toRelativePosix(modelDir, b).toLowerCase();
          const inSameDirA = path.dirname(a) === meshDir ? 0 : 1;
          const inSameDirB = path.dirname(b) === meshDir ? 0 : 1;

          if (inSameDirA !== inSameDirB) {
            return inSameDirA - inSameDirB;
          }

          const pref = (rel) => {
            if (/(diffuse|basecolor|albedo)/.test(rel)) {
              return 0;
            }
            if (/(color)/.test(rel)) {
              return 1;
            }
            if (/(shaded)/.test(rel)) {
              return 2;
            }
            if (/(texture)/.test(rel)) {
              return 3;
            }
            return 4;
          };
          const prefDiff = pref(relA) - pref(relB);
          if (prefDiff !== 0) {
            return prefDiff;
          }

          return relA.length - relB.length;
        })[0];

        textureFile = toRelativePosix(modelDir, selectedTexture);
      }
    }
  }

  let loader = 'glb';
  if (meshExt === '.stl') {
    loader = 'stl';
  } else if (meshExt === '.obj') {
    loader = textureFile ? 'obj-textured' : 'obj';
  }

  return {
    modelFile,
    textureFile,
    loader
  };
}

function buildFallbackTemplate(model, asset) {
  return {
    title: model.name,
    subtitle: `${model.name} from the Heroic Vault 3D collection.`,
    snapshotName: model.slug,
    modelFile: asset.modelFile,
    textureFile: asset.textureFile,
    loader: asset.loader,
    autoRotate: true,
    highlight: 'Digitally preserved model prepared for interactive viewing.'
  };
}

function inferCategories(normalizedKey, slug, template) {
  if (template && Array.isArray(template.categories) && template.categories.length) {
    return template.categories;
  }

  const categories = new Set();
  const key = `${normalizedKey} ${slug}`;

  if (/(ram|krishna|shiva|ganesh|ganpati|hanuman|sarswati|laxmi|natraj|kartikey|vitthal|trishul|shankh|vishnu|ambe)/.test(key)) {
    categories.add('divine-icons');
  }

  if (/(shivaji|sambhaji|bhagat|subhash|tatya|tilak|savarkar|chandra-shekhar|gandhi|nehru|patel|rajendra|sarojini|bankim|phule|vivekanand)/.test(key)) {
    categories.add('freedom-leaders');
  }

  if (/(kalam|sarabhai|bhabha|visvesvaraya|ramanujan|rakesh)/.test(key)) {
    categories.add('scientists-innovators');
  }

  if (/(sachin|kapil|dhyanchand)/.test(key)) {
    categories.add('sports-icons');
  }

  if (/(buddha|valmiki|mother-teresa|lata|tagore|chanakya)/.test(key)) {
    categories.add('cultural-icons');
  }

  if (/(elephanta|teracotta|rajmudra|statue|charkha|tipus-tiger)/.test(key)) {
    categories.add('heritage-artifacts');
  }

  if (!categories.size) {
    categories.add('historical-icons');
  }

  return Array.from(categories);
}

function listModelDirectoryNames() {
  const entries = fs.readdirSync(publicDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .filter((entry) => !excludedDirectories.has(entry.name.toLowerCase()))
    .map((entry) => entry.name);
}

function createModelRecord(directoryName) {
  const normalizedKey = directoryName.toLowerCase();
  const displayName = nameOverrides[normalizedKey] || toTitleCase(directoryName);
  const slug = slugify(directoryName);
  const asset = selectModelAsset(directoryName);
  const hasDisplayPage = Boolean(asset) && fs.existsSync(path.join(publicDir, directoryName, 'index.html'));
  const template = modelTemplates[normalizedKey] || null;
  const categories = inferCategories(normalizedKey, slug, template);

  return {
    directory: directoryName,
    name: displayName,
    slug,
    hasDisplayPage,
    categories,
    modelFile: asset ? asset.modelFile : null,
    loader: asset ? asset.loader : null,
    textureFile: asset ? asset.textureFile : null,
    autoRotate: template ? template.autoRotate : true,
    highlight: template ? template.highlight : null,
    subtitle: template ? template.subtitle : null,
    snapshotName: template ? template.snapshotName : slug,
    url: hasDisplayPage ? `/${encodeURIComponent(directoryName)}/index.html?model=${slug}` : null
  };
}

function collectModelDirectories() {
  return listModelDirectoryNames()
    .map((directoryName) => createModelRecord(directoryName))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function buildCatalog() {
  const directoryNames = listModelDirectoryNames();

  directoryNames.forEach((directoryName) => {
    const pagePath = path.join(publicDir, directoryName, 'index.html');
    const model = createModelRecord(directoryName);
    if (!model.modelFile || !model.loader) {
      return;
    }

    const configuredTemplate = modelTemplates[directoryName.toLowerCase()]
      ? {
          ...modelTemplates[directoryName.toLowerCase()],
          modelFile: model.modelFile,
          textureFile: model.textureFile,
          loader: model.loader
        }
      : buildFallbackTemplate(model, {
          modelFile: model.modelFile,
          textureFile: model.textureFile,
          loader: model.loader
        });

    const html = createModelPage(model, configuredTemplate);
    fs.writeFileSync(pagePath, html);
  });

  const models = collectModelDirectories();
  const featuredModels = featuredSlugs
    .map((slug) => models.find((model) => model.slug === slug))
    .filter((model) => Boolean(model && model.hasDisplayPage));

  const payload = {
    generatedAt: new Date().toISOString(),
    totalModels: models.length,
    featuredModels,
    models
  };

  fs.writeFileSync(outputFile, JSON.stringify(payload, null, 2));
  console.log(`[generate-model-catalog] Generated ${models.length} models in ${outputFile}`);
}

function createModelPage(model, template) {
  const modelLabel = template.title;
  const modelPath = template.modelFile;
  const extension = template.loader;
  const sceneType = template.autoRotate ? 'Heroic Vault Collection' : 'Static Exhibition';
  const loaderConfig = buildLoaderConfig(model, template);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${modelLabel} | Heroic Vault</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Lora:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${viewerStylePath}">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
  ${extension === 'stl' ? '<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/STLLoader.js"></script>' : ''}
  ${extension === 'obj' ? '<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/OBJLoader.js"></script><script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/MTLLoader.js"></script>' : ''}
  ${extension === 'obj-textured' ? '<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/OBJLoader.js"></script>' : ''}
  ${extension === 'glb' ? '<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js"></script>' : ''}
</head>
<body>
  <header class="topbar">
    <div class="topbar-inner">
      <h1 class="brand">Heroic Vault</h1>
      <a class="back-link" href="/studios.html">Back to Studios</a>
    </div>
  </header>

  <main class="page-shell">
    <section class="hero-card">
      <div class="hero-grid">
        <div class="viewer-side">
          <div id="viewer-frame" class="viewer-frame">
            <canvas id="viewer-canvas"></canvas>
            <div id="loader" class="loader">
              <div class="loader-box">
                <p id="loader-label" class="loader-label">Loading 3D model...</p>
                <div class="progress-track">
                  <div id="progress-fill" class="progress-fill"></div>
                </div>
              </div>
            </div>
            <div class="viewer-overlay">
              <span id="status-pill" class="pill">Preparing scene...</span>
              <span class="pill">Drag to orbit, scroll to zoom</span>
            </div>
          </div>

          <div class="controls">
            <button id="btn-rotate" class="btn ${template.autoRotate ? 'active' : ''}">${template.autoRotate ? 'Pause Spin' : 'Auto Spin'}</button>
            <button id="btn-reset" class="btn">Reset View</button>
            <button id="btn-wireframe" class="btn">Wireframe</button>
            <button id="btn-fullscreen" class="btn">Fullscreen</button>
            <button id="btn-snapshot" class="btn">Snapshot</button>
          </div>

          <div class="slider-group">
            <label class="slider-label" for="light-range">Key Light <span id="light-value">1.2x</span></label>
            <input id="light-range" type="range" min="0.3" max="2.5" step="0.1" value="1.2">
          </div>
          <div class="slider-group">
            <label class="slider-label" for="exposure-range">Exposure <span id="exposure-value">1.1x</span></label>
            <input id="exposure-range" type="range" min="0.6" max="2.0" step="0.1" value="1.1">
          </div>
          <div id="error-box" class="error-box"></div>
        </div>

        <aside class="info-side">
          <h2 class="side-title">${modelLabel}</h2>
          <p class="side-sub">${template.subtitle}</p>
          <div class="meta-list">
            <div class="meta-item">
              <strong>Highlight</strong>
              ${template.highlight}
            </div>
            <div class="meta-item">
              <strong>Scene Type</strong>
              ${sceneType}
            </div>
            <div class="meta-item">
              <strong>File</strong>
              ${modelPath}
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="content-grid">
      <article class="panel">
        <h3>About</h3>
        <p>${template.highlight}</p>
      </article>
      <article class="panel">
        <h3>Collection</h3>
        <p>This model is now connected to the Studios page and rendered directly from the shared catalog.</p>
      </article>
      <article class="panel">
        <h3>Display</h3>
        <p>Use the viewer controls to rotate, reset, inspect, and capture a snapshot of the model.</p>
      </article>
    </section>
  </main>

  <script src="${viewerScriptPath}"></script>
  <script>
    HeroicViewer.init(${loaderConfig});
  </script>
</body>
</html>`;
}

function buildLoaderConfig(model, template) {
  const modelFile = template.modelFile.replace(/\\/g, '\\\\');
  const textureFile = template.textureFile ? template.textureFile.replace(/\\/g, '\\\\') : null;
  const autoRotate = template.autoRotate ? 'true' : 'false';

  if (template.loader === 'stl') {
    return `{
      autoRotate: ${autoRotate},
      snapshotName: ${JSON.stringify(template.snapshotName)},
      loadModel: function (ctx) {
        return new Promise(function (resolve, reject) {
          var loader = new THREE.STLLoader();
          loader.load(${JSON.stringify(modelFile)}, function (geometry) {
            var material = new THREE.MeshStandardMaterial({
              color: 0xd4af37,
              metalness: 0.55,
              roughness: 0.38,
              side: THREE.DoubleSide
            });
            var mesh = new THREE.Mesh(geometry, material);
            geometry.computeBoundingBox();
            geometry.center();
            mesh.scale.setScalar(0.22);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            ctx.scene.add(mesh);
            ctx.onProgress(100, 'Model ready');
            resolve(mesh);
          }, function (xhr) {
            if (xhr.total) {
              ctx.onProgress((xhr.loaded / xhr.total) * 100, 'Loading mesh...');
            }
          }, reject);
        });
      }
    }`;
  }

  if (template.loader === 'obj') {
    return `{
      autoRotate: ${autoRotate},
      snapshotName: ${JSON.stringify(template.snapshotName)},
      loadModel: function (ctx) {
        return new Promise(function (resolve, reject) {
          var objLoader = new THREE.OBJLoader();

          objLoader.load(${JSON.stringify(modelFile)}, function (object) {
            var material = new THREE.MeshStandardMaterial({
              color: 0xb58f5d,
              metalness: 0.3,
              roughness: 0.72,
              side: THREE.DoubleSide
            });

            object.traverse(function (child) {
              if (child && child.isMesh) {
                child.material = material;
                child.castShadow = true;
                child.receiveShadow = true;
              }
            });

            var box = new THREE.Box3().setFromObject(object);
            var center = box.getCenter(new THREE.Vector3());
            var size = box.getSize(new THREE.Vector3());
            var maxDim = Math.max(size.x, size.y, size.z);
            var scale = 6 / maxDim;

            object.position.sub(center);
            object.scale.setScalar(scale);

            ctx.scene.add(object);
            ctx.onProgress(100, 'Model ready');
            resolve(object);
          }, function (xhr) {
            if (xhr.total) {
              ctx.onProgress((xhr.loaded / xhr.total) * 100, 'Loading geometry...');
            }
          }, reject);
        });
      }
    }`;
  }

  if (template.loader === 'obj-textured') {
    return `{
      autoRotate: ${autoRotate},
      snapshotName: ${JSON.stringify(template.snapshotName)},
      loadModel: function (ctx) {
        return new Promise(function (resolve, reject) {
          var textureLoader = new THREE.TextureLoader();
          var objLoader = new THREE.OBJLoader();

          textureLoader.load(${JSON.stringify(textureFile)}, function (texture) {
            objLoader.load(${JSON.stringify(modelFile)}, function (object) {
              var material = new THREE.MeshStandardMaterial({
                map: texture,
                metalness: 0.24,
                roughness: 0.74,
                side: THREE.DoubleSide
              });

              object.traverse(function (child) {
                if (child && child.isMesh) {
                  child.material = material;
                  child.castShadow = true;
                  child.receiveShadow = true;
                }
              });

              var box = new THREE.Box3().setFromObject(object);
              var center = box.getCenter(new THREE.Vector3());
              var size = box.getSize(new THREE.Vector3());
              var maxDim = Math.max(size.x, size.y, size.z);
              var scale = 6 / maxDim;

              object.position.sub(center);
              object.scale.setScalar(scale);

              ctx.scene.add(object);
              ctx.onProgress(100, 'Model ready');
              resolve(object);
            }, function (xhr) {
              if (xhr.total) {
                ctx.onProgress((xhr.loaded / xhr.total) * 100, 'Loading geometry...');
              }
            }, reject);
          }, undefined, reject);
        });
      }
    }`;
  }

  return `{
    autoRotate: ${autoRotate},
    snapshotName: ${JSON.stringify(template.snapshotName)},
    loadModel: function (ctx) {
      return new Promise(function (resolve, reject) {
        var loader = new THREE.GLTFLoader();
        loader.load(${JSON.stringify(modelFile)}, function (gltf) {
          var object = gltf.scene || gltf.scenes[0];
          object.traverse(function (child) {
            if (child && child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          var box = new THREE.Box3().setFromObject(object);
          var center = box.getCenter(new THREE.Vector3());
          var size = box.getSize(new THREE.Vector3());
          var maxDim = Math.max(size.x, size.y, size.z);
          var scale = 6 / maxDim;
          object.position.sub(center);
          object.scale.setScalar(scale);
          ctx.scene.add(object);
          ctx.onProgress(100, 'Model ready');
          resolve(object);
        }, function (xhr) {
          if (xhr.total) {
            ctx.onProgress((xhr.loaded / xhr.total) * 100, 'Loading model...');
          }
        }, reject);
      });
    }
  }`;
}

buildCatalog();