// ─── Constants ────────────────────────────────────────────────────

const PLAYER_HP = 1500;
const PLAYER_SPEED = 12;
const BOSS_SPEED_MULT = 1.5;
const BOSS_DAMAGE_MULT = 2.5;
const BOSS_DAMAGE_BONUS = 250;
const BOSS_SPEED = PLAYER_SPEED * BOSS_SPEED_MULT;
const SPRINT_SPEED = BOSS_SPEED * 2;
const MINION_SPEED = SPRINT_SPEED * 0.25;
const MINION_HUNT_SPEED = SPRINT_SPEED * 0.5;
const BOOST_SPEED = BOSS_SPEED * 5;
const BOOST_DURATION = 10000;
const BOOST_COOLDOWN = 20000;
const FLIGHT_DURATION = 10000;
const FLIGHT_COOLDOWN = 20000;
const FLIGHT_VERTICAL_SPEED = 14;
const JUMP_VELOCITY = 15;
const GRAVITY = 34;
const ENEMY_DAMAGE = 12;
const DIFFICULTY_MULT = 1;
const KILL_HEAL = 12;
const REGEN_DELAY = 3000;
const REGEN_PER_SEC = 100;
const SANCTUARY_HEAL_RATE = 500;
const SANCTUARY_TEAMMATE_HEAL = 300;
const SANCTUARY_RADIUS = 6;
const SANCTUARY_SPOTS = [
  { x: 0, z: 32 },
  { x: 0, z: -32 },
];
const ARENA_SIZE = 60;
const WALL_HEIGHT = 4;
const LAYER_COUNT = 3;
const LAYER_HEIGHT = 5;
const LAYER_Y = [0, LAYER_HEIGHT, LAYER_HEIGHT * 2];
const FLIGHT_MAX_HEIGHT = LAYER_Y[2] + WALL_HEIGHT + 6;
const PLAYER_EYE_OFFSET = 1.7;
const CAMERA_FOV = 75;
const AIM_FOV = 42;
const MOUSE_SENS = 0.002;
const AIM_MOUSE_SENS = 0.0011;
const AIM_MOVE_MULT = 0.55;
const AIM_SPREAD_MULT = 0.35;
const ENEMY_COUNT = 79;
const MIN_ENEMIES_PER_LAYER = 21;
const TEAMMATE_COUNT = 2;
const BOSSES_PER_WAVE = 3;
const TEAMMATE_POWER_MULT = 4;
const TEAMMATE_HP = 1800 * TEAMMATE_POWER_MULT;
const TEAMMATE_SPEED = PLAYER_SPEED * 1.76 * TEAMMATE_POWER_MULT;
const TEAMMATE_DAMAGE = 48 * TEAMMATE_POWER_MULT;
const TEAMMATE_SHOOT_COOLDOWN = 210 / TEAMMATE_POWER_MULT;
const TEAMMATE_BULLET_SPEED = 116 * TEAMMATE_POWER_MULT;
const TEAMMATE_REGEN_RATE = 500;
const ALLY_BOOST_MULT = 2;
const TEAMMATE_NAMES = ['阿尔法', '布拉沃'];
const TEAMMATE_PROFILES = [
  { role: '突击', color: '#5dade2', speedMult: 1.12, damageMult: 1.2, range: 46, keepDist: 5.5, spread: 0.007, healAura: 0 },
  { role: '支援', color: '#58d68d', speedMult: 0.96, damageMult: 0.95, range: 50, keepDist: 8.5, spread: 0.005, healAura: 28 },
];
const TEAMMATE_RETREAT_HP = 0.3;
const TEAMMATE_REVIVE_TIME = 4500;
const SQUAD_REVIVE_TIME = 3000;
const SQUAD_REVIVE_HP_RATIO = 0.55;
const BOSS_NAMES = ['铁面指挥官', '狂焰战鬼', '暗影猎手'];
const BOSS_HUES = [0.0, 0.06, 0.58];
const BOSS_POWER_MULT = 2;
const WEAPON_SWITCH_COOLDOWN = 300;
const CYCLE_LENGTH = 15;
const BASE_MINIONS_PER_WAVE = 350;
const BASE_MINIONS_TO_BOSS = 100;

const LAYER_COVERS = [
  [
    [-15, 1.5, -10, 6, 3, 2],
    [12, 1.5, 8, 2, 3, 8],
    [-8, 1.5, 18, 8, 3, 2],
    [20, 1.5, -15, 4, 3, 4],
    [0, 1.5, 0, 3, 3, 3],
    [-22, 1, -22, 5, 2, 5],
    [22, 1, 22, 5, 2, 5],
  ],
  [
    [10, 1.5, 0, 5, 3, 5],
    [-10, 1.5, 0, 5, 3, 5],
    [0, 1.5, 15, 8, 3, 2],
    [-18, 1.5, -12, 4, 3, 4],
    [18, 1.5, 12, 4, 3, 4],
    [0, 1, -18, 6, 2, 6],
  ],
  [
    [0, 1.5, 0, 4, 2, 4],
    [-18, 1.5, -18, 6, 2, 6],
    [18, 1.5, 18, 6, 2, 6],
    [-12, 1.5, 12, 3, 2, 8],
    [12, 1.5, -12, 8, 2, 3],
  ],
];

const WALK_RAMPS = [
  { cx: 27, cz: 0, halfW: 2.5, halfD: 8, yBottom: 0, yTop: 5 },
  { cx: 27, cz: 0, halfW: 2.5, halfD: 8, yBottom: 5, yTop: 10 },
  { cx: -27, cz: 0, halfW: 2.5, halfD: 8, yBottom: 0, yTop: 5 },
  { cx: -27, cz: 0, halfW: 2.5, halfD: 8, yBottom: 5, yTop: 10 },
];

const WEAPONS = {
  stealth: {
    id: 'stealth',
    name: '隐形',
    slot: 1,
    ability: true,
    abilityLabel: '激活',
    duration: 8000,
    cooldown: 12000,
    fireRate: 400,
  },
  allyboost: {
    id: 'allyboost',
    name: '队友强化',
    slot: 2,
    ability: true,
    abilityLabel: '强化',
    duration: 12000,
    cooldown: 18000,
    fireRate: 600,
  },
  hammer: {
    id: 'hammer',
    name: '电锤',
    slot: 3,
    melee: true,
    meleeLabel: '锤击',
    magSize: 0,
    reserve: 0,
    reloadTime: 0,
    fireRate: 800,
    damage: 58,
    headshotMult: 2,
    spread: 0,
    pellets: 1,
    recoilZ: 0,
    range: 3.4,
    arc: Math.PI / 2.1,
  },
  katana: {
    id: 'katana',
    name: '太刀',
    slot: 4,
    melee: true,
    meleeLabel: '斩击',
    magSize: 0,
    reserve: 0,
    reloadTime: 0,
    fireRate: 200,
    damage: 115,
    headshotMult: 2.5,
    spread: 0,
    pellets: 1,
    recoilZ: 0,
    range: 9,
    arc: Math.PI / 2.4,
  },
  magma: {
    id: 'magma',
    name: '岩浆枪',
    slot: 5,
    infinite: true,
    magSize: 0,
    reserve: 0,
    reloadTime: 0,
    fireRate: 480,
    damage: 450,
    headshotMult: 2,
    spread: 0.008,
    pellets: 1,
    recoilZ: 0.09,
  },
};

const WEAPON_ORDER = ['stealth', 'allyboost', 'hammer', 'katana', 'magma'];

const EQUIPMENT = {
  medkit: { id: 'medkit', name: '战术医疗包', desc: '最大生命 +250', maxHp: 250 },
  boots: { id: 'boots', name: '战术靴', desc: '移动速度 +12%', speedMult: 0.12 },
  scope: { id: 'scope', name: '精准瞄准镜', desc: '武器伤害 +18%', damageMult: 0.18 },
  vest: { id: 'vest', name: '防弹背心', desc: '受到伤害 -10%', damageReduction: 0.1 },
  vampire: { id: 'vampire', name: '生命掠夺', desc: '击杀回血 +8', killHeal: 8 },
  nano: { id: 'nano', name: '纳米修复', desc: '脱战回血 +50/秒', regenBonus: 50 },
  turbo: { id: 'turbo', name: '涡轮核心', desc: '冲刺冷却 -25%', boostCooldownReduction: 0.25 },
  capacitor: { id: 'capacitor', name: '能量电容', desc: '极速冲刺 +3 秒', boostDurationBonus: 3000 },
};

const EQUIPMENT_IDS = Object.keys(EQUIPMENT);

const KATANA_UPGRADE_INTERVAL = 5;
const KATANA_ELEMENTS = [
  {
    id: 'base', name: '凡铁', suffix: '',
    color: 0xd4e8ff, edgeColor: 0x88ccff, emissive: 0x224466, emissiveIntensity: 0.12,
    damageMult: 1, rangeBonus: 0, fireRateMult: 1, arcBonus: 0,
    particleColors: [0x88ccff, 0xffffff], desc: '锋利基础刀锋',
  },
  {
    id: 'fire', name: '烈焰', suffix: ' · 烈焰',
    color: 0xff5522, edgeColor: 0xffcc00, emissive: 0xff3300, emissiveIntensity: 0.65,
    damageMult: 1.4, rangeBonus: 1.2, fireRateMult: 0.9, arcBonus: 0.06,
    particleColors: [0xff5500, 0xffee00], effect: 'burn', burnDps: 95,
    desc: '灼烧刀锋 · 持续火焰伤害',
  },
  {
    id: 'frost', name: '寒冰', suffix: ' · 寒冰',
    color: 0x88ddff, edgeColor: 0xffffff, emissive: 0x0088ff, emissiveIntensity: 0.5,
    damageMult: 1.35, rangeBonus: 1.5, fireRateMult: 0.88, arcBonus: 0.08,
    particleColors: [0x88ccff, 0xffffff], effect: 'frost', slowMult: 0.42,
    desc: '寒冰刀锋 · 敌人大幅减速',
  },
  {
    id: 'thunder', name: '雷霆', suffix: ' · 雷霆',
    color: 0xffee88, edgeColor: 0xffffff, emissive: 0xffcc00, emissiveIntensity: 0.75,
    damageMult: 1.5, rangeBonus: 1, fireRateMult: 0.85, arcBonus: 0.1,
    particleColors: [0xffff44, 0xffffff], effect: 'chain', chainRange: 6, chainMult: 0.45,
    desc: '雷霆刀锋 · 弹射连锁伤害',
  },
  {
    id: 'venom', name: '剧毒', suffix: ' · 剧毒',
    color: 0x88ff44, edgeColor: 0xccff88, emissive: 0x44cc00, emissiveIntensity: 0.55,
    damageMult: 1.45, rangeBonus: 1.3, fireRateMult: 0.9, arcBonus: 0.07,
    particleColors: [0x88ff00, 0x44ff44], effect: 'poison', poisonDps: 70,
    desc: '剧毒刀锋 · 持续毒素侵蚀',
  },
  {
    id: 'radiance', name: '圣辉', suffix: ' · 圣辉',
    color: 0xffeedd, edgeColor: 0xffffff, emissive: 0xffdd88, emissiveIntensity: 0.6,
    damageMult: 1.55, rangeBonus: 1.8, fireRateMult: 0.82, arcBonus: 0.12,
    particleColors: [0xffeedd, 0xffffff], effect: 'lifesteal', lifestealPct: 0.12,
    desc: '圣辉刀锋 · 命中吸血回复',
  },
];

// ─── Game State ───────────────────────────────────────────────────

const state = {
  playing: false,
  paused: false,
  kills: 0,
  wave: 1,
  startTime: 0,
  hp: PLAYER_HP,
  weaponId: 'stealth',
  ammo: 0,
  reserve: 0,
  weaponAmmo: {},
  reloading: false,
  reloadTimer: 0,
  lastShot: 0,
  lastWeaponSwitch: 0,
  mouseLocked: false,
  currentLayer: 0,
  waveMinionKills: 0,
  bossSpawned: false,
  bossesAlive: 0,
  verticalVelocity: 0,
  grounded: true,
  standLayer: 0,
  boostActive: false,
  boostTimer: 0,
  boostCooldown: 0,
  flightActive: false,
  flightTimer: 0,
  flightCooldown: 0,
  lastDamageTime: 0,
  equipment: [],
  stealthActive: false,
  stealthTimer: 0,
  stealthCooldown: 0,
  allyBoostActive: false,
  allyBoostTimer: 0,
  allyBoostCooldown: 0,
  sanctuaryStay: 0,
  playerDown: false,
  playerReviveTimer: 0,
  playerDownX: 0,
  playerDownY: 0,
  playerDownZ: 0,
  playerDownLayer: 0,
  katanaTier: 0,
};

const keys = {};
const mouse = { down: false };

// ─── Three.js Setup ───────────────────────────────────────────────

const canvas = document.getElementById('game-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor(0x1a1a2e);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x1a1a2e, 40, 130);

const camera = new THREE.PerspectiveCamera(CAMERA_FOV, window.innerWidth / window.innerHeight, 0.1, 250);
camera.position.set(0, LAYER_Y[0] + PLAYER_EYE_OFFSET, 0);

// Lighting
const ambient = new THREE.AmbientLight(0x404060, 0.6);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xfff5e6, 1.0);
sun.position.set(20, 40, 15);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 150;
sun.shadow.camera.left = -50;
sun.shadow.camera.right = 50;
sun.shadow.camera.top = 50;
sun.shadow.camera.bottom = -50;
sun.position.set(20, 55, 15);
scene.add(sun);

const fill = new THREE.DirectionalLight(0x6688cc, 0.3);
fill.position.set(-15, 10, -10);
scene.add(fill);

// ─── Textures (procedural) ────────────────────────────────────────

function makeFloorTexture(baseColor = '#2c3e50') {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = 'rgba(0,0,0,0.15)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 256; i += 32) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 256); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(256, i); ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(8, 8);
  return tex;
}

function buildStairs(cx, cz, halfD, yBottom, yTop, mat) {
  const steps = 8;
  const depth = halfD * 2;
  const rise = (yTop - yBottom) / steps;
  const run = depth / steps;
  for (let i = 0; i < steps; i++) {
    const step = new THREE.Mesh(
      new THREE.BoxGeometry(3, rise, run + 0.05),
      mat
    );
    step.position.set(
      cx,
      yBottom + rise * (i + 0.5),
      cz - halfD + run * (i + 0.5)
    );
    step.castShadow = true;
    step.receiveShadow = true;
    scene.add(step);
  }
}

// ─── World ────────────────────────────────────────────────────────

const colliders = [];
const sanctuaries = [];
const enemies = [];
const teammates = [];
const particles = [];
const enemyBullets = [];
const allyBullets = [];
let weaponMesh = null;
let muzzleFlash = null;

function addCollider(mesh, w, h, d, layer = -1) {
  colliders.push({ mesh, w, h, d, layer });
  scene.add(mesh);
  return mesh;
}

function buildWorld() {
  const floorColors = ['#2c3e50', '#34495e', '#3d566e'];
  const half = ARENA_SIZE;
  const totalHeight = LAYER_Y[LAYER_COUNT - 1] + WALL_HEIGHT;

  for (let layer = 0; layer < LAYER_COUNT; layer++) {
    const floorY = LAYER_Y[layer];
    const floorGeo = new THREE.PlaneGeometry(ARENA_SIZE * 2, ARENA_SIZE * 2);
    const floorMat = new THREE.MeshStandardMaterial({
      map: makeFloorTexture(floorColors[layer]),
      roughness: 0.9,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = floorY;
    floor.receiveShadow = true;
    scene.add(floor);

    const slab = new THREE.Mesh(
      new THREE.BoxGeometry(ARENA_SIZE * 2, 0.15, ARENA_SIZE * 2),
      new THREE.MeshStandardMaterial({ color: floorColors[layer], roughness: 0.95 })
    );
    slab.position.set(0, floorY - 0.075, 0);
    slab.receiveShadow = true;
    addCollider(slab, ARENA_SIZE * 2, 0.15, ARENA_SIZE * 2, layer);
  }

  const wallMat = new THREE.MeshStandardMaterial({ color: 0x34495e, roughness: 0.8 });
  const walls = [
    [0, totalHeight / 2, -half, ARENA_SIZE * 2, totalHeight, 1],
    [0, totalHeight / 2, half, ARENA_SIZE * 2, totalHeight, 1],
    [-half, totalHeight / 2, 0, 1, totalHeight, ARENA_SIZE * 2],
    [half, totalHeight / 2, 0, 1, totalHeight, ARENA_SIZE * 2],
  ];
  for (const [x, y, z, w, h, d] of walls) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    addCollider(m, w, h, d);
  }

  const railMat = new THREE.MeshStandardMaterial({ color: 0x566573, roughness: 0.7 });
  for (let layer = 1; layer < LAYER_COUNT; layer++) {
    const floorY = LAYER_Y[layer];
    const rails = [
      [0, floorY + 0.6, -half + 0.5, ARENA_SIZE * 2 - 10, 1.2, 0.4],
      [0, floorY + 0.6, half - 0.5, ARENA_SIZE * 2 - 10, 1.2, 0.4],
      [-half + 0.5, floorY + 0.6, 0, 0.4, 1.2, ARENA_SIZE * 2 - 10],
      [half - 0.5, floorY + 0.6, 0, 0.4, 1.2, ARENA_SIZE * 2 - 10],
    ];
    for (const [x, y, z, w, h, d] of rails) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), railMat);
      m.position.set(x, y, z);
      m.castShadow = true;
      addCollider(m, w, h, d, layer);
    }
  }

  const coverMat = new THREE.MeshStandardMaterial({ color: 0x5d6d7e, roughness: 0.7 });
  for (let layer = 0; layer < LAYER_COUNT; layer++) {
    const floorY = LAYER_Y[layer];
    for (const [x, y, z, w, h, d] of LAYER_COVERS[layer]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), coverMat);
      m.position.set(x, floorY + y, z);
      m.castShadow = true;
      m.receiveShadow = true;
      addCollider(m, w, h, d, layer);
    }
  }

  const stairMat = new THREE.MeshStandardMaterial({ color: 0x7f8c8d, roughness: 0.75 });
  for (const ramp of WALK_RAMPS) {
    buildStairs(ramp.cx, ramp.cz, ramp.halfD, ramp.yBottom, ramp.yTop, stairMat);
  }

  const pillarMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50 });
  const lightMat = new THREE.MeshStandardMaterial({ color: 0x3498db, emissive: 0x3498db, emissiveIntensity: 0.8 });
  for (const [x, z] of [[-25, 0], [25, 0], [0, -25], [0, 25]]) {
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1, totalHeight, 8), pillarMat);
    pillar.position.set(x, totalHeight / 2, z);
    pillar.castShadow = true;
    scene.add(pillar);
    for (let layer = 0; layer < LAYER_COUNT; layer++) {
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), lightMat);
      lamp.position.set(x, LAYER_Y[layer] + WALL_HEIGHT - 0.5, z);
      scene.add(lamp);
      const pl = new THREE.PointLight(0x3498db, 0.5, 18);
      pl.position.copy(lamp.position);
      scene.add(pl);
    }
  }

  buildSanctuaries();
}

