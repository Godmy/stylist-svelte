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

function hasAny(tokens, arr) {
  return arr.some((k) => tokens.includes(k));
}

function groupForTokens(tokens, category) {
  if (hasAny(tokens, ['accordion'])) return 'accordion';
  if (hasAny(tokens, ['alignments', 'justifications', 'positions', 'orientations', 'alignment'])) return 'align';
  if (hasAny(tokens, ['animation', 'animations', 'animated', 'transition', 'transitions'])) return 'animation';
  if (hasAny(tokens, ['arrow', 'arrows', 'up', 'down', 'chevron'])) return 'arrow';
  if (hasAny(tokens, ['activity', 'progress', 'spinner', 'loading'])) return 'progress';
  if (hasAny(tokens, ['badge', 'tag', 'chip'])) return 'tag';
  if (hasAny(tokens, ['calendar', 'schedule', 'date', 'time'])) return 'calendar';
  if (hasAny(tokens, ['chart', 'charts', 'analytics', 'kpi', 'metric', 'metrics', 'stats', 'stat', 'trending', 'trend', 'heatmap'])) return 'chart';
  if (hasAny(tokens, ['comparison', 'compare', 'rating', 'verdicts'])) return 'chart';
  if (hasAny(tokens, ['table', 'grid', 'cells'])) return 'table';
  if (hasAny(tokens, ['message', 'chat', 'comment', 'thread', 'toast', 'notification', 'notifications'])) return 'message';
  if (hasAny(tokens, ['announcement', 'banner', 'promo'])) return 'message';
  if (hasAny(tokens, ['code', 'json', 'editor', 'diff', 'markdown', 'viewer', 'console'])) return 'code';
  if (hasAny(tokens, ['image', 'gallery', 'media', 'video', 'photo', 'favicon'])) return 'image';
  if (hasAny(tokens, ['audio', 'player', 'sound', 'visualizer', 'speaker'])) return 'audio';
  if (hasAny(tokens, ['file', 'document', 'attachment', 'folder', 'download', 'upload'])) return 'file';
  if (hasAny(tokens, ['settings', 'configurator', 'config', 'preferences', 'controls', 'control', 'tokens', 'themes', 'styles', 'style', 'button', 'components', 'component', 'contracts', 'models', 'variables', 'icons'])) return 'settings';
  if (hasAny(tokens, ['search', 'autocomplete', 'finder'])) return 'search';
  if (hasAny(tokens, ['form', 'input', 'selector', 'pickers', 'picker', 'radio', 'checkbox', 'field', 'placeholder', 'number', 'count'])) return 'form';
  if (hasAny(tokens, ['menu', 'list', 'lists', 'tab', 'tabs', 'breadcrumb', 'pagination'])) return 'menu';
  if (hasAny(tokens, ['user', 'avatar', 'profile', 'member', 'team'])) return 'user';
  if (hasAny(tokens, ['map', 'location', 'pin', 'route', 'geo', 'marker', 'country', 'flag', 'locator'])) return 'map';
  if (hasAny(tokens, ['cart', 'checkout', 'order', 'orders', 'product', 'products', 'store', 'shipping', 'billing', 'tax', 'price', 'prices', 'discount', 'upsell', 'currency'])) return 'commerce';
  if (hasAny(tokens, ['privacy', 'permission', 'shield', 'security', 'policy', 'gate'])) return 'security';
  if (hasAny(tokens, ['node', 'edge', 'tree', 'trees', 'graphviz', 'ontology', 'diagram', 'diagrams', 'kanban', 'process', 'step', 'agile', 'collaborate'])) return 'graph';
  if (hasAny(tokens, ['typography', 'text', 'title', 'inline', 'article', 'documentation'])) return 'text';
  if (hasAny(tokens, ['color', 'colors', 'palette', 'gradient', 'gradients', 'variant', 'variants', 'opacity', 'radius', 'shadow', 'shadows'])) return 'color';
  if (hasAny(tokens, ['ai', 'ml', 'agent', 'assistant'])) return 'ai';
  if (hasAny(tokens, ['zoom', 'maximize'])) return 'zoom';
  if (hasAny(tokens, ['alert', 'warning', 'error', 'errors', 'validation', 'check', 'success', 'confirm', 'confirmation', 'info', 'x', 'close', 'status'])) return 'status';

  if (category === 'architecture') return 'layout';
  if (category === 'information') return 'info';
  return 'interaction';
}

