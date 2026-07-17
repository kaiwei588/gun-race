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
const DIFFICULTY_MULT = 2;
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
const LAYER_HEIGHT_MULT = 3;
const WALL_HEIGHT = 4;
const LAYER_COUNT = 3;
const LAYER_HEIGHT = 5 * LAYER_HEIGHT_MULT;
const LAYER_Y = [0, LAYER_HEIGHT, LAYER_HEIGHT * 2];
const FLIGHT_MAX_HEIGHT = LAYER_Y[2] + WALL_HEIGHT + 6;
const PLAYER_EYE_OFFSET = 1.7;
const CAMERA_FOV = 75;
const AIM_FOV = 42;
const MOUSE_SENS = 0.002;
const AIM_MOUSE_SENS = 0.0011;
const AIM_MOVE_MULT = 0.55;
const AIM_SPREAD_MULT = 0.35;
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
const WAVE_MINIONS = 80;
const MAX_PARTICLES = 100;
const LOS_CHECK_INTERVAL = 4;
const PIXEL_RATIO_CAP = 1.5;
const MAGMA_SPLASH_RADIUS = 2.5 * 6;
const GUN_RANGE_MULT = 20;
const MAGMA_GUN_RANGE = ARENA_SIZE * 2 * GUN_RANGE_MULT;

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

const STAIR_HALF_WIDTH = 2.5;
const STAIR_HALF_DEPTH = 8;
const STAIR_STEP_WIDTH = 3;
const STAIR_STEPS = 8 * LAYER_HEIGHT_MULT;

const WALK_RAMPS = [
  { cx: 27, cz: 0, halfW: STAIR_HALF_WIDTH, halfD: STAIR_HALF_DEPTH, yBottom: LAYER_Y[0], yTop: LAYER_Y[1] },
  { cx: 27, cz: 0, halfW: STAIR_HALF_WIDTH, halfD: STAIR_HALF_DEPTH, yBottom: LAYER_Y[1], yTop: LAYER_Y[2] },
  { cx: -27, cz: 0, halfW: STAIR_HALF_WIDTH, halfD: STAIR_HALF_DEPTH, yBottom: LAYER_Y[0], yTop: LAYER_Y[1] },
  { cx: -27, cz: 0, halfW: STAIR_HALF_WIDTH, halfD: STAIR_HALF_DEPTH, yBottom: LAYER_Y[1], yTop: LAYER_Y[2] },
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
  summonboss: {
    id: 'summonboss',
    name: '召唤凤凰',
    slot: 3,
    ability: true,
    abilityLabel: '召唤',
    fireRate: 900,
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
    autoFire: true,
    magSize: 0,
    reserve: 0,
    reloadTime: 0,
    fireRate: 90,
    damage: 450,
    range: MAGMA_GUN_RANGE,
    headshotMult: 2,
    spread: 0.008,
    pellets: 1,
    recoilZ: 0.09,
    splashRadius: MAGMA_SPLASH_RADIUS,
  },
};

const WEAPON_ORDER = ['stealth', 'allyboost', 'summonboss', 'katana', 'magma'];
const SUMMON_BOSS_SCALE = 4.6;
const SUMMON_BOSS_NAME = '凤凰';
const PHOENIX_DAMAGE = 1000;
const PHOENIX_RANGE = MAGMA_GUN_RANGE;
const PHOENIX_FIRE_RATE = 280;
const PHOENIX_MANUAL_FIRE_RATE = 120;
const PHOENIX_SPLASH_RADIUS = MAGMA_SPLASH_RADIUS * 0.85;
const PHOENIX_MOUNT_RANGE = 30;
const PHOENIX_MOUNT_COOLDOWN = 350;
const PHOENIX_RIDE_SPEED_MULT = 1.65;
const PHOENIX_RIDE_CAM_HEIGHT = 1.05;

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
  waveMinionsSpawned: 0,
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
  summonUsedThisWave: false,
  sanctuaryStay: 0,
  playerDown: false,
  playerReviveTimer: 0,
  playerDownX: 0,
  playerDownY: 0,
  playerDownZ: 0,
  playerDownLayer: 0,
  katanaTier: 0,
  ridingPhoenix: null,
  lastMountToggle: 0,
  magmaSfxTime: 0,
};

// ─── Audio ────────────────────────────────────────────────────────

let audioCtx = null;
let sfxBus = null;
let bgmBus = null;
let bgmState = null;
let sfxDelay = null;
let sfxDelayFb = null;

const AUDIO_VOL = { master: 0.92, bgm: 0.26, sfx: 0.58 };

function ensureAudio() {
  if (!window.AudioContext && !window.webkitAudioContext) return;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    sfxBus = audioCtx.createGain();
    bgmBus = audioCtx.createGain();
    const comp = audioCtx.createDynamicsCompressor();
    comp.threshold.value = -22;
    comp.knee.value = 18;
    comp.ratio.value = 3;
    comp.attack.value = 0.004;
    comp.release.value = 0.18;
    comp.connect(audioCtx.destination);

    sfxDelay = audioCtx.createDelay(0.6);
    sfxDelay.delayTime.value = 0.14;
    sfxDelayFb = audioCtx.createGain();
    sfxDelayFb.gain.value = 0.32;
    const delayFilter = audioCtx.createBiquadFilter();
    delayFilter.type = 'lowpass';
    delayFilter.frequency.value = 2800;
    sfxBus.connect(comp);
    sfxBus.connect(sfxDelay);
    sfxDelay.connect(delayFilter);
    delayFilter.connect(sfxDelayFb);
    sfxDelayFb.connect(sfxDelay);
    delayFilter.connect(comp);

    bgmBus.connect(comp);
    sfxBus.gain.value = AUDIO_VOL.sfx * AUDIO_VOL.master;
    bgmBus.gain.value = AUDIO_VOL.bgm * AUDIO_VOL.master;
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playTone(freq, dur, type = 'square', vol = 0.08, detune = 0, dest = null) {
  if (!audioCtx || !sfxBus) return;
  const out = dest || sfxBus;
  const t0 = audioCtx.currentTime;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.value = freq;
  o.detune.value = detune;
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  o.connect(g);
  g.connect(out);
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}

function playSweep(freqFrom, freqTo, dur, type = 'sawtooth', vol = 0.08, detune = 0) {
  if (!audioCtx || !sfxBus) return;
  const t0 = audioCtx.currentTime;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freqFrom, t0);
  o.frequency.exponentialRampToValueAtTime(Math.max(20, freqTo), t0 + dur);
  o.detune.value = detune;
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  o.connect(g);
  g.connect(sfxBus);
  o.start(t0);
  o.stop(t0 + dur + 0.03);
}

function playNoise(dur, vol = 0.06, freq = 800, q = 0.8, filterType = 'bandpass') {
  if (!audioCtx || !sfxBus) return;
  const t0 = audioCtx.currentTime;
  const len = Math.max(1, Math.floor(audioCtx.sampleRate * dur));
  const buf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  const filter = audioCtx.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.setValueAtTime(freq, t0);
  if (filterType === 'bandpass') filter.Q.value = q;
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  src.connect(filter);
  filter.connect(g);
  g.connect(sfxBus);
  src.start(t0);
  src.stop(t0 + dur + 0.02);
}

function playNoiseSweep(dur, vol, freqFrom, freqTo) {
  if (!audioCtx || !sfxBus) return;
  const t0 = audioCtx.currentTime;
  const len = Math.max(1, Math.floor(audioCtx.sampleRate * dur));
  const buf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(freqFrom, t0);
  filter.frequency.exponentialRampToValueAtTime(Math.max(80, freqTo), t0 + dur);
  filter.Q.value = 1.2;
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  src.connect(filter);
  filter.connect(g);
  g.connect(sfxBus);
  src.start(t0);
  src.stop(t0 + dur + 0.02);
}

function playChord(freqs, dur, type = 'sawtooth', vol = 0.05) {
  freqs.forEach((f, i) => playTone(f, dur, type, vol * (1 - i * 0.12), (i - 1) * 6));
}

function playImpact(subFreq = 80, dur = 0.14) {
  playSweep(subFreq * 2.2, subFreq * 0.5, dur, 'sine', 0.12);
  playNoise(dur * 0.7, 0.11, 900, 1.1);
  playTone(subFreq, dur * 0.5, 'square', 0.06);
}

function playBgmKick(when) {
  if (!audioCtx || !bgmBus) return;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(150, when);
  o.frequency.exponentialRampToValueAtTime(42, when + 0.12);
  g.gain.setValueAtTime(0.55, when);
  g.gain.exponentialRampToValueAtTime(0.001, when + 0.18);
  o.connect(g);
  g.connect(bgmBus);
  o.start(when);
  o.stop(when + 0.2);
  playNoise(0.04, 0.04, 180, 0.6, 'highpass');
}

function playBgmHat(when) {
  if (!audioCtx || !bgmBus) return;
  playNoise(0.035, 0.025, 7000, 2, 'highpass');
  playTone(8000, 0.02, 'square', 0.008, 0, bgmBus);
}

function scheduleBgmLoop() {
  if (!bgmState?.active || !audioCtx || !bgmBus) return;
  const t0 = audioCtx.currentTime + 0.04;
  const minorArp = [110, 131, 165, 196, 220, 196, 165, 131];
  const leadArp = [220, 262, 330, 392, 440, 392, 330, 262];

  minorArp.forEach((freq, i) => {
    const when = t0 + i * 0.28;
    playBgmKick(when);
    if (i % 2 === 1) playBgmHat(when + 0.04);

    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    const f = audioCtx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(1800, when);
    f.frequency.linearRampToValueAtTime(4200, when + 0.08);
    f.frequency.exponentialRampToValueAtTime(900, when + 0.26);
    o.type = i % 2 ? 'sawtooth' : 'triangle';
    o.frequency.value = freq;
    o.detune.value = (Math.random() - 0.5) * 10;
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(0.034, when + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, when + 0.24);
    o.connect(f);
    f.connect(g);
    g.connect(bgmBus);
    o.start(when);
    o.stop(when + 0.26);

    const lead = audioCtx.createOscillator();
    const lg = audioCtx.createGain();
    lead.type = 'square';
    lead.frequency.value = leadArp[i];
    lg.gain.setValueAtTime(0, when + 0.06);
    lg.gain.linearRampToValueAtTime(0.012, when + 0.08);
    lg.gain.exponentialRampToValueAtTime(0.001, when + 0.22);
    lead.connect(lg);
    lg.connect(bgmBus);
    lead.start(when + 0.06);
    lead.stop(when + 0.24);
  });

  bgmState.loopTimer = setTimeout(scheduleBgmLoop, minorArp.length * 280);
}

function startBGM() {
  ensureAudio();
  if (!audioCtx || !bgmBus) return;
  stopBGM();
  bgmState = { active: true, nodes: [], loopTimer: null };

  const bass = audioCtx.createOscillator();
  bass.type = 'sawtooth';
  bass.frequency.value = 55;
  const bassFilter = audioCtx.createBiquadFilter();
  bassFilter.type = 'lowpass';
  bassFilter.frequency.value = 280;
  const bassGain = audioCtx.createGain();
  bassGain.gain.value = 0.14;
  bass.connect(bassFilter);
  bassFilter.connect(bassGain);
  bassGain.connect(bgmBus);
  bass.start();
  bgmState.nodes.push(bass, bassFilter);

  const sub = audioCtx.createOscillator();
  sub.type = 'sine';
  sub.frequency.value = 27.5;
  const subGain = audioCtx.createGain();
  subGain.gain.value = 0.22;
  sub.connect(subGain);
  subGain.connect(bgmBus);
  sub.start();
  bgmState.nodes.push(sub);

  for (const freq of [82.41, 110, 164.81, 220]) {
    const o = audioCtx.createOscillator();
    o.type = 'triangle';
    o.frequency.value = freq;
    o.detune.value = (Math.random() - 0.5) * 12;
    const g = audioCtx.createGain();
    g.gain.value = 0.028;
    o.connect(g);
    g.connect(bgmBus);
    o.start();
    bgmState.nodes.push(o);
  }

  const lfo = audioCtx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 0.06;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 0.018;
  lfo.connect(lfoGain);
  lfoGain.connect(bgmBus.gain);
  lfo.start();
  bgmState.nodes.push(lfo);

  scheduleBgmLoop();
}

function stopBGM() {
  if (!bgmState) return;
  bgmState.active = false;
  if (bgmState.loopTimer) clearTimeout(bgmState.loopTimer);
  for (const node of bgmState.nodes) {
    try { node.stop(); } catch (_) {}
    try { node.disconnect(); } catch (_) {}
  }
  bgmState = null;
  if (bgmBus) {
    bgmBus.gain.cancelScheduledValues(0);
    bgmBus.gain.value = AUDIO_VOL.bgm * AUDIO_VOL.master;
  }
}

