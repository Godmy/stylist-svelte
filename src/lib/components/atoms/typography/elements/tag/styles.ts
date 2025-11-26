import type { TagVariant, TagSize } from './types';
import {
  BASE_TAG_CLASSES,
  DISABLED_TAG_CLASSES,
  ENABLED_TAG_CLASSES,
  TAG_VARIANT_CLASSES,
  TAG_SIZE_CLASSES,
  BASE_CLOSE_BUTTON_CLASSES,
  DISABLED_CLOSE_BUTTON_CLASSES,
  CLOSE_BUTTON_ICON_CLASSES
} from './constant';

export class TagStyleManager {
  static getTagClasses(
    variant: TagVariant,
    size: TagSize,
    disabled: boolean,
    className: string | undefined
  ): string {
    const classes = [
      BASE_TAG_CLASSES,
      TAG_VARIANT_CLASSES[variant],
      TAG_SIZE_CLASSES[size],
      disabled ? DISABLED_TAG_CLASSES : ENABLED_TAG_CLASSES,
      className
    ];
    return classes.filter(Boolean).join(' ');
  }

  static getCloseButtonClasses(disabled: boolean): string {
    const classes = [
      BASE_CLOSE_BUTTON_CLASSES,
      disabled ? DISABLED_CLOSE_BUTTON_CLASSES : ''
    ];
    return classes.filter(Boolean).join(' ');
  }

  static getCloseButtonIconClasses(): string {
    return CLOSE_BUTTON_ICON_CLASSES;
  }
}