function frameParts(category, h) {
  const v = (h >>> 2) % 4;
  if (v === 0) {
    const rx = 2 + ((h >>> 5) % 4);
    return [`<rect x="3" y="3" width="18" height="18" rx="${rx}"/>`];
  }
  if (v === 1) {
    const y = 7 + ((h >>> 6) % 3);
    return [`<rect x="3" y="3" width="18" height="18" rx="2"/>`, `<path d="M3 ${y}h18"/>`];
  }
  if (v === 2) {
    const r = 8.2 + ((h >>> 7) % 3) * 0.4;
    return [`<circle cx="12" cy="12" r="${r.toFixed(1)}"/>`];
  }
  if (category === 'architecture') {
    return ['<path d="M6 4h12l4 4v12l-4 4H6l-4-4V8Z"/>'];
  }
  if (category === 'information') {
    return ['<path d="M4 6h16v12H4Z"/>'];
  }
  return ['<path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0"/>'];
}

function drawPrimary(group, h, tokens) {
  const v = (h >>> 7) % 4;

  if (group === 'accordion') {
    const c1 = v % 2 === 0 ? 'M8 8l4 4 4-4' : 'M8 9l4 3 4-3';
    const c2 = v % 2 === 0 ? 'M8 14l4 4 4-4' : 'M8 15l4 3 4-3';
    return ['<path d="M5 6h14M5 12h14M5 18h14"/>', `<path d="${c1} ${c2}"/>`];
  }

  if (group === 'align') {
    const x = 6 + (v * 2);
    return [`<path d="M4 5h16M4 19h16M${x} 5v14"/>`, '<rect x="7" y="8" width="10" height="3" rx="1"/>', '<rect x="9" y="13" width="6" height="3" rx="1"/>'];
  }

  if (group === 'animation') {
    const play = v % 2 === 0 ? 'M9 8v8l7-4Z' : 'M8.5 7.5v9l8-4.5Z';
    return [`<path d="${play}"/>`, '<path d="M3.5 9h2M3.5 15h2M18.5 9h2M18.5 15h2"/>'];
  }

  if (group === 'calendar') {
    const dy = tokens.includes('time') ? 'M12 12v4l2.5 1.5' : 'M8 13h8M8 16h5';
    return ['<rect x="3" y="5" width="18" height="16" rx="2"/>', '<path d="M8 3v4M16 3v4M3 10h18"/>', `<path d="${dy}"/>`];
  }

  if (group === 'chart') {
    const a = 3 + (h % 5);
    const b = 5 + ((h >>> 4) % 4);
    const c = 7 + ((h >>> 9) % 4);
    return ['<path d="M4 19h16"/>', `<path d="M7 16v-${a}M12 16v-${b}M17 16v-${c}"/>`];
  }

  if (group === 'table') {
    const split = 8 + ((h >>> 3) % 4);
    return ['<rect x="3" y="4" width="18" height="16" rx="2"/>', `<path d="M3 9h18M3 14h18M${split} 4v16"/>`];
  }

  if (group === 'message') {
    const tail = v < 2 ? 'M10 16 7 19v-3' : 'M14 16 17 19v-3';
    return ['<rect x="3" y="5" width="18" height="11" rx="2"/>', `<path d="${tail}"/>`, '<path d="M7 9h10M7 12h7"/>'];
  }

  if (group === 'code') {
    const slash = v % 2 === 0 ? 'm13 5-3 14' : 'm14 5-4 14';
    return ['<path d="m8 8-4 4 4 4M16 8l4 4-4 4"/>', `<path d="${slash}"/>`];
  }

  if (group === 'image') {
    const cx = 8 + v;
    return ['<rect x="3" y="5" width="18" height="14" rx="2"/>', `<circle cx="${cx}" cy="9" r="1.2"/>`, '<path d="m6 16 3-3 3 3 2-2 4 4"/>'];
  }

  if (group === 'audio') {
    const wave = v % 2 === 0 ? 'M15 10a3 3 0 0 1 0 4M17.5 8a6 6 0 0 1 0 8' : 'M15 9a4 4 0 0 1 0 6M17.5 7a7 7 0 0 1 0 10';
    return ['<path d="M4 14h3l4 4V6L7 10H4Z"/>', `<path d="${wave}"/>`];
  }

  if (group === 'file') {
    const act = tokens.includes('download') ? 'M12 9v6m-2-2 2 2 2-2' : tokens.includes('upload') ? 'M12 15V9m-2 2 2-2 2 2' : 'M9 14h6';
    return ['<path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/>', '<path d="M14 3v6h6"/>', `<path d="${act}"/>`];
  }

  if (group === 'settings') {
    return ['<circle cx="12" cy="12" r="3"/>', '<path d="M4 12h2M18 12h2M12 4v2M12 18v2M6.5 6.5l1.4 1.4M16.1 16.1l1.4 1.4M17.5 6.5l-1.4 1.4M7.9 16.1l-1.4 1.4"/>'];
  }

  if (group === 'search') {
    const extra = tokens.includes('auto') ? 'M3 12h2M3 16h2' : 'M17 17l3 3';
    return ['<circle cx="10.5" cy="10.5" r="5.5"/>', `<path d="M14.5 14.5 20 20M${extra}"/>`];
  }

  if (group === 'form') {
    const mark = tokens.includes('radio') ? '<circle cx="7" cy="9" r="1.5"/><circle cx="7" cy="14" r="1.5"/>' : '<path d="M6 9h2M6 14h2"/>';
    return ['<rect x="4" y="4" width="16" height="16" rx="2"/>', '<path d="M10 9h7M10 14h7"/>', mark];
  }

  if (group === 'menu') {
    if (tokens.includes('tab') || tokens.includes('tabs')) return ['<path d="M4 8h16M6 8V6h4v2M12 8V6h4v2"/>', '<rect x="4" y="8" width="16" height="10" rx="2"/>'];
    return ['<path d="M4 7h16M4 12h16M4 17h16"/>'];
  }

  if (group === 'arrow') {
    const up = tokens.includes('up');
    const down = tokens.includes('down');
    if (up) return ['<path d="M12 19V6"/>', '<path d="m7 11 5-5 5 5"/>'];
    if (down) return ['<path d="M12 5v13"/>', '<path d="m7 13 5 5 5-5"/>'];
    return ['<path d="M5 12h13"/>', '<path d="m13 7 5 5-5 5"/>'];
  }

  if (group === 'progress') {
    const arc = 120 + ((h >>> 4) % 160);
    const x = 12 + 6 * Math.cos((arc * Math.PI) / 180);
    const y = 12 + 6 * Math.sin((arc * Math.PI) / 180);
    return ['<circle cx="12" cy="12" r="8"/>', '<path d="M12 12 18 12"/>', `<path d="M12 12 ${x.toFixed(2)} ${y.toFixed(2)}"/>`];
  }

  if (group === 'user') {
    const shoulders = v % 2 === 0 ? 'M5 19a7 7 0 0 1 14 0' : 'M6 19a6 6 0 0 1 12 0';
    return ['<circle cx="12" cy="8" r="3.2"/>', `<path d="${shoulders}"/>`];
  }

  if (group === 'map') {
    const rx = 1.6 + (v * 0.2);
    return ['<path d="M12 21s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z"/>', `<circle cx="12" cy="11" r="${rx.toFixed(1)}"/>`];
  }

  if (group === 'commerce') {
    const dollar = tokens.includes('currency') || tokens.includes('price') || tokens.includes('tax') ? '<path d="M12 8v8M10 10c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2 1-2 2 1 2 2 2 2-1 2-2"/>' : '<path d="M3 4h2l1.8 9.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L21 7H7.2"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/>';
    return [dollar];
  }

  if (group === 'security') {
    return ['<path d="M12 3 5 6v6c0 4.6 3.1 7.9 7 9 3.9-1.1 7-4.4 7-9V6l-7-3Z"/>', '<path d="m9.5 12 2 2 3.5-3.5"/>'];
  }

  if (group === 'graph') {
    const leftY = 6 + (v * 2);
    return [`<circle cx="6" cy="${leftY}" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="12" cy="18" r="2"/>`, '<path d="M7.7 7.2 16.3 6.8M7 7.5l4 8m6.3-5.9-4.1 7.4"/>'];
  }

  if (group === 'text') {
    return ['<path d="M4 6h16M8 6v12M16 6v12M6 18h12"/>'];
  }

  if (group === 'color') {
    const c = 8 + v;
    return ['<circle cx="12" cy="12" r="9"/>', `<circle cx="${c}" cy="10" r="1.2"/><circle cx="14" cy="8.5" r="1.2"/><circle cx="15" cy="13" r="1.2"/>`];
  }

  if (group === 'ai') {
    const eyeY = 11 + (v % 2);
    return ['<rect x="6" y="7" width="12" height="10" rx="2"/>', `<circle cx="10" cy="${eyeY}" r="1"/><circle cx="14" cy="${eyeY}" r="1"/>`, '<path d="M12 4v3M9 17v2h6v-2"/>'];
  }

  if (group === 'zoom') {
    const plus = tokens.includes('out') ? '<path d="M8 11h6"/>' : tokens.includes('in') ? '<path d="M11 8v6M8 11h6"/>' : '<path d="M11 8v6M8 11h6"/>';
    return ['<circle cx="11" cy="11" r="6"/>', '<path d="m20 20-4.2-4.2"/>', plus];
  }

  if (group === 'status') {
    if (tokens.includes('error') || tokens.includes('x') || tokens.includes('close')) return ['<circle cx="12" cy="12" r="9"/>', '<path d="m9 9 6 6m0-6-6 6"/>'];
    if (tokens.includes('check') || tokens.includes('success') || tokens.includes('confirm')) return ['<circle cx="12" cy="12" r="9"/>', '<path d="m8 12.5 2.6 2.6L16 9.7"/>'];
    if (tokens.includes('alert') || tokens.includes('warning')) return ['<path d="M12 3 2.6 19.5a1 1 0 0 0 .9 1.5h17a1 1 0 0 0 .9-1.5L12 3Z"/>', '<path d="M12 9v5M12 17h.01"/>'];
    return ['<circle cx="12" cy="12" r="9"/>', '<path d="M12 10v6M12 7h.01"/>'];
  }

  if (group === 'layout') {
    const vx = 8 + ((h >>> 3) % 8);
    const hy = 8 + ((h >>> 6) % 8);
    return [`<rect x="3" y="3" width="18" height="18" rx="2"/>`, `<path d="M3 ${hy}h18M${vx} 3v18"/>`];
  }

  if (group === 'info') {
    return ['<rect x="3" y="5" width="18" height="14" rx="2"/>', '<path d="M7 9h10M7 13h7"/>'];
  }

  if (group === 'interaction') {
    return ['<rect x="4" y="4" width="16" height="16" rx="3"/>', '<path d="M8 8h8M8 12h6M8 16h4"/>'];
  }

  return ['<circle cx="12" cy="12" r="9"/>', '<path d="M12 8v4l3 2"/>'];
}

