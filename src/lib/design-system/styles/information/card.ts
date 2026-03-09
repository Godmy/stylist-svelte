/**
 * Base StyleManager for all card components
 *
 * Provides common styling methods that can be extended
 * by specific card style managers
 *
 * @example
 * // In specific card style manager:
 * import { CardStyleManager } from '$stylist/design-system/styles/information/card';
 *
 * class CustomMetricCardStyleManager extends CardStyleManager {
 *   static getContainerClasses(className?: string): string {
 *     return `${super.getContainerClasses(className)} metric-card-specific`;
 *   }
 * }
 */

import { BASE_CLASSES } from '../../runtime/foundation';
import { VARIANT_CLASSES } from '../interaction/interaction';

export const CARD_BASE_CLASSES = `${BASE_CLASSES.card} bg-[--color-background-primary] overflow-hidden rounded-lg`;

export const CARD_SIZE_CLASSES = {
	sm: 'p-3',
	md: 'p-4',
	lg: 'p-6',
	xl: 'p-8'
} as const;

export const CARD_VARIANT_CLASSES = {
	...VARIANT_CLASSES,
	outline: 'bg-transparent border-2',
	ghost: 'bg-transparent border-none shadow-none',
	elevated: 'shadow-lg',
	flat: 'shadow-none border'
} as const;

export const CARD_TITLE_CLASSES = 'text-lg font-semibold text-[--color-text-primary]';
export const CARD_ICON_CONTAINER_CLASSES =
	'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center';
export const CARD_ICON_SIZE_CLASSES = {
	sm: 'w-4 h-4',
	md: 'w-6 h-6',
	lg: 'w-8 h-8'
} as const;
export const CARD_TEXT_CONTENT_CLASSES = 'flex-1 min-w-0';
export const CARD_DESCRIPTION_CLASSES = 'text-sm text-[--color-text-secondary] mt-2';
export const CARD_TRUNCATE_CLASSES = 'truncate';
export const CARD_ACTIONS_CLASSES = 'flex items-center gap-2 mt-[--spacing-md]';
export const CARD_ACTION_BUTTON_VARIANT_CLASSES = {
	primary: 'bg-[--color-primary-500] text-[--color-text-inverse] hover:bg-[--color-primary-600]',
	secondary:
		'bg-[--color-background-secondary] text-[--color-text-primary] hover:bg-[--color-border-secondary]',
	ghost: 'bg-transparent text-[--color-text-primary] hover:bg-[--color-background-secondary]',
	outline:
		'border border-[--color-border-primary] text-[--color-text-primary] hover:bg-[--color-background-secondary]'
} as const;
export const CARD_PROGRESS_CONTAINER_CLASSES =
	'w-full h-2 bg-[--color-border-secondary] rounded-full overflow-hidden mt-3';
export const CARD_PROGRESS_FILL_CLASSES = 'h-full transition-all duration-500 ease-out';
export const CARD_PROGRESS_VARIANT_CLASSES = {
	success: 'bg-green-500',
	warning: 'bg-yellow-500',
	danger: 'bg-red-500',
	info: 'bg-blue-500',
	secondary: 'bg-[--color-secondary-500]',
	primary: 'bg-[--color-primary-500]'
} as const;

export function getCardSizeClasses(size: keyof typeof CARD_SIZE_CLASSES): string {
	return CARD_SIZE_CLASSES[size] || CARD_SIZE_CLASSES.md;
}

export function getCardVariantClasses(variant: keyof typeof CARD_VARIANT_CLASSES): string {
	return CARD_VARIANT_CLASSES[variant] || CARD_VARIANT_CLASSES.primary;
}

export function getCardProgressVariantClasses(
	variant: keyof typeof CARD_PROGRESS_VARIANT_CLASSES
): string {
	return CARD_PROGRESS_VARIANT_CLASSES[variant] || CARD_PROGRESS_VARIANT_CLASSES.info;
}