function buildSanctuaries() {
  for (let layer = 0; layer < LAYER_COUNT; layer++) {
    for (const spot of SANCTUARY_SPOTS) {
      const floorY = LAYER_Y[layer];
      const group = new THREE.Group();
      group.position.set(spot.x, floorY, spot.z);

      const baseMat = new THREE.MeshStandardMaterial({
        color: 0x1e6b4f,
        emissive: 0x0d3d2a,
        emissiveIntensity: 0.35,
        roughness: 0.55,
        metalness: 0.15,
      });
      const glowMat = new THREE.MeshStandardMaterial({
        color: 0x2ecc71,
        emissive: 0x27ae60,
        emissiveIntensity: 0.85,
        transparent: true,
        opacity: 0.55,
      });
      const pillarMat = new THREE.MeshStandardMaterial({
        color: 0xecf0f1,
        emissive: 0x2ecc71,
        emissiveIntensity: 0.25,
        roughness: 0.4,
      });

      const platform = new THREE.Mesh(
        new THREE.CylinderGeometry(SANCTUARY_RADIUS, SANCTUARY_RADIUS + 0.3, 0.18, 32),
        baseMat
      );
      platform.position.y = 0.09;
      platform.receiveShadow = true;
      group.add(platform);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(SANCTUARY_RADIUS - 0.6, 0.12, 10, 40),
        glowMat
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.22;
      group.add(ring);

      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(SANCTUARY_RADIUS - 0.8, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2),
        new THREE.MeshStandardMaterial({
          color: 0x58d68d,
          emissive: 0x1e8449,
          emissiveIntensity: 0.45,
          transparent: true,
          opacity: 0.18,
          side: THREE.DoubleSide,
        })
      );
      dome.position.y = 0.2;
      group.add(dome);

      const beacon = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.28, 1.6, 8), pillarMat);
      beacon.position.y = 0.9;
      group.add(beacon);

      const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.14, 0.14), glowMat);
      crossH.position.set(0, 1.75, 0);
      group.add(crossH);
      const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.5), glowMat);
      crossV.position.set(0, 1.75, 0);
      group.add(crossV);

      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
        const px = Math.cos(angle) * (SANCTUARY_RADIUS - 1.2);
        const pz = Math.sin(angle) * (SANCTUARY_RADIUS - 1.2);
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 2.2, 6), pillarMat);
        pillar.position.set(px, 1.1, pz);
        group.add(pillar);

        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 8), glowMat);
        cap.position.set(px, 2.25, pz);
        group.add(cap);
      }

      const light = new THREE.PointLight(0x2ecc71, 1.1, SANCTUARY_RADIUS * 3.5);
      light.position.set(0, 2.5, 0);
      group.add(light);

      scene.add(group);
      sanctuaries.push({
        x: spot.x,
        z: spot.z,
        layer,
        radius: SANCTUARY_RADIUS,
        group,
        ring,
        light,
        pulse: Math.random() * Math.PI * 2,
      });
    }
  }
}

function isInSanctuary(x, z, layer) {
  for (const s of sanctuaries) {
    if (s.layer !== layer) continue;
    if (Math.hypot(x - s.x, z - s.z) <= s.radius) return true;
  }
  return false;
}

function isPlayerInSanctuary() {
  return isInSanctuary(camera.position.x, camera.position.z, state.currentLayer);
}

function updateSanctuary(dt) {
  for (const s of sanctuaries) {
    s.pulse += dt * 0.003;
    if (s.ring) s.ring.rotation.z = s.pulse;
    if (s.light) s.light.intensity = 0.85 + Math.sin(s.pulse * 2) * 0.35;
  }

  const el = document.getElementById('sanctuary-hud');
  if (!state.playing) {
    if (el) el.classList.add('hidden');
    return;
  }

  const inside = isPlayerInSanctuary();
  if (inside) state.sanctuaryStay += dt;
  else state.sanctuaryStay = 0;

  if (el) {
    el.classList.toggle('hidden', !inside);
    if (inside) {
      const reviveHint = teammates.some(t => !t.alive)
        ? ' · 倒地队友 3 秒后掩护复活'
        : '';
      el.textContent = `复血庇护所 · +${SANCTUARY_HEAL_RATE}/秒${reviveHint}`;
    }
  }

  if (!inside) return;

  tryReviveDownedTeammates();

  const maxHp = getMaxHp();
  let healed = false;

  if (state.hp > 0 && state.hp < maxHp) {
    state.hp = Math.min(maxHp, state.hp + SANCTUARY_HEAL_RATE * (dt / 1000));
    healed = true;
  }

  for (const t of teammates) {
    if (!t.alive || !t.group) continue;
    if (!isInSanctuary(t.group.position.x, t.group.position.z, t.layer)) continue;
    if (t.hp < t.maxHp) {
      t.hp = Math.min(t.maxHp, t.hp + SANCTUARY_TEAMMATE_HEAL * (dt / 1000));
      t.status = '庇护所';
      healed = true;
    }
  }

  if (healed && Math.random() < 0.08) {
    spawnParticles(
      camera.position.x + (Math.random() - 0.5) * 2,
      camera.position.y - 0.8,
      camera.position.z + (Math.random() - 0.5) * 2,
      0x2ecc71,
      3
    );
  }

  if (healed) updateHUD();
}

function getTeammateBoostMult() {
  return state.allyBoostActive ? ALLY_BOOST_MULT : 1;
}

function getKatanaElement(tier = state.katanaTier) {
  return KATANA_ELEMENTS[Math.min(tier, KATANA_ELEMENTS.length - 1)];
}

function getKatanaDisplayName() {
  return `太刀${getKatanaElement().suffix}`;
}

function getKatanaMeleeStats() {
  const base = WEAPONS.katana;
  const el = getKatanaElement();
  return {
    damage: Math.floor(base.damage * el.damageMult),
    headshotMult: base.headshotMult,
    fireRate: Math.max(120, Math.floor(base.fireRate * el.fireRateMult)),
    range: base.range + el.rangeBonus,
    arc: base.arc + el.arcBonus,
    element: el,
  };
}

function getKatanaUpgradeHint() {
  if (state.katanaTier >= KATANA_ELEMENTS.length - 1) return '满级';
  const remaining = (state.katanaTier + 1) * KATANA_UPGRADE_INTERVAL - state.wave;
  return remaining > 0 ? `${remaining}关觉醒` : '本关觉醒';
}

function tryUpgradeKatana(completedWave) {
  const newTier = Math.min(
    Math.floor(completedWave / KATANA_UPGRADE_INTERVAL),
    KATANA_ELEMENTS.length - 1
  );
  if (newTier <= state.katanaTier) return;

  state.katanaTier = newTier;
  const el = getKatanaElement();
  const px = camera.position.x;
  const py = camera.position.y;
  const pz = camera.position.z;
  for (let i = 0; i < 36; i++) {
    const angle = (i / 36) * Math.PI * 2;
    const radius = 1.2 + Math.random() * 1.8;
    spawnParticles(
      px + Math.cos(angle) * radius,
      py - 0.3 + Math.random() * 0.8,
      pz + Math.sin(angle) * radius,
      el.particleColors[i % 2],
      14
    );
  }
  spawnParticles(px, py, pz, el.edgeColor, 22);
  const flash = document.getElementById('damage-flash');
  if (flash) {
    const r = (el.color >> 16) & 255;
    const g = (el.color >> 8) & 255;
    const b = el.color & 255;
    flash.style.background = `radial-gradient(circle at center, rgba(${r},${g},${b},0.45) 0%, transparent 70%)`;
    flash.classList.add('active');
    setTimeout(() => {
      flash.classList.remove('active');
      flash.style.background = '';
    }, 320);
  }
  showWaveBanner(`太刀觉醒！${el.name}属性 · ${el.desc}`, 3400);
  refreshKatanaMesh();
  updateHUD();
}

function refreshKatanaMesh() {
  if (state.weaponId !== 'katana') return;
  if (weaponMesh) camera.remove(weaponMesh);
  weaponMesh = createWeaponMesh('katana');
  muzzleFlash = weaponMesh.userData.muzzleFlash;
  weaponMesh.userData.basePos = weaponMesh.position.clone();
  weaponMesh.userData.baseRot = weaponMesh.rotation.x;
  camera.add(weaponMesh);
}

function applyKatanaChain(src, chainDmg, range, now) {
  let chained = 0;
  const sx = src.group.position.x;
  const sz = src.group.position.z;
  for (const other of enemies) {
    if (!other.alive || other === src || other.layer !== src.layer) continue;
    const dist = Math.hypot(other.group.position.x - sx, other.group.position.z - sz);
    if (dist > range) continue;
    other.hp -= chainDmg;
    other.lastHit = now;
    const oy = other.group.position.y + other.aimHeight * other.group.scale.y;
    spawnParticles(other.group.position.x, oy, other.group.position.z, 0xffff44, 10);
    spawnParticles(other.group.position.x, oy, other.group.position.z, 0xffffff, 6);
    if (other.hp <= 0) killEnemy(other);
    chained++;
    if (chained >= 3) break;
  }
}

function applyKatanaHit(e, dmg, element, now, isHead) {
  e.hp -= dmg;
  e.lastHit = now;
  const ex = e.group.position.x;
  const ey = e.group.position.y + e.aimHeight * e.group.scale.y;
  const ez = e.group.position.z;
  const [c1, c2] = element.particleColors;
  spawnParticles(ex, ey, ez, isHead ? 0xffd700 : c1, isHead ? 14 : 12);
  spawnParticles(ex, ey, ez, c2, isHead ? 10 : 8);

  if (element.effect === 'burn') {
    e.burnUntil = now + 3000;
    e.burnDps = element.burnDps;
  } else if (element.effect === 'frost') {
    e.slowUntil = now + 2800;
    e.slowMult = element.slowMult;
    e.speed = (e.baseSpeed ?? e.speed) * element.slowMult;
  } else if (element.effect === 'poison') {
    e.poisonUntil = now + 4000;
    e.poisonDps = element.poisonDps;
  } else if (element.effect === 'lifesteal') {
    state.hp = Math.min(getMaxHp(), state.hp + dmg * element.lifestealPct);
    updateHUD();
  } else if (element.effect === 'chain') {
    applyKatanaChain(e, dmg * element.chainMult, element.chainRange, now);
  }

  if (e.hp <= 0) killEnemy(e);
}

function updateEnemyStatusEffects(e, now, dt) {
  if (!e.alive) return false;
  const sec = dt / 1000;
  const ex = e.group.position.x;
  const ey = e.group.position.y + e.aimHeight * e.group.scale.y;
  const ez = e.group.position.z;

  if (e.burnUntil && now < e.burnUntil) {
    e.hp -= e.burnDps * sec;
    if (Math.random() < 0.12) spawnParticles(ex, ey, ez, 0xff5500, 2);
  } else {
    e.burnUntil = 0;
  }

  if (e.poisonUntil && now < e.poisonUntil) {
    e.hp -= e.poisonDps * sec;
    if (Math.random() < 0.1) spawnParticles(ex, ey, ez, 0x88ff00, 2);
  } else {
    e.poisonUntil = 0;
  }

  if (e.slowUntil && now >= e.slowUntil) {
    e.speed = e.baseSpeed ?? e.speed;
    e.slowUntil = 0;
  }

  if (e.hp <= 0) {
    killEnemy(e);
    return true;
  }
  return false;
}

function updateKatanaVisuals(dt) {
  if (!weaponMesh || state.weaponId !== 'katana') return;
  const mats = weaponMesh.userData.glowMats;
  if (!mats?.length) return;
  katanaGlowPhase += dt * 0.004;
  const pulse = 0.55 + Math.sin(katanaGlowPhase) * 0.35;
  const el = getKatanaElement();
  for (const mat of mats) {
    if (mat.emissiveIntensity != null) mat.emissiveIntensity = el.emissiveIntensity * pulse;
  }
  const aura = weaponMesh.userData.auraMesh;
  if (aura) {
    aura.rotation.y += dt * 0.0025;
    aura.rotation.z = Math.sin(katanaGlowPhase * 0.6) * 0.12;
  }
  const aura2 = weaponMesh.userData.auraMesh2;
  if (aura2) {
    aura2.rotation.y -= dt * 0.0035;
    aura2.rotation.z = Math.cos(katanaGlowPhase * 0.5) * 0.1;
  }
  const gem = weaponMesh.userData.gemMesh;
  if (gem) {
    gem.rotation.y += dt * 0.004;
    gem.rotation.x = Math.sin(katanaGlowPhase * 0.8) * 0.25;
  }
  const halo = weaponMesh.userData.haloMesh;
  if (halo) {
    halo.rotation.z += dt * 0.002;
    halo.material.opacity = 0.35 + Math.sin(katanaGlowPhase) * 0.25;
  }
  const wisps = weaponMesh.userData.wisps;
  if (wisps?.length) {
    wisps.forEach((wisp, i) => {
      wisp.position.z = -0.35 - i * 0.12 + Math.sin(katanaGlowPhase + i) * 0.02;
      wisp.material.opacity = 0.45 + Math.sin(katanaGlowPhase * 1.4 + i) * 0.35;
    });
  }
}

function spawnKatanaSlashWave(x, y, z, element, tier) {
  const [c1, c2] = element.particleColors;
  const count = 14 + tier * 4;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const radius = 1.2 + tier * 0.25;
    spawnParticles(x + Math.cos(angle) * radius, y + (Math.random() - 0.5) * 0.3, z + Math.sin(angle) * radius, i % 2 ? c1 : c2, 6 + tier);
  }
  spawnParticles(x, y + 0.1, z, 0xffffff, 8 + tier * 2);
}

let katanaGlowPhase = 0;

function createKatanaMesh() {
  const tier = state.katanaTier;
  const el = getKatanaElement(tier);
  const gun = new THREE.Group();
  const bladeLen = 0.82 + tier * 0.09;
  const bladeScale = 1 + tier * 0.06;

  const bladeMat = new THREE.MeshStandardMaterial({
    color: el.color, metalness: 0.96, roughness: 0.08,
    emissive: el.emissive, emissiveIntensity: el.emissiveIntensity,
  });
  const edgeMat = new THREE.MeshStandardMaterial({
    color: el.edgeColor, metalness: 1, roughness: 0.04,
    emissive: el.emissive, emissiveIntensity: el.emissiveIntensity * 1.35,
  });
  const handleMat = new THREE.MeshStandardMaterial({ color: 0x2a1408, roughness: 0.82 });
  const guardMat = new THREE.MeshStandardMaterial({
    color: tier >= 2 ? el.color : 0x9a9a9a,
    metalness: 0.85, roughness: 0.18,
    emissive: tier >= 1 ? el.emissive : 0x000000,
    emissiveIntensity: tier >= 1 ? el.emissiveIntensity * 0.4 : 0,
  });
  const wrapMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
  const gemMat = new THREE.MeshStandardMaterial({
    color: el.edgeColor, metalness: 0.4, roughness: 0.15,
    emissive: el.emissive, emissiveIntensity: el.emissiveIntensity * 1.5,
  });

  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.035 * bladeScale, 0.055 * bladeScale, bladeLen), bladeMat);
  blade.position.set(0.24, -0.04, -0.58 - tier * 0.03);
  gun.add(blade);

  const edge = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.04 * bladeScale, bladeLen - 0.04), edgeMat);
  edge.position.set(0.26, -0.04, -0.58 - tier * 0.03);
  gun.add(edge);

  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.14 + tier * 0.02, 0.025, 0.07 + tier * 0.01), guardMat);
  guard.position.set(0.24, -0.07, -0.14);
  gun.add(guard);

  if (tier >= 1) {
    const aura = new THREE.Mesh(
      new THREE.TorusGeometry(0.11 + tier * 0.015, 0.008, 8, 24),
      new THREE.MeshStandardMaterial({
        color: el.color, emissive: el.emissive, emissiveIntensity: el.emissiveIntensity * 0.9,
        metalness: 0.7, roughness: 0.2, transparent: true, opacity: 0.75,
      })
    );
    aura.rotation.x = Math.PI / 2;
    aura.position.set(0.24, -0.04, -0.42 - tier * 0.04);
    gun.add(aura);
    gun.userData.auraMesh = aura;

    const aura2 = new THREE.Mesh(
      new THREE.TorusGeometry(0.07 + tier * 0.01, 0.005, 6, 18),
      new THREE.MeshBasicMaterial({ color: el.edgeColor, transparent: true, opacity: 0.45 })
    );
    aura2.rotation.x = Math.PI / 2;
    aura2.position.set(0.24, -0.04, -0.55 - tier * 0.04);
    gun.add(aura2);
    gun.userData.auraMesh2 = aura2;
  }

  if (tier >= 1) {
    const wispCount = 2 + tier;
    const wisps = [];
    for (let i = 0; i < wispCount; i++) {
      const wisp = new THREE.Mesh(
        new THREE.SphereGeometry(0.012 + tier * 0.003, 6, 6),
        new THREE.MeshBasicMaterial({ color: el.edgeColor, transparent: true, opacity: 0.7 })
      );
      wisp.position.set(0.24 + (i % 2 ? 0.02 : -0.02), -0.04, -0.35 - i * 0.12);
      gun.add(wisp);
      wisps.push(wisp);
    }
    gun.userData.wisps = wisps;
  }

  if (tier >= 2) {
    const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.01, 0.18 + tier * 0.02), guardMat);
    wingL.position.set(0.16, -0.07, -0.14);
    wingL.rotation.z = 0.55;
    gun.add(wingL);
    const wingR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.01, 0.18 + tier * 0.02), guardMat);
    wingR.position.set(0.32, -0.07, -0.14);
    wingR.rotation.z = -0.55;
    gun.add(wingR);
  }

  if (tier >= 3) {
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.035 + tier * 0.004, 0), gemMat);
    gem.position.set(0.24, -0.055, -0.14);
    gun.add(gem);
    gun.userData.gemMesh = gem;

    const crest = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.06 + tier * 0.01, 0.02), guardMat);
    crest.position.set(0.24, -0.02, -0.14);
    gun.add(crest);
  }

  if (tier >= 4) {
    const halo = new THREE.Mesh(
      new THREE.RingGeometry(0.06, 0.1, 16),
      new THREE.MeshBasicMaterial({ color: el.edgeColor, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
    );
    halo.position.set(0.24, -0.04, -0.72 - tier * 0.03);
    gun.add(halo);
    gun.userData.haloMesh = halo;

    const ribbonL = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.22 + tier * 0.03, 0.04), edgeMat);
    ribbonL.position.set(0.14, -0.04, -0.5);
    ribbonL.rotation.z = 0.35;
    gun.add(ribbonL);
    const ribbonR = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.22 + tier * 0.03, 0.04), edgeMat);
    ribbonR.position.set(0.34, -0.04, -0.5);
    ribbonR.rotation.z = -0.35;
    gun.add(ribbonR);
  }

  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.24 + tier * 0.02), handleMat);
  handle.position.set(0.24, -0.07, 0.02);
  gun.add(handle);

  const wrap = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.042, 0.12), wrapMat);
  wrap.position.set(0.24, -0.07, -0.04);
  gun.add(wrap);

  if (tier >= 5) {
    const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), gemMat);
    pommel.position.set(0.24, -0.07, 0.14);
    gun.add(pommel);
  }

  gun.userData.blade = blade;
  gun.userData.glowMats = [bladeMat, edgeMat, gemMat];
  gun.userData.muzzle = new THREE.Vector3(0.24, -0.04, -0.98 - tier * 0.06);
  gun.userData.flashSize = 0;
  gun.position.set(0.28, -0.18, -0.3);
  gun.rotation.x = 0.15;
  return gun;
}

