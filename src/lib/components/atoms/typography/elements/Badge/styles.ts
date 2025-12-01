import type { BadgeVariant, BadgeSize } from './types';
import { VARIANT_CLASSES, BADGE_SIZE_CLASSES, BASE_BADGE_CLASSES } from './constant';

export class BadgeStyleManager {
  static getBadgeClasses(
    variant: BadgeVariant = 'default',
    size: BadgeSize = 'md',
    additionalClass: string = ''
  ): string {
    const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.default;
    const sizeClass = BADGE_SIZE_CLASSES[size] || BADGE_SIZE_CLASSES.md;

    return `${BASE_BADGE_CLASSES} ${variantClass} ${sizeClass} ${additionalClass}`.trim();
  }
}