function sfxShootMagma() {
  playImpact(65, 0.16);
  playNoiseSweep(0.12, 0.12, 2400, 180);
  playSweep(420, 90, 0.1, 'sawtooth', 0.07);
  playTone(880, 0.04, 'square', 0.03);
}

function sfxKatanaSlash() {
  playNoiseSweep(0.09, 0.1, 400, 4200);
  playSweep(1200, 280, 0.07, 'sawtooth', 0.06);
  playTone(660, 0.05, 'triangle', 0.04);
  playTone(990, 0.03, 'sine', 0.025);
}

function sfxHit() {
  playImpact(120, 0.08);
  playSweep(600, 200, 0.05, 'square', 0.05);
}

function sfxKill(isBoss = false) {
  if (isBoss) {
    playImpact(45, 0.35);
    playSweep(880, 110, 0.4, 'sawtooth', 0.09);
    playChord([110, 138, 165, 220], 0.45, 'sawtooth', 0.05);
    playNoise(0.25, 0.12, 400, 0.5, 'lowpass');
  } else {
    playImpact(90, 0.1);
    playSweep(440, 880, 0.08, 'square', 0.05);
    playTone(660, 0.06, 'sine', 0.04);
  }
}

function sfxTakeDamage() {
  playImpact(55, 0.12);
  playNoiseSweep(0.1, 0.11, 600, 120);
  playSweep(180, 60, 0.14, 'sawtooth', 0.07);
}

function sfxStealth() {
  playNoiseSweep(0.2, 0.07, 3000, 400);
  playSweep(1200, 400, 0.18, 'sine', 0.05);
  playTone(880, 0.06, 'triangle', 0.03);
  playTone(1320, 0.1, 'sine', 0.025);
}

function sfxAllyBoost() {
  playSweep(330, 660, 0.12, 'sawtooth', 0.05);
  playChord([440, 554, 659, 880], 0.2, 'sawtooth', 0.045);
  playNoise(0.08, 0.04, 2000, 1.5, 'highpass');
}

function sfxSummonPhoenix() {
  playImpact(40, 0.2);
  playSweep(120, 440, 0.45, 'sawtooth', 0.08);
  playSweep(220, 880, 0.5, 'triangle', 0.06);
  playNoiseSweep(0.35, 0.1, 200, 2800);
  playChord([220, 277, 330, 440], 0.55, 'sawtooth', 0.04);
}

function sfxBoost() {
  playSweep(120, 520, 0.2, 'sawtooth', 0.07);
  playNoiseSweep(0.18, 0.08, 800, 3200);
  playTone(660, 0.12, 'square', 0.04);
}

function sfxFlight() {
  playNoiseSweep(0.25, 0.07, 1200, 4500);
  playSweep(220, 880, 0.22, 'sine', 0.05);
  playTone(440, 0.15, 'triangle', 0.035);
}

function sfxMount() {
  playSweep(220, 660, 0.14, 'sawtooth', 0.06);
  playChord([392, 494, 587, 784], 0.18, 'triangle', 0.04);
  playNoiseSweep(0.12, 0.06, 500, 2200);
}

function sfxDismount() {
  playSweep(660, 220, 0.1, 'triangle', 0.05);
  playNoise(0.06, 0.05, 600);
}

function sfxJump() {
  playSweep(180, 420, 0.07, 'square', 0.045);
  playTone(330, 0.05, 'sine', 0.03);
}

function sfxWaveStart() {
  playImpact(70, 0.12);
  playSweep(220, 880, 0.22, 'sawtooth', 0.07);
  playChord([330, 415, 494, 660], 0.28, 'sawtooth', 0.045);
}

function sfxBossSpawn() {
  playImpact(35, 0.4);
  playSweep(880, 55, 0.55, 'sawtooth', 0.1);
  playNoise(0.35, 0.14, 120, 0.4, 'lowpass');
  playChord([55, 69, 82, 110], 0.6, 'square', 0.06);
}

function sfxLevelComplete() {
  playSweep(440, 880, 0.15, 'sine', 0.06);
  playChord([523, 659, 784, 988], 0.35, 'sawtooth', 0.05);
  playNoise(0.1, 0.05, 4000, 2, 'highpass');
}

function sfxPickup() {
  playSweep(660, 1320, 0.1, 'sine', 0.06);
  playChord([880, 1108, 1320], 0.16, 'triangle', 0.04);
  playTone(1760, 0.08, 'sine', 0.03);
}

function sfxWeaponSwitch() {
  playSweep(880, 440, 0.05, 'square', 0.035);
  playTone(660, 0.03, 'triangle', 0.025);
}

function sfxGameOver(won = false) {
  if (won) {
    playSweep(440, 880, 0.2, 'sine', 0.07);
    playChord([523, 659, 784, 988, 1175], 0.5, 'sawtooth', 0.045);
  } else {
    playImpact(40, 0.3);
    playSweep(220, 49, 0.6, 'sawtooth', 0.09);
    playNoise(0.3, 0.1, 80, 0.3, 'lowpass');
  }
}

function sfxUIClick() {
  playSweep(660, 990, 0.05, 'square', 0.04);
  playTone(1320, 0.03, 'sine', 0.02);
}

const keys = {};
const mouse = { down: false };

// ─── Three.js Setup ───────────────────────────────────────────────