function createWeaponMesh(id) {
  const gun = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.6, roughness: 0.4 });
  const accentMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50, metalness: 0.5, roughness: 0.5 });

  if (id === 'stealth') {
    const cloakMat = new THREE.MeshStandardMaterial({
      color: 0x88ccff, metalness: 0.6, roughness: 0.2,
      emissive: 0x224466, emissiveIntensity: 0.35,
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.018, 8, 16), cloakMat);
    ring.position.set(0.2, -0.12, -0.35);
    gun.add(ring);

    const core = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), cloakMat);
    core.position.set(0.2, -0.12, -0.35);
    gun.add(core);

    const band = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.14), bodyMat);
    band.position.set(0.2, -0.18, -0.28);
    gun.add(band);

    gun.userData.muzzle = new THREE.Vector3(0.2, -0.12, -0.35);
    gun.userData.flashSize = 0;
    gun.position.set(0.22, -0.16, -0.35);
  } else if (id === 'allyboost') {
    const boostMat = new THREE.MeshStandardMaterial({
      color: 0x58d68d, metalness: 0.7, roughness: 0.25,
      emissive: 0x27ae60, emissiveIntensity: 0.55,
    });
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xa8ffcc, emissive: 0x2ecc71, emissiveIntensity: 0.85,
      metalness: 0.4, roughness: 0.2,
    });

    const pad = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.04, 0.14), bodyMat);
    pad.position.set(0.2, -0.2, -0.28);
    gun.add(pad);

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.12, 0.2), boostMat);
    body.position.set(0.2, -0.14, -0.38);
    gun.add(body);

    const core = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 10), coreMat);
    core.position.set(0.2, -0.1, -0.38);
    gun.add(core);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.008, 8, 20), boostMat);
    ring.position.set(0.2, -0.1, -0.38);
    gun.add(ring);

    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.12, 6), accentMat);
    antenna.position.set(0.2, -0.02, -0.38);
    gun.add(antenna);

    gun.userData.muzzle = new THREE.Vector3(0.2, -0.02, -0.38);
    gun.userData.flashSize = 0;
    gun.position.set(0.22, -0.16, -0.35);
  } else if (id === 'hammer') {
    const motorMat = new THREE.MeshStandardMaterial({ color: 0xf0b429, roughness: 0.55, metalness: 0.2 });
    const gripMat = new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.92 });
    const headMat = new THREE.MeshStandardMaterial({ color: 0x6a6a6a, metalness: 0.75, roughness: 0.3 });
    const electricMat = new THREE.MeshStandardMaterial({
      color: 0x33ddff,
      emissive: 0x0088ff,
      emissiveIntensity: 0.7,
      metalness: 0.85,
      roughness: 0.15,
    });

    const motor = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.13, 0.3), motorMat);
    motor.position.set(0.26, -0.15, -0.3);
    gun.add(motor);

    const ventL = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.08, 0.18), gripMat);
    ventL.position.set(0.2, -0.15, -0.3);
    gun.add(ventL);

    const ventR = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.08, 0.18), gripMat);
    ventR.position.set(0.32, -0.15, -0.3);
    gun.add(ventR);

    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.014, 6, 14), electricMat);
    coil.position.set(0.26, -0.1, -0.44);
    gun.add(coil);

    const coil2 = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.01, 6, 12), electricMat);
    coil2.position.set(0.26, -0.1, -0.5);
    gun.add(coil2);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.11, 0.16), headMat);
    head.position.set(0.26, -0.1, -0.58);
    gun.add(head);

    const chisel = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.12), headMat);
    chisel.position.set(0.26, -0.1, -0.7);
    gun.add(chisel);

    const spark = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0x88eeff, transparent: true, opacity: 0.85 })
    );
    spark.position.set(0.26, -0.1, -0.76);
    gun.add(spark);

    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.16, 0.07), gripMat);
    handle.position.set(0.26, -0.3, -0.12);
    gun.add(handle);

    const trigger = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.05, 0.04), bodyMat);
    trigger.position.set(0.26, -0.22, -0.18);
    gun.add(trigger);

    const cord = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.2), gripMat);
    cord.position.set(0.26, -0.34, 0.02);
    gun.add(cord);

    gun.userData.head = head;
    gun.userData.muzzle = new THREE.Vector3(0.26, -0.1, -0.78);
    gun.userData.flashSize = 0;
    gun.position.set(0.28, -0.2, -0.32);
    gun.rotation.x = 0.25;
  } else if (id === 'katana') {
    return createKatanaMesh();
  } else if (id === 'magma') {
    const magmaMat = new THREE.MeshStandardMaterial({
      color: 0xff4400,
      emissive: 0xff2200,
      emissiveIntensity: 0.75,
      metalness: 0.35,
      roughness: 0.35,
    });
    const heatMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xff6600,
      emissiveIntensity: 0.9,
      metalness: 0.2,
      roughness: 0.25,
    });

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.14, 0.46), bodyMat);
    body.position.set(0.22, -0.15, -0.36);
    gun.add(body);

    const chamber = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.22), magmaMat);
    chamber.position.set(0.22, -0.1, -0.52);
    gun.add(chamber);

    const barrel = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.42), accentMat);
    barrel.position.set(0.22, -0.1, -0.82);
    gun.add(barrel);

    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.08, 8), heatMat);
    nozzle.rotation.x = Math.PI / 2;
    nozzle.position.set(0.22, -0.1, -1.04);
    gun.add(nozzle);

    const tank = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18, 0.1), magmaMat);
    tank.position.set(0.22, -0.24, -0.28);
    gun.add(tank);

    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.16, 0.08), bodyMat);
    grip.position.set(0.22, -0.3, -0.14);
    gun.add(grip);

    gun.userData.muzzle = new THREE.Vector3(0.22, -0.1, -1.08);
    gun.userData.flashSize = 0.14;
    gun.userData.flashColor = 0xff5500;
    gun.position.set(0.24, -0.2, -0.45);
  }

  if (gun.userData.flashSize > 0) {
    const flash = new THREE.Mesh(
      new THREE.SphereGeometry(gun.userData.flashSize, 6, 6),
      new THREE.MeshBasicMaterial({ color: gun.userData.flashColor || 0xffaa00 })
    );
    flash.position.copy(gun.userData.muzzle);
    flash.visible = false;
    gun.add(flash);
    gun.userData.muzzleFlash = flash;
  }

  return gun;
}

function getCurrentWeapon() {
  return WEAPONS[state.weaponId];
}

function getEquipmentBonuses() {
  const bonuses = {
    maxHp: 0,
    speedMult: 0,
    damageMult: 0,
    damageReduction: 0,
    killHeal: 0,
    regenBonus: 0,
    boostCooldownReduction: 0,
    boostDurationBonus: 0,
  };
  for (const id of state.equipment) {
    const eq = EQUIPMENT[id];
    if (!eq) continue;
    if (eq.maxHp) bonuses.maxHp += eq.maxHp;
    if (eq.speedMult) bonuses.speedMult += eq.speedMult;
    if (eq.damageMult) bonuses.damageMult += eq.damageMult;
    if (eq.damageReduction) bonuses.damageReduction += eq.damageReduction;
    if (eq.killHeal) bonuses.killHeal += eq.killHeal;
    if (eq.regenBonus) bonuses.regenBonus += eq.regenBonus;
    if (eq.boostCooldownReduction) bonuses.boostCooldownReduction += eq.boostCooldownReduction;
    if (eq.boostDurationBonus) bonuses.boostDurationBonus += eq.boostDurationBonus;
  }
  bonuses.damageReduction = Math.min(bonuses.damageReduction, 0.65);
  bonuses.boostCooldownReduction = Math.min(bonuses.boostCooldownReduction, 0.7);
  return bonuses;
}

function getMaxHp() {
  return PLAYER_HP + getEquipmentBonuses().maxHp;
}

function getBoostDuration() {
  return BOOST_DURATION + getEquipmentBonuses().boostDurationBonus;
}

function getBoostCooldown() {
  const reduction = getEquipmentBonuses().boostCooldownReduction;
  return BOOST_COOLDOWN * Math.max(0.25, 1 - reduction);
}

function getWeaponDamage(weapon, isHead) {
  if (weapon.id === 'katana') {
    const stats = getKatanaMeleeStats();
    const base = isHead ? stats.damage * stats.headshotMult : stats.damage;
    return base * (1 + getEquipmentBonuses().damageMult);
  }
  const base = isHead ? weapon.damage * weapon.headshotMult : weapon.damage;
  return base * (1 + getEquipmentBonuses().damageMult);
}

function grantRandomEquipment() {
  const id = EQUIPMENT_IDS[Math.floor(Math.random() * EQUIPMENT_IDS.length)];
  state.equipment.push(id);
  const eq = EQUIPMENT[id];
  if (eq.maxHp) state.hp = Math.min(getMaxHp(), state.hp + eq.maxHp);
  updateEquipmentHUD();
  return eq;
}

function updateEquipmentHUD() {
  const el = document.getElementById('equipment-hud');
  if (!el) return;
  if (!state.equipment.length) {
    el.classList.add('hidden');
    el.innerHTML = '';
    return;
  }
  el.classList.remove('hidden');
  const counts = {};
  for (const id of state.equipment) counts[id] = (counts[id] || 0) + 1;
  el.innerHTML = Object.entries(counts).map(([id, count]) => {
    const eq = EQUIPMENT[id];
    const stack = count > 1 ? `<span class="eq-count">×${count}</span>` : '';
    return `<span class="eq-chip" title="${eq.name} · ${eq.desc}">${eq.name}${stack}</span>`;
  }).join('');
}

function saveWeaponAmmo() {
  if (!state.weaponId) return;
  const w = WEAPONS[state.weaponId];
  if (w.ability || w.infinite || w.melee) return;
  state.weaponAmmo[state.weaponId] = { ammo: state.ammo, reserve: state.reserve };
}

function loadWeaponAmmo(id) {
  const w = WEAPONS[id];
  if (w.ability || w.infinite || w.melee) {
    state.ammo = 0;
    state.reserve = 0;
    return;
  }
  const saved = state.weaponAmmo[id];
  state.ammo = saved ? saved.ammo : w.magSize;
  state.reserve = saved ? saved.reserve : w.reserve;
}

function equipWeapon(id) {
  if (!WEAPONS[id] || id === state.weaponId) return;

  saveWeaponAmmo();
  state.weaponId = id;
  state.reloading = false;
  state.reloadTimer = 0;
  loadWeaponAmmo(id);

  if (weaponMesh) camera.remove(weaponMesh);
  weaponMesh = createWeaponMesh(id);
  muzzleFlash = weaponMesh.userData.muzzleFlash;
  weaponMesh.userData.basePos = weaponMesh.position.clone();
  weaponMesh.userData.baseRot = weaponMesh.rotation.x;
  camera.add(weaponMesh);
  updateHUD();
}

function switchWeapon(slot) {
  if (!state.playing) return;
  const now = performance.now();
  if (now - state.lastWeaponSwitch < WEAPON_SWITCH_COOLDOWN) return;

  const target = WEAPON_ORDER.find(id => WEAPONS[id].slot === slot);
  if (!target || target === state.weaponId) return;

  state.lastWeaponSwitch = now;
  equipWeapon(target);
}

function initWeapons() {
  state.weaponAmmo = {};
  for (const id of WEAPON_ORDER) {
    const w = WEAPONS[id];
    if (!w.ability && !w.infinite && !w.melee) {
      state.weaponAmmo[id] = { ammo: w.magSize, reserve: w.reserve };
    }
  }
  state.weaponId = null;
  equipWeapon('stealth');
  if (!scene.children.includes(camera)) scene.add(camera);
}

// ─── Collision ────────────────────────────────────────────────────

function aabbVsPoint(px, py, pz, cx, cy, cz, w, h, d) {
  return px > cx - w / 2 - 0.4 && px < cx + w / 2 + 0.4 &&
         py > cy - h / 2 && py < cy + h / 2 + 1.8 &&
         pz > cz - d / 2 - 0.4 && pz < cz + d / 2 + 0.4;
}

function getLayerFromFootY(footY) {
  let best = 0;
  let bestDist = Infinity;
  for (let i = 0; i < LAYER_COUNT; i++) {
    const d = Math.abs(footY - LAYER_Y[i]);
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  }
  return best;
}

function getFootYFromRamp(x, z) {
  for (const ramp of WALK_RAMPS) {
    if (Math.abs(x - ramp.cx) > ramp.halfW || Math.abs(z - ramp.cz) > ramp.halfD) continue;
    const t = (z - (ramp.cz - ramp.halfD)) / (ramp.halfD * 2);
    return ramp.yBottom + (ramp.yTop - ramp.yBottom) * Math.max(0, Math.min(1, t));
  }
  return null;
}

function pointInColliderXZ(x, z, c) {
  const p = c.mesh.position;
  return x >= p.x - c.w / 2 - 0.35 && x <= p.x + c.w / 2 + 0.35 &&
         z >= p.z - c.d / 2 - 0.35 && z <= p.z + c.d / 2 + 0.35;
}

function findGroundBelow(x, z, footY) {
  let groundY = LAYER_Y[0];
  let groundLayer = 0;

  const rampY = getFootYFromRamp(x, z);
  if (rampY !== null && rampY <= footY + 0.1 && rampY >= groundY) {
    groundY = rampY;
    groundLayer = getLayerFromFootY(rampY);
  }

  for (let i = 0; i < LAYER_COUNT; i++) {
    const y = LAYER_Y[i];
    if (y <= footY + 0.1 && y >= groundY) {
      groundY = y;
      groundLayer = i;
    }
  }

  for (const c of colliders) {
    if (c.h < 0.4) continue;
    const top = c.mesh.position.y + c.h / 2;
    if (top <= footY + 0.1 && top >= groundY && pointInColliderXZ(x, z, c)) {
      groundY = top;
      groundLayer = c.layer >= 0 ? c.layer : groundLayer;
    }
  }

  state.standLayer = groundLayer;
  return groundY;
}