type CardSize = keyof typeof CARD_SIZE_CLASSES;
type CardVariant = keyof typeof CARD_VARIANT_CLASSES;
type ProgressVariant = keyof typeof CARD_PROGRESS_VARIANT_CLASSES;

export class CardStyleManager {
  /**
   * Get base container classes for any card
   */
  static getContainerClasses(className?: string, size: CardSize = 'md'): string {
    const sizeClass = getCardSizeClasses(size);
    return `${CARD_BASE_CLASSES} ${sizeClass} ${className || ''}`.trim();
  }

  /**
   * Get variant classes for card container
   */
  static getVariantClasses(variant: CardVariant = 'primary'): string {
    return getCardVariantClasses(variant);
  }

  /**
   * Get header classes
   */
  static getHeaderClasses(className?: string): string {
    return `${'border-b border-[--color-border-secondary] p-[--spacing-md]'} ${className || ''}`.trim();
  }

  /**
   * Get title classes
   */
  static getTitleClasses(className?: string): string {
    return `${CARD_TITLE_CLASSES} ${className || ''}`.trim();
  }

  /**
   * Get subtitle classes
   */
  static getSubtitleClasses(className?: string): string {
    return `${'text-sm text-[--color-text-secondary] mt-1'} ${className || ''}`.trim();
  }

  /**
   * Get body classes
   */
  static getBodyClasses(className?: string): string {
    return `${'p-[--spacing-md]'} ${className || ''}`.trim();
  }

  /**
   * Get footer classes
   */
  static getFooterClasses(className?: string): string {
    return `${'border-t border-[--color-border-secondary] p-[--spacing-md] bg-[--color-background-secondary]'} ${className || ''}`.trim();
  }

  /**
   * Get image container classes
   */
  static getImageContainerClasses(): string {
    return 'relative w-full overflow-hidden';
  }

  /**
   * Get image classes
   */
  static getImageClasses(className?: string): string {
    return `${'w-full h-auto object-cover'} ${className || ''}`.trim();
  }

  /**
   * Get icon container classes
   */
  static getIconContainerClasses(): string {
    return CARD_ICON_CONTAINER_CLASSES;
  }

  /**
   * Get icon classes by size
   */
  static getIconClasses(size: keyof typeof CARD_ICON_SIZE_CLASSES = 'md'): string {
    return CARD_ICON_SIZE_CLASSES[size];
  }

  /**
   * Get text content wrapper classes
   */
  static getTextContentClasses(): string {
    return CARD_TEXT_CONTENT_CLASSES;
  }

  /**
   * Get description classes
   */
  static getDescriptionClasses(className?: string): string {
    return `${CARD_DESCRIPTION_CLASSES} ${className || ''}`.trim();
  }

  /**
   * Get truncate classes for long text
   */
  static getTruncateClasses(): string {
    return CARD_TRUNCATE_CLASSES;
  }

  /**
   * Get actions container classes
   */
  static getActionsClasses(className?: string): string {
    return `${CARD_ACTIONS_CLASSES} ${className || ''}`.trim();
  }

  /**
   * Get action button classes
   */
  static getActionButtonClasses(variant: keyof typeof CARD_ACTION_BUTTON_VARIANT_CLASSES = 'primary', className?: string): string {
    const variantClass = CARD_ACTION_BUTTON_VARIANT_CLASSES[variant];
    return `${'px-4 py-2 rounded-md font-medium transition-colors duration-150'} ${variantClass} ${className || ''}`.trim();
  }

  /**
   * Get progress bar container classes
   */
  static getProgressContainerClasses(): string {
    return CARD_PROGRESS_CONTAINER_CLASSES;
  }

  /**
   * Get progress bar fill classes
   */
  static getProgressFillClasses(variant: ProgressVariant = 'info', className?: string): string {
    const variantClass = getCardProgressVariantClasses(variant);
    return `${CARD_PROGRESS_FILL_CLASSES} ${variantClass} ${className || ''}`.trim();
  }
}

export default CardStyleManager;