function buildSvg(fileName, category, tokenCoverage) {
  const tokens = splitTokens(fileName);
  const h = hashName(`${category}:${fileName}`);
  const group = groupForTokens(tokens, category);

  for (const token of tokens) {
    if (!tokenCoverage[token]) tokenCoverage[token] = { count: 0, group };
    tokenCoverage[token].count += 1;
    if (!tokenCoverage[token].group) tokenCoverage[token].group = group;
  }

  const parts = [...frameParts(category, h), ...drawPrimary(group, h, tokens)];
  return `${SVG_OPEN}\n  ${parts.join('\n  ')}\n${SVG_CLOSE}`;
}

function normalizeCategory(category, tokenCoverage) {
  const dir = path.join(ROOT, category);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.svg'));
  let written = 0;
  for (const file of files) {
    const output = buildSvg(file, category, tokenCoverage);
    fs.writeFileSync(path.join(dir, file), output, 'utf8');
    written += 1;
  }
  return written;
}

function writeCoverage(tokenCoverage) {
  const rows = Object.entries(tokenCoverage)
    .map(([token, meta]) => ({ token, count: meta.count, group: meta.group || 'unknown' }))
    .sort((a, b) => b.count - a.count || a.token.localeCompare(b.token));

  const payload = {
    generatedAt: new Date().toISOString(),
    totalTokens: rows.length,
    rows
  };

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