function updatePlayerVertical(dt) {
  const prevLayer = state.currentLayer;
  const px = camera.position.x;
  const pz = camera.position.z;
  let footY = camera.position.y - PLAYER_EYE_OFFSET;
  const sec = dt / 1000;

  if (state.flightActive) {
    state.grounded = false;
    state.verticalVelocity = 0;
    let vy = 0;
    if (keys['Space']) vy += FLIGHT_VERTICAL_SPEED * sec;
    if (keys['ShiftLeft'] || keys['ShiftRight']) vy -= FLIGHT_VERTICAL_SPEED * sec;
    footY += vy;
    footY = Math.max(LAYER_Y[0], Math.min(FLIGHT_MAX_HEIGHT, footY));
    camera.position.y = footY + PLAYER_EYE_OFFSET;
    state.standLayer = getLayerFromFootY(footY);
    state.currentLayer = state.standLayer;
    if (state.currentLayer !== prevLayer) updateHUD();
    return;
  }

  const groundY = findGroundBelow(px, pz, footY);
  const onGround = footY <= groundY + 0.05 && state.verticalVelocity <= 0;

  if (onGround) {
    footY = groundY;
    state.verticalVelocity = 0;
    state.grounded = true;
    const rampY = getFootYFromRamp(px, pz);
    if (rampY !== null) {
      footY = rampY;
      state.standLayer = getLayerFromFootY(rampY);
    }
  } else {
    state.grounded = false;
    state.verticalVelocity -= GRAVITY * sec;
    footY += state.verticalVelocity * sec;

    const landingY = findGroundBelow(px, pz, footY);
    if (footY <= landingY + 0.05 && state.verticalVelocity <= 0) {
      footY = landingY;
      state.verticalVelocity = 0;
      state.grounded = true;
      const rampY = getFootYFromRamp(px, pz);
      if (rampY !== null) {
        footY = rampY;
        state.standLayer = getLayerFromFootY(rampY);
      }
    }
  }

  footY = Math.max(LAYER_Y[0], footY);
  camera.position.y = footY + PLAYER_EYE_OFFSET;
  state.currentLayer = state.standLayer ?? getLayerFromFootY(footY);
  if (state.currentLayer !== prevLayer) updateHUD();
}

function resolveMovement(pos, dx, dy, dz, layer = null) {
  let nx = pos.x + dx, ny = pos.y + dy, nz = pos.z + dz;
  const activeLayer = layer ?? getLayerFromFootY(pos.y);
  for (const c of colliders) {
    if (c.layer >= 0 && c.layer !== activeLayer) continue;
    const p = c.mesh.position;
    if (aabbVsPoint(nx, ny, nz, p.x, p.y, p.z, c.w, c.h, c.d)) {
      if (!aabbVsPoint(nx, pos.y, pos.z, p.x, p.y, p.z, c.w, c.h, c.d)) nx = pos.x;
      if (!aabbVsPoint(pos.x, pos.y, nz, p.x, p.y, p.z, c.w, c.h, c.d)) nz = pos.z;
    }
  }
  const lim = ARENA_SIZE - 1;
  nx = Math.max(-lim, Math.min(lim, nx));
  nz = Math.max(-lim, Math.min(lim, nz));
  return { x: nx, y: ny, z: nz };
}

// ─── Enemies ──────────────────────────────────────────────────────

function getWaveConfig(wave) {
  const tier = Math.max(0, wave - 1);
  const cycleIndex = Math.floor(tier / CYCLE_LENGTH);
  const posInCycle = tier % CYCLE_LENGTH;
  const isCycleFinale = posInCycle === CYCLE_LENGTH - 1;

  const linearScale = 1 + tier * 0.1;
  const cycleScale = 1 + cycleIndex * 0.45;
  const finaleScale = isCycleFinale ? 3 : 1;
  const intensity = linearScale * cycleScale * finaleScale;

  const minionsPerWave = Math.min(
    500,
    Math.floor(BASE_MINIONS_PER_WAVE + tier * 3 + cycleIndex * 10 + (isCycleFinale ? 40 : 0))
  );
  const minionsToBoss = BASE_MINIONS_TO_BOSS;

  return { tier, cycleIndex, posInCycle, isCycleFinale, intensity, minionsPerWave, minionsToBoss };
}

function getWaveBannerText(wave) {
  const cfg = getWaveConfig(wave);
  const cycleNum = cfg.cycleIndex + 1;
  const waveInCycle = cfg.posInCycle + 1;
  const prefix = cfg.isCycleFinale
    ? `第 ${wave} 关 · 终极挑战！`
    : `第 ${wave} 关 · 第 ${cycleNum} 轮 ${waveInCycle}/${CYCLE_LENGTH}`;
  return `${prefix} · 消灭 ${cfg.minionsToBoss} 个小怪 · 然后击败 ${BOSSES_PER_WAVE} 个 Boss`;
}

function getWaveHudText(wave) {
  const cfg = getWaveConfig(wave);
  const cycleNum = cfg.cycleIndex + 1;
  const waveInCycle = cfg.posInCycle + 1;
  const cycleLabel = cfg.isCycleFinale
    ? `第 ${wave} 关 · 终极`
    : `第 ${wave} 关 · ${cycleNum}-${waveInCycle}`;
  return cycleLabel;
}

function getLevelDifficulty(level) {
  const cfg = getWaveConfig(level);
  const tier = cfg.tier;
  const s = cfg.intensity;
  return {
    hp: Math.floor((60 + tier * 24) * s),
    shootCooldown: Math.max(260, 1500 - tier * 88 - cfg.cycleIndex * 45),
    shootCooldownRand: Math.max(160, 1300 - tier * 72 - cfg.cycleIndex * 30),
    bulletSpeed: 28 + tier * 3.2 + cfg.cycleIndex * 5,
    damage: Math.floor((ENEMY_DAMAGE + tier * 3.5 + cfg.cycleIndex * 6) * s),
    spread: Math.max(0.008, 0.04 - tier * 0.0028),
    spawnCount: cfg.minionsPerWave,
    scale: Math.min(1 + tier * 0.035, 2),
    bossHpMult: cfg.isCycleFinale ? 2.2 : 1 + cfg.cycleIndex * 0.15,
  };
}

function buildSoldierModel(isBoss, tier, isAlly = false) {
  const group = new THREE.Group();

  const uniformHue = isAlly ? 0.58 : (isBoss ? 0.0 : 0.28 + (Math.random() - 0.5) * 0.04);
  const uniformMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color().setHSL(uniformHue, isAlly ? 0.62 : (isBoss ? 0.55 : 0.42), isAlly ? 0.42 : (isBoss ? 0.22 : 0.32)),
    roughness: 0.78,
  });
  const vestMat = new THREE.MeshStandardMaterial({
    color: isAlly ? 0x1a4a6e : (isBoss ? 0x2a0a0a : 0x3d4f3d),
    roughness: 0.65,
    metalness: isAlly ? 0.15 : (isBoss ? 0.25 : 0.05),
  });
  const skinMat = new THREE.MeshStandardMaterial({
    color: isBoss ? 0xc9a07a : 0xd4a574,
    roughness: 0.82,
  });
  const helmetMat = new THREE.MeshStandardMaterial({
    color: isAlly ? 0x2a5a7a : (isBoss ? 0x1f1f1f : 0x4a5a4a),
    roughness: 0.55,
    metalness: 0.35,
  });
  const bootMat = new THREE.MeshStandardMaterial({ color: 0x1a1410, roughness: 0.9 });
  const gunMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.7, roughness: 0.35 });
  const accentMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50, metalness: 0.5, roughness: 0.45 });

  function addLimb(parent, w, h, d, mat, y = -h / 2) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.y = y;
    mesh.castShadow = true;
    parent.add(mesh);
    return mesh;
  }

  const leftLeg = new THREE.Group();
  leftLeg.position.set(-0.14, 0.82, 0);
  addLimb(leftLeg, 0.16, 0.42, 0.16, uniformMat, -0.21);
  addLimb(leftLeg, 0.14, 0.4, 0.14, bootMat, -0.62);
  group.add(leftLeg);

  const rightLeg = new THREE.Group();
  rightLeg.position.set(0.14, 0.82, 0);
  addLimb(rightLeg, 0.16, 0.42, 0.16, uniformMat, -0.21);
  addLimb(rightLeg, 0.14, 0.4, 0.14, bootMat, -0.62);
  group.add(rightLeg);

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(isBoss ? 0.72 : 0.52, isBoss ? 0.72 : 0.58, isBoss ? 0.42 : 0.3),
    vestMat
  );
  body.position.y = 1.18;
  body.castShadow = true;
  group.add(body);

  const torso = new THREE.Mesh(
    new THREE.BoxGeometry(isBoss ? 0.58 : 0.42, isBoss ? 0.55 : 0.45, isBoss ? 0.34 : 0.24),
    uniformMat
  );
  torso.position.y = 1.12;
  torso.castShadow = true;
  group.add(torso);

  const belt = new THREE.Mesh(
    new THREE.BoxGeometry(isBoss ? 0.62 : 0.46, 0.08, isBoss ? 0.36 : 0.26),
    new THREE.MeshStandardMaterial({ color: 0x2a2218, roughness: 0.85 })
  );
  belt.position.y = 0.92;
  group.add(belt);

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(isBoss ? 0.24 : 0.19, 10, 10),
    skinMat
  );
  head.position.y = 1.72;
  head.castShadow = true;
  group.add(head);

  const helmet = new THREE.Mesh(
    new THREE.SphereGeometry(isBoss ? 0.27 : 0.21, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.62),
    helmetMat
  );
  helmet.position.y = 1.78;
  helmet.castShadow = true;
  group.add(helmet);

  const visor = new THREE.Mesh(
    new THREE.BoxGeometry(isBoss ? 0.34 : 0.26, 0.07, 0.06),
    new THREE.MeshStandardMaterial({
      color: 0x223344,
      metalness: 0.8,
      roughness: 0.15,
      transparent: true,
      opacity: 0.85,
    })
  );
  visor.position.set(0, 1.72, isBoss ? 0.2 : 0.16);
  group.add(visor);

  const leftArm = new THREE.Group();
  leftArm.position.set(-0.34, 1.34, 0);
  addLimb(leftArm, 0.12, 0.34, 0.12, uniformMat, -0.17);
  addLimb(leftArm, 0.1, 0.3, 0.1, skinMat, -0.49);
  group.add(leftArm);

  const rightArm = new THREE.Group();
  rightArm.position.set(0.34, 1.34, 0);
  addLimb(rightArm, 0.12, 0.34, 0.12, uniformMat, -0.17);
  addLimb(rightArm, 0.1, 0.3, 0.1, skinMat, -0.49);
  group.add(rightArm);

  const gun = new THREE.Group();
  gun.position.set(0.08, -0.55, 0.12);
  if (isBoss) {
    const gunBody = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.16, 0.55), gunMat);
    gun.add(gunBody);
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.14, 10), accentMat);
    drum.rotation.x = Math.PI / 2;
    drum.position.set(0, 0.04, 0.08);
    gun.add(drum);
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.42, 6), accentMat);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.set(Math.cos(angle) * 0.05, Math.sin(angle) * 0.05, -0.28);
      gun.add(barrel);
    }
    gun.position.set(0.1, -0.52, 0.18);
  } else {
    const gunBody = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.1, 0.42), gunMat);
    gun.add(gunBody);
    const barrel = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.28), accentMat);
    barrel.position.set(0, 0.02, -0.34);
    gun.add(barrel);
    const mag = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.06), accentMat);
    mag.position.set(0, -0.08, 0.04);
    gun.add(mag);
    const stock = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08, 0.14), gunMat);
    stock.position.set(0, 0.01, 0.2);
    gun.add(stock);
  }
  rightArm.add(gun);

  if (isBoss) {
    const armorMat = new THREE.MeshStandardMaterial({
      color: 0x5a1010,
      roughness: 0.4,
      metalness: 0.45,
      emissive: 0x220000,
      emissiveIntensity: 0.2,
    });
    for (const side of [-1, 1]) {
      const pauldron = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.14, 0.2), armorMat);
      pauldron.position.set(side * 0.42, 1.42, 0);
      pauldron.castShadow = true;
      group.add(pauldron);
    }
    const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.35, 0.1), armorMat);
    chestPlate.position.set(0, 1.22, 0.2);
    group.add(chestPlate);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.85, 0.05, 8, 24),
      new THREE.MeshBasicMaterial({ color: 0xe74c3c, transparent: true, opacity: 0.45 })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.03;
    group.add(ring);
  } else if (tier >= 5) {
    const pouch = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.12, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x4a3c2a, roughness: 0.9 })
    );
    pouch.position.set(0.16, 0.94, 0.12);
    group.add(pouch);
  }

  const barW = isBoss ? 2.2 : 1.1;
  const barH = isBoss ? 0.16 : 0.1;
  const barY = isBoss ? 2.15 : 1.95;
  const barBg = new THREE.Mesh(
    new THREE.PlaneGeometry(barW, barH),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.6 })
  );
  barBg.position.y = barY;
  group.add(barBg);

  const barFill = new THREE.Mesh(
    new THREE.PlaneGeometry(barW - 0.08, barH - 0.03),
    new THREE.MeshBasicMaterial({ color: isAlly ? 0x3498db : (isBoss ? 0xe74c3c : 0x2ecc71) })
  );
  barFill.position.set(0, barY, 0.01);
  group.add(barFill);

  return {
    group,
    body,
    head,
    leftLeg,
    rightLeg,
    leftArm,
    rightArm,
    gun,
    barFill,
    bodyMat: vestMat,
    headMat: skinMat,
    aimHeight: isBoss ? 1.55 : 1.42,
  };
}

function createEnemy(x, z, level = 1, layer = 0, isBoss = false) {
  const diff = getLevelDifficulty(level);
  const tier = Math.max(0, level - 1);
  const floorY = LAYER_Y[layer];

  const hp = isBoss
    ? Math.floor((diff.hp * 14 + tier * 120 * DIFFICULTY_MULT) * diff.bossHpMult * (BOSSES_PER_WAVE > 1 ? 0.72 : 1) * BOSS_POWER_MULT)
    : diff.hp;
  const speed = isBoss ? BOSS_SPEED * BOSS_POWER_MULT : MINION_SPEED;
  const scale = isBoss ? Math.min(2.1 + tier * 0.1, 2.8) : diff.scale;

  const model = buildSoldierModel(isBoss, tier);
  const { group, body, head, leftLeg, rightLeg, leftArm, rightArm, gun, barFill, bodyMat, headMat, aimHeight } = model;

  group.position.set(x, floorY, z);
  group.scale.setScalar(scale);
  scene.add(group);

  const shootCooldown = isBoss ? Math.max(380 / BOSS_POWER_MULT, diff.shootCooldown * 0.55 / BOSS_POWER_MULT) : diff.shootCooldown;
  const shootCooldownRand = isBoss ? Math.max(250 / BOSS_POWER_MULT, diff.shootCooldownRand * 0.5 / BOSS_POWER_MULT) : diff.shootCooldownRand;

  const enemy = {
    group, body, head, barFill,
    leftLeg, rightLeg, leftArm, rightArm, gun,
    bodyMat, headMat,
    aimHeight,
    hp, maxHp: hp,
    alive: true,
    isBoss,
    layer,
    shootTimer: shootCooldown + Math.random() * shootCooldownRand,
    shootCooldown,
    shootCooldownRand,
    bulletSpeed: isBoss ? diff.bulletSpeed * 1.25 * BOSS_POWER_MULT : diff.bulletSpeed,
    damage: isBoss ? (diff.damage * BOSS_DAMAGE_MULT + BOSS_DAMAGE_BONUS) * BOSS_POWER_MULT : diff.damage,
    spread: isBoss ? diff.spread * 0.65 / BOSS_POWER_MULT : diff.spread,
    speed,
    baseSpeed: speed,
    lastHit: 0,
    walkPhase: Math.random() * Math.PI * 2,
    gunRecoil: 0,
    prevX: x,
    prevZ: z,
  };
  enemies.push(enemy);
  return enemy;
}

function createBoss(level, index = 0) {
  const layer = index % LAYER_COUNT;
  const floorY = LAYER_Y[layer];
  let x = 0, z = 0, tries = 0;
  do {
    const angle = (index / BOSSES_PER_WAVE) * Math.PI * 2 + Math.random() * 0.8;
    const dist = 12 + Math.random() * 16;
    x = Math.cos(angle) * dist;
    z = Math.sin(angle) * dist;
    tries++;
  } while (Math.hypot(x - camera.position.x, z - camera.position.z) < 12 && tries < 25);

  const boss = createEnemy(x, z, level, layer, true);
  boss.name = BOSS_NAMES[index] || `Boss ${index + 1}`;
  boss.group.position.y = floorY;
  boss.bodyMat.color.setHSL(BOSS_HUES[index] ?? 0, 0.58, 0.24);
  return boss;
}

function createNameSprite(text, color = '#5dade2') {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 64;
  const ctx = c.getContext('2d');
  ctx.fillStyle = 'rgba(0,0,0,0.62)';
  ctx.fillRect(14, 10, 228, 44);
  ctx.fillStyle = color;
  ctx.font = 'bold 26px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 32);
  const tex = new THREE.CanvasTexture(c);
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(2.3, 0.58, 1);
  sprite.position.y = 2.38;
  return sprite;
}

function getFormationOffset(index, yaw) {
  const backX = Math.sin(yaw);
  const backZ = Math.cos(yaw);
  const rightX = Math.cos(yaw);
  const rightZ = -Math.sin(yaw);
  const side = index === 0 ? -1 : 1;
  return {
    x: backX * 4.5 + rightX * side * 3.2,
    z: backZ * 4.5 + rightZ * side * 3.2,
  };
}

function getNearestSanctuary(x, z, layer) {
  let best = null;
  let bestDist = Infinity;
  for (const s of sanctuaries) {
    if (s.layer !== layer) continue;
    const dist = Math.hypot(s.x - x, s.z - z);
    if (dist < bestDist) {
      bestDist = dist;
      best = s;
    }
  }
  return best;
}

function restoreTeammateModel(t) {
  const x = t.group?.position?.x ?? camera.position.x;
  const z = t.group?.position?.z ?? camera.position.z;
  const layer = t.layer ?? state.currentLayer;
  const floorY = LAYER_Y[layer];
  const profile = t.profile || TEAMMATE_PROFILES[0];

  if (t.group) scene.remove(t.group);

  const model = buildSoldierModel(false, 0, true);
  const { group, body, head, leftLeg, rightLeg, leftArm, rightArm, gun, barFill, bodyMat, headMat, aimHeight } = model;
  group.position.set(x, floorY, z);
  const nameSprite = createNameSprite(`${t.name} · ${profile.role}`, profile.color);
  group.add(nameSprite);

  t.group = group;
  t.body = body;
  t.head = head;
  t.barFill = barFill;
  t.leftLeg = leftLeg;
  t.rightLeg = rightLeg;
  t.leftArm = leftArm;
  t.rightArm = rightArm;
  t.gun = gun;
  t.bodyMat = bodyMat;
  t.headMat = headMat;
  t.aimHeight = aimHeight;
  t.nameSprite = nameSprite;
  t.prevX = x;
  t.prevZ = z;
  scene.add(group);
}

