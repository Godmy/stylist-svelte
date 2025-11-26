import type { SeparatorOrientation } from './types';
import {
  BASE_SEPARATOR_CLASSES,
  SEPARATOR_ORIENTATION_CLASSES
} from './constant';

export class SeparatorStyleManager {
  static getSeparatorClasses(
    orientation: SeparatorOrientation,
    className: string | undefined
  ): string {
    const classes = [
      BASE_SEPARATOR_CLASSES,
      SEPARATOR_ORIENTATION_CLASSES[orientation],
      className
    ];
    return classes.filter(Boolean).join(' ');
  }
}