const canvas = document.getElementById('game-canvas');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: window.devicePixelRatio <= 1.5,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, PIXEL_RATIO_CAP));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
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
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 150;
sun.shadow.camera.left = -50;
sun.shadow.camera.right = 50;
sun.shadow.camera.top = 50;
sun.shadow.camera.bottom = -50;
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
  const steps = STAIR_STEPS;
  const depth = halfD * 2;
  const rise = (yTop - yBottom) / steps;
  const run = depth / steps;
  for (let i = 0; i < steps; i++) {
    const step = new THREE.Mesh(
      new THREE.BoxGeometry(STAIR_STEP_WIDTH, rise, run + 0.05),
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
const summons = [];
const particles = [];
const _particleGeo = new THREE.SphereGeometry(0.1, 4, 4);
const _particleMatCache = new Map();
const _particlePool = [];
const enemyBullets = [];
const allyBullets = [];
let weaponMesh = null;
let muzzleFlash = null;

const _v3a = new THREE.Vector3();
const _v3b = new THREE.Vector3();
const _v3c = new THREE.Vector3();
const _v2a = new THREE.Vector2();
const sightBlockerCache = [];
const wallMeshCache = [];
const _barLookAt = new THREE.Vector3();

let _waveConfigCache = null;
let _animateFrame = 0;
let _shootFrame = -1;
let _shootLayer = -1;
const _shootMeshes = [];
const _shootMeshMap = new Map();

const dom = {};
function domEl(id) {
  return dom[id] ?? (dom[id] = document.getElementById(id));
}

function resetWaveConfigCache() {
  _waveConfigCache = null;
}

function invalidateShootTargets() {
  _shootFrame = -1;
}

function hasAlivePhoenix() {
  for (const s of summons) {
    if (s.alive && s.isPhoenix) return true;
  }
  return false;
}

function syncUnitFloor(unit) {
  const rampY = getFootYFromRamp(unit.group.position.x, unit.group.position.z);
  if (rampY !== null) {
    unit.group.position.y = rampY;
    unit.layer = getLayerFromFootY(rampY);
  } else {
    unit.group.position.y = LAYER_Y[unit.layer];
  }
}

function applySplashDamage(cx, cy, cz, directEnemy, baseDmg, now, owner, radius, particleCount = 18) {
  const layer = owner?.layer ?? state.currentLayer;
  let hitAny = false;

  for (const e of enemies) {
    if (!e.alive || e.layer !== layer || e === directEnemy) continue;
    const ex = e.group.position.x;
    const ey = getUnitAimY(e);
    const ez = e.group.position.z;
    const dist = Math.hypot(ex - cx, ey - cy, ez - cz);
    const hitR = radius + (e.isBoss ? 1.2 : 0.85);
    if (dist > hitR) continue;
    const falloff = 1 - (dist / radius) * 0.48;
    damageEnemy(e, baseDmg * Math.max(0.4, falloff), now, owner);
    hitAny = true;
  }

  const burstBudget = Math.min(particleCount, MAX_PARTICLES - particles.length);
  if (burstBudget > 0) {
    spawnParticles(cx, cy, cz, 0xff5500, Math.ceil(burstBudget * 0.55));
    spawnParticles(cx, cy, cz, 0xffee00, Math.floor(burstBudget * 0.45));
  }
  return hitAny;
}

function prepareShootTargets(layer) {
  if (_shootFrame === _animateFrame && _shootLayer === layer) return;
  _shootFrame = _animateFrame;
  _shootLayer = layer;
  _shootMeshes.length = 0;
  _shootMeshMap.clear();
  for (const e of enemies) {
    if (!e.alive || e.layer !== layer) continue;
    _shootMeshes.push(e.body, e.head);
    _shootMeshMap.set(e.body, e);
    _shootMeshMap.set(e.head, e);
  }
}

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
  } else if (id === 'summonboss') {
    const flameMat = new THREE.MeshStandardMaterial({
      color: 0xff5500, emissive: 0xff2200, emissiveIntensity: 1.35,
      metalness: 0.3, roughness: 0.25,
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xffee55, emissive: 0xffbb00, emissiveIntensity: 1.4,
      metalness: 0.45, roughness: 0.12,
    });
    const whiteMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, transparent: true, opacity: 0.92,
    });

    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.008, 8, 28), goldMat);
    halo.rotation.x = Math.PI / 2;
    halo.position.set(0.2, -0.06, -0.36);
    gun.add(halo);

    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.048, 12, 12), goldMat);
    orb.position.set(0.2, -0.06, -0.36);
    gun.add(orb);
    const orbCore = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 8), whiteMat);
    orbCore.position.set(0.2, -0.06, -0.36);
    gun.add(orbCore);

    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
      const len = 0.12 + (i % 2) * 0.04;
      const feather = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.012, len), i % 2 ? goldMat : flameMat);
      feather.position.set(0.2 + Math.cos(angle) * 0.07, -0.04 + Math.sin(angle) * 0.03, -0.38);
      feather.rotation.z = angle * 0.65;
      gun.add(feather);
    }

    for (const side of [-1, 1]) {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.018, 0.2), flameMat);
      wing.position.set(0.2 + side * 0.1, -0.02, -0.34);
      wing.rotation.z = side * 0.75;
      gun.add(wing);
      const tip = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.012, 0.12), goldMat);
      tip.position.set(0.2 + side * 0.15, 0.01, -0.42);
      tip.rotation.z = side * 0.9;
      gun.add(tip);
    }

    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.12, 5), flameMat);
    tail.rotation.x = -0.5;
    tail.position.set(0.2, -0.1, -0.28);
    gun.add(tail);

    gun.userData.muzzle = new THREE.Vector3(0.2, -0.06, -0.44);
    gun.userData.flashSize = 0.12;
    gun.userData.flashColor = 0xffee88;
    gun.position.set(0.22, -0.16, -0.35);
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
  sfxPickup();
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
  sfxWeaponSwitch();
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
  if (_waveConfigCache && _waveConfigCache.wave === wave) return _waveConfigCache.cfg;

  const tier = Math.max(0, wave - 1);
  const cycleIndex = Math.floor(tier / CYCLE_LENGTH);
  const posInCycle = tier % CYCLE_LENGTH;
  const isCycleFinale = posInCycle === CYCLE_LENGTH - 1;

  const linearScale = 1 + tier * 0.14 * DIFFICULTY_MULT;
  const cycleScale = 1 + cycleIndex * 0.55 * Math.sqrt(DIFFICULTY_MULT);
  const finaleScale = isCycleFinale ? 2.5 + DIFFICULTY_MULT * 0.35 : 1;
  const intensity = linearScale * cycleScale * finaleScale;

  const cfg = {
    tier,
    cycleIndex,
    posInCycle,
    isCycleFinale,
    intensity,
    minionsPerWave: WAVE_MINIONS,
    minionsToBoss: WAVE_MINIONS,
  };
  _waveConfigCache = { wave, cfg };
  return cfg;
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
  const dm = DIFFICULTY_MULT;
  return {
    hp: Math.floor((60 + tier * 28) * s * dm),
    shootCooldown: Math.max(180, (1500 - tier * 100 - cfg.cycleIndex * 60) / dm),
    shootCooldownRand: Math.max(120, (1300 - tier * 82 - cfg.cycleIndex * 40) / dm),
    bulletSpeed: (28 + tier * 4 + cfg.cycleIndex * 6.5) * (0.85 + dm * 0.12),
    damage: Math.floor((ENEMY_DAMAGE + tier * 4.5 + cfg.cycleIndex * 8) * s * dm),
    spread: Math.max(0.006, 0.036 - tier * 0.003),
    spawnCount: cfg.minionsPerWave,
    scale: Math.min(1 + tier * 0.04, 2.15),
    bossHpMult: (cfg.isCycleFinale ? 2.5 : 1 + cfg.cycleIndex * 0.2) * (0.9 + dm * 0.12),
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
  group.add(head);

  const helmet = new THREE.Mesh(
    new THREE.SphereGeometry(isBoss ? 0.27 : 0.21, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.62),
    helmetMat
  );
  helmet.position.y = 1.78;
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
  const speed = isBoss
    ? BOSS_SPEED * BOSS_POWER_MULT * (0.92 + DIFFICULTY_MULT * 0.08)
    : MINION_SPEED * (0.88 + DIFFICULTY_MULT * 0.12);
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
    losSlot: enemies.length % LOS_CHECK_INTERVAL,
    cachedCanSee: true,
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

function clearSummons() {
  for (const s of summons) {
    if (s.group) scene.remove(s.group);
    if (s.nameSprite?.material?.map) s.nameSprite.material.map.dispose();
    if (s.pointLight) s.pointLight.intensity = 0;
    if (s.rimLight) s.rimLight.intensity = 0;
  }
  summons.length = 0;
}

function flashDamageOverlay() {
  const flash = domEl('damage-flash');
  if (!flash) return;
  flash.classList.add('active');
  setTimeout(() => flash.classList.remove('active'), 150);
}

function flashScreen(color, duration = 280) {
  const flash = domEl('damage-flash');
  if (!flash) return;
  const r = (color >> 16) & 255;
  const g = (color >> 8) & 255;
  const b = color & 255;
  flash.style.background = `radial-gradient(circle at center, rgba(${r},${g},${b},0.52) 0%, transparent 72%)`;
  flash.classList.add('active');
  setTimeout(() => {
    flash.classList.remove('active');
    flash.style.background = '';
  }, duration);
}

function spawnPhoenixRitual(x, baseY, z) {
  for (let i = 0; i < 128; i++) {
    const t = i / 128;
    const angle = t * Math.PI * 11;
    const rise = t * 8;
    const r = (1 - t * 0.5) * 4.8;
    const colors = [0xffffff, 0xffee88, 0xffcc00, 0xff8800, 0xff4400, 0xff1100];
    spawnParticles(
      x + Math.cos(angle) * r,
      baseY + rise,
      z + Math.sin(angle) * r,
      colors[i % colors.length],
      10 + Math.floor(Math.random() * 10)
    );
  }
  for (let ring = 0; ring < 4; ring++) {
    for (let i = 0; i < 32; i++) {
      const angle = (i / 32) * Math.PI * 2;
      spawnParticles(
        x + Math.cos(angle) * (2.5 + ring * 0.9),
        baseY + ring * 0.35,
        z + Math.sin(angle) * (2.5 + ring * 0.9),
        ring % 2 ? 0xffaa00 : 0xff6600,
        6
      );
    }
  }
}

function killSummon(s) {
  if (!s.alive) return;
  s.alive = false;
  const px = s.group?.position?.x ?? camera.position.x;
  const py = (s.group?.position?.y ?? LAYER_Y[s.layer]) + s.aimHeight * (s.group?.scale?.y ?? 1) * 0.7;
  const pz = s.group?.position?.z ?? camera.position.z;
  if (s.group) scene.remove(s.group);
  if (state.ridingPhoenix === s) {
    state.ridingPhoenix = null;
    camera.position.y = LAYER_Y[s.layer] + PLAYER_EYE_OFFSET;
    showWaveBanner('凤凰陨落 · 你被甩下！', 2000);
    takeDamage(120);
  }
  s.isRidden = false;
  if (s.riderMesh) s.riderMesh.visible = false;
  spawnPhoenixRitual(px, py - 1.5, pz);
  spawnPhoenixBurst(px, py, pz, 36, 5.5);
  spawnPhoenixBurst(px, py + 2, pz, 24, 4);
  spawnParticles(px, py, pz, 0xffffff, 30);
  flashScreen(0xffffff, 80);
  setTimeout(() => flashScreen(0xff4400, 280), 90);
  showWaveBanner(`${s.name || SUMMON_BOSS_NAME} 涅槃陨落`, 1800);
}

function createPhoenixNameSprite(text) {
  const c = document.createElement('canvas');
  c.width = 448;
  c.height = 112;
  const ctx = c.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 448, 0);
  grad.addColorStop(0, '#ff1100');
  grad.addColorStop(0.25, '#ff8800');
  grad.addColorStop(0.5, '#ffffaa');
  grad.addColorStop(0.75, '#ffcc00');
  grad.addColorStop(1, '#ff3300');

  ctx.shadowColor = '#ff6600';
  ctx.shadowBlur = 36;
  ctx.fillStyle = 'rgba(8,0,0,0.88)';
  ctx.beginPath();
  ctx.roundRect(6, 8, 436, 96, 14);
  ctx.fill();
  ctx.strokeStyle = '#ffdd44';
  ctx.lineWidth = 3.5;
  ctx.stroke();

  for (const side of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(224 + side * 198, 56);
    ctx.lineTo(224 + side * 168, 18);
    ctx.lineTo(224 + side * 138, 56);
    ctx.lineTo(224 + side * 158, 72);
    ctx.closePath();
    ctx.fillStyle = side > 0 ? '#ff8800' : '#ffcc00';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  ctx.font = 'bold 46px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(255,60,0,0.65)';
  ctx.fillText(text, 226, 60);
  ctx.fillStyle = grad;
  ctx.fillText(text, 224, 58);

  const tex = new THREE.CanvasTexture(c);
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(4.2, 1.05, 1);
  sprite.position.y = 3.05;
  return sprite;
}

function buildPhoenixModel() {
  const group = new THREE.Group();
  const phoenixRoot = new THREE.Group();
  group.add(phoenixRoot);

  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0xff5500,
    emissive: 0xff2200,
    emissiveIntensity: 0.7,
    roughness: 0.35,
    metalness: 0.25,
  });
  const headMat = new THREE.MeshStandardMaterial({
    color: 0xffdd44,
    emissive: 0xff9900,
    emissiveIntensity: 0.85,
    roughness: 0.25,
    metalness: 0.3,
  });
  const wingMat = new THREE.MeshStandardMaterial({
    color: 0xff3300,
    emissive: 0xff1100,
    emissiveIntensity: 0.65,
    roughness: 0.4,
    side: THREE.DoubleSide,
  });
  const wingTipMat = new THREE.MeshStandardMaterial({
    color: 0xffee88,
    emissive: 0xffaa00,
    emissiveIntensity: 1.1,
    roughness: 0.2,
    transparent: true,
    opacity: 0.92,
    side: THREE.DoubleSide,
  });
  const tailMat = new THREE.MeshStandardMaterial({
    color: 0xff1100,
    emissive: 0xff0000,
    emissiveIntensity: 0.85,
    roughness: 0.35,
  });
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffcc00,
    emissiveIntensity: 1.4,
    roughness: 0.1,
    metalness: 0.5,
  });

  const body = new THREE.Mesh(new THREE.SphereGeometry(0.4, 14, 12), bodyMat);
  body.scale.set(0.95, 0.82, 1.45);
  body.position.set(0, 1.18, 0.02);
  body.castShadow = true;
  phoenixRoot.add(body);

  const core = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), coreMat);
  core.position.set(0, 1.24, 0.18);
  phoenixRoot.add(core);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.15, 0.28, 8), bodyMat);
  neck.position.set(0, 1.38, 0.22);
  neck.rotation.x = 0.55;
  phoenixRoot.add(neck);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 12), headMat);
  head.position.set(0, 1.52, 0.38);
  head.castShadow = true;
  phoenixRoot.add(head);

  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.028, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xffffcc })
    );
    eye.position.set(side * 0.07, 1.54, 0.5);
    phoenixRoot.add(eye);
    const pupil = new THREE.Mesh(
      new THREE.SphereGeometry(0.014, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xff4400 })
    );
    pupil.position.set(side * 0.07, 1.54, 0.52);
    phoenixRoot.add(pupil);
  }

  const crestParts = [];
  for (let i = 0; i < 5; i++) {
    const crest = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.28 + i * 0.04, 5), headMat);
    crest.position.set((i - 2) * 0.05, 1.68 + i * 0.02, 0.3 - i * 0.02);
    crest.rotation.x = -0.55 - i * 0.08;
    phoenixRoot.add(crest);
    crestParts.push(crest);
  }

  const beak = new THREE.Mesh(
    new THREE.ConeGeometry(0.045, 0.18, 7),
    new THREE.MeshStandardMaterial({ color: 0xffcc00, emissive: 0xff7700, emissiveIntensity: 0.7, metalness: 0.4 })
  );
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, 1.48, 0.58);
  phoenixRoot.add(beak);

  const gun = new THREE.Group();
  gun.position.set(0, 1.48, 0.64);
  phoenixRoot.add(gun);

  function buildWing(side) {
    const wing = new THREE.Group();
    wing.position.set(side * 0.24, 1.32, -0.02);
    const tiers = [];
    const specs = [
      { w: 1.18, h: 0.055, d: 0.68, ox: side * -0.58, oy: 0, oz: 0.04, rz: side * 0.38, mat: wingMat },
      { w: 1.0, h: 0.045, d: 0.58, ox: side * -0.86, oy: -0.06, oz: -0.06, rz: side * 0.58, mat: wingMat },
      { w: 0.82, h: 0.038, d: 0.48, ox: side * -1.08, oy: -0.12, oz: -0.14, rz: side * 0.72, mat: wingTipMat },
      { w: 0.62, h: 0.028, d: 0.38, ox: side * -1.28, oy: -0.18, oz: -0.22, rz: side * 0.88, mat: wingTipMat },
    ];
    for (const s of specs) {
      const feather = new THREE.Mesh(new THREE.BoxGeometry(s.w, s.h, s.d), s.mat);
      feather.position.set(s.ox, s.oy, s.oz);
      feather.rotation.z = s.rz;
      wing.add(feather);
      tiers.push(feather);
    }
    phoenixRoot.add(wing);
    return { wing, tiers };
  }

  const leftWing = buildWing(-1);
  const rightWing = buildWing(1);
  const leftArm = leftWing.wing;
  const rightArm = rightWing.wing;

  const flamePlumes = [];
  const plumeMat = new THREE.MeshBasicMaterial({
    color: 0xffaa00, transparent: true, opacity: 0.75,
  });
  for (const side of [-1, 1]) {
    for (let i = 0; i < 2; i++) {
      const plume = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.32 + i * 0.1, 6), plumeMat.clone());
      plume.position.set(side * (1.05 + i * 0.18), 1.18 - i * 0.08, -0.12 - i * 0.1);
      plume.rotation.z = side * (0.85 + i * 0.15);
      plume.rotation.x = -0.35;
      phoenixRoot.add(plume);
      flamePlumes.push(plume);
    }
  }

  const leftLeg = new THREE.Group();
  leftLeg.position.set(-0.06, 1.0, -0.42);
  for (let i = 0; i < 4; i++) {
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.07 - i * 0.008, 0.035, 0.62 + i * 0.08), tailMat);
    tail.position.set((i % 2 ? -1 : 1) * 0.04, 0.02 * i, -0.32 - i * 0.22);
    tail.rotation.x = -0.2 - i * 0.12;
    tail.rotation.y = (i % 2 ? -1 : 1) * 0.15;
    leftLeg.add(tail);
  }
  phoenixRoot.add(leftLeg);

  const rightLeg = new THREE.Group();
  rightLeg.position.set(0.06, 1.0, -0.42);
  for (let i = 0; i < 4; i++) {
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.07 - i * 0.008, 0.035, 0.68 + i * 0.1), tailMat);
    tail.position.set((i % 2 ? 1 : -1) * 0.04, 0.02 * i, -0.36 - i * 0.24);
    tail.rotation.x = -0.25 - i * 0.14;
    tail.rotation.y = (i % 2 ? 1 : -1) * 0.18;
    rightLeg.add(tail);
  }
  phoenixRoot.add(rightLeg);

  const auraRings = [];
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.58 + i * 0.2, 0.032 + i * 0.012, 10, 36),
      new THREE.MeshBasicMaterial({
        color: i === 0 ? 0xffee88 : i === 1 ? 0xff8800 : 0xff3300,
        transparent: true,
        opacity: 0.48 - i * 0.1,
      })
    );
    if (i === 2) ring.rotation.x = Math.PI / 2.8;
    else ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.1 + i * 0.1;
    phoenixRoot.add(ring);
    auraRings.push(ring);
  }

  const pointLight = new THREE.PointLight(0xff9900, 4.5, 22);
  pointLight.position.set(0, 1.35, 0.25);
  phoenixRoot.add(pointLight);
  const rimLight = new THREE.PointLight(0xff2200, 2.4, 14);
  rimLight.position.set(0, 0.6, -0.4);
  phoenixRoot.add(rimLight);
  const coreLight = new THREE.PointLight(0xffeeaa, 2.8, 10);
  coreLight.position.copy(core.position);
  phoenixRoot.add(coreLight);

  const haloMesh = new THREE.Mesh(
    new THREE.TorusGeometry(1.2, 0.045, 10, 56),
    new THREE.MeshBasicMaterial({ color: 0xffee88, transparent: true, opacity: 0.38 })
  );
  haloMesh.rotation.x = Math.PI / 2.15;
  haloMesh.position.set(0, 1.38, -0.12);
  phoenixRoot.add(haloMesh);

  const coreGlow = new THREE.Mesh(
    new THREE.SphereGeometry(0.26, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xffcc44, transparent: true, opacity: 0.32 })
  );
  coreGlow.position.copy(core.position);
  phoenixRoot.add(coreGlow);

  const wingSparks = [];
  for (const side of [-1, 1]) {
    for (let i = 0; i < 5; i++) {
      const spark = new THREE.Mesh(
        new THREE.SphereGeometry(0.035 + i * 0.01, 6, 6),
        new THREE.MeshBasicMaterial({
          color: i % 2 ? 0xffffff : 0xff8800,
          transparent: true,
          opacity: 0.85 - i * 0.08,
        })
      );
      spark.position.set(side * (0.85 + i * 0.24), 1.28 - i * 0.04, -0.08 - i * 0.1);
      phoenixRoot.add(spark);
      wingSparks.push({ mesh: spark, side, index: i });
    }
  }

  const jetFlames = [];
  for (let i = 0; i < 4; i++) {
    const jet = new THREE.Mesh(
      new THREE.ConeGeometry(0.09 - i * 0.012, 0.38 + i * 0.1, 7),
      new THREE.MeshBasicMaterial({ color: i < 2 ? 0xffaa00 : 0xff4400, transparent: true, opacity: 0.72 })
    );
    jet.rotation.x = Math.PI;
    jet.position.set((i - 1.5) * 0.11, 0.9, -0.2 - i * 0.04);
    phoenixRoot.add(jet);
    jetFlames.push(jet);
  }

  for (const side of [-1, 1]) {
    const talon = new THREE.Group();
    talon.position.set(side * 0.14, 0.9, 0.18);
    for (let t = 0; t < 3; t++) {
      const claw = new THREE.Mesh(
        new THREE.ConeGeometry(0.022, 0.14, 4),
        new THREE.MeshStandardMaterial({ color: 0xffdd66, emissive: 0xff9900, emissiveIntensity: 0.75, metalness: 0.55 })
      );
      claw.rotation.x = 0.75;
      claw.rotation.y = (t - 1) * 0.38;
      claw.position.set((t - 1) * 0.045, -0.05, t * 0.025);
      talon.add(claw);
    }
    phoenixRoot.add(talon);
  }

  const solarDisc = new THREE.Mesh(
    new THREE.CircleGeometry(1.45, 36),
    new THREE.MeshBasicMaterial({ color: 0xffee66, transparent: true, opacity: 0.26, side: THREE.DoubleSide })
  );
  solarDisc.position.set(0, 1.38, -0.62);
  phoenixRoot.add(solarDisc);

  const solarCore = new THREE.Mesh(
    new THREE.CircleGeometry(0.62, 28),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.42, side: THREE.DoubleSide })
  );
  solarCore.position.set(0, 1.38, -0.61);
  phoenixRoot.add(solarCore);

  const orbitEmbers = [];
  for (let i = 0; i < 10; i++) {
    const ember = new THREE.Mesh(
      new THREE.SphereGeometry(0.055 + (i % 3) * 0.018, 6, 6),
      new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0xffffff : i % 3 === 1 ? 0xffcc00 : 0xff5500,
        transparent: true,
        opacity: 0.92,
      })
    );
    phoenixRoot.add(ember);
    orbitEmbers.push({
      mesh: ember,
      angle: (i / 10) * Math.PI * 2,
      radius: 1.15 + (i % 2) * 0.35,
      speed: 0.9 + i * 0.12,
      yOff: 0.75 + (i % 4) * 0.28,
    });
  }

  const shockwave = new THREE.Mesh(
    new THREE.RingGeometry(0.4, 0.72, 40),
    new THREE.MeshBasicMaterial({ color: 0xffcc44, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
  );
  shockwave.rotation.x = -Math.PI / 2;
  shockwave.position.y = 0.08;
  phoenixRoot.add(shockwave);

  const barW = 2.2;
  const barH = 0.16;
  const barY = 2.15;
  const barBg = new THREE.Mesh(
    new THREE.PlaneGeometry(barW, barH),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.6 })
  );
  barBg.position.y = barY;
  group.add(barBg);

  const barFill = new THREE.Mesh(
    new THREE.PlaneGeometry(barW - 0.08, barH - 0.03),
    new THREE.MeshBasicMaterial({ color: 0xff8800 })
  );
  barFill.position.set(0, barY, 0.01);
  group.add(barFill);

  return {
    group, phoenixRoot, body, head, core, coreMat, coreGlow, haloMesh, crestParts, solarDisc, solarCore, shockwave,
    leftLeg, rightLeg, leftArm, rightArm, leftWingTiers: leftWing.tiers, rightWingTiers: rightWing.tiers,
    gun, barFill, bodyMat, headMat, auraRings, pointLight, rimLight, coreLight, flamePlumes, wingSparks, jetFlames, orbitEmbers,
    aimHeight: 1.5, baseHeadZ: 0.38,
  };
}

