/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '../../src/lib/svg');
const CATEGORIES = ['architecture', 'information', 'interaction'];

const SVG_OPEN =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">';
const SVG_CLOSE = '</svg>\n';

const STOP_WORDS = new Set([
  'molecule', 'organism', 'component', 'components', 'card', 'item', 'with', 'and', 'by',
  'main', 'base', 'generic', 'enhanced', 'simple', 'shell'
]);

const TOKEN_TO_GROUP = {
  accordion: 'accordion',
  alignments: 'align',
  alignment: 'align',
  justifications: 'align',
  positions: 'align',
  orientations: 'align',
  animation: 'animation',
  animations: 'animation',
  animated: 'animation',
  transition: 'animation',
  transitions: 'animation',
  arrow: 'arrow',
  arrows: 'arrow',
  up: 'arrow',
  down: 'arrow',
  chevron: 'arrow',
  activity: 'progress',
  progress: 'progress',
  spinner: 'progress',
  loading: 'progress',
  calendar: 'calendar',
  schedule: 'calendar',
  date: 'calendar',
  time: 'calendar',
  chart: 'chart',
  charts: 'chart',
  analytics: 'chart',
  kpi: 'chart',
  metric: 'chart',
  metrics: 'chart',
  stats: 'chart',
  stat: 'chart',
  trending: 'chart',
  trend: 'chart',
  heatmap: 'chart',
  comparison: 'chart',
  rating: 'chart',
  verdicts: 'chart',
  table: 'table',
  tables: 'table',
  grid: 'table',
  cells: 'table',
  message: 'message',
  chat: 'message',
  comment: 'message',
  thread: 'message',
  toast: 'message',
  notification: 'message',
  notifications: 'message',
  announcement: 'message',
  banner: 'message',
  promo: 'message',
  code: 'code',
  json: 'code',
  editor: 'code',
  diff: 'code',
  markdown: 'code',
  viewer: 'code',
  console: 'code',
  image: 'image',
  gallery: 'image',
  media: 'image',
  video: 'image',
  photo: 'image',
  favicon: 'image',
  audio: 'audio',
  player: 'audio',
  sound: 'audio',
  visualizer: 'audio',
  speaker: 'audio',
  file: 'file',
  document: 'file',
  attachment: 'file',
  folder: 'file',
  download: 'file',
  upload: 'file',
  settings: 'settings',
  configurator: 'settings',
  config: 'settings',
  preferences: 'settings',
  controls: 'settings',
  control: 'settings',
  tokens: 'settings',
  themes: 'settings',
  styles: 'settings',
  style: 'settings',
  models: 'settings',
  variables: 'settings',
  contracts: 'settings',
  button: 'settings',
  icons: 'settings',
  search: 'search',
  autocomplete: 'search',
  finder: 'search',
  form: 'form',
  input: 'form',
  selector: 'form',
  select: 'form',
  pickers: 'form',
  picker: 'form',
  radio: 'form',
  checkbox: 'form',
  field: 'form',
  placeholder: 'form',
  number: 'form',
  count: 'form',
  menu: 'menu',
  list: 'menu',
  lists: 'menu',
  tab: 'menu',
  tabs: 'menu',
  breadcrumb: 'menu',
  pagination: 'menu',
  user: 'user',
  avatar: 'user',
  profile: 'user',
  member: 'user',
  team: 'user',
  map: 'map',
  location: 'map',
  pin: 'map',
  route: 'map',
  geo: 'map',
  marker: 'map',
  country: 'map',
  flag: 'map',
  locator: 'map',
  cart: 'commerce',
  checkout: 'commerce',
  order: 'commerce',
  orders: 'commerce',
  product: 'commerce',
  products: 'commerce',
  store: 'commerce',
  shipping: 'commerce',
  billing: 'commerce',
  tax: 'commerce',
  price: 'commerce',
  prices: 'commerce',
  discount: 'commerce',
  upsell: 'commerce',
  currency: 'commerce',
  privacy: 'security',
  permission: 'security',
  shield: 'security',
  security: 'security',
  policy: 'security',
  gate: 'security',
  node: 'graph',
  edge: 'graph',
  tree: 'graph',
  trees: 'graph',
  graphviz: 'graph',
  ontology: 'graph',
  diagram: 'graph',
  diagrams: 'graph',
  kanban: 'graph',
  process: 'graph',
  step: 'graph',
  agile: 'graph',
  collaborate: 'graph',
  typography: 'text',
  text: 'text',
  title: 'text',
  inline: 'text',
  article: 'text',
  documentation: 'text',
  color: 'color',
  colors: 'color',
  palette: 'color',
  gradient: 'color',
  gradients: 'color',
  variant: 'color',
  variants: 'color',
  opacity: 'color',
  radius: 'color',
  shadow: 'color',
  shadows: 'color',
  ai: 'ai',
  ml: 'ai',
  agent: 'ai',
  assistant: 'ai',
  zoom: 'zoom',
  maximize: 'zoom',
  alert: 'status',
  warning: 'status',
  error: 'status',
  errors: 'status',
  validation: 'status',
  check: 'status',
  success: 'status',
  confirm: 'status',
  confirmation: 'status',
  info: 'status',
  close: 'status',
  x: 'status',
  status: 'status'
};

