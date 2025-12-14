/**
 * Component Size Scales
 * Defines size scales for different component types and their associated spacing
 */

/**
 * Standard component size scale - used by most interactive components
 */
export const COMPONENT_SIZE_SCALE = ['sm', 'md', 'lg', 'xl'] as const;
export type ComponentSize = typeof COMPONENT_SIZE_SCALE[number];

/**
 * Compact size scale - for components that need less size options
 */
export const COMPACT_SIZE_SCALE = ['sm', 'md', 'lg'] as const;
export type CompactSize = typeof COMPACT_SIZE_SCALE[number];

/**
 * Extended size scale - for components needing more granular control
 */
export const EXTENDED_SIZE_SCALE = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export type ExtendedSize = typeof EXTENDED_SIZE_SCALE[number];

/**
 * All size scales
 */
export const SIZE_SCALES = {
  component: COMPONENT_SIZE_SCALE,
  compact: COMPACT_SIZE_SCALE,
  extended: EXTENDED_SIZE_SCALE
} as const;

/**
 * Padding mappings for component sizes
 * Used for buttons, inputs, and other interactive elements
 */
export const PADDING_SIZES: Record<ComponentSize, string> = {
  sm: 'px-3 py-1.5',
  md: 'px-4 py-2',
  lg: 'px-6 py-3',
  xl: 'px-7 py-3.5'
};

/**
 * Text size mappings aligned with component sizes
 */
export const TEXT_SIZES: Record<ComponentSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
};

/**
 * Icon/loader size mappings
 */
export const ICON_SIZES: Record<ComponentSize, string> = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
  xl: 'w-6 h-6'
};

/**
 * Combined size classes - padding + text
 * Ready-to-use for component sizing
 */
export const SIZE_CLASSES: Record<ComponentSize, string> = {
  sm: `${PADDING_SIZES.sm} ${TEXT_SIZES.sm}`,
  md: `${PADDING_SIZES.md} ${TEXT_SIZES.md}`,
  lg: `${PADDING_SIZES.lg} ${TEXT_SIZES.lg}`,
  xl: `${PADDING_SIZES.xl} ${TEXT_SIZES.xl}`
};