function spawnPhoenixBurst(x, y, z, count = 10, spread = 2.5) {
  if (particles.length >= MAX_PARTICLES * 0.9) return;
  const budget = MAX_PARTICLES - particles.length;
  count = Math.min(count, Math.floor(budget / 2));
  const colors = [0xffcc00, 0xff6600, 0xff3300, 0xffee88];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * spread;
    spawnParticles(
      x + Math.cos(angle) * r,
      y + Math.random() * 1.2,
      z + Math.sin(angle) * r,
      colors[i % colors.length],
      2
    );
  }
}

function spawnSummonedBoss() {
  const diff = getLevelDifficulty(state.wave);
  const tier = Math.max(0, state.wave - 1);
  const layer = state.currentLayer;
  const forward = _v3a.set(-Math.sin(yaw), 0, -Math.cos(yaw));
  const resolved = resolveMovement(
    { x: camera.position.x, y: LAYER_Y[layer], z: camera.position.z },
    forward.x * 7, 0, forward.z * 7,
    layer
  );
  const x = resolved.x;
  const z = resolved.z;
  const floorY = LAYER_Y[layer];

  const model = buildPhoenixModel();
  const {
    group, phoenixRoot, body, head, core, coreMat, coreGlow, haloMesh, crestParts, solarDisc, solarCore, shockwave,
    leftLeg, rightLeg, leftArm, rightArm, leftWingTiers, rightWingTiers, gun, barFill,
    bodyMat, headMat, auraRings, pointLight, rimLight, coreLight, flamePlumes, wingSparks, jetFlames, orbitEmbers,
    aimHeight, baseHeadZ,
  } = model;

  group.position.set(x, floorY, z);
  group.scale.setScalar(SUMMON_BOSS_SCALE);

  const nameSprite = createPhoenixNameSprite(SUMMON_BOSS_NAME);
  group.add(nameSprite);
  scene.add(group);

  const hp = Math.floor((diff.hp * 22 + tier * 200) * BOSS_POWER_MULT * 1.8);
  const summon = {
    group, phoenixRoot, body, head, core, coreMat, coreGlow, haloMesh, crestParts, solarDisc, solarCore, shockwave, barFill,
    leftLeg, rightLeg, leftArm, rightArm, leftWingTiers, rightWingTiers, gun,
    bodyMat, headMat, auraRings, pointLight, rimLight, coreLight, flamePlumes, wingSparks, jetFlames, orbitEmbers, nameSprite,
    aimHeight, baseHeadZ,
    name: SUMMON_BOSS_NAME,
    hp,
    maxHp: hp,
    alive: true,
    layer,
    isSummon: true,
    isPhoenix: true,
    auraPhase: 0,
    auraTimer: 0,
    shockPhase: 0,
    shootTimer: 200,
    shootCooldown: PHOENIX_FIRE_RATE,
    manualFireRate: PHOENIX_MANUAL_FIRE_RATE,
    lastManualShot: 0,
    speed: BOSS_SPEED * 0.95,
    damage: PHOENIX_DAMAGE,
    range: PHOENIX_RANGE,
    spread: 0.004,
    walkPhase: 0,
    gunRecoil: 0,
    muzzleFlash: 0,
    prevX: x,
    prevZ: z,
    lastHit: 0,
  };

  summons.push(summon);

  spawnPhoenixRitual(x, floorY, z);
  flashScreen(0xffaa00, 420);
  for (let ring = 0; ring < 3; ring++) {
    for (let i = 0; i < 48; i++) {
      const angle = (i / 48) * Math.PI * 2 + ring * 0.4;
      const rise = ring * 1.4 + (i / 48) * 3.8;
      spawnParticles(
        x + Math.cos(angle) * (3.8 - rise * 0.28),
        floorY + rise,
        z + Math.sin(angle) * (3.8 - rise * 0.28),
        ring === 0 ? 0xffffff : ring === 1 ? 0xffcc00 : 0xff4400,
        10 + ring * 2
      );
    }
  }
  spawnPhoenixBurst(x, floorY + aimHeight, z, 48, 5);
  spawnParticles(x, floorY + aimHeight + 3, z, 0xffffff, 36);

  return summon;
}

function getRideablePhoenix() {
  return summons.find(s => s.alive && s.isPhoenix) ?? null;
}

function hasActiveSummon() {
  for (const s of summons) {
    if (s.alive) return true;
  }
  return false;
}

function getPhoenixMountDistance(phoenix = getRideablePhoenix()) {
  if (!phoenix?.group) return Infinity;
  return Math.hypot(
    camera.position.x - phoenix.group.position.x,
    camera.position.z - phoenix.group.position.z
  );
}

function ensureRiderVisual(s) {
  if (!s.phoenixRoot) return;
  if (!s.riderMesh) {
    s.riderMesh = new THREE.Group();
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.14, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x88ddff, transparent: true, opacity: 0.75 })
    );
    glow.position.set(0, 1.38, -0.22);
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95 })
    );
    core.position.set(0, 1.38, -0.22);
    s.riderMesh.add(glow, core);
    s.phoenixRoot.add(s.riderMesh);
  }
  s.riderMesh.visible = true;
}

function syncPlayerOnPhoenix(s) {
  const tx = s.group.position.x;
  const tz = s.group.position.z;
  const floorY = LAYER_Y[s.layer];
  const aimY = getUnitAimY(s, floorY);
  const scale = s.group.scale.y;
  const backOff = 0.62 * scale;
  camera.position.set(
    tx - Math.sin(yaw) * backOff,
    aimY + PHOENIX_RIDE_CAM_HEIGHT * scale,
    tz - Math.cos(yaw) * backOff
  );
  state.currentLayer = s.layer;
  state.standLayer = s.layer;
  state.grounded = true;
  state.verticalVelocity = 0;
}

function moveRiddenPhoenix(s, dt) {
  if (!state.mouseLocked) return false;

  const sprint = keys['ShiftLeft'] || keys['ShiftRight'];
  let moveSpeed = s.speed * PHOENIX_RIDE_SPEED_MULT;
  if (sprint) moveSpeed *= 1.7;
  if (state.boostActive) moveSpeed *= 2.1;

  _v3a.set(-Math.sin(yaw), 0, -Math.cos(yaw));
  _v3b.set(Math.cos(yaw), 0, -Math.sin(yaw));
  let mx = 0;
  let mz = 0;
  if (keys['KeyW'] || keys['ArrowUp']) { mx += _v3a.x; mz += _v3a.z; }
  if (keys['KeyS'] || keys['ArrowDown']) { mx -= _v3a.x; mz -= _v3a.z; }
  if (keys['KeyA'] || keys['ArrowLeft']) { mx -= _v3b.x; mz -= _v3b.z; }
  if (keys['KeyD'] || keys['ArrowRight']) { mx += _v3b.x; mz += _v3b.z; }

  const len = Math.hypot(mx, mz);
  if (len < 0.001) return false;

  const tx = s.group.position.x;
  const tz = s.group.position.z;
  const targetX = tx + (mx / len) * 40;
  const targetZ = tz + (mz / len) * 40;
  return moveTeammateToward(s, targetX, targetZ, moveSpeed, dt);
}

