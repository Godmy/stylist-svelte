/**
 * Base StyleManager for all card components
 *
 * Provides common styling methods that can be extended
 * by specific card style managers
 *
 * @example
 * // In specific card style manager:
 * import { CardStyleManager } from '$stylist/design-system/styles/card';
 *
 * class CustomMetricCardStyleManager extends CardStyleManager {
 *   static getContainerClasses(className?: string): string {
 *     return `${super.getContainerClasses(className)} metric-card-specific`;
 *   }
 * }
 */

import {
  CARD_BASE_CLASSES,
  CARD_SIZE_CLASSES,
  CARD_VARIANT_CLASSES,
  CARD_HEADER_CLASSES,
  CARD_TITLE_CLASSES,
  CARD_SUBTITLE_CLASSES,
  CARD_BODY_CLASSES,
  CARD_FOOTER_CLASSES,
  CARD_IMAGE_CONTAINER_CLASSES,
  CARD_IMAGE_CLASSES,
  CARD_ICON_CONTAINER_CLASSES,
  CARD_ICON_SIZE_CLASSES,
  CARD_TEXT_CONTENT_CLASSES,
  CARD_DESCRIPTION_CLASSES,
  CARD_TRUNCATE_CLASSES,
  CARD_ACTIONS_CLASSES,
  CARD_ACTION_BUTTON_CLASSES,
  CARD_ACTION_BUTTON_VARIANT_CLASSES,
  CARD_PROGRESS_CONTAINER_CLASSES,
  CARD_PROGRESS_FILL_CLASSES,
  CARD_PROGRESS_VARIANT_CLASSES,
  getCardSizeClasses,
  getCardVariantClasses,
  getCardProgressVariantClasses
} from '$stylist/design-system/classes/cards';

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
    return `${CARD_HEADER_CLASSES} ${className || ''}`.trim();
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
    return `${CARD_SUBTITLE_CLASSES} ${className || ''}`.trim();
  }

  /**
   * Get body classes
   */
  static getBodyClasses(className?: string): string {
    return `${CARD_BODY_CLASSES} ${className || ''}`.trim();
  }

  /**
   * Get footer classes
   */
  static getFooterClasses(className?: string): string {
    return `${CARD_FOOTER_CLASSES} ${className || ''}`.trim();
  }

  /**
   * Get image container classes
   */
  static getImageContainerClasses(): string {
    return CARD_IMAGE_CONTAINER_CLASSES;
  }

  /**
   * Get image classes
   */
  static getImageClasses(className?: string): string {
    return `${CARD_IMAGE_CLASSES} ${className || ''}`.trim();
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
    return `${CARD_ACTION_BUTTON_CLASSES} ${variantClass} ${className || ''}`.trim();
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

