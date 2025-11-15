// Size classes mapping
export const ICON_SIZE_CLASSES = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
} as const;

// Default values
export const DEFAULT_ICON_NAME = 'box';
export const DEFAULT_ICON_SIZE: 'md' = 'md';
export const DEFAULT_STROKE_WIDTH = 1.5;

// SVG attributes
export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
export const SVG_VIEWBOX = '0 0 24 24';
export const SVG_FILL = 'none';
export const SVG_STROKE = 'currentColor';
export const SVG_STROKE_LINECAP = 'round';
export const SVG_STROKE_LINEJOIN = 'round';
export const SVG_CLASS_BASE = 'inline-block';

// Icon paths mapping
export const ICON_PATHS = {
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  plus: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
  minus: 'M20 12H4',
  check: 'M5 13l4 4L19 7',
  x: 'M6 18L18 6M6 6l12 12',
  'chevron-down': 'M19 9l-7 7-7-7',
  'chevron-up': 'M5 15l7-7 7 7'
} as const;

// Default icon path (box icon)
export const DEFAULT_ICON_PATH = 'M3 3l18 18M3 21l18-18';