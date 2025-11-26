import type { LabelSize } from './types';
import {
  BASE_LABEL_CLASSES,
  LABEL_SIZE_CLASSES,
  LABEL_DISABLED_CLASSES,
  LABEL_ENABLED_CLASSES
} from './constant';

export class LabelStyleManager {
  static getLabelClasses(
    size: LabelSize,
    disabled: boolean,
    className: string | undefined
  ): string {
    const classes = [
      BASE_LABEL_CLASSES,
      LABEL_SIZE_CLASSES[size],
      disabled ? LABEL_DISABLED_CLASSES : LABEL_ENABLED_CLASSES,
      className
    ];
    return classes.filter(Boolean).join(' ');
  }
}
