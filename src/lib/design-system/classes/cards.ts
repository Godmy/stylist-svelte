/**
 * Common base classes for all card components
 * 
 * Provides consistent styling foundation for card-based components
 * following Atomic Design principles (Molecule level)
 * 
 * Usage: Import these classes and extend in specific card style managers
 */

import { BASE_CLASSES } from './classes';
import { VARIANT_CLASSES } from './interaction';

// ============================================================================
// BASE CARD CLASSES
// ============================================================================

/**
 * Base container classes for all card components
 * Provides: background, overflow, border radius, shadow
 */
export const CARD_BASE_CLASSES = `${BASE_CLASSES.card} bg-[--color-background-primary] overflow-hidden rounded-lg`;

/**
 * Size variants for card padding
 */
export const CARD_SIZE_CLASSES = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8'
} as const;

/**
 * Extended variant classes for cards
 * Includes base variants + card-specific variants
 */
export const CARD_VARIANT_CLASSES = {
  ...VARIANT_CLASSES,
  // Card-specific variants
  outline: 'bg-transparent border-2',
  ghost: 'bg-transparent border-none shadow-none',
  elevated: 'shadow-lg',
  flat: 'shadow-none border'
} as const;

// ============================================================================
// CARD STRUCTURE CLASSES
// ============================================================================

/**
 * Header section classes
 */
export const CARD_HEADER_CLASSES = 'border-b border-[--color-border-secondary] p-[--spacing-md]';

/**
 * Title classes for card headers
 */
export const CARD_TITLE_CLASSES = 'text-lg font-semibold text-[--color-text-primary]';

/**
 * Subtitle/description classes for card headers
 */
export const CARD_SUBTITLE_CLASSES = 'text-sm text-[--color-text-secondary] mt-1';

/**
 * Body/content section classes
 */
export const CARD_BODY_CLASSES = 'p-[--spacing-md]';

/**
 * Footer section classes
 */
export const CARD_FOOTER_CLASSES = 'border-t border-[--color-border-secondary] p-[--spacing-md] bg-[--color-background-secondary]';

// ============================================================================
// CARD MEDIA CLASSES
// ============================================================================

/**
 * Image container classes
 */
export const CARD_IMAGE_CONTAINER_CLASSES = 'relative w-full overflow-hidden';

/**
 * Image classes for card media
 */
export const CARD_IMAGE_CLASSES = 'w-full h-auto object-cover';

/**
 * Icon container classes
 */
export const CARD_ICON_CONTAINER_CLASSES = 'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center';

/**
 * Icon size classes
 */
export const CARD_ICON_SIZE_CLASSES = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
} as const;

// ============================================================================
// CARD CONTENT CLASSES
// ============================================================================

/**
 * Text content wrapper classes
 */
export const CARD_TEXT_CONTENT_CLASSES = 'flex-1 min-w-0';

/**
 * Description text classes
 */
export const CARD_DESCRIPTION_CLASSES = 'text-sm text-[--color-text-secondary] mt-2';

/**
 * Truncate long text
 */
export const CARD_TRUNCATE_CLASSES = 'truncate';

// ============================================================================
// CARD ACTIONS CLASSES
// ============================================================================

/**
 * Actions container classes
 */
export const CARD_ACTIONS_CLASSES = 'flex items-center gap-2 mt-[--spacing-md]';

/**
 * Action button base classes
 */
export const CARD_ACTION_BUTTON_CLASSES = 'px-4 py-2 rounded-md font-medium transition-colors duration-150';

/**
 * Action button variant classes
 */
export const CARD_ACTION_BUTTON_VARIANT_CLASSES = {
  primary: 'bg-[--color-primary-500] text-[--color-text-inverse] hover:bg-[--color-primary-600]',
  secondary: 'bg-[--color-background-secondary] text-[--color-text-primary] hover:bg-[--color-border-secondary]',
  ghost: 'bg-transparent text-[--color-text-primary] hover:bg-[--color-background-secondary]',
  outline: 'border border-[--color-border-primary] text-[--color-text-primary] hover:bg-[--color-background-secondary]'
} as const;

// ============================================================================
// CARD PROGRESS/METRIC CLASSES
// ============================================================================

/**
 * Progress bar container classes
 */
export const CARD_PROGRESS_CONTAINER_CLASSES = 'w-full h-2 bg-[--color-border-secondary] rounded-full overflow-hidden mt-3';

/**
 * Progress bar fill base classes
 */
export const CARD_PROGRESS_FILL_CLASSES = 'h-full transition-all duration-500 ease-out';

/**
 * Progress bar variant colors
 */
export const CARD_PROGRESS_VARIANT_CLASSES = {
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500',
  info: 'bg-blue-500',
  primary: 'bg-[--color-primary-500]'
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get size classes with validation
 */
export function getCardSizeClasses(size: keyof typeof CARD_SIZE_CLASSES): string {
  return CARD_SIZE_CLASSES[size] || CARD_SIZE_CLASSES.md;
}

/**
 * Get variant classes with fallback
 */
export function getCardVariantClasses(variant: keyof typeof CARD_VARIANT_CLASSES): string {
  return CARD_VARIANT_CLASSES[variant] || CARD_VARIANT_CLASSES.primary;
}

/**
 * Get progress variant classes with fallback
 */
export function getCardProgressVariantClasses(variant: keyof typeof CARD_PROGRESS_VARIANT_CLASSES): string {
  return CARD_PROGRESS_VARIANT_CLASSES[variant] || CARD_PROGRESS_VARIANT_CLASSES.info;
}
