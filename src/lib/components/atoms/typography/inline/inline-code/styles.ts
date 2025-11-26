import type { InlineCodeVariant } from './types';
import { BASE_INLINE_CODE_CLASSES, INLINE_CODE_VARIANT_CLASSES } from './constant';

export class InlineCodeStyleManager {
  static getInlineCodeClasses(
    variant: InlineCodeVariant,
    className: string | undefined
  ): string {
    const classes = [
      BASE_INLINE_CODE_CLASSES,
      INLINE_CODE_VARIANT_CLASSES[variant],
      className
    ];
    return classes.filter(Boolean).join(' ');
  }
}