function phoenixCombat(s, aimY, tx, tz, dt) {
  const target = findNearestEnemyForAlly(s, s.range, { skipLoS: true });
  if (!target) return false;

  if (!s.isRidden) s.group.lookAt(target.x, target.y, target.z);
  s.shootTimer -= dt;
  if (s.shootTimer > 0 || target.dist >= s.range) return false;

  s.shootTimer = s.shootCooldown + Math.random() * 120;
  _v3c.set(target.x - tx, target.y - aimY, target.z - tz).normalize();
  const muzzleX = tx + _v3c.x * 1.8;
  const muzzleY = aimY + _v3c.y * 0.2 + 0.35;
  const muzzleZ = tz + _v3c.z * 1.8;
  phoenixLaunchFireball(s, muzzleX, muzzleY, muzzleZ, _v3c, s.spread ?? 0.004);
  return true;
}

function mountPhoenix(s) {
  state.ridingPhoenix = s;
  s.isRidden = true;
  ensureRiderVisual(s);
  if (state.stealthActive) {
    state.stealthActive = false;
    state.stealthTimer = 0;
    state.stealthCooldown = WEAPONS.stealth.cooldown;
    setStealthVisual(false);
  }
  if (state.flightActive) {
    state.flightActive = false;
    state.flightTimer = 0;
    state.flightCooldown = Math.max(state.flightCooldown, FLIGHT_COOLDOWN * 0.5);
  }
  syncPlayerOnPhoenix(s);
  spawnPhoenixBurst(s.group.position.x, getUnitAimY(s), s.group.position.z, 24, 2.8);
  flashScreen(0xffcc44, 180);
  sfxMount();
  showWaveBanner('骑乘凤凰！WASD 驾驭 · 左键喷火 · F 下马', 2600);
  updateHUD();
}

function dismountPhoenix() {
  const s = state.ridingPhoenix;
  if (!s) return;
  s.isRidden = false;
  if (s.riderMesh) s.riderMesh.visible = false;
  state.ridingPhoenix = null;

  const tx = s.group.position.x;
  const tz = s.group.position.z;
  const layer = s.layer;
  const rightX = Math.cos(yaw);
  const rightZ = -Math.sin(yaw);
  const sideX = tx + rightX * 4;
  const sideZ = tz + rightZ * 4;
  const resolved = resolveMovement(
    { x: tx, y: LAYER_Y[layer] + s.aimHeight, z: tz },
    sideX - tx, 0, sideZ - tz,
    layer
  );
  camera.position.x = resolved.x;
  camera.position.z = resolved.z;
  camera.position.y = LAYER_Y[layer] + PLAYER_EYE_OFFSET;
  state.currentLayer = layer;
  state.standLayer = layer;
  spawnParticles(resolved.x, LAYER_Y[layer] + 0.5, resolved.z, 0xffaa00, 10);
  sfxDismount();
  showWaveBanner('已下马', 1000);
  updateHUD();
}

function tryTogglePhoenixMount() {
  if (!state.playing || state.playerDown) return;
  const now = performance.now();
  if (now - state.lastMountToggle < PHOENIX_MOUNT_COOLDOWN) return;
  state.lastMountToggle = now;

  if (state.ridingPhoenix?.alive) {
    dismountPhoenix();
    return;
  }

  const phoenix = getRideablePhoenix();
  if (!phoenix) {
    showWaveBanner('先按 3 召唤凤凰', 1400);
    return;
  }

  const dist = getPhoenixMountDistance(phoenix);
  if (dist > PHOENIX_MOUNT_RANGE) {
    showWaveBanner('靠近凤凰后按 F 骑乘', 1400);
    return;
  }

  mountPhoenix(phoenix);
}

function updateSummons(dt) {
  const now = performance.now();
  const px = camera.position.x;
  const pz = camera.position.z;
  const playerLayer = state.currentLayer;

  for (let i = summons.length - 1; i >= 0; i--) {
    const s = summons[i];
    if (!s.alive || !s.group) {
      summons.splice(i, 1);
      continue;
    }

    if (s.hp < s.maxHp) {
      s.hp = Math.min(s.maxHp, s.hp + 80 * (dt / 1000));
    }

    const tx = s.group.position.x;
    const tz = s.group.position.z;
    const floorY = LAYER_Y[s.layer];
    const aimY = getUnitAimY(s, floorY);
    let moved = false;
    let stepDist = 0;

    if (s.isRidden) {
      moved = moveRiddenPhoenix(s, dt);
      const lookX = s.group.position.x - Math.sin(yaw) * 6;
      const lookZ = s.group.position.z - Math.cos(yaw) * 6;
      s.group.lookAt(lookX, aimY, lookZ);
      phoenixCombat(s, aimY, s.group.position.x, s.group.position.z, dt);
      syncPlayerOnPhoenix(s);
      stepDist = Math.hypot(s.group.position.x - s.prevX, s.group.position.z - s.prevZ);
      s.prevX = s.group.position.x;
      s.prevZ = s.group.position.z;
    } else if (s.layer !== playerLayer) {
      const ramp = getRampTarget(s.layer, playerLayer, tx, tz);
      const destX = ramp ? ramp.x : px;
      const destZ = ramp ? ramp.z : pz;
      moved = moveTeammateToward(s, destX, destZ, s.speed * 1.1, dt);
      s.group.lookAt(destX, aimY, destZ);
      phoenixCombat(s, aimY, tx, tz, dt);
      stepDist = Math.hypot(s.group.position.x - s.prevX, s.group.position.z - s.prevZ);
      s.prevX = s.group.position.x;
      s.prevZ = s.group.position.z;
    } else {
      const target = findNearestEnemyForAlly(s, s.range);

      if (target) {
        if (target.dist > 8) {
          moved = moveTeammateToward(s, target.x, target.z, s.speed, dt);
        } else if (target.dist < 5) {
          moved = moveTeammateToward(s, tx + (tx - target.x), tz + (tz - target.z), s.speed * 0.7, dt);
        }
        phoenixCombat(s, aimY, tx, tz, dt);
      } else {
        const formX = px - Math.sin(yaw) * 5;
        const formZ = pz - Math.cos(yaw) * 5;
        if (Math.hypot(formX - tx, formZ - tz) > 3) {
          moved = moveTeammateToward(s, formX, formZ, s.speed * 0.75, dt);
        }
        s.group.lookAt(px, LAYER_Y[playerLayer] + s.aimHeight, pz);
      }

      stepDist = Math.hypot(s.group.position.x - s.prevX, s.group.position.z - s.prevZ);
      s.velX = s.group.position.x - s.prevX;
      s.velZ = s.group.position.z - s.prevZ;
      s.prevX = s.group.position.x;
      s.prevZ = s.group.position.z;
    }

    if (s.isPhoenix) {
      s.walkPhase += dt * (moved || stepDist > 0.001 ? 0.016 : 0.008);
      const flap = Math.sin(s.walkPhase) * (moved || stepDist > 0.001 ? 0.82 : 0.48);
      const shootFlare = s.muzzleFlash > 0 ? (s.muzzleFlash / 120) * 0.65 : 0;
      s.leftArm.rotation.z = 0.1 + flap + shootFlare;
      s.rightArm.rotation.z = -0.1 - flap - shootFlare;
      if (s.leftWingTiers) {
        s.leftWingTiers[0].rotation.z = -0.38 + flap * 0.25;
        s.leftWingTiers[1].rotation.z = -0.58 + flap * 0.42;
        s.leftWingTiers[2].rotation.z = -0.72 + flap * 0.62;
        if (s.leftWingTiers[3]) s.leftWingTiers[3].rotation.z = -0.88 + flap * 0.78;
      }
      if (s.rightWingTiers) {
        s.rightWingTiers[0].rotation.z = 0.38 - flap * 0.25;
        s.rightWingTiers[1].rotation.z = 0.58 - flap * 0.42;
        s.rightWingTiers[2].rotation.z = 0.72 - flap * 0.62;
        if (s.rightWingTiers[3]) s.rightWingTiers[3].rotation.z = 0.88 - flap * 0.78;
      }
      const tailSway = Math.sin(s.walkPhase * 0.65) * 0.28;
      s.leftLeg.rotation.x = tailSway;
      s.leftLeg.rotation.y = Math.sin(s.walkPhase * 0.5) * 0.16;
      s.rightLeg.rotation.x = tailSway + 0.18;
      s.rightLeg.rotation.y = -Math.sin(s.walkPhase * 0.5 + 0.8) * 0.18;

      const hover = Math.sin(now * 0.0045) * 0.32;
      if (s.phoenixRoot) {
        s.phoenixRoot.position.y = hover;
        const bank = THREE.MathUtils.clamp((s.group.position.x - s.prevX) * 2.2, -0.22, 0.22);
        const lean = THREE.MathUtils.clamp((s.group.position.z - s.prevZ) * 1.6, -0.16, 0.16);
        s.phoenixRoot.rotation.z += (bank - s.phoenixRoot.rotation.z) * 0.12;
        s.phoenixRoot.rotation.x += (lean - s.phoenixRoot.rotation.x) * 0.1;
      }
      s.auraPhase += dt * 0.0028;
      if (s.auraRings) {
        s.auraRings[0].rotation.z = s.auraPhase;
        s.auraRings[1].rotation.z = -s.auraPhase * 1.45;
        if (s.auraRings[2]) {
          s.auraRings[2].rotation.y = s.auraPhase * 1.2;
          s.auraRings[2].material.opacity = 0.22 + Math.sin(now * 0.007) * 0.1;
        }
        s.auraRings[0].material.opacity = 0.42 + Math.sin(now * 0.005) * 0.14;
        s.auraRings[1].material.opacity = 0.32 + Math.cos(now * 0.004) * 0.12;
      }
      if (s.flamePlumes) {
        for (let pi = 0; pi < s.flamePlumes.length; pi++) {
          const plume = s.flamePlumes[pi];
          plume.rotation.x = -0.35 + Math.sin(s.walkPhase * 1.2 + pi) * 0.18 + shootFlare * 0.3;
          plume.material.opacity = 0.55 + Math.sin(now * 0.012 + pi) * 0.25 + shootFlare * 0.35;
          plume.scale.y = 1 + Math.sin(now * 0.01 + pi * 0.7) * 0.25 + shootFlare * 0.5;
        }
      }
      if (s.coreMat) {
        s.coreMat.emissiveIntensity = 1.5 + Math.sin(now * 0.009) * 0.65 + shootFlare * 1.3;
      }
      if (s.coreGlow) {
        const corePulse = 1 + Math.sin(now * 0.011) * 0.18 + shootFlare * 0.35;
        s.coreGlow.scale.setScalar(corePulse);
        s.coreGlow.material.opacity = 0.28 + Math.sin(now * 0.013) * 0.12 + shootFlare * 0.25;
      }
      if (s.haloMesh) {
        s.haloMesh.rotation.z = s.auraPhase * 1.6;
        s.haloMesh.material.opacity = 0.32 + Math.sin(now * 0.004) * 0.14 + shootFlare * 0.2;
        s.haloMesh.scale.setScalar(1 + Math.sin(now * 0.005) * 0.06);
      }
      if (s.crestParts) {
        for (let ci = 0; ci < s.crestParts.length; ci++) {
          s.crestParts[ci].rotation.x = -0.55 - ci * 0.08 + Math.sin(now * 0.008 + ci) * 0.08 + shootFlare * 0.15;
        }
      }
      if (s.wingSparks) {
        for (const sp of s.wingSparks) {
          const wobble = Math.sin(now * 0.014 + sp.index + sp.side) * 0.12;
          sp.mesh.position.y = 1.28 - sp.index * 0.04 + wobble;
          sp.mesh.material.opacity = 0.55 + Math.sin(now * 0.018 + sp.index) * 0.35 + shootFlare * 0.4;
        }
      }
      if (s.jetFlames) {
        for (let ji = 0; ji < s.jetFlames.length; ji++) {
          const jet = s.jetFlames[ji];
          jet.scale.y = 1 + Math.sin(now * 0.016 + ji * 0.9) * 0.35 + (moved ? 0.25 : 0) + shootFlare * 0.6;
          jet.material.opacity = 0.55 + Math.sin(now * 0.02 + ji) * 0.25;
        }
      }
      if (s.coreLight) {
        s.coreLight.intensity = 2.4 + Math.sin(now * 0.01) * 1.2 + shootFlare * 2.5;
      }
      if (s.pointLight) {
        s.pointLight.intensity = 3.2 + Math.sin(now * 0.006) * 1.4 + shootFlare * 2.5;
      }
      if (s.rimLight) {
        s.rimLight.intensity = 1.6 + Math.sin(now * 0.008 + 1) * 0.7 + shootFlare * 1.2;
      }
      if (s.solarDisc) {
        s.solarDisc.rotation.z = s.auraPhase * 0.85;
        s.solarDisc.material.opacity = 0.2 + Math.sin(now * 0.004) * 0.14 + shootFlare * 0.25;
      }
      if (s.solarCore) {
        const coreScale = 1 + Math.sin(now * 0.009) * 0.18 + shootFlare * 0.35;
        s.solarCore.scale.set(coreScale, coreScale, 1);
        s.solarCore.material.opacity = 0.35 + Math.sin(now * 0.011) * 0.15 + shootFlare * 0.3;
      }
      if (s.orbitEmbers) {
        for (const em of s.orbitEmbers) {
          em.angle += dt * 0.0011 * em.speed;
          em.mesh.position.set(
            Math.cos(em.angle) * em.radius,
            em.yOff + hover + Math.sin(em.angle * 2.2) * 0.18,
            Math.sin(em.angle) * em.radius * 0.65 - 0.25
          );
          em.mesh.material.opacity = 0.65 + Math.sin(now * 0.015 + em.angle) * 0.3 + shootFlare * 0.35;
        }
      }
      s.shockPhase = (s.shockPhase + dt * 0.0018) % 1;
      if (s.shockwave) {
        const wave = s.shockPhase;
        s.shockwave.scale.set(0.8 + wave * 2.8, 0.8 + wave * 2.8, 1);
        s.shockwave.material.opacity = 0.5 * (1 - wave);
      }

      s.auraTimer -= dt;
      if (s.auraTimer <= 0) {
        s.auraTimer = 80 + Math.random() * 80;
        const ax = s.group.position.x + (Math.random() - 0.5) * 2.5;
        const az = s.group.position.z + (Math.random() - 0.5) * 2.5;
        spawnParticles(ax, aimY + hover + Math.random(), az, Math.random() < 0.4 ? 0xffffff : 0xff8800, 5);
      }

      if (moved || stepDist > 0.001) {
        if (Math.random() < dt * 0.014) {
          spawnParticles(tx, floorY + 0.15, tz, 0xff4400, 4);
          spawnParticles(tx + (Math.random() - 0.5) * 1.2, floorY + 0.4, tz + (Math.random() - 0.5) * 1.2, 0xffcc00, 3);
          spawnParticles(tx, floorY + 0.8, tz, 0xffffff, 2);
        }
      }
    } else if (moved || stepDist > 0.001) {
      s.walkPhase += dt * 0.008;
      const swing = Math.sin(s.walkPhase) * 0.45;
      s.leftLeg.rotation.x = swing;
      s.rightLeg.rotation.x = -swing;
    }

    const hitFlash = now - s.lastHit < 140;
    if (s.isPhoenix) {
      s.bodyMat.emissive.setHex(hitFlash ? 0xffffff : 0xff3300);
      s.bodyMat.emissiveIntensity = hitFlash ? 1.2 : 0.65 + Math.sin(now * 0.007) * 0.2;
      s.headMat.emissiveIntensity = hitFlash ? 1.1 : 0.75 + Math.sin(now * 0.009) * 0.25;
    } else {
      s.bodyMat.emissive.setHex(hitFlash ? 0xffff88 : 0xff4400);
      s.bodyMat.emissiveIntensity = hitFlash ? 0.95 : 0.45 + Math.sin(now * 0.006) * 0.15;
    }

    if (s.nameSprite) {
      s.nameSprite.lookAt(camera.position);
      s.nameSprite.position.y = 2.65 + Math.sin(now * 0.003) * 0.08;
    }

    s.gunRecoil *= Math.pow(0.82, dt / 16);
    if (s.isPhoenix && s.head) {
      s.head.position.z = (s.baseHeadZ ?? 0.38) + s.gunRecoil * 0.14;
      if (s.core) s.core.scale.setScalar(1 + s.gunRecoil * 0.18);
    } else {
      s.rightArm.rotation.x = -0.55 + s.gunRecoil;
    }
    if (s.muzzleFlash > 0) s.muzzleFlash = Math.max(0, s.muzzleFlash - dt);

    s.barFill.lookAt(camera.position);
    s.barFill.scale.x = Math.max(0.05, s.hp / s.maxHp);
    s.barFill.material.color.setHex(s.hp / s.maxHp > 0.5 ? 0xff8800 : s.hp / s.maxHp > 0.25 ? 0xffaa00 : 0xff4400);

    if (s.hp <= 0) {
      killSummon(s);
      summons.splice(i, 1);
    }
  }
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
  resetWaveConfigCache();
  invalidateShootTargets();

  const cfg = getWaveConfig(n);
  const count = cfg.minionsPerWave;
  state.waveMinionsSpawned = count;
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
  sfxBossSpawn();
  updateHUD();
}