function createTeammate(index) {
  const layer = state.currentLayer;
  const floorY = LAYER_Y[layer];
  const off = getFormationOffset(index, yaw);
  const x = camera.position.x + off.x;
  const z = camera.position.z + off.z;
  const profile = TEAMMATE_PROFILES[index] || TEAMMATE_PROFILES[0];

  const model = buildSoldierModel(false, 0, true);
  const { group, body, head, leftLeg, rightLeg, leftArm, rightArm, gun, barFill, bodyMat, headMat, aimHeight } = model;

  group.position.set(x, floorY, z);
  const nameSprite = createNameSprite(`${TEAMMATE_NAMES[index] || `队友${index + 1}`} · ${profile.role}`, profile.color);
  group.add(nameSprite);
  scene.add(group);

  const teammate = {
    group, body, head, barFill,
    leftLeg, rightLeg, leftArm, rightArm, gun,
    bodyMat, headMat, nameSprite,
    aimHeight,
    index,
    profile,
    name: TEAMMATE_NAMES[index] || `队友${index + 1}`,
    hp: TEAMMATE_HP,
    maxHp: TEAMMATE_HP,
    alive: true,
    layer,
    status: '跟随',
    kills: 0,
    shootTimer: 300 + index * 120,
    shootCooldown: TEAMMATE_SHOOT_COOLDOWN,
    speed: TEAMMATE_SPEED * profile.speedMult,
    damage: TEAMMATE_DAMAGE * profile.damageMult,
    range: profile.range * TEAMMATE_POWER_MULT,
    keepDist: profile.keepDist,
    spread: profile.spread / TEAMMATE_POWER_MULT,
    followOffset: off,
    lastHit: 0,
    walkPhase: Math.random() * Math.PI * 2,
    gunRecoil: 0,
    muzzleFlash: 0,
    prevX: x,
    prevZ: z,
  };
  teammates.push(teammate);
  return teammate;
}

function spawnTeammates() {
  clearTeammates();
  for (let i = 0; i < TEAMMATE_COUNT; i++) {
    createTeammate(i);
  }
}

function refreshTeammates() {
  for (let i = teammates.length - 1; i >= 0; i--) {
    const t = teammates[i];
    if (!t.alive) {
      teammates.splice(i, 1);
      continue;
    }
    t.hp = t.maxHp;
    t.status = '跟随';
    t.layer = state.currentLayer;
    t.group.position.y = LAYER_Y[t.layer];
  }
  while (teammates.length < TEAMMATE_COUNT) {
    createTeammate(teammates.length);
  }
}

function spawnWave(n) {
  state.waveMinionKills = 0;
  state.bossSpawned = false;
  state.bossesAlive = 0;

  const cfg = getWaveConfig(n);
  const count = cfg.minionsPerWave;
  const layerCounts = Array(LAYER_COUNT).fill(0);
  for (let i = 0; i < count; i++) {
    layerCounts[i % LAYER_COUNT]++;
  }

  const margin = ARENA_SIZE - 8;
  let spawnIndex = 0;
  for (let layer = 0; layer < LAYER_COUNT; layer++) {
    for (let j = 0; j < layerCounts[layer]; j++) {
      let x, z, tries = 0;
      do {
        const angle = (spawnIndex / count) * Math.PI * 2 + Math.random() * 0.5;
        const dist = margin * (0.6 + Math.random() * 0.35);
        x = Math.cos(angle) * dist;
        z = Math.sin(angle) * dist;
        tries++;
      } while (Math.hypot(x - camera.position.x, z - camera.position.z) < 12 && tries < 20);
      createEnemy(x, z, n, layer);
      spawnIndex++;
    }
  }
}

function trySpawnBoss(level) {
  if (state.bossSpawned) return;
  state.bossSpawned = true;
  state.bossesAlive = BOSSES_PER_WAVE;
  for (let i = 0; i < BOSSES_PER_WAVE; i++) {
    createBoss(level, i);
  }
  showWaveBanner(`三大 Boss 来袭：${BOSS_NAMES.join(' · ')}`, 2800);
  updateHUD();
}

function getSightBlockers(layer) {
  const meshes = [];
  for (const c of colliders) {
    if (c.h < 0.4) continue;
    if (c.layer >= 0 && c.layer !== layer) continue;
    meshes.push(c.mesh);
  }
  return meshes;
}

function hasSquadSurvivors(excludeTeammate = null) {
  if (!state.playerDown && state.hp > 0) return true;
  for (const t of teammates) {
    if (t === excludeTeammate) continue;
    if (t.alive) return true;
  }
  return false;
}

function canEnemySeeTarget(e, ex, aimY, ez, tx, ty, tz, targetLayer) {
  if (targetLayer === state.currentLayer) {
    const isPlayer = !state.playerDown && Math.hypot(tx - camera.position.x, tz - camera.position.z) < 0.5;
    if (isPlayer && isPlayerInSanctuary()) return false;
    if (isPlayer && state.stealthActive) return false;
    if (isPlayer && state.playerDown) return false;
    for (const t of teammates) {
      if (!t.alive || t.layer !== targetLayer) continue;
      if (Math.hypot(tx - t.group.position.x, tz - t.group.position.z) < 0.8) {
        if (isInSanctuary(t.group.position.x, t.group.position.z, t.layer)) return false;
      }
    }
  }
  if (e.layer !== targetLayer) return false;

  const dx = tx - ex, dy = ty - aimY, dz = tz - ez;
  const dist = Math.hypot(dx, dy, dz);
  if (dist < 1.2) return true;

  const dir = new THREE.Vector3(dx / dist, dy / dist, dz / dist);
  raycaster.set(new THREE.Vector3(ex, aimY, ez), dir);
  raycaster.far = dist - 0.4;
  return raycaster.intersectObjects(getSightBlockers(e.layer), false).length === 0;
}

function canEnemySeePlayer(e, ex, aimY, ez, px, py, pz, playerLayer) {
  return canEnemySeeTarget(e, ex, aimY, ez, px, py, pz, playerLayer);
}

function getEnemyTargets(playerLayer) {
  const targets = [];
  const px = camera.position.x;
  const py = camera.position.y;
  const pz = camera.position.z;
  if (!state.playerDown) {
    targets.push({ x: px, y: py, z: pz, layer: playerLayer, isPlayer: true });
  }

  for (const t of teammates) {
    if (!t.alive || t.layer !== playerLayer) continue;
    const floorY = LAYER_Y[t.layer];
    targets.push({
      x: t.group.position.x,
      y: floorY + t.aimHeight * t.group.scale.y,
      z: t.group.position.z,
      layer: t.layer,
      isPlayer: false,
      teammate: t,
    });
  }
  return targets;
}

function getNearestTarget(e, ex, ez, playerLayer) {
  const targets = getEnemyTargets(playerLayer);
  let best = null;
  let bestDist = Infinity;
  for (const target of targets) {
    const dist = Math.hypot(target.x - ex, target.z - ez);
    if (dist < bestDist) {
      bestDist = dist;
      best = target;
    }
  }
  return best;
}

function findNearestEnemyForAlly(t, maxRange) {
  const range = maxRange ?? t.range ?? 42;
  let best = null;
  let bestScore = Infinity;
  const tx = t.group.position.x;
  const tz = t.group.position.z;
  const floorY = LAYER_Y[t.layer];
  const aimY = floorY + t.aimHeight;

  for (const e of enemies) {
    if (!e.alive || e.layer !== t.layer) continue;
    const ex = e.group.position.x;
    const ez = e.group.position.z;
    const ey = floorY + e.aimHeight * e.group.scale.y;
    const dist = Math.hypot(ex - tx, ez - tz);
    if (dist > range) continue;
    const dx = ex - tx;
    const dy = ey - aimY;
    const dz = ez - tz;
    const sightDist = Math.hypot(dx, dy, dz);
    if (sightDist > 1.2) {
      const dir = new THREE.Vector3(dx / sightDist, dy / sightDist, dz / sightDist);
      raycaster.set(new THREE.Vector3(tx, aimY, tz), dir);
      raycaster.far = sightDist - 0.4;
      if (raycaster.intersectObjects(getSightBlockers(t.layer), false).length > 0) continue;
    }
    const score = dist - (e.isBoss ? 20 : 0);
    if (score < bestScore) {
      bestScore = score;
      best = { enemy: e, x: ex, y: ey, z: ez, dist };
    }
  }
  return best;
}

function syncTeammateFloor(t) {
  const rampY = getFootYFromRamp(t.group.position.x, t.group.position.z);
  if (rampY !== null) {
    t.group.position.y = rampY;
    t.layer = getLayerFromFootY(rampY);
  } else {
    t.group.position.y = LAYER_Y[t.layer];
  }
}

function moveTeammateToward(t, targetX, targetZ, speed, dt) {
  const tx = t.group.position.x;
  const tz = t.group.position.z;
  const floorY = LAYER_Y[t.layer];
  const dx = targetX - tx;
  const dz = targetZ - tz;
  const dist = Math.hypot(dx, dz);
  if (dist < 0.15) return false;

  const step = speed * (dt / 1000);
  const nx = tx + (dx / dist) * Math.min(step, dist);
  const nz = tz + (dz / dist) * Math.min(step, dist);
  const resolved = resolveMovement(
    { x: tx, y: floorY + t.aimHeight, z: tz },
    nx - tx, 0, nz - tz,
    t.layer
  );
  t.group.position.x = resolved.x;
  t.group.position.z = resolved.z;
  syncTeammateFloor(t);
  return true;
}