const DEFAULT_BY_CATEGORY = {
  architecture: 'layout',
  information: 'info',
  interaction: 'interaction'
};

function hashName(name) {
  let h = 2166136261;
  for (let i = 0; i < name.length; i += 1) {
    h ^= name.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function splitTokens(fileName) {
  return fileName
    .replace(/\.svg$/i, '')
    .toLowerCase()
    .split('-')
    .filter(Boolean)
    .filter((t) => !STOP_WORDS.has(t));
}

function pickGroups(tokens, category) {
  const groups = [];
  for (const token of tokens) {
    const g = TOKEN_TO_GROUP[token];
    if (!g) continue;
    if (!groups.includes(g)) groups.push(g);
    if (groups.length >= 2) break;
  }
  if (groups.length === 0) groups.push(DEFAULT_BY_CATEGORY[category]);
  return groups;
}

function frameParts(category, h) {
  const v = h % 5;
  const y = (6 + ((h >>> 7) % 13)).toFixed(1);
  const x = (6 + ((h >>> 11) % 13)).toFixed(1);
  if (v === 0) {
    const rx = (2 + ((h >>> 3) % 5) * 0.6).toFixed(1);
    return [`<rect x="3" y="3" width="18" height="18" rx="${rx}"/>`, `<path d="M3 ${y}h18"/>`];
  }
  if (v === 1) {
    return ['<rect x="3" y="3" width="18" height="18" rx="2"/>', `<path d="M${x} 3v18"/>`];
  }
  if (v === 2) {
    const r = (7.8 + ((h >>> 6) % 7) * 0.2).toFixed(1);
    return [`<circle cx="12" cy="12" r="${r}"/>`, `<path d="M12 12 ${x} ${y}"/>`];
  }
  if (v === 3 && category === 'architecture') return ['<path d="M6 4h12l4 4v12l-4 4H6l-4-4V8Z"/>', `<path d="M4 ${y}h16"/>`];
  if (v === 4 && category === 'information') return ['<path d="M4 6h16v12H4Z"/>', `<path d="M${x} 6v12"/>`];
  return [`<path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0"/>`, `<path d="M6 ${y}h12"/>`];
}

function primaryParts(group, h, tokens) {
  const v = (h >>> 8) % 8;

  if (group === 'accordion') {
    const topY = 8 + (v % 2);
    const bottomY = 14 + (v % 2);
    return ['<path d="M5 6h14M5 12h14M5 18h14"/>', `<path d="M8 ${topY}l4 4 4-4 M8 ${bottomY}l4 4 4-4"/>`];
  }
  if (group === 'align') {
    const x = 6 + (v % 7);
    return [`<path d="M4 5h16M4 19h16M${x} 5v14"/>`, '<rect x="7" y="8" width="10" height="3" rx="1"/>', '<rect x="9" y="13" width="6" height="3" rx="1"/>'];
  }
  if (group === 'animation') {
    const w = 6.5 + (v % 3);
    return [`<path d="M${(12 - w / 2).toFixed(1)} 8v8l${w.toFixed(1)}-4Z"/>`, '<path d="M3.5 9h2M3.5 15h2M18.5 9h2M18.5 15h2"/>'];
  }
  if (group === 'arrow') {
    if (tokens.includes('up')) return ['<path d="M12 19V6"/>', '<path d="m7 11 5-5 5 5"/>'];
    if (tokens.includes('down')) return ['<path d="M12 5v13"/>', '<path d="m7 13 5 5 5-5"/>'];
    return [`<path d="M5 12h${11 + (v % 3)}"/>`, '<path d="m13 7 5 5-5 5"/>'];
  }
  if (group === 'progress') {
    const angle = 120 + ((h >>> 4) % 200);
    const x = 12 + 6 * Math.cos((angle * Math.PI) / 180);
    const y = 12 + 6 * Math.sin((angle * Math.PI) / 180);
    return ['<circle cx="12" cy="12" r="8"/>', '<path d="M12 12 18 12"/>', `<path d="M12 12 ${x.toFixed(2)} ${y.toFixed(2)}"/>`];
  }
  if (group === 'calendar') {
    const line2 = 14 + (v % 3);
    return ['<rect x="3" y="5" width="18" height="16" rx="2"/>', '<path d="M8 3v4M16 3v4M3 10h18"/>', `<path d="M8 13h8M8 ${line2}h5"/>`];
  }
  if (group === 'chart') {
    const a = 3 + (h % 6);
    const b = 4 + ((h >>> 4) % 6);
    const c = 5 + ((h >>> 9) % 6);
    return ['<path d="M4 19h16"/>', `<path d="M7 16v-${a}M12 16v-${b}M17 16v-${c}"/>`];
  }
  if (group === 'table') {
    const x1 = 8 + (v % 4);
    const x2 = 14 + ((v + 1) % 3);
    return ['<rect x="3" y="4" width="18" height="16" rx="2"/>', `<path d="M3 9h18M3 14h18M${x1} 4v16M${x2} 4v16"/>`];
  }
  if (group === 'message') {
    const tail = v % 2 === 0 ? 'M10 16 7 19v-3' : 'M14 16 17 19v-3';
    return ['<rect x="3" y="5" width="18" height="11" rx="2"/>', `<path d="${tail}"/>`, `<path d="M7 9h10M7 ${12 + (v % 2)}h${6 + (v % 3)}"/>`];
  }
  if (group === 'code') {
    const slashX = 13 + (v % 2);
    return ['<path d="m8 8-4 4 4 4M16 8l4 4-4 4"/>', `<path d="m${slashX} 5-3 14"/>`];
  }
  if (group === 'image') {
    const cx = 8 + (v % 5);
    return ['<rect x="3" y="5" width="18" height="14" rx="2"/>', `<circle cx="${cx}" cy="9" r="1.2"/>`, '<path d="m6 16 3-3 3 3 2-2 4 4"/>'];
  }
  if (group === 'audio') {
    const amp = 3 + (v % 3);
    return ['<path d="M4 14h3l4 4V6L7 10H4Z"/>', `<path d="M15 10a${amp} ${amp} 0 0 1 0 4M17.5 8a6 6 0 0 1 0 8"/>`];
  }
  if (group === 'file') {
    const action = tokens.includes('download') ? 'M12 9v6m-2-2 2 2 2-2' : tokens.includes('upload') ? 'M12 15V9m-2 2 2-2 2 2' : `M9 ${13 + (v % 3)}h6`;
    return ['<path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/>', '<path d="M14 3v6h6"/>', `<path d="${action}"/>`];
  }
  if (group === 'settings') {
    return ['<circle cx="12" cy="12" r="3"/>', '<path d="M4 12h2M18 12h2M12 4v2M12 18v2M6.5 6.5l1.4 1.4M16.1 16.1l1.4 1.4M17.5 6.5l-1.4 1.4M7.9 16.1l-1.4 1.4"/>'];
  }
  if (group === 'search') {
    const extra = tokens.includes('autocomplete') ? 'M4 16h4' : 'M17 17l3 3';
    return ['<circle cx="10.5" cy="10.5" r="5.5"/>', `<path d="M14.5 14.5 20 20M${extra}"/>`];
  }
  if (group === 'form') {
    const mark = tokens.includes('radio') ? '<circle cx="7" cy="9" r="1.4"/><circle cx="7" cy="14" r="1.4"/>' : '<path d="M6 9h2M6 14h2"/>';
    return ['<rect x="4" y="4" width="16" height="16" rx="2"/>', `<path d="M10 9h${6 + (v % 3)}M10 14h${5 + (v % 2)}"/>`, mark];
  }
  if (group === 'menu') {
    if (tokens.includes('tab') || tokens.includes('tabs')) return ['<path d="M4 8h16M6 8V6h4v2M12 8V6h4v2"/>', '<rect x="4" y="8" width="16" height="10" rx="2"/>'];
    return [`<path d="M4 ${7 + (v % 2)}h16M4 12h16M4 ${17 - (v % 2)}h16"/>`];
  }
  if (group === 'user') {
    return ['<circle cx="12" cy="8" r="3.2"/>', `<path d="M${5 + (v % 2)} 19a${7 - (v % 2)} ${7 - (v % 2)} 0 0 1 ${14 - (v % 2)} 0"/>`];
  }
  if (group === 'map') {
    const r = 1.5 + (v % 4) * 0.2;
    return ['<path d="M12 21s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z"/>', `<circle cx="12" cy="11" r="${r.toFixed(1)}"/>`];
  }
  if (group === 'commerce') {
    if (tokens.includes('price') || tokens.includes('prices') || tokens.includes('currency') || tokens.includes('tax')) {
      return ['<path d="M12 8v8M10 10c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2 1-2 2 1 2 2 2 2-1 2-2"/>'];
    }
    return ['<path d="M3 4h2l1.8 9.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L21 7H7.2"/>', '<circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/>'];
  }
  if (group === 'security') return ['<path d="M12 3 5 6v6c0 4.6 3.1 7.9 7 9 3.9-1.1 7-4.4 7-9V6l-7-3Z"/>', '<path d="m9.5 12 2 2 3.5-3.5"/>'];
  if (group === 'graph') {
    const ly = 6 + (v % 5);
    return [`<circle cx="6" cy="${ly}" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="12" cy="18" r="2"/>`, '<path d="M7.7 7.2 16.3 6.8M7 7.5l4 8m6.3-5.9-4.1 7.4"/>'];
  }
  if (group === 'text') return [`<path d="M4 6h16M8 6v12M16 6v12M6 ${17 + (v % 2)}h12"/>`];
  if (group === 'color') {
    const c1 = 8 + (v % 5);
    return ['<circle cx="12" cy="12" r="9"/>', `<circle cx="${c1}" cy="10" r="1.2"/><circle cx="14" cy="8.5" r="1.2"/><circle cx="15" cy="13" r="1.2"/>`];
  }
  if (group === 'ai') {
    const eyeY = 11 + (v % 2);
    return ['<rect x="6" y="7" width="12" height="10" rx="2"/>', `<circle cx="10" cy="${eyeY}" r="1"/><circle cx="14" cy="${eyeY}" r="1"/>`, '<path d="M12 4v3M9 17v2h6v-2"/>'];
  }
  if (group === 'zoom') {
    const plus = tokens.includes('out') ? '<path d="M8 11h6"/>' : '<path d="M11 8v6M8 11h6"/>';
    return ['<circle cx="11" cy="11" r="6"/>', '<path d="m20 20-4.2-4.2"/>', plus];
  }
  if (group === 'status') {
    if (tokens.includes('error') || tokens.includes('errors') || tokens.includes('x') || tokens.includes('close')) return ['<circle cx="12" cy="12" r="9"/>', '<path d="m9 9 6 6m0-6-6 6"/>'];
    if (tokens.includes('check') || tokens.includes('success') || tokens.includes('confirm') || tokens.includes('confirmation')) return ['<circle cx="12" cy="12" r="9"/>', '<path d="m8 12.5 2.6 2.6L16 9.7"/>'];
    if (tokens.includes('alert') || tokens.includes('warning')) return ['<path d="M12 3 2.6 19.5a1 1 0 0 0 .9 1.5h17a1 1 0 0 0 .9-1.5L12 3Z"/>', '<path d="M12 9v5M12 17h.01"/>'];
    return ['<circle cx="12" cy="12" r="9"/>', '<path d="M12 10v6M12 7h.01"/>'];
  }
  if (group === 'layout') {
    const vx = 7 + (v % 10);
    const hy = 7 + ((v + 3) % 10);
    return [`<rect x="3" y="3" width="18" height="18" rx="2"/>`, `<path d="M3 ${hy}h18M${vx} 3v18"/>`];
  }
  if (group === 'info') return ['<rect x="3" y="5" width="18" height="14" rx="2"/>', '<path d="M7 9h10M7 13h7"/>'];
  if (group === 'interaction') return ['<rect x="4" y="4" width="16" height="16" rx="3"/>', '<path d="M8 8h8M8 12h6M8 16h4"/>'];
  return ['<circle cx="12" cy="12" r="9"/>', '<path d="M12 8v4l3 2"/>'];
}

function secondaryParts(group, h) {
  if (!group) return [];
  const v = (h >>> 12) % 5;
  if (group === 'status') return [`<path d="M17 6h${2 + (v % 2)}M17 ${8 + (v % 2)}h${2 + ((v + 1) % 2)}"/>`];
  if (group === 'search') return ['<path d="M17 5h3M20 5v3"/>'];
  if (group === 'chart') return ['<path d="M16 8V5M18 8V4"/>'];
  if (group === 'file') return ['<path d="M16 6h3"/>'];
  if (group === 'message') return ['<path d="M16 6h4"/>'];
  if (group === 'settings') return ['<path d="M18 5h2M19 4v2"/>'];
  return [];
}

function buildSvg(fileName, category, tokenCoverage) {
  const tokens = splitTokens(fileName);
  const h = hashName(`${category}:${fileName}`);
  const groups = pickGroups(tokens, category);
  const primary = groups[0];
  const secondary = groups[1];
  const iconTitle = fileName.replace(/\.svg$/i, '');

  for (const token of tokens) {
    if (!tokenCoverage[token]) tokenCoverage[token] = { count: 0, group: TOKEN_TO_GROUP[token] || 'unknown' };
    tokenCoverage[token].count += 1;
  }

  const parts = [`<title>${iconTitle}</title>`, ...frameParts(category, h), ...primaryParts(primary, h, tokens), ...secondaryParts(secondary, h)];
  return `${SVG_OPEN}\n  ${parts.join('\n  ')}\n${SVG_CLOSE}`;
}

function normalizeCategory(category, tokenCoverage) {
  const dir = path.join(ROOT, category);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.svg'));
  let written = 0;
  for (const file of files) {
    fs.writeFileSync(path.join(dir, file), buildSvg(file, category, tokenCoverage), 'utf8');
    written += 1;
  }
  return written;
}

function writeCoverage(tokenCoverage) {
  const rows = Object.entries(tokenCoverage)
    .map(([token, meta]) => ({ token, count: meta.count, group: meta.group || 'unknown' }))
    .sort((a, b) => b.count - a.count || a.token.localeCompare(b.token));
  const payload = { generatedAt: new Date().toISOString(), totalTokens: rows.length, rows };
  const outPath = path.join(ROOT, 'icons', 'token-coverage.json');
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  return payload;
}

function main() {
  const tokenCoverage = {};
  let total = 0;
  for (const category of CATEGORIES) total += normalizeCategory(category, tokenCoverage);
  const coverage = writeCoverage(tokenCoverage);
  console.log(`Normalized SVG icons: ${total}`);
  console.log(`Token coverage: ${coverage.totalTokens}`);
}

main();