function formatCooldownSeconds(ms) {
  return `${(ms / 1000).toFixed(1)}s`;
}

function getUnitAimY(unit, floorY = LAYER_Y[unit.layer]) {
  const scale = unit.group?.scale?.y ?? 1;
  return floorY + unit.aimHeight * scale;
}

function removeBullet(list, index, bullet) {
  if (bullet.mesh) scene.remove(bullet.mesh);
  list.splice(index, 1);
}

function getSightBlockers(layer) {
  if (sightBlockerCache[layer]) return sightBlockerCache[layer];
  const meshes = [];
  for (const c of colliders) {
    if (c.h < 0.4) continue;
    if (c.layer >= 0 && c.layer !== layer) continue;
    meshes.push(c.mesh);
  }
  sightBlockerCache[layer] = meshes;
  return meshes;
}

function getWallMeshes(layer) {
  if (wallMeshCache[layer]) return wallMeshCache[layer];
  const meshes = colliders
    .filter(c => c.layer < 0 || c.layer === layer)
    .map(c => c.mesh);
  wallMeshCache[layer] = meshes;
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

  _v3a.set(dx / dist, dy / dist, dz / dist);
  raycaster.set(_v3b.set(ex, aimY, ez), _v3a);
  raycaster.far = dist - 0.4;
  return raycaster.intersectObjects(getSightBlockers(e.layer), false).length === 0;
}

function getEnemyTargets(playerLayer) {
  const targets = [];
  if (!state.playerDown) {
    targets.push({
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
      layer: playerLayer,
      isPlayer: true,
    });
  }

  for (const t of teammates) {
    if (!t.alive || t.layer !== playerLayer) continue;
    targets.push({
      x: t.group.position.x,
      y: getUnitAimY(t),
      z: t.group.position.z,
      layer: t.layer,
      isPlayer: false,
      teammate: t,
    });
  }

  for (const s of summons) {
    if (!s.alive || s.layer !== playerLayer) continue;
    targets.push({
      x: s.group.position.x,
      y: getUnitAimY(s),
      z: s.group.position.z,
      layer: s.layer,
      isPlayer: false,
      summon: s,
    });
  }
  return targets;
}

function findNearestTargetFromList(targets, ex, ez) {
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

function findNearestEnemyForAlly(t, maxRange, opts = {}) {
  const range = maxRange ?? t.range ?? 42;
  const rangeSq = range * range;
  const skipLoS = !!opts.skipLoS || enemies.length > 50;
  let best = null;
  let bestScore = Infinity;
  const tx = t.group.position.x;
  const tz = t.group.position.z;
  const aimY = getUnitAimY(t);

  if (skipLoS) {
    for (const e of enemies) {
      if (!e.alive || e.layer !== t.layer) continue;
      const ex = e.group.position.x;
      const ez = e.group.position.z;
      const dx = ex - tx;
      const dz = ez - tz;
      const distSq = dx * dx + dz * dz;
      if (distSq > rangeSq) continue;
      const dist = Math.sqrt(distSq);
      const score = dist - (e.isBoss ? 20 : 0);
      if (score < bestScore) {
        bestScore = score;
        best = { enemy: e, x: ex, y: getUnitAimY(e), z: ez, dist };
      }
    }
    return best;
  }

  const blockers = getSightBlockers(t.layer);
  for (const e of enemies) {
    if (!e.alive || e.layer !== t.layer) continue;
    const ex = e.group.position.x;
    const ez = e.group.position.z;
    const ey = getUnitAimY(e);
    const dx = ex - tx;
    const dz = ez - tz;
    const distSq = dx * dx + dz * dz;
    if (distSq > rangeSq) continue;
    const dist = Math.sqrt(distSq);
    const dy = ey - aimY;
    const sightDist = Math.hypot(dx, dy, dz);
    if (sightDist > 1.2) {
      _v3a.set(dx / sightDist, dy / sightDist, dz / sightDist);
      raycaster.set(_v3b.set(tx, aimY, tz), _v3a);
      raycaster.far = sightDist - 0.4;
      if (raycaster.intersectObjects(blockers, false).length > 0) continue;
    }
    const score = dist - (e.isBoss ? 20 : 0);
    if (score < bestScore) {
      bestScore = score;
      best = { enemy: e, x: ex, y: ey, z: ez, dist };
    }
  }
  return best;
}

function phoenixLaunchFireball(s, muzzleX, muzzleY, muzzleZ, dir, spread = 0) {
  _v3b.copy(dir);
  if (spread > 0) {
    _v3b.x += (Math.random() - 0.5) * spread;
    _v3b.y += (Math.random() - 0.5) * spread;
    _v3b.z += (Math.random() - 0.5) * spread;
    _v3b.normalize();
  }
  s.gunRecoil = 1.4;
  s.muzzleFlash = 120;
  s.shockPhase = 0;
  spawnPhoenixBurst(muzzleX, muzzleY, muzzleZ, 24, 2.2);
  if (s.isRidden) flashScreen(0xffee88, 55);
  else flashScreen(0xffee88, 80);
  const bulletSpeed = TEAMMATE_BULLET_SPEED * 1.65;
  spawnAllyBullet(
    muzzleX, muzzleY, muzzleZ,
    _v3b.x * bulletSpeed,
    _v3b.y * bulletSpeed,
    _v3b.z * bulletSpeed,
    s.damage,
    s
  );
}

function applyPhoenixSplash(cx, cy, cz, directEnemy, baseDmg, now, owner) {
  return applySplashDamage(cx, cy, cz, directEnemy, baseDmg, now, owner, PHOENIX_SPLASH_RADIUS, 22);
}

function syncTeammateFloor(t) {
  syncUnitFloor(t);
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

function phoenixManualAttack(s) {
  const now = performance.now();
  const fireRate = s.manualFireRate ?? PHOENIX_MANUAL_FIRE_RATE;
  if (now - (s.lastManualShot || 0) < fireRate) return;
  s.lastManualShot = now;

  const floorY = LAYER_Y[s.layer];
  const aimY = getUnitAimY(s, floorY);
  const tx = s.group.position.x;
  const tz = s.group.position.z;
  camera.getWorldDirection(_v3c);
  phoenixLaunchFireball(
    s,
    tx + _v3c.x * 2.8,
    aimY + 1.35 + _v3c.y * 0.5,
    tz + _v3c.z * 2.8,
    _v3c,
    s.spread ?? 0.004
  );
  sfxShootMagma();
}

function spawnAllyBullet(x, y, z, vx, vy, vz, damage, owner = null) {
  let mesh;
  if (owner?.isPhoenix) {
    mesh = new THREE.Group();
    const outer = new THREE.Mesh(
      new THREE.SphereGeometry(0.52, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xff1100, transparent: true, opacity: 0.28 })
    );
    const mid = new THREE.Mesh(
      new THREE.SphereGeometry(0.34, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xff7700, transparent: true, opacity: 0.78 })
    );
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 10, 10),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.98 })
    );
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.44, 0.05, 10, 24),
      new THREE.MeshBasicMaterial({ color: 0xffee44, transparent: true, opacity: 0.8 })
    );
    ring.rotation.x = Math.PI / 2;
    const tail = new THREE.Mesh(
      new THREE.ConeGeometry(0.24, 0.72, 10),
      new THREE.MeshBasicMaterial({ color: 0xff5500, transparent: true, opacity: 0.5 })
    );
    tail.rotation.x = Math.PI / 2;
    tail.position.z = 0.48;
    const tail2 = new THREE.Mesh(
      new THREE.ConeGeometry(0.14, 0.45, 8),
      new THREE.MeshBasicMaterial({ color: 0xffcc00, transparent: true, opacity: 0.4 })
    );
    tail2.rotation.x = Math.PI / 2;
    tail2.position.z = 0.72;
    mesh.add(outer, mid, core, ring, tail, tail2);
    mesh.userData.fireballLayers = [outer, mid, core, ring, tail, tail2];
    const fireLight = new THREE.PointLight(0xff8800, 2.8, 14);
    mesh.add(fireLight);
    mesh.userData.fireLight = fireLight;
  } else {
    const geo = new THREE.CylinderGeometry(0.02, 0.02, 0.18, 5);
    geo.rotateX(Math.PI / 2);
    const mat = new THREE.MeshBasicMaterial({
      color: owner?.isSummon ? 0xff8800 : owner?.profile?.role === '支援' ? 0x58d68d : 0x44aaff,
      transparent: true,
      opacity: 0.95,
    });
    mesh = new THREE.Mesh(geo, mat);
  }
  mesh.position.set(x, y, z);
  const speed = Math.hypot(vx, vy, vz) || 1;
  mesh.lookAt(x + vx / speed, y + vy / speed, z + vz / speed);
  scene.add(mesh);
  allyBullets.push({ x, y, z, vx, vy, vz, life: owner?.isPhoenix ? 2200 : 1800, mesh, damage, owner, isFireball: !!owner?.isPhoenix });
}