function spawnAllyBullet(x, y, z, vx, vy, vz, damage, owner = null) {
  const geo = new THREE.CylinderGeometry(0.02, 0.02, 0.18, 5);
  geo.rotateX(Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({
    color: owner?.profile?.role === '支援' ? 0x58d68d : 0x44aaff,
    transparent: true,
    opacity: 0.95,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  const speed = Math.hypot(vx, vy, vz) || 1;
  mesh.lookAt(x + vx / speed, y + vy / speed, z + vz / speed);
  scene.add(mesh);
  allyBullets.push({ x, y, z, vx, vy, vz, life: 1800, mesh, damage, owner });
}

function damageEnemy(e, dmg, now, owner = null) {
  e.hp -= dmg;
  e.lastHit = now;
  const ex = e.group.position.x;
  const ey = e.group.position.y + e.aimHeight * e.group.scale.y;
  const ez = e.group.position.z;
  spawnParticles(ex, ey, ez, owner?.profile?.role === '支援' ? 0x58d68d : 0x44aaff, 6);
  if (e.hp <= 0) killEnemy(e, owner);
}

function downPlayer() {
  state.playerDown = true;
  state.playerReviveTimer = SQUAD_REVIVE_TIME;
  state.playerDownX = camera.position.x;
  state.playerDownY = camera.position.y;
  state.playerDownZ = camera.position.z;
  state.playerDownLayer = state.currentLayer;
  state.hp = 0;
  showWaveBanner('你倒了！队友掩护中 · 3 秒后复活', 2800);
  updateHUD();
}

function revivePlayer() {
  state.playerDown = false;
  state.playerReviveTimer = 0;
  state.hp = Math.floor(getMaxHp() * SQUAD_REVIVE_HP_RATIO);
  camera.position.set(state.playerDownX, state.playerDownY, state.playerDownZ);
  state.currentLayer = state.playerDownLayer;
  state.standLayer = state.playerDownLayer;
  state.lastDamageTime = performance.now();
  showWaveBanner('你在队友掩护下复活！', 1600);
  updateHUD();
}

function reviveTeammate(t, quiet = false) {
  const spawnX = t.deathX ?? camera.position.x;
  const spawnZ = t.deathZ ?? camera.position.z;
  t.layer = t.deathLayer ?? state.currentLayer;
  t.alive = true;
  t.hp = Math.floor(t.maxHp * SQUAD_REVIVE_HP_RATIO);
  t.status = '复活';
  t.shootTimer = 500;
  t.reviveTimer = 0;
  restoreTeammateModel(t);
  t.group.position.set(spawnX, LAYER_Y[t.layer], spawnZ);
  if (!quiet) showWaveBanner(`${t.name} 在队友掩护下复活`, 1600);
  updateHUD();
}

function recallTeammates() {
  if (!state.playing || state.playerDown) return;

  let recalled = 0;
  for (const t of teammates) {
    const off = getFormationOffset(t.index ?? 0, yaw);
    const recallX = camera.position.x + off.x;
    const recallZ = camera.position.z + off.z;

    if (!t.alive) {
      if (!hasSquadSurvivors(t)) continue;
      t.deathX = recallX;
      t.deathZ = recallZ;
      t.deathLayer = state.currentLayer;
      reviveTeammate(t, true);
      recalled++;
      continue;
    }

    if (!t.group) continue;
    t.layer = state.currentLayer;
    t.status = '跟随';
    t.group.position.set(recallX, LAYER_Y[t.layer], recallZ);
    t.prevX = recallX;
    t.prevZ = recallZ;
    recalled++;
  }

  if (recalled > 0) {
    showWaveBanner(`队友已召回 · ${recalled} 人`, 1400);
    spawnParticles(
      camera.position.x + (Math.random() - 0.5) * 2,
      camera.position.y - 0.5,
      camera.position.z + (Math.random() - 0.5) * 2,
      0x3498db,
      10
    );
    updateHUD();
  }
}

function updateSquadRevive(dt) {
  if (!state.playing) return;

  if (state.playerDown) {
    if (!teammates.some(t => t.alive)) {
      endGame(false);
      return;
    }
    state.playerReviveTimer -= dt;
    if (state.playerReviveTimer <= 0) revivePlayer();
  }

  for (const t of teammates) {
    if (t.alive) continue;
    if (t.reviveTimer == null) t.reviveTimer = SQUAD_REVIVE_TIME;
    if (!hasSquadSurvivors(t)) continue;
    t.reviveTimer -= dt;
    if (t.reviveTimer <= 0) reviveTeammate(t);
  }

  if (state.playerDown || teammates.some(t => !t.alive)) updateHUD();
}

function killTeammate(t) {
  t.deathX = t.group?.position?.x ?? camera.position.x;
  t.deathZ = t.group?.position?.z ?? camera.position.z;
  t.deathLayer = t.layer ?? state.currentLayer;
  t.alive = false;
  t.status = '阵亡';
  t.reviveTimer = SQUAD_REVIVE_TIME;
  if (t.group) scene.remove(t.group);
  const px = t.deathX;
  const py = (t.group?.position?.y ?? LAYER_Y[t.deathLayer]) + t.aimHeight * 0.7;
  const pz = t.deathZ;
  spawnParticles(px, py, pz, 0x3498db, 18);
  if (hasSquadSurvivors(t)) {
    showWaveBanner(`${t.name} 阵亡 · 3 秒后掩护复活`, 1800);
  } else if (!state.playerDown) {
    endGame(false);
  }
}

function tryReviveDownedTeammates() {
  const downed = teammates.filter(t => !t.alive);
  if (!downed.length || !isPlayerInSanctuary() || state.sanctuaryStay < TEAMMATE_REVIVE_TIME) return;

  for (const t of downed) {
    if (!hasSquadSurvivors(t)) continue;
    reviveTeammate(t);
  }
}

function clearTeammates() {
  for (const t of teammates) {
    if (t.group) scene.remove(t.group);
  }
  teammates.length = 0;
}

function clearAllyBullets() {
  for (const b of allyBullets) {
    if (b.mesh) scene.remove(b.mesh);
  }
  allyBullets.length = 0;
}

function updateTeammates(dt) {
  const px = camera.position.x;
  const pz = camera.position.z;
  const playerLayer = state.currentLayer;
  const now = performance.now();

  for (const t of teammates) {
    if (!t.alive || !t.group) continue;

    if (t.hp < t.maxHp) {
      t.hp = Math.min(t.maxHp, t.hp + TEAMMATE_REGEN_RATE * getTeammateBoostMult() * (dt / 1000));
    }

    const tx = t.group.position.x;
    const tz = t.group.position.z;
    const floorY = LAYER_Y[t.layer];
    const aimY = floorY + t.aimHeight;
    const hpPct = t.hp / t.maxHp;
    const formation = getFormationOffset(t.index ?? 0, yaw);
    t.followOffset = formation;

    const boostMult = getTeammateBoostMult();

    if (hpPct <= TEAMMATE_RETREAT_HP && !isInSanctuary(tx, tz, t.layer)) {
      t.status = '撤退';
      const sanctuary = getNearestSanctuary(tx, tz, t.layer) || getNearestSanctuary(px, pz, playerLayer);
      const retreatX = sanctuary ? sanctuary.x : px + formation.x;
      const retreatZ = sanctuary ? sanctuary.z : pz + formation.z;
      moveTeammateToward(t, retreatX, retreatZ, t.speed * boostMult * 1.15, dt);
      t.group.lookAt(retreatX, aimY, retreatZ);
    } else if (t.layer !== playerLayer) {
      t.status = '集结';
      const ramp = getRampTarget(t.layer, playerLayer, tx, tz);
      const destX = ramp ? ramp.x : px + formation.x;
      const destZ = ramp ? ramp.z : pz + formation.z;
      moveTeammateToward(t, destX, destZ, t.speed * boostMult * 1.05, dt);
      t.group.lookAt(destX, aimY, destZ);
    } else {
      const target = findNearestEnemyForAlly(t, (t.range ?? 40) * boostMult);
      let moved = false;

      if (target) {
        t.status = state.allyBoostActive ? '强化交战' : '交战';
        const keepDist = t.keepDist ?? 7;
        if (target.dist > keepDist + 1.5) {
          moved = moveTeammateToward(t, target.x, target.z, t.speed * boostMult, dt);
        } else if (target.dist < keepDist - 1.5) {
          const awayX = tx + (tx - target.x);
          const awayZ = tz + (tz - target.z);
          moved = moveTeammateToward(t, awayX, awayZ, t.speed * boostMult * 0.75, dt);
        }
        t.group.lookAt(target.x, target.y, target.z);
      } else {
        t.status = state.allyBoostActive ? '强化跟随' : '跟随';
        const formX = px + formation.x;
        const formZ = pz + formation.z;
        if (Math.hypot(formX - tx, formZ - tz) > 2) {
          moved = moveTeammateToward(t, formX, formZ, t.speed * boostMult * 0.8, dt);
        }
        t.group.lookAt(px, LAYER_Y[playerLayer] + t.aimHeight, pz);
      }

      if (t.profile?.healAura && Math.hypot(tx - px, tz - pz) < 8 && t.hp > 0) {
        state.hp = Math.min(getMaxHp(), state.hp + t.profile.healAura * boostMult * (dt / 1000));
      }

      const stepDist = Math.hypot(t.group.position.x - t.prevX, t.group.position.z - t.prevZ);
      t.prevX = t.group.position.x;
      t.prevZ = t.group.position.z;

      if (moved || stepDist > 0.001) {
        t.walkPhase += dt * 0.011;
        const swing = Math.sin(t.walkPhase) * 0.5;
        t.leftLeg.rotation.x = swing;
        t.rightLeg.rotation.x = -swing;
        t.leftArm.rotation.x = -swing * 0.25;
      } else {
        t.walkPhase += dt * 0.002;
        const breathe = Math.sin(t.walkPhase) * 0.04;
        t.leftLeg.rotation.x = breathe;
        t.rightLeg.rotation.x = -breathe;
        t.leftArm.rotation.x = 0;
      }

      t.gunRecoil *= Math.pow(0.82, dt / 16);
      t.rightArm.rotation.x = -0.55 + t.gunRecoil;
      if (t.muzzleFlash > 0) t.muzzleFlash = Math.max(0, t.muzzleFlash - dt);

      t.shootTimer -= dt;
      if (target && t.shootTimer <= 0 && target.dist < (t.range ?? 40)) {
        t.shootTimer = t.shootCooldown / boostMult + Math.random() * 160;
        t.gunRecoil = 1;
        t.muzzleFlash = 80;
        const spread = (t.spread ?? 0.012) / boostMult;
        const dir = new THREE.Vector3(
          target.x - tx + (Math.random() - 0.5) * spread,
          target.y - aimY + (Math.random() - 0.5) * spread,
          target.z - tz + (Math.random() - 0.5) * spread
        ).normalize();
        spawnAllyBullet(
          tx + dir.x * 0.5,
          aimY + dir.y * 0.1,
          tz + dir.z * 0.5,
          dir.x * TEAMMATE_BULLET_SPEED * boostMult,
          dir.y * TEAMMATE_BULLET_SPEED * boostMult,
          dir.z * TEAMMATE_BULLET_SPEED * boostMult,
          t.damage * boostMult,
          t
        );
      }
    }

    const hitFlash = now - t.lastHit < 140;
    if (state.allyBoostActive) {
      t.bodyMat.emissive.setHex(hitFlash ? 0x66ffaa : 0x1a6640);
      t.bodyMat.emissiveIntensity = hitFlash ? 0.55 : 0.35 + Math.sin(now * 0.008) * 0.15;
    } else {
      t.bodyMat.emissive.setHex(hitFlash ? 0x3388ff : 0x000000);
      t.bodyMat.emissiveIntensity = hitFlash ? 0.4 : 0;
    }

    if (t.nameSprite) {
      t.nameSprite.lookAt(camera.position);
      t.nameSprite.position.y = 2.38 + Math.sin(now * 0.003 + t.index) * 0.03;
    }

    t.barFill.lookAt(camera.position);
    t.barFill.scale.x = Math.max(0.05, t.hp / t.maxHp);
    const barPct = t.hp / t.maxHp;
    t.barFill.material.color.setHex(barPct > 0.5 ? 0x3498db : barPct > 0.25 ? 0xf39c12 : 0xe74c3c);
  }
  updateTeamHUD();
}

function updateAllyBullets(dt) {
  const now = performance.now();
  for (let i = allyBullets.length - 1; i >= 0; i--) {
    const b = allyBullets[i];
    b.life -= dt;
    b.x += b.vx * (dt / 1000);
    b.y += b.vy * (dt / 1000);
    b.z += b.vz * (dt / 1000);
    if (b.mesh) {
      b.mesh.position.set(b.x, b.y, b.z);
      const spd = Math.hypot(b.vx, b.vy, b.vz) || 1;
      b.mesh.lookAt(b.x + b.vx / spd, b.y + b.vy / spd, b.z + b.vz / spd);
    }

    if (b.life <= 0 || b.y < LAYER_Y[0] - 2) {
      if (b.mesh) scene.remove(b.mesh);
      allyBullets.splice(i, 1);
      continue;
    }

    let hit = false;
    for (const e of enemies) {
      if (!e.alive) continue;
      const ex = e.group.position.x;
      const ey = e.group.position.y + e.aimHeight * e.group.scale.y;
      const ez = e.group.position.z;
      if (Math.hypot(b.x - ex, b.y - ey, b.z - ez) < (e.isBoss ? 1.1 : 0.75)) {
        damageEnemy(e, b.damage, now, b.owner);
        hit = true;
        break;
      }
    }

    if (hit) {
      if (b.mesh) scene.remove(b.mesh);
      allyBullets.splice(i, 1);
    }
  }
}

function getRampTarget(enemyLayer, playerLayer, ex, ez) {
  let best = null;
  let bestDist = Infinity;
  for (const ramp of WALK_RAMPS) {
    const bottomLayer = getLayerFromFootY(ramp.yBottom);
    const topLayer = getLayerFromFootY(ramp.yTop);
    const goesUp = enemyLayer < playerLayer && bottomLayer <= enemyLayer && topLayer >= enemyLayer + 1;
    const goesDown = enemyLayer > playerLayer && topLayer >= enemyLayer && bottomLayer <= enemyLayer - 1;
    if (!goesUp && !goesDown) continue;
    const dist = Math.hypot(ramp.cx - ex, ramp.cz - ez);
    if (dist < bestDist) {
      bestDist = dist;
      best = { x: ramp.cx, z: ramp.cz };
    }
  }
  return best;
}

function syncEnemyFloor(e) {
  const rampY = getFootYFromRamp(e.group.position.x, e.group.position.z);
  if (rampY !== null) {
    e.group.position.y = rampY;
    e.layer = getLayerFromFootY(rampY);
  } else {
    e.group.position.y = LAYER_Y[e.layer];
  }
}

function moveEnemyToward(e, targetX, targetZ, speed, dt) {
  const ex = e.group.position.x;
  const ez = e.group.position.z;
  const floorY = LAYER_Y[e.layer];
  const dx = targetX - ex;
  const dz = targetZ - ez;
  const dist = Math.hypot(dx, dz);
  if (dist < 0.15) return false;

  const step = speed * (dt / 1000);
  const nx = ex + (dx / dist) * Math.min(step, dist);
  const nz = ez + (dz / dist) * Math.min(step, dist);
  const resolved = resolveMovement(
    { x: ex, y: floorY + e.aimHeight * e.group.scale.y, z: ez },
    nx - ex, 0, nz - ez,
    e.layer
  );
  e.group.position.x = resolved.x;
  e.group.position.z = resolved.z;
  syncEnemyFloor(e);
  return true;
}

function updateEnemies(dt) {
  const px = camera.position.x, py = camera.position.y, pz = camera.position.z;
  const playerLayer = state.currentLayer;
  const now = performance.now();

  for (const e of enemies) {
    if (!e.alive) continue;

    if (updateEnemyStatusEffects(e, now, dt)) continue;

    const ex = e.group.position.x, ez = e.group.position.z;
    const floorY = LAYER_Y[e.layer];
    const aimY = floorY + e.aimHeight * e.group.scale.y;
    const nearest = getNearestTarget(e, ex, ez, playerLayer);
    const tx = nearest ? nearest.x : px;
    const ty = nearest ? nearest.y : py;
    const tz = nearest ? nearest.z : pz;
    const targetLayer = nearest ? nearest.layer : playerLayer;
    const dx = tx - ex, dz = tz - ez;
    const dist = Math.hypot(dx, dz);
    const sameLayer = e.layer === targetLayer;

    if (state.stealthActive && nearest && nearest.isPlayer) {
      e.walkPhase += dt * 0.002;
      const breathe = Math.sin(e.walkPhase) * 0.04;
      e.leftLeg.rotation.x = breathe;
      e.rightLeg.rotation.x = -breathe;
      e.leftArm.rotation.x = 0;
      e.gunRecoil *= Math.pow(0.82, dt / 16);
      e.rightArm.rotation.x = -0.55 + e.gunRecoil;
      e.barFill.lookAt(e.group.position.clone().add(new THREE.Vector3(0, 0, -1)));
      continue;
    }

    e.group.lookAt(tx, aimY, tz);

    const canSee = canEnemySeeTarget(e, ex, aimY, ez, tx, ty, tz, targetLayer);
    const hunting = !canSee;

    let moved = false;
    if (e.isBoss) {
      if (hunting && e.layer !== targetLayer) {
        const rampTarget = getRampTarget(e.layer, targetLayer, ex, ez);
        moved = moveEnemyToward(
          e,
          rampTarget ? rampTarget.x : tx,
          rampTarget ? rampTarget.z : tz,
          SPRINT_SPEED * BOSS_POWER_MULT,
          dt
        );
      } else if (e.layer !== targetLayer) {
        e.layer = targetLayer;
        e.group.position.y = LAYER_Y[targetLayer];
      }
      const bossDist = Math.hypot(tx - e.group.position.x, tz - e.group.position.z);
      if (bossDist > 1.2) {
        const bossSpeed = (hunting ? SPRINT_SPEED : BOSS_SPEED) * BOSS_POWER_MULT;
        moved = moveEnemyToward(e, tx, tz, bossSpeed, dt) || moved;
      }
    } else {
      let targetX = tx;
      let targetZ = tz;
      if (hunting && e.layer !== targetLayer) {
        const rampTarget = getRampTarget(e.layer, targetLayer, ex, ez);
        if (rampTarget) {
          targetX = rampTarget.x;
          targetZ = rampTarget.z;
        }
      }
      const targetDist = Math.hypot(targetX - ex, targetZ - ez);
      const minDist = hunting ? 0.6 : 6;
      const shouldMove = hunting
        ? targetDist > minDist || e.layer !== targetLayer
        : sameLayer && targetDist > minDist;
      if (shouldMove) {
        const moveSpeed = hunting ? MINION_HUNT_SPEED : e.speed;
        moved = moveEnemyToward(e, targetX, targetZ, moveSpeed, dt);
      }
    }

    const stepDist = Math.hypot(e.group.position.x - e.prevX, e.group.position.z - e.prevZ);
    e.prevX = e.group.position.x;
    e.prevZ = e.group.position.z;

    if (moved || stepDist > 0.001) {
      e.walkPhase += dt * 0.011 * (e.isBoss ? 0.85 : 1);
      const swing = Math.sin(e.walkPhase) * 0.55;
      e.leftLeg.rotation.x = swing;
      e.rightLeg.rotation.x = -swing;
      e.leftArm.rotation.x = -swing * 0.3;
    } else {
      e.walkPhase += dt * 0.002;
      const breathe = Math.sin(e.walkPhase) * 0.04;
      e.leftLeg.rotation.x = breathe;
      e.rightLeg.rotation.x = -breathe;
      e.leftArm.rotation.x = 0;
    }

    e.gunRecoil *= Math.pow(0.82, dt / 16);
    e.rightArm.rotation.x = -0.55 + e.gunRecoil;
    if (e.gun) e.gun.position.z = (e.isBoss ? 0.18 : 0.12) - e.gunRecoil * 0.08;

    const hitFlash = now - e.lastHit < 140;
    e.bodyMat.emissive.setHex(hitFlash ? 0xff3333 : 0x000000);
    e.bodyMat.emissiveIntensity = hitFlash ? 0.45 : 0;
    e.headMat.emissive.setHex(hitFlash ? 0xffaa44 : 0x000000);
    e.headMat.emissiveIntensity = hitFlash ? 0.35 : 0;

    e.shootTimer -= dt;
    const shootRange = e.isBoss ? 42 * BOSS_POWER_MULT : 35;
    const canShoot = e.isBoss ? e.layer === targetLayer : sameLayer;
    if (canShoot && e.shootTimer <= 0 && dist < shootRange) {
      e.shootTimer = e.shootCooldown + Math.random() * e.shootCooldownRand;
      e.gunRecoil = 1;
      const dir = new THREE.Vector3(
        tx - ex + (Math.random() - 0.5) * e.spread,
        ty - aimY + (Math.random() - 0.5) * e.spread,
        tz - ez + (Math.random() - 0.5) * e.spread
      ).normalize();
      const spd = e.bulletSpeed;
      const muzzleX = ex + dir.x * 0.5;
      const muzzleY = aimY + dir.y * 0.1;
      const muzzleZ = ez + dir.z * 0.5;
      spawnEnemyBullet(muzzleX, muzzleY, muzzleZ, dir.x * spd, dir.y * spd, dir.z * spd, e.damage);
    }

    e.barFill.lookAt(camera.position);
    e.barFill.scale.x = e.hp / e.maxHp;
    const hpPct = e.hp / e.maxHp;
    if (e.isBoss) {
      e.barFill.material.color.setHex(hpPct > 0.5 ? 0xe74c3c : hpPct > 0.25 ? 0xf39c12 : 0xff0000);
    } else {
      e.barFill.material.color.setHex(hpPct > 0.5 ? 0x2ecc71 : hpPct > 0.25 ? 0xf39c12 : 0xe74c3c);
    }
  }
}

function clearEnemies() {
  for (const e of enemies) {
    if (e.group) scene.remove(e.group);
  }
  enemies.length = 0;
}

function advanceLevel() {
  const completedWave = state.wave;
  const earnedEquipment = completedWave % CYCLE_LENGTH === 0 ? grantRandomEquipment() : null;

  state.hp = getMaxHp();
  updateHUD();
  showWaveBanner('本关完成！生命已恢复', 1200);
  if (earnedEquipment) {
    setTimeout(() => {
      if (!state.playing) return;
      showWaveBanner(`获得装备：${earnedEquipment.name} · ${earnedEquipment.desc}`, 3200);
    }, 1400);
  }

  tryUpgradeKatana(completedWave);

  setTimeout(() => {
    if (!state.playing) return;

    state.wave++;
    clearEnemies();
    refreshTeammates();
    spawnWave(state.wave);
    const cfg = getWaveConfig(state.wave);
    showWaveBanner(getWaveBannerText(state.wave), cfg.isCycleFinale ? 3200 : 2500);
    updateHUD();
  }, 1500);
}

function killEnemy(e, killer = null) {
  e.alive = false;
  scene.remove(e.group);
  const px = e.group.position.x;
  const py = e.group.position.y + e.aimHeight * e.group.scale.y * 0.7;
  const pz = e.group.position.z;
  spawnParticles(px, py, pz, e.isBoss ? 0x8e44ad : 0xc0392b, e.isBoss ? 45 : 20);
  state.kills++;
  if (killer?.alive) killer.kills++;
  state.hp = Math.min(getMaxHp(), state.hp + KILL_HEAL + getEquipmentBonuses().killHeal);
  if (e.isBoss) {
    state.bossesAlive = Math.max(0, state.bossesAlive - 1);
    showWaveBanner(`${e.name || 'Boss'} 已击败！剩余 ${state.bossesAlive}`, 1400);
    if (state.bossesAlive <= 0) {
      advanceLevel();
    }
  } else {
    state.waveMinionKills++;
    const bossReq = getWaveConfig(state.wave).minionsToBoss;
    if (state.waveMinionKills >= bossReq && !state.bossSpawned) {
      trySpawnBoss(state.wave);
    }
  }
  updateHUD();
}

// ─── Particles ────────────────────────────────────────────────────

function spawnParticles(x, y, z, color, count) {
  for (let i = 0; i < count; i++) {
    const geo = new THREE.SphereGeometry(0.08 + Math.random() * 0.1, 4, 4);
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    scene.add(mesh);
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 5;
    particles.push({
      mesh,
      vx: Math.cos(angle) * speed,
      vy: 2 + Math.random() * 4,
      vz: Math.sin(angle) * speed,
      life: 600 + Math.random() * 400,
    });
  }
}

function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life -= dt;
    p.vy -= 9.8 * (dt / 1000);
    p.mesh.position.x += p.vx * (dt / 1000);
    p.mesh.position.y += p.vy * (dt / 1000);
    p.mesh.position.z += p.vz * (dt / 1000);
    p.mesh.material.opacity = Math.max(0, p.life / 600);
    if (p.life <= 0) {
      scene.remove(p.mesh);
      particles.splice(i, 1);
    }
  }
}

// ─── Shooting ─────────────────────────────────────────────────────

const raycaster = new THREE.Raycaster();

function getPlayerForward() {
  const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
  return forward.normalize();
}

function meleeSlash() {
  const weapon = getCurrentWeapon();
  const now = performance.now();
  const katanaStats = weapon.id === 'katana' ? getKatanaMeleeStats() : null;
  const fireRate = katanaStats ? katanaStats.fireRate : weapon.fireRate;
  const range = katanaStats ? katanaStats.range : weapon.range;
  const arc = katanaStats ? katanaStats.arc : weapon.arc;
  const element = katanaStats?.element;

  if (now - state.lastShot < fireRate) return;

  state.lastShot = now;

  if (weaponMesh) {
    const weaponId = state.weaponId;
    const baseRot = weaponMesh.rotation.x;
    const baseZ = weaponMesh.position.z;
    const baseY = weaponMesh.position.y;

    if (weaponId === 'katana') {
      weaponMesh.rotation.x = -1.05 - state.katanaTier * 0.04;
      weaponMesh.position.z += 0.14 + state.katanaTier * 0.01;
      setTimeout(() => {
        if (weaponMesh && state.weaponId === 'katana') {
          weaponMesh.rotation.x = baseRot;
          weaponMesh.position.z = baseZ;
        }
      }, 140);
    } else if (weaponId === 'hammer') {
      weaponMesh.rotation.x = 0.75;
      weaponMesh.position.y -= 0.1;
      weaponMesh.position.z += 0.08;
      setTimeout(() => {
        if (weaponMesh && state.weaponId === 'hammer') {
          weaponMesh.rotation.x = baseRot;
          weaponMesh.position.y = baseY;
          weaponMesh.position.z = baseZ;
        }
      }, 220);
    }
  }

  const forward = getPlayerForward();
  const px = camera.position.x;
  const py = camera.position.y;
  const pz = camera.position.z;
  const strikeX = px + forward.x * (state.weaponId === 'hammer' ? 1.8 : 2.2 + (state.katanaTier || 0) * 0.15);
  const strikeY = py - (state.weaponId === 'hammer' ? 0.45 : 0.2);
  const strikeZ = pz + forward.z * (state.weaponId === 'hammer' ? 1.8 : 2.2 + (state.katanaTier || 0) * 0.15);

  if (state.weaponId === 'hammer') {
    spawnParticles(strikeX, strikeY, strikeZ, 0x44aaff, 16);
    spawnParticles(strikeX, strikeY, strikeZ, 0xffee44, 10);
    spawnParticles(strikeX, strikeY - 0.1, strikeZ, 0xffffff, 6);
  } else if (element?.effect) {
    const [c1, c2] = element.particleColors;
    spawnKatanaSlashWave(strikeX, strikeY, strikeZ, element, state.katanaTier);
    spawnParticles(strikeX, strikeY, strikeZ, c1, 12 + state.katanaTier * 2);
    spawnParticles(strikeX, strikeY, strikeZ, c2, 8 + state.katanaTier);
    spawnParticles(strikeX, strikeY + 0.05, strikeZ, 0xffffff, 5);
  } else {
    spawnParticles(strikeX, strikeY, strikeZ, 0x88ccff, 10);
    spawnParticles(strikeX, strikeY, strikeZ, 0xffffff, 6);
  }

  const cosArc = Math.cos(arc);
  let hitEnemy = false;

  for (const e of enemies) {
    if (!e.alive || e.layer !== state.currentLayer) continue;

    const ex = e.group.position.x;
    const ey = e.group.position.y + e.aimHeight * e.group.scale.y;
    const ez = e.group.position.z;
    const dx = ex - px;
    const dy = ey - py;
    const dz = ez - pz;
    const dist = Math.hypot(dx, dy, dz);
    if (dist > range * (e.isBoss ? 1.15 : 1)) continue;

    const flatDist = Math.hypot(dx, dz);
    if (flatDist < 0.01) continue;
    const toEnemy = new THREE.Vector3(dx / flatDist, 0, dz / flatDist);
    if (forward.dot(toEnemy) < cosArc) continue;

    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    const hits = raycaster.intersectObjects([e.body, e.head], false);
    const isHead = hits.length > 0 && hits[0].object === e.head;
    const dmg = getWeaponDamage(weapon, isHead);

    if (element?.effect) {
      applyKatanaHit(e, dmg, element, now, isHead);
      hitEnemy = true;
    } else {
      e.hp -= dmg;
      e.lastHit = now;
      spawnParticles(ex, ey, ez, isHead ? 0xffd700 : 0xff4444, isHead ? 12 : 8);
      hitEnemy = true;
      if (e.hp <= 0) killEnemy(e);
    }
  }

  if (hitEnemy) showHitMarker();
}

function getAbilitySlotText(id) {
  if (id === 'stealth') {
    if (state.stealthActive) return `${(state.stealthTimer / 1000).toFixed(1)}s`;
    if (state.stealthCooldown > 0) return `${(state.stealthCooldown / 1000).toFixed(1)}s`;
    return '就绪';
  }
  if (id === 'allyboost') {
    if (state.allyBoostActive) return `${(state.allyBoostTimer / 1000).toFixed(1)}s`;
    if (state.allyBoostCooldown > 0) return `${(state.allyBoostCooldown / 1000).toFixed(1)}s`;
    return '就绪';
  }
  return '';
}

function getAbilityStatusText(weapon) {
  if (weapon.id === 'stealth') {
    if (state.stealthActive) return `隐形中 ${(state.stealthTimer / 1000).toFixed(1)}s`;
    if (state.stealthCooldown > 0) return `冷却 ${(state.stealthCooldown / 1000).toFixed(1)}s`;
    return '左键激活隐形';
  }
  if (weapon.id === 'allyboost') {
    if (state.allyBoostActive) return `强化中 ×${ALLY_BOOST_MULT} · ${(state.allyBoostTimer / 1000).toFixed(1)}s`;
    if (state.allyBoostCooldown > 0) return `冷却 ${(state.allyBoostCooldown / 1000).toFixed(1)}s`;
    return `左键强化队友 ×${ALLY_BOOST_MULT} · 12 秒`;
  }
  return '';
}

function setStealthVisual(active) {
  const hud = document.getElementById('hud');
  if (hud) hud.classList.toggle('stealth-active', active);
  if (weaponMesh) {
    weaponMesh.traverse(child => {
      if (child.material) {
        child.material.transparent = active;
        child.material.opacity = active ? 0.35 : 1;
      }
    });
  }
}

function clearEnemyBullets() {
  for (const b of enemyBullets) {
    if (b.mesh) scene.remove(b.mesh);
  }
  enemyBullets.length = 0;
}

function activateAllyBoost() {
  const weapon = WEAPONS.allyboost;
  const now = performance.now();
  if (state.allyBoostActive || state.allyBoostCooldown > 0 || now - state.lastShot < weapon.fireRate) return;

  state.allyBoostActive = true;
  state.allyBoostTimer = weapon.duration;
  state.lastShot = now;

  for (const t of teammates) {
    if (!t.alive || !t.group) continue;
    const tx = t.group.position.x;
    const ty = LAYER_Y[t.layer] + t.aimHeight;
    const tz = t.group.position.z;
    spawnParticles(tx, ty, tz, 0x2ecc71, 16);
    spawnParticles(tx, ty + 0.3, tz, 0x58d68d, 10);
  }
  spawnParticles(camera.position.x, camera.position.y - 0.4, camera.position.z, 0x2ecc71, 14);
  showWaveBanner(`队友强化！全员 ×${ALLY_BOOST_MULT} 战斗能力 · 12 秒`, 2200);
  updateHUD();
}

function activateStealth() {
  const weapon = WEAPONS.stealth;
  const now = performance.now();
  if (state.stealthActive || state.stealthCooldown > 0 || now - state.lastShot < weapon.fireRate) return;

  state.stealthActive = true;
  state.stealthTimer = weapon.duration;
  state.lastShot = now;
  clearEnemyBullets();
  setStealthVisual(true);
  spawnParticles(camera.position.x, camera.position.y - 0.5, camera.position.z, 0x88ccff, 20);
  updateHUD();
}

function useAbility(weapon) {
  if (weapon.id === 'stealth') activateStealth();
  if (weapon.id === 'allyboost') activateAllyBoost();
}

function updateAbilities(dt) {
  if (state.stealthActive) {
    state.stealthTimer -= dt;
    if (state.stealthTimer <= 0) {
      state.stealthActive = false;
      state.stealthTimer = 0;
      state.stealthCooldown = WEAPONS.stealth.cooldown;
      setStealthVisual(false);
      updateHUD();
    }
  } else if (state.stealthCooldown > 0) {
    state.stealthCooldown = Math.max(0, state.stealthCooldown - dt);
    if (state.stealthCooldown === 0) updateHUD();
  }

  if (state.allyBoostActive) {
    state.allyBoostTimer -= dt;
    if (state.allyBoostTimer <= 0) {
      state.allyBoostActive = false;
      state.allyBoostTimer = 0;
      state.allyBoostCooldown = WEAPONS.allyboost.cooldown;
      showWaveBanner('队友强化结束', 1200);
      updateHUD();
    }
  } else if (state.allyBoostCooldown > 0) {
    state.allyBoostCooldown = Math.max(0, state.allyBoostCooldown - dt);
    if (state.allyBoostCooldown === 0) updateHUD();
  }

  if (state.stealthActive || state.allyBoostActive) updateHUD();
}

function shoot() {
  const weapon = getCurrentWeapon();
  if (weapon.melee) {
    meleeSlash();
    return;
  }
  if (weapon.ability) {
    useAbility(weapon);
    return;
  }
  fireGun();
}

function fireGun() {
  const weapon = getCurrentWeapon();
  const now = performance.now();
  if (state.reloading || now - state.lastShot < weapon.fireRate) return;
  if (!weapon.infinite && state.ammo <= 0) {
    startReload();
    return;
  }

  if (!weapon.infinite) state.ammo--;
  state.lastShot = now;
  updateHUD();

  if (muzzleFlash) {
    if (weapon.id === 'magma') muzzleFlash.material.color.setHex(0xff5500);
    else muzzleFlash.material.color.setHex(0xffaa00);
    muzzleFlash.visible = true;
    setTimeout(() => { if (muzzleFlash) muzzleFlash.visible = false; }, 50);
  }
  if (weaponMesh && weapon.recoilZ) {
    const baseZ = weaponMesh.position.z;
    weaponMesh.position.z = baseZ - weapon.recoilZ;
    setTimeout(() => { if (weaponMesh) weaponMesh.position.z = baseZ; }, 60);
  }

  const enemyMeshes = [];
  const meshToEnemy = new Map();
  for (const e of enemies) {
    if (!e.alive || e.layer !== state.currentLayer) continue;
    enemyMeshes.push(e.body, e.head);
    meshToEnemy.set(e.body, e);
    meshToEnemy.set(e.head, e);
  }

  const wallMeshes = colliders
    .filter(c => c.layer < 0 || c.layer === state.currentLayer)
    .map(c => c.mesh);

  const hitColor = weapon.id === 'magma' ? 0xff5500 : 0xff4444;
  const wallColor = weapon.id === 'magma' ? 0xff8800 : 0xffcc66;
  const spreadMult = isAiming() ? AIM_SPREAD_MULT : 1;
  let hitEnemy = false;

  for (let p = 0; p < weapon.pellets; p++) {
    const spreadX = (Math.random() - 0.5) * weapon.spread * spreadMult;
    const spreadY = (Math.random() - 0.5) * weapon.spread * spreadMult;
    raycaster.setFromCamera(new THREE.Vector2(spreadX, spreadY), camera);

    const hits = raycaster.intersectObjects(enemyMeshes, false);
    if (hits.length > 0) {
      const enemy = meshToEnemy.get(hits[0].object);
      if (enemy) {
        const isHead = hits[0].object === enemy.head;
        const dmg = getWeaponDamage(weapon, isHead);
        enemy.hp -= dmg;
        enemy.lastHit = now;
        spawnParticles(hits[0].point.x, hits[0].point.y, hits[0].point.z, hitColor, weapon.id === 'magma' ? 14 : 6);
        if (weapon.id === 'magma') {
          spawnParticles(hits[0].point.x, hits[0].point.y, hits[0].point.z, 0xffee00, 8);
        }
        hitEnemy = true;
        if (enemy.hp <= 0) killEnemy(enemy);
      }
    } else {
      const wallHits = raycaster.intersectObjects(wallMeshes, false);
      if (wallHits.length > 0) {
        const pt = wallHits[0].point;
        spawnParticles(pt.x, pt.y, pt.z, wallColor, weapon.id === 'magma' ? 8 : 4);
      }
    }
  }

  if (hitEnemy) showHitMarker();
}

function startReload() {
  const weapon = getCurrentWeapon();
  if (weapon.melee || weapon.infinite || weapon.ability) return;
  if (state.reloading || state.reserve <= 0 || state.ammo === weapon.magSize) return;
  state.reloading = true;
  state.reloadTimer = weapon.reloadTime;
}

function updateReload(dt) {
  if (!state.reloading) return;
  const weapon = getCurrentWeapon();
  state.reloadTimer -= dt;
  if (state.reloadTimer <= 0) {
    const need = weapon.magSize - state.ammo;
    const load = Math.min(need, state.reserve);
    state.ammo += load;
    state.reserve -= load;
    state.reloading = false;
    saveWeaponAmmo();
    updateHUD();
  }
}

// ─── Enemy Bullets ────────────────────────────────────────────────

function spawnEnemyBullet(x, y, z, vx, vy, vz, damage = ENEMY_DAMAGE) {
  if (state.stealthActive) return;
  const geo = new THREE.CylinderGeometry(0.025, 0.025, 0.22, 5);
  geo.rotateX(Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xff6622,
    transparent: true,
    opacity: 0.92,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  const speed = Math.hypot(vx, vy, vz) || 1;
  mesh.lookAt(x + vx / speed, y + vy / speed, z + vz / speed);
  scene.add(mesh);
  enemyBullets.push({ x, y, z, vx, vy, vz, life: 2000, mesh, damage });
}

function updateEnemyBullets(dt) {
  for (let i = enemyBullets.length - 1; i >= 0; i--) {
    const b = enemyBullets[i];
    b.life -= dt;
    b.x += b.vx * (dt / 1000);
    b.y += b.vy * (dt / 1000);
    b.z += b.vz * (dt / 1000);
    if (b.mesh) {
      b.mesh.position.set(b.x, b.y, b.z);
      const spd = Math.hypot(b.vx, b.vy, b.vz) || 1;
      b.mesh.lookAt(b.x + b.vx / spd, b.y + b.vy / spd, b.z + b.vz / spd);
    }

    if (b.life <= 0 || b.y < LAYER_Y[0] - 2) {
      if (b.mesh) scene.remove(b.mesh);
      enemyBullets.splice(i, 1);
      continue;
    }

    const dx = b.x - camera.position.x;
    const dy = b.y - camera.position.y;
    const dz = b.z - camera.position.z;
    if (Math.hypot(dx, dy, dz) < 0.6) {
      if (!state.stealthActive && !isPlayerInSanctuary() && !state.playerDown) takeDamage(b.damage);
      if (b.mesh) scene.remove(b.mesh);
      enemyBullets.splice(i, 1);
      continue;
    }

    let hitAlly = false;
    for (const t of teammates) {
      if (!t.alive) continue;
      const floorY = LAYER_Y[t.layer];
      const ty = floorY + t.aimHeight;
      const tdx = b.x - t.group.position.x;
      const tdy = b.y - ty;
      const tdz = b.z - t.group.position.z;
      if (Math.hypot(tdx, tdy, tdz) < 0.65) {
        if (!isInSanctuary(t.group.position.x, t.group.position.z, t.layer)) {
          t.hp -= b.damage;
          t.lastHit = performance.now();
          if (t.hp <= 0) killTeammate(t);
        }
        if (b.mesh) scene.remove(b.mesh);
        enemyBullets.splice(i, 1);
        hitAlly = true;
        break;
      }
    }
    if (hitAlly) continue;
  }
}

function takeDamage(amount) {
  if (isPlayerInSanctuary() || state.playerDown) return;
  const reduction = getEquipmentBonuses().damageReduction;
  state.hp -= amount * (1 - reduction);
  state.lastDamageTime = performance.now();
  if (state.stealthActive) {
    state.stealthActive = false;
    state.stealthTimer = 0;
    state.stealthCooldown = WEAPONS.stealth.cooldown;
    setStealthVisual(false);
  }
  updateHUD();
  document.getElementById('damage-flash').classList.add('active');
  setTimeout(() => document.getElementById('damage-flash').classList.remove('active'), 150);
  if (state.hp <= 0) {
    if (hasSquadSurvivors()) downPlayer();
    else endGame(false);
  }
}

function updateRegenHUD() {
  const el = document.getElementById('regen-hud');
  const barWrap = document.querySelector('.bar-wrap');
  if (!el || !barWrap) return;

  if (!state.playing || state.playerDown || state.hp <= 0 || state.hp >= getMaxHp()) {
    el.classList.add('hidden');
    el.classList.remove('waiting', 'active');
    barWrap.classList.remove('regen-active');
    return;
  }

  if (isPlayerInSanctuary()) {
    el.classList.remove('hidden', 'waiting');
    el.classList.add('active');
    barWrap.classList.add('regen-active');
    el.textContent = `庇护所回血 +${SANCTUARY_HEAL_RATE}/秒`;
    return;
  }

  const regenRate = REGEN_PER_SEC + getEquipmentBonuses().regenBonus;
  const sinceDamage = performance.now() - state.lastDamageTime;
  const remaining = REGEN_DELAY - sinceDamage;

  el.classList.remove('hidden');
  if (remaining > 0) {
    el.textContent = `脱战 ${(remaining / 1000).toFixed(1)}s 后开始回血`;
    el.classList.add('waiting');
    el.classList.remove('active');
    barWrap.classList.remove('regen-active');
  } else {
    el.textContent = `自动回血 +${regenRate}/秒`;
    el.classList.remove('waiting');
    el.classList.add('active');
    barWrap.classList.add('regen-active');
  }
}

function updateHealthRegen(dt) {
  const maxHp = getMaxHp();
  if (!state.playing || state.playerDown || state.hp <= 0 || state.hp >= maxHp) {
    updateRegenHUD();
    return;
  }

  if (performance.now() - state.lastDamageTime < REGEN_DELAY) {
    updateRegenHUD();
    return;
  }

  const prevHp = state.hp;
  const regenRate = REGEN_PER_SEC + getEquipmentBonuses().regenBonus;
  state.hp = Math.min(maxHp, state.hp + regenRate * (dt / 1000));
  if (state.hp !== prevHp) updateHUD();
  else updateRegenHUD();
}

// ─── Player Movement ──────────────────────────────────────────────

let yaw = 0, pitch = 0;
let aimBlend = 0;

function isAiming() {
  return state.playing && state.mouseLocked && keys['KeyX'];
}

function updateAim(dt) {
  const target = isAiming() ? 1 : 0;
  aimBlend += (target - aimBlend) * Math.min(1, dt / 90);

  const targetFov = isAiming() ? AIM_FOV : CAMERA_FOV;
  const fov = CAMERA_FOV + (targetFov - CAMERA_FOV) * aimBlend;
  if (Math.abs(camera.fov - fov) > 0.05) {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }

  const ch = document.getElementById('crosshair');
  if (ch) ch.classList.toggle('aiming', aimBlend > 0.35);

  if (weaponMesh && weaponMesh.userData.basePos) {
    const bp = weaponMesh.userData.basePos;
    const br = weaponMesh.userData.baseRot || 0;
    const aimPos = bp.clone();
    aimPos.x *= 0.55;
    aimPos.y += 0.06;
    aimPos.z += 0.12;
    weaponMesh.position.set(
      bp.x + (aimPos.x - bp.x) * aimBlend,
      bp.y + (aimPos.y - bp.y) * aimBlend,
      bp.z + (aimPos.z - bp.z) * aimBlend
    );
    weaponMesh.rotation.x = br + (br * 0.15) * aimBlend;
  }
}

function tryActivateBoost() {
  if (!state.playing || state.boostActive || state.boostCooldown > 0) return;
  state.boostActive = true;
  state.boostTimer = getBoostDuration();
  updateBoostHUD();
}

function updateBoost(dt) {
  if (state.boostActive) {
    state.boostTimer -= dt;
    if (state.boostTimer <= 0) {
      state.boostActive = false;
      state.boostCooldown = getBoostCooldown();
    }
  } else if (state.boostCooldown > 0) {
    state.boostCooldown -= dt;
  }
  updateBoostHUD();
}

function updateBoostHUD() {
  const el = document.getElementById('boost-hud');
  if (!el) return;
  if (!state.playing) {
    el.classList.add('hidden');
    return;
  }
  el.classList.remove('hidden');
  if (state.boostActive) {
    el.textContent = `极速冲刺 ${(state.boostTimer / 1000).toFixed(1)}s`;
    el.classList.add('active');
    el.classList.remove('cooldown');
  } else if (state.boostCooldown > 0) {
    el.textContent = `冲刺冷却 ${(state.boostCooldown / 1000).toFixed(1)}s`;
    el.classList.remove('active');
    el.classList.add('cooldown');
  } else {
    el.textContent = 'Ctrl 极速冲刺';
    el.classList.remove('active', 'cooldown');
  }
}

function tryActivateFlight() {
  if (!state.playing || state.flightActive || state.flightCooldown > 0) return;
  state.flightActive = true;
  state.flightTimer = FLIGHT_DURATION;
  state.grounded = false;
  state.verticalVelocity = 0;
  updateFlightHUD();
}

function updateFlight(dt) {
  if (state.flightActive) {
    state.flightTimer -= dt;
    if (state.flightTimer <= 0) {
      state.flightActive = false;
      state.flightCooldown = FLIGHT_COOLDOWN;
    }
  } else if (state.flightCooldown > 0) {
    state.flightCooldown -= dt;
  }
  updateFlightHUD();
}

function updateFlightHUD() {
  const el = document.getElementById('flight-hud');
  if (!el) return;
  if (!state.playing) {
    el.classList.add('hidden');
    return;
  }
  el.classList.remove('hidden');
  if (state.flightActive) {
    el.textContent = `飞行中 ${(state.flightTimer / 1000).toFixed(1)}s · Space 上升 · Shift 下降`;
    el.classList.add('active');
    el.classList.remove('cooldown');
  } else if (state.flightCooldown > 0) {
    el.textContent = `起飞冷却 ${(state.flightCooldown / 1000).toFixed(1)}s`;
    el.classList.remove('active');
    el.classList.add('cooldown');
  } else {
    el.textContent = 'Q 起飞 10 秒';
    el.classList.remove('active', 'cooldown');
  }
}

function updatePlayer(dt) {
  if (!state.playing || !state.mouseLocked) return;

  camera.rotation.order = 'YXZ';
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;

  if (state.playerDown) return;

  const sprint = !state.flightActive && (keys['ShiftLeft'] || keys['ShiftRight']);
  const speedMult = 1 + getEquipmentBonuses().speedMult;
  let moveSpeed = PLAYER_SPEED * speedMult;
  if (state.boostActive) moveSpeed = BOOST_SPEED * speedMult;
  else if (sprint) moveSpeed = SPRINT_SPEED * speedMult;
  if (isAiming()) moveSpeed *= AIM_MOVE_MULT;
  const speed = moveSpeed * (dt / 1000);

  const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
  const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));

  let dx = 0, dz = 0;
  if (keys['KeyW'] || keys['ArrowUp']) { dx += forward.x * speed; dz += forward.z * speed; }
  if (keys['KeyS'] || keys['ArrowDown']) { dx -= forward.x * speed; dz -= forward.z * speed; }
  if (keys['KeyA'] || keys['ArrowLeft']) { dx -= right.x * speed; dz -= right.z * speed; }
  if (keys['KeyD'] || keys['ArrowRight']) { dx += right.x * speed; dz += right.z * speed; }

  if (dx !== 0 || dz !== 0) {
    const moveLayer = state.standLayer ?? state.currentLayer;
    const resolved = resolveMovement(camera.position, dx, 0, dz, moveLayer);
    camera.position.x = resolved.x;
    camera.position.z = resolved.z;
  }

  updatePlayerVertical(dt);

  if (mouse.down) shoot();
}

