import type { ChipVariant, ChipSize } from './types';
import {
  BASE_CHIP_CLASSES,
  CHIP_SIZE_CLASSES,
  CHIP_VARIANT_CLASSES,
  DISABLED_CHIP_CLASSES,
  ENABLED_CHIP_CLASSES,
  BASE_CLOSE_BUTTON_CLASSES,
  CLOSE_BUTTON_VARIANT_CLASSES,
  CLOSE_BUTTON_SIZE_CLASSES
} from './constant';

export class ChipStyleManager {
  static getChipClasses(
    variant: ChipVariant,
    size: ChipSize,
    disabled: boolean,
    className: string | undefined
  ): string {
    const classes = [
      BASE_CHIP_CLASSES,
      CHIP_SIZE_CLASSES[size],
      CHIP_VARIANT_CLASSES[variant],
      disabled ? DISABLED_CHIP_CLASSES : ENABLED_CHIP_CLASSES,
      className
    ];
    return classes.filter(Boolean).join(' ');
  }

  static getCloseButtonClasses(
    variant: ChipVariant,
    size: ChipSize,
    className: string | undefined
  ): string {
    const classes = [
      BASE_CLOSE_BUTTON_CLASSES,
      CLOSE_BUTTON_VARIANT_CLASSES[variant],
      className
    ];
    return classes.filter(Boolean).join(' ');
  }

  static getCloseButtonIconClasses(size: ChipSize): string {
    return CLOSE_BUTTON_SIZE_CLASSES[size];
  }
}