function damageEnemy(e, dmg, now, owner = null) {
  e.hp -= dmg;
  e.lastHit = now;
  const ex = e.group.position.x;
  const ey = e.group.position.y + e.aimHeight * e.group.scale.y;
  const ez = e.group.position.z;
  spawnParticles(ex, ey, ez, owner?.isPhoenix ? 0xff6600 : owner?.profile?.role === '支援' ? 0x58d68d : 0x44aaff, owner?.isPhoenix ? 12 : 6);
  if (owner?.isPhoenix) {
    spawnParticles(ex, ey, ez, 0xffcc00, 8);
    spawnPhoenixBurst(ex, ey, ez, 8, 1.4);
  }
  if (e.hp <= 0) killEnemy(e, owner);
}

function downPlayer() {
  if (state.ridingPhoenix) {
    state.ridingPhoenix.isRidden = false;
    state.ridingPhoenix = null;
  }
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
        const dir = _v3c.set(
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
      if (b.isFireball && _animateFrame % 2 === 0 && Math.random() < 0.35) {
        spawnParticles(b.x, b.y, b.z, Math.random() < 0.25 ? 0xffffff : Math.random() < 0.5 ? 0xff6600 : 0xffcc00, 1);
      }
      if (b.isFireball && b.mesh?.userData?.fireLight) {
        b.mesh.userData.fireLight.intensity = 2.4 + Math.sin(now * 0.03) * 1.2;
      }
      if (b.isFireball && b.mesh?.userData?.fireballLayers) {
        const pulse = 1 + Math.sin(now * 0.025) * 0.22;
        b.mesh.userData.fireballLayers[0].scale.setScalar(pulse * 1.2);
        b.mesh.userData.fireballLayers[1].scale.setScalar(pulse);
        b.mesh.userData.fireballLayers[2].scale.setScalar(pulse * 0.82);
        if (b.mesh.userData.fireballLayers[3]) {
          b.mesh.userData.fireballLayers[3].rotation.z += dt * 0.018;
        }
        if (b.mesh.userData.fireballLayers[4]) {
          b.mesh.userData.fireballLayers[4].scale.y = 1 + Math.sin(now * 0.035) * 0.45;
        }
        if (b.mesh.userData.fireballLayers[5]) {
          b.mesh.userData.fireballLayers[5].scale.y = 0.8 + Math.sin(now * 0.04) * 0.3;
        }
        b.mesh.rotation.z += dt * 0.014;
      }
    }

    if (b.life <= 0 || b.y < LAYER_Y[0] - 2) {
      removeBullet(allyBullets, i, b);
      continue;
    }

    let hit = false;
    for (const e of enemies) {
      if (!e.alive) continue;
      const bulletLayer = b.owner?.layer ?? state.currentLayer;
      if (e.layer !== bulletLayer) continue;
      const ex = e.group.position.x;
      const ey = getUnitAimY(e);
      const ez = e.group.position.z;
      const hitRadius = b.isFireball ? (e.isBoss ? 2.2 : 1.85) : (e.isBoss ? 1.1 : 0.75);
      if (Math.hypot(b.x - ex, b.y - ey, b.z - ez) < hitRadius) {
        damageEnemy(e, b.damage, now, b.owner);
        if (b.isFireball) {
          spawnPhoenixBurst(b.x, b.y, b.z, 22, 2.8);
          applyPhoenixSplash(b.x, b.y, b.z, e, b.damage * 0.55, now, b.owner);
          flashScreen(0xff6600, 80);
        }
        hit = true;
        break;
      }
    }

    if (hit) removeBullet(allyBullets, i, b);
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
  const enemyTargets = getEnemyTargets(playerLayer);

  for (const e of enemies) {
    if (!e.alive) continue;

    if (updateEnemyStatusEffects(e, now, dt)) continue;

    const ex = e.group.position.x, ez = e.group.position.z;
    const floorY = LAYER_Y[e.layer];
    const aimY = getUnitAimY(e, floorY);
    const nearest = findNearestTargetFromList(enemyTargets, ex, ez);
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
      e.barFill.lookAt(_barLookAt.set(ex, aimY, ez - 1));
      continue;
    }

    e.group.lookAt(tx, aimY, tz);

    if (_animateFrame % LOS_CHECK_INTERVAL === e.losSlot) {
      e.cachedCanSee = canEnemySeeTarget(e, ex, aimY, ez, tx, ty, tz, targetLayer);
    }
    const canSee = e.cachedCanSee;
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
        const moveSpeed = hunting
          ? MINION_HUNT_SPEED * (0.85 + DIFFICULTY_MULT * 0.1)
          : e.speed;
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
    const shootRange = (e.isBoss ? 42 * BOSS_POWER_MULT : 35) * (0.9 + DIFFICULTY_MULT * 0.12);
    const canShoot = e.isBoss ? e.layer === targetLayer : sameLayer;
    if (canShoot && e.shootTimer <= 0 && dist < shootRange) {
      e.shootTimer = e.shootCooldown + Math.random() * e.shootCooldownRand;
      e.gunRecoil = 1;
      _v3c.set(
        tx - ex + (Math.random() - 0.5) * e.spread,
        ty - aimY + (Math.random() - 0.5) * e.spread,
        tz - ez + (Math.random() - 0.5) * e.spread
      ).normalize();
      const spd = e.bulletSpeed;
      const muzzleX = ex + _v3c.x * 0.5;
      const muzzleY = aimY + _v3c.y * 0.1;
      const muzzleZ = ez + _v3c.z * 0.5;
      spawnEnemyBullet(muzzleX, muzzleY, muzzleZ, _v3c.x * spd, _v3c.y * spd, _v3c.z * spd, e.damage);
    }

    if (e.isBoss || _animateFrame % 3 === e.losSlot) {
      e.barFill.lookAt(camera.position);
    }
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
  sfxLevelComplete();
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
    resetWaveConfigCache();
    _shootFrame = -1;
    clearSummons();
    state.summonUsedThisWave = false;
    if (state.ridingPhoenix) state.ridingPhoenix = null;
    clearEnemies();
    refreshTeammates();
    spawnWave(state.wave);
    sfxWaveStart();
    const cfg = getWaveConfig(state.wave);
    showWaveBanner(getWaveBannerText(state.wave), cfg.isCycleFinale ? 3200 : 2500);
    updateHUD();
  }, 1500);
}

function killEnemy(e, killer = null) {
  e.alive = false;
  invalidateShootTargets();
  scene.remove(e.group);
  const px = e.group.position.x;
  const py = e.group.position.y + e.aimHeight * e.group.scale.y * 0.7;
  const pz = e.group.position.z;
  spawnParticles(px, py, pz, e.isBoss ? 0x8e44ad : 0xc0392b, e.isBoss ? 24 : 12);
  sfxKill(e.isBoss);
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

function getParticleMat(color) {
  let mat = _particleMatCache.get(color);
  if (!mat) {
    mat = new THREE.MeshBasicMaterial({ color, transparent: true });
    _particleMatCache.set(color, mat);
  }
  return mat;
}

function acquireParticle(color) {
  const pooled = _particlePool.pop();
  if (pooled) {
    pooled.mesh.visible = true;
    pooled.mesh.material = getParticleMat(color);
    return pooled;
  }
  const mesh = new THREE.Mesh(_particleGeo, getParticleMat(color));
  scene.add(mesh);
  return { mesh, vx: 0, vy: 0, vz: 0, life: 0 };
}

function releaseParticle(p) {
  p.mesh.visible = false;
  _particlePool.push(p);
}

function clearParticles() {
  for (const p of particles) releaseParticle(p);
  particles.length = 0;
}

function spawnParticles(x, y, z, color, count) {
  const budget = MAX_PARTICLES - particles.length;
  if (budget <= 0) return;
  count = Math.min(count, budget);
  for (let i = 0; i < count; i++) {
    const p = acquireParticle(color);
    p.mesh.position.set(x, y, z);
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 5;
    p.vx = Math.cos(angle) * speed;
    p.vy = 2 + Math.random() * 4;
    p.vz = Math.sin(angle) * speed;
    p.life = 600 + Math.random() * 400;
    p.mesh.scale.setScalar(0.8 + Math.random() * 0.5);
    particles.push(p);
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
      releaseParticle(p);
      particles.splice(i, 1);
    }
  }
}

// ─── Shooting ─────────────────────────────────────────────────────

const raycaster = new THREE.Raycaster();

function getPlayerForward() {
  return _v3a.set(-Math.sin(yaw), 0, -Math.cos(yaw));
}

function meleeSlash() {
  const weapon = getCurrentWeapon();
  const now = performance.now();
  const katanaStats = getKatanaMeleeStats();
  const { fireRate, range, arc, element } = katanaStats;

  if (now - state.lastShot < fireRate) return;

  state.lastShot = now;

  sfxKatanaSlash();

  if (weaponMesh) {
    const baseRot = weaponMesh.rotation.x;
    const baseZ = weaponMesh.position.z;
    weaponMesh.rotation.x = -1.05 - state.katanaTier * 0.04;
    weaponMesh.position.z += 0.14 + state.katanaTier * 0.01;
    setTimeout(() => {
      if (weaponMesh && state.weaponId === 'katana') {
        weaponMesh.rotation.x = baseRot;
        weaponMesh.position.z = baseZ;
      }
    }, 140);
  }

  const forward = getPlayerForward();
  const px = camera.position.x;
  const py = camera.position.y;
  const pz = camera.position.z;
  const reach = 2.2 + state.katanaTier * 0.15;
  const strikeX = px + forward.x * reach;
  const strikeY = py - 0.2;
  const strikeZ = pz + forward.z * reach;

  if (element?.effect) {
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
    _v3a.set(dx / flatDist, 0, dz / flatDist);
    if (forward.dot(_v3a) < cosArc) continue;

    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    const hits = raycaster.intersectObjects([e.body, e.head], false);
    const isHead = hits.length > 0 && hits[0].object === e.head;
    const dmg = getWeaponDamage(WEAPONS.katana, isHead);

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
    if (state.stealthActive) return formatCooldownSeconds(state.stealthTimer);
    if (state.stealthCooldown > 0) return formatCooldownSeconds(state.stealthCooldown);
    return '就绪';
  }
  if (id === 'allyboost') {
    if (state.allyBoostActive) return formatCooldownSeconds(state.allyBoostTimer);
    if (state.allyBoostCooldown > 0) return formatCooldownSeconds(state.allyBoostCooldown);
    return '就绪';
  }
  if (id === 'summonboss') {
    if (hasAlivePhoenix()) return '战斗中';
    if (state.summonUsedThisWave) return '本关已用';
    return '就绪';
  }
  return '';
}