// ─── HUD ──────────────────────────────────────────────────────────

function updateTeamHUD() {
  const el = document.getElementById('team-hud');
  if (!el) return;
  if (!state.playing) {
    el.innerHTML = '';
    return;
  }
  el.innerHTML = teammates.map(t => {
    if (!t.alive) {
      const left = t.reviveTimer != null ? `${Math.max(0, t.reviveTimer / 1000).toFixed(1)}s 复活` : '等待复活';
      const canRevive = hasSquadSurvivors(t);
      return `<span class="team-chip dead">${t.name} · 阵亡${canRevive ? ` · ${left}` : ''}</span>`;
    }
    const pct = Math.max(0, t.hp / t.maxHp);
    const cls = pct > 0.5 ? 'ok' : pct > 0.25 ? 'warn' : 'crit';
    const status = t.status || '跟随';
    const boostTag = state.allyBoostActive ? ' · ×2' : '';
    const kills = t.kills ? ` · ${t.kills}杀` : '';
    return `<span class="team-chip ${cls}${state.allyBoostActive ? ' boosted' : ''}">${t.name} · ${status}${boostTag} · ${Math.ceil(t.hp)} HP${kills}</span>`;
  }).join('');
}

function updateHUD() {
  const weapon = getCurrentWeapon();
  const maxHp = getMaxHp();
  const hpPct = Math.max(0, state.hp / maxHp) * 100;
  const aliveTeammates = teammates.filter(t => t.alive).length;
  document.getElementById('hp-bar').style.width = `${hpPct}%`;
  document.getElementById('hp-text').textContent = state.playerDown
    ? `倒地 · ${Math.max(0, state.playerReviveTimer / 1000).toFixed(1)}s 后复活`
    : `${Math.max(0, Math.ceil(state.hp))} / ${maxHp}`;
  document.getElementById('ammo-text').textContent = weapon.ability
    ? getAbilityStatusText(weapon)
    : weapon.melee
      ? '∞ 近战'
      : weapon.infinite
        ? '∞'
        : state.reloading
          ? '换弹中...'
          : `${state.ammo} / ${state.reserve}`;
  document.getElementById('ammo-text').classList.toggle('low', !weapon.melee && !weapon.infinite && !weapon.ability && state.ammo <= 5 && !state.reloading);
  document.getElementById('kill-text').textContent = `击杀 ${state.kills} · 队友 ${aliveTeammates}/${TEAMMATE_COUNT}`;
  const waveCfg = getWaveConfig(state.wave);
  const waveSuffix = state.bossSpawned
    ? ` · Boss ${Math.max(0, state.bossesAlive)}/${BOSSES_PER_WAVE}`
    : ` · 小怪 ${Math.min(state.waveMinionKills, waveCfg.minionsToBoss)}/${waveCfg.minionsToBoss}`;
  document.getElementById('wave-text').textContent = `${getWaveHudText(state.wave)}${waveSuffix}`;
  document.getElementById('layer-text').textContent = `第 ${state.currentLayer + 1} 层`;
  document.getElementById('weapon-hud').innerHTML = weapon.ability
    ? `${weapon.name} · <kbd>左键</kbd> ${weapon.abilityLabel || '使用'} · <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd><kbd>5</kbd> 切换`
    : weapon.id === 'katana'
      ? `${getKatanaDisplayName()} · ${getKatanaElement().desc} · 伤害 ${getKatanaMeleeStats().damage}`
      : weapon.melee
      ? `${weapon.name} · <kbd>左键</kbd> ${weapon.meleeLabel || '攻击'} · <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd><kbd>5</kbd> 换武器`
      : weapon.infinite
        ? `${weapon.name} · 无限弹药 · 伤害 ${weapon.damage} · <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd><kbd>5</kbd> 换枪`
        : `${weapon.name} · 弹尽自动换弹 · <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd><kbd>5</kbd> 换枪`;

  for (const id of WEAPON_ORDER) {
    const el = document.getElementById(`weapon-slot-${WEAPONS[id].slot}`);
    if (!el) continue;
    el.classList.toggle('active', id === state.weaponId);
    el.classList.toggle('katana-tier', id === 'katana' && state.katanaTier > 0);
    for (const tierCls of ['katana-fire', 'katana-frost', 'katana-thunder', 'katana-venom', 'katana-radiance']) {
      el.classList.remove(tierCls);
    }
    if (id === 'katana' && state.katanaTier > 0) {
      el.classList.add(`katana-${getKatanaElement().id}`);
    }
    if (el.querySelector('.slot-name')) {
      el.querySelector('.slot-name').textContent = id === 'katana' ? getKatanaDisplayName() : WEAPONS[id].name;
    }
    const ammoData = id === state.weaponId
      ? { ammo: state.ammo, reserve: state.reserve }
      : (state.weaponAmmo[id] || { ammo: WEAPONS[id].magSize, reserve: WEAPONS[id].reserve });
    el.querySelector('.slot-ammo').textContent = WEAPONS[id].ability
      ? getAbilitySlotText(id)
      : id === 'katana' && state.katanaTier > 0
        ? getKatanaElement().name
        : id === 'katana'
          ? getKatanaUpgradeHint()
        : WEAPONS[id].melee || WEAPONS[id].infinite
          ? '∞'
          : `${ammoData.ammo}/${ammoData.reserve}`;
  }
  updateEquipmentHUD();
  updateTeamHUD();
  updateRegenHUD();
}

function showHitMarker() {
  const ch = document.getElementById('crosshair');
  const hm = document.getElementById('hit-marker');
  ch.classList.add('hit');
  hm.classList.add('show');
  setTimeout(() => { ch.classList.remove('hit'); hm.classList.remove('show'); }, 120);
}

let waveBannerTimer = null;

function showWaveBanner(message, duration = 2000) {
  const banner = document.getElementById('wave-banner');
  banner.textContent = message;
  banner.classList.remove('hidden');
  banner.classList.add('show');
  clearTimeout(waveBannerTimer);
  waveBannerTimer = setTimeout(() => {
    banner.classList.remove('show');
    setTimeout(() => banner.classList.add('hidden'), 350);
  }, duration);

  const el = document.getElementById('wave-text');
  el.style.transform = 'scale(1.3)';
  el.style.color = '#f1c40f';
  setTimeout(() => { el.style.transform = ''; el.style.color = ''; }, 800);
}

// ─── Game Flow ────────────────────────────────────────────────────

function startGame() {
  state.playing = true;
  state.kills = 0;
  state.wave = 1;
  state.hp = PLAYER_HP;
  state.equipment = [];
  state.reloading = false;
  state.lastWeaponSwitch = 0;
  state.startTime = performance.now();

  initWeapons();

  state.currentLayer = 0;
  state.verticalVelocity = 0;
  state.grounded = true;
  state.standLayer = 0;
  state.boostActive = false;
  state.boostTimer = 0;
  state.boostCooldown = 0;
  state.flightActive = false;
  state.flightTimer = 0;
  state.flightCooldown = 0;
  state.lastDamageTime = performance.now();
  state.stealthActive = false;
  state.stealthTimer = 0;
  state.stealthCooldown = 0;
  state.allyBoostActive = false;
  state.allyBoostTimer = 0;
  state.allyBoostCooldown = 0;
  state.sanctuaryStay = 0;
  state.playerDown = false;
  state.playerReviveTimer = 0;
  state.katanaTier = 0;
  katanaGlowPhase = 0;
  setStealthVisual(false);
  camera.position.set(0, LAYER_Y[0] + PLAYER_EYE_OFFSET, 0);
  yaw = 0; pitch = 0;
  aimBlend = 0;
  camera.fov = CAMERA_FOV;
  camera.updateProjectionMatrix();

  for (const e of enemies) {
    if (e.group) scene.remove(e.group);
  }
  enemies.length = 0;
  clearTeammates();
  clearAllyBullets();
  for (const b of enemyBullets) {
    if (b.mesh) scene.remove(b.mesh);
  }
  enemyBullets.length = 0;
  for (const p of particles) scene.remove(p.mesh);
  particles.length = 0;

  spawnTeammates();
  spawnWave(1);
  showWaveBanner(`小队集结：${TEAMMATE_NAMES.join(' · ')} 已就位`, 1800);
  setTimeout(() => {
    if (state.playing) showWaveBanner(getWaveBannerText(1), 2500);
  }, 1900);
  updateHUD();
  updateBoostHUD();

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('gameover-screen').classList.add('hidden');
  document.getElementById('wave-banner').classList.add('hidden');
  document.getElementById('wave-banner').classList.remove('show');
  document.getElementById('hud').classList.remove('hidden');

  canvas.requestPointerLock();
}

function endGame(won) {
  state.playing = false;
  document.exitPointerLock();

  const elapsed = Math.floor((performance.now() - state.startTime) / 1000);
  document.getElementById('end-title').textContent = won ? '任务完成！' : '任务失败';
  document.getElementById('end-msg').textContent = won
    ? '你消灭了所有敌人！'
    : '你被敌人击倒了';
  document.getElementById('end-stats').textContent = won
    ? `击杀 ${state.kills} · 存活 ${elapsed} 秒 · 通过 ${state.wave} 关`
    : `击杀 ${state.kills} · 存活 ${elapsed} 秒 · 第 ${state.wave} 关`;
  document.getElementById('gameover-screen').classList.remove('hidden');
}

// ─── Input ────────────────────────────────────────────────────────

document.addEventListener('keydown', e => {
  keys[e.code] = true;
  if (e.code === 'Space' && state.playing && state.grounded && !state.flightActive) {
    state.verticalVelocity = JUMP_VELOCITY;
    state.grounded = false;
  }
  if (e.code === 'KeyQ' && state.playing) {
    tryActivateFlight();
    e.preventDefault();
  }
  if (e.code === 'KeyE' && state.playing) {
    recallTeammates();
    e.preventDefault();
  }
  if (e.code === 'Digit1') switchWeapon(1);
  if (e.code === 'Digit2') switchWeapon(2);
  if (e.code === 'Digit3') switchWeapon(3);
  if (e.code === 'Digit4') switchWeapon(4);
  if (e.code === 'Digit5') switchWeapon(5);
  if ((e.code === 'ControlLeft' || e.code === 'ControlRight') && state.playing) {
    tryActivateBoost();
    e.preventDefault();
  }
  if (['KeyW','KeyA','KeyS','KeyD','Space','ShiftLeft','ShiftRight','ControlLeft','ControlRight','KeyX','KeyQ','KeyE','Digit1','Digit2','Digit3','Digit4','Digit5'].includes(e.code)) e.preventDefault();
});
document.addEventListener('keyup', e => { keys[e.code] = false; });
window.addEventListener('blur', () => { for (const k of Object.keys(keys)) delete keys[k]; mouse.down = false; });

canvas.addEventListener('click', () => {
  if (state.playing) canvas.requestPointerLock();
});

document.addEventListener('pointerlockchange', () => {
  state.mouseLocked = document.pointerLockElement === canvas;
});

document.addEventListener('mousemove', e => {
  if (!state.mouseLocked) return;
  const sens = isAiming() ? AIM_MOUSE_SENS : MOUSE_SENS;
  yaw -= e.movementX * sens;
  pitch -= e.movementY * sens;
  pitch = Math.max(-Math.PI / 2 + 0.05, Math.min(Math.PI / 2 - 0.05, pitch));
});

canvas.addEventListener('mousedown', () => { mouse.down = true; });
canvas.addEventListener('mouseup', () => { mouse.down = false; });

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('restart-btn').addEventListener('click', startGame);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ─── Main Loop ────────────────────────────────────────────────────

let lastTime = performance.now();

function animate() {
  requestAnimationFrame(animate);
  const now = performance.now();
  const dt = Math.min(now - lastTime, 50);
  lastTime = now;

  if (state.playing) {
    updateSquadRevive(dt);
    updateBoost(dt);
    updateFlight(dt);
    updateSanctuary(dt);
    updateHealthRegen(dt);
    updateAim(dt);
    updatePlayer(dt);
    updateTeammates(dt);
    updateEnemies(dt);
    updateAllyBullets(dt);
    updateEnemyBullets(dt);
    updateAbilities(dt);
    updateReload(dt);
    updateKatanaVisuals(dt);
    updateParticles(dt);
  }

  renderer.render(scene, camera);
}

buildWorld();
initWeapons();
updateHUD();
animate();