function getAbilityStatusText(weapon) {
  if (weapon.id === 'stealth') {
    if (state.stealthActive) return `隐形中 ${formatCooldownSeconds(state.stealthTimer)}`;
    if (state.stealthCooldown > 0) return `冷却 ${formatCooldownSeconds(state.stealthCooldown)}`;
    return '左键激活隐形';
  }
  if (weapon.id === 'allyboost') {
    if (state.allyBoostActive) return `强化中 ×${ALLY_BOOST_MULT} · ${formatCooldownSeconds(state.allyBoostTimer)}`;
    if (state.allyBoostCooldown > 0) return `冷却 ${formatCooldownSeconds(state.allyBoostCooldown)}`;
    return `左键强化队友 ×${ALLY_BOOST_MULT} · 12 秒`;
  }
  if (weapon.id === 'summonboss') {
    const active = summons.find(s => s.alive);
    if (active) return `${SUMMON_BOSS_NAME} · ${Math.ceil(active.hp)} HP`;
    if (state.summonUsedThisWave) return '本关已召唤 · 下关可再召';
    return `左键召唤 ${SUMMON_BOSS_NAME}（每关 1 次）`;
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
  sfxAllyBoost();
  showWaveBanner(`队友强化！全员 ×${ALLY_BOOST_MULT} 战斗能力 · 12 秒`, 2200);
  updateHUD();
}

function activateSummonBoss() {
  const weapon = WEAPONS.summonboss;
  const now = performance.now();
  if (state.summonUsedThisWave) {
    showWaveBanner('本关已召唤过凤凰', 1400);
    return;
  }
  if (now - state.lastShot < weapon.fireRate) return;
  if (hasAlivePhoenix()) {
    showWaveBanner(`${SUMMON_BOSS_NAME} 已在战斗中`, 1400);
    return;
  }

  state.lastShot = now;
  state.summonUsedThisWave = true;
  spawnSummonedBoss();
  sfxSummonPhoenix();
  showWaveBanner(`🔥 ${SUMMON_BOSS_NAME} 降临！自动攻击 · 按 F 骑乘喷火`, 3200);
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
  sfxStealth();
  spawnParticles(camera.position.x, camera.position.y - 0.5, camera.position.z, 0x88ccff, 20);
  updateHUD();
}

function useAbility(weapon) {
  if (weapon.id === 'stealth') activateStealth();
  if (weapon.id === 'allyboost') activateAllyBoost();
  if (weapon.id === 'summonboss') activateSummonBoss();
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

  if (state.stealthActive || state.allyBoostActive || hasActiveSummon()) {
    const now = performance.now();
    if (now - (state.lastHudUpdate || 0) > 120) {
      state.lastHudUpdate = now;
      updateHUD();
    }
  }
}

function applyMagmaSplash(cx, cy, cz, directEnemy, baseDmg, now) {
  return applySplashDamage(
    cx, cy, cz, directEnemy, baseDmg, now, null,
    WEAPONS.magma.splashRadius ?? MAGMA_SPLASH_RADIUS,
    18
  );
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
  if (weapon.id === 'magma') {
    if (!state.magmaSfxTime || now - state.magmaSfxTime > 140) {
      sfxShootMagma();
      state.magmaSfxTime = now;
    }
  }
  if (!weapon.infinite) updateHUD();

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

  prepareShootTargets(state.currentLayer);
  const wallMeshes = getWallMeshes(state.currentLayer);

  const hitColor = weapon.id === 'magma' ? 0xff5500 : 0xff4444;
  const wallColor = weapon.id === 'magma' ? 0xff8800 : 0xffcc66;
  const gunRange = weapon.range ?? ARENA_SIZE * 4;
  const spreadMult = isAiming() ? AIM_SPREAD_MULT : 1;
  let hitEnemy = false;

  for (let p = 0; p < weapon.pellets; p++) {
    const spreadX = (Math.random() - 0.5) * weapon.spread * spreadMult;
    const spreadY = (Math.random() - 0.5) * weapon.spread * spreadMult;
    _v2a.set(spreadX, spreadY);
    raycaster.setFromCamera(_v2a, camera);
    raycaster.far = gunRange;

    const hits = raycaster.intersectObjects(_shootMeshes, false);
    if (hits.length > 0) {
      const enemy = _shootMeshMap.get(hits[0].object);
      if (enemy) {
        const isHead = hits[0].object === enemy.head;
        const dmg = getWeaponDamage(weapon, isHead);
        enemy.hp -= dmg;
        enemy.lastHit = now;
        spawnParticles(hits[0].point.x, hits[0].point.y, hits[0].point.z, hitColor, weapon.id === 'magma' ? 8 : 4);
        if (weapon.id === 'magma') {
          spawnParticles(hits[0].point.x, hits[0].point.y, hits[0].point.z, 0xffee00, 4);
          applyMagmaSplash(hits[0].point.x, hits[0].point.y, hits[0].point.z, enemy, dmg, now);
        }
        hitEnemy = true;
        if (enemy.hp <= 0) killEnemy(enemy);
      }
    } else {
      const wallHits = raycaster.intersectObjects(wallMeshes, false);
      if (wallHits.length > 0) {
        const pt = wallHits[0].point;
        spawnParticles(pt.x, pt.y, pt.z, wallColor, weapon.id === 'magma' ? 8 : 4);
        if (weapon.id === 'magma') {
          const splashDmg = getWeaponDamage(weapon, false);
          if (applyMagmaSplash(pt.x, pt.y, pt.z, null, splashDmg, now)) hitEnemy = true;
        }
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

function tryEnemyBulletHitAllies(b, index) {
  for (const t of teammates) {
    if (!t.alive) continue;
    const tdx = b.x - t.group.position.x;
    const tdy = b.y - getUnitAimY(t);
    const tdz = b.z - t.group.position.z;
    if (Math.hypot(tdx, tdy, tdz) < 0.65) {
      if (!isInSanctuary(t.group.position.x, t.group.position.z, t.layer)) {
        t.hp -= b.damage;
        t.lastHit = performance.now();
        if (t.hp <= 0) killTeammate(t);
      }
      removeBullet(enemyBullets, index, b);
      return true;
    }
  }

  for (const s of summons) {
    if (!s.alive) continue;
    const sdx = b.x - s.group.position.x;
    const sdy = b.y - getUnitAimY(s);
    const sdz = b.z - s.group.position.z;
    if (Math.hypot(sdx, sdy, sdz) < 1.35) {
      s.hp -= b.damage;
      s.lastHit = performance.now();
      removeBullet(enemyBullets, index, b);
      return true;
    }
  }

  return false;
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
      removeBullet(enemyBullets, i, b);
      continue;
    }

    const dx = b.x - camera.position.x;
    const dy = b.y - camera.position.y;
    const dz = b.z - camera.position.z;
    if (Math.hypot(dx, dy, dz) < 0.6) {
      if (!state.stealthActive && !isPlayerInSanctuary() && !state.playerDown) takeDamage(b.damage);
      removeBullet(enemyBullets, i, b);
      continue;
    }

    if (tryEnemyBulletHitAllies(b, i)) continue;
  }
}

function takeDamage(amount) {
  if (isPlayerInSanctuary() || state.playerDown) return;

  if (state.ridingPhoenix?.alive) {
    const phoenix = state.ridingPhoenix;
    phoenix.hp -= amount;
    phoenix.lastHit = performance.now();
    flashDamageOverlay();
    sfxTakeDamage();
    updateHUD();
    if (phoenix.hp <= 0) killSummon(phoenix);
    return;
  }

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
  flashDamageOverlay();
  sfxTakeDamage();
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
  sfxBoost();
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
  if (!state.playing || state.flightActive || state.flightCooldown > 0 || state.ridingPhoenix) return;
  state.flightActive = true;
  state.flightTimer = FLIGHT_DURATION;
  state.grounded = false;
  state.verticalVelocity = 0;
  sfxFlight();
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

  if (state.ridingPhoenix) {
    if (!state.ridingPhoenix.alive) {
      state.ridingPhoenix = null;
      camera.position.y = LAYER_Y[state.currentLayer] + PLAYER_EYE_OFFSET;
    } else {
      syncPlayerOnPhoenix(state.ridingPhoenix);
      if (mouse.down) phoenixManualAttack(state.ridingPhoenix);
      return;
    }
  }

  const sprint = !state.flightActive && (keys['ShiftLeft'] || keys['ShiftRight']);
  const speedMult = 1 + getEquipmentBonuses().speedMult;
  let moveSpeed = PLAYER_SPEED * speedMult;
  if (state.boostActive) moveSpeed = BOOST_SPEED * speedMult;
  else if (sprint) moveSpeed = SPRINT_SPEED * speedMult;
  if (isAiming()) moveSpeed *= AIM_MOVE_MULT;
  const speed = moveSpeed * (dt / 1000);

  const forward = _v3a.set(-Math.sin(yaw), 0, -Math.cos(yaw));
  const right = _v3b.set(Math.cos(yaw), 0, -Math.sin(yaw));

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

function updateRideHUD() {
  const el = document.getElementById('ride-hud');
  if (!el) return;
  if (!state.playing) {
    el.classList.add('hidden');
    el.classList.remove('active', 'nearby');
    return;
  }
  if (state.ridingPhoenix?.alive) {
    el.classList.remove('hidden', 'nearby');
    el.classList.add('active');
    const p = state.ridingPhoenix;
    el.textContent = `骑乘凤凰 · ${Math.ceil(p.hp)} HP · WASD 驾驭 · 左键喷火 · Shift 加速 · F 下马`;
    return;
  }
  el.classList.remove('active');
  const phoenix = getRideablePhoenix();
  if (phoenix && getPhoenixMountDistance(phoenix) <= PHOENIX_MOUNT_RANGE) {
    el.classList.remove('hidden');
    el.classList.add('nearby');
    el.textContent = `凤凰在附近 · 按 F 骑乘（${Math.ceil(phoenix.hp)} HP）`;
    return;
  }
  el.classList.add('hidden');
  el.classList.remove('nearby');
}

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
  domEl('hp-bar').style.width = `${hpPct}%`;
  domEl('hp-text').textContent = state.playerDown
    ? `倒地 · ${Math.max(0, state.playerReviveTimer / 1000).toFixed(1)}s 后复活`
    : `${Math.max(0, Math.ceil(state.hp))} / ${maxHp}`;
  domEl('ammo-text').textContent = weapon.ability
    ? getAbilityStatusText(weapon)
    : weapon.melee
      ? '∞ 近战'
      : weapon.infinite
        ? '∞ 连射'
        : state.reloading
          ? '换弹中...'
          : `${state.ammo} / ${state.reserve}`;
  domEl('ammo-text').classList.toggle('low', !weapon.melee && !weapon.infinite && !weapon.ability && state.ammo <= 5 && !state.reloading);
  domEl('kill-text').textContent = `击杀 ${state.kills} · 队友 ${aliveTeammates}/${TEAMMATE_COUNT}`;
  const waveCfg = getWaveConfig(state.wave);
  const waveSuffix = state.bossSpawned
    ? ` · Boss ${Math.max(0, state.bossesAlive)}/${BOSSES_PER_WAVE}`
    : ` · 小怪 ${Math.min(state.waveMinionKills, waveCfg.minionsToBoss)}/${waveCfg.minionsToBoss}`;
  domEl('wave-text').textContent = `${getWaveHudText(state.wave)}${waveSuffix}`;
  domEl('layer-text').textContent = `第 ${state.currentLayer + 1} 层`;
  domEl('weapon-hud').innerHTML = weapon.ability
    ? `${weapon.name} · <kbd>左键</kbd> ${weapon.abilityLabel || '使用'} · <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd><kbd>5</kbd> 切换`
    : weapon.id === 'katana'
      ? `${getKatanaDisplayName()} · ${getKatanaElement().desc} · 伤害 ${getKatanaMeleeStats().damage}`
      : weapon.melee
      ? `${weapon.name} · <kbd>左键</kbd> ${weapon.meleeLabel || '攻击'} · <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd><kbd>5</kbd> 换武器`
      : weapon.infinite
        ? weapon.id === 'magma'
          ? `${weapon.name} · 按住左键连射 · 超远射程 · 伤害 ${weapon.damage}`
          : `${weapon.name} · 无限弹药 · 伤害 ${weapon.damage} · <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd><kbd>5</kbd> 换枪`
        : `${weapon.name} · 弹尽自动换弹 · <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd><kbd>5</kbd> 换枪`;

  for (const id of WEAPON_ORDER) {
    const el = document.getElementById(`weapon-slot-${WEAPONS[id].slot}`);
    if (!el) continue;
    el.classList.toggle('active', id === state.weaponId);
    el.classList.toggle('phoenix-slot', id === 'summonboss');
    el.classList.toggle('phoenix-battle', id === 'summonboss' && hasAlivePhoenix());
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
  updateRideHUD();
}

function showHitMarker() {
  sfxHit();
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
  ensureAudio();
  sfxUIClick();
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
  state.summonUsedThisWave = false;
  state.sanctuaryStay = 0;
  state.playerDown = false;
  state.playerReviveTimer = 0;
  state.katanaTier = 0;
  katanaGlowPhase = 0;
  state.ridingPhoenix = null;
  state.lastMountToggle = 0;
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
  clearSummons();
  clearAllyBullets();
  for (const b of enemyBullets) {
    if (b.mesh) scene.remove(b.mesh);
  }
  enemyBullets.length = 0;
  clearParticles();

  spawnTeammates();
  spawnWave(1);
  startBGM();
  sfxWaveStart();
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
  stopBGM();
  sfxGameOver(won);
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
  if (e.code === 'Space' && state.playing && state.grounded && !state.flightActive && !state.ridingPhoenix) {
    state.verticalVelocity = JUMP_VELOCITY;
    state.grounded = false;
    sfxJump();
  }
  if (e.code === 'KeyF' && state.playing && !e.repeat) {
    tryTogglePhoenixMount();
    e.preventDefault();
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
  if (['KeyW','KeyA','KeyS','KeyD','Space','ShiftLeft','ShiftRight','ControlLeft','ControlRight','KeyX','KeyQ','KeyE','KeyF','Digit1','Digit2','Digit3','Digit4','Digit5'].includes(e.code)) e.preventDefault();
});
document.addEventListener('keyup', e => { keys[e.code] = false; });
window.addEventListener('blur', () => { for (const k of Object.keys(keys)) delete keys[k]; mouse.down = false; });

canvas.addEventListener('click', () => {
  ensureAudio();
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
  _animateFrame++;
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
    updateSummons(dt);
    updateEnemies(dt);
    updateAllyBullets(dt);
    updateEnemyBullets(dt);
    updateAbilities(dt);
    updateReload(dt);
    updateKatanaVisuals(dt);
    updateParticles(dt);
    updateRideHUD();
  }

  renderer.render(scene, camera);
}

buildWorld();
initWeapons();
updateHUD();
animate();
