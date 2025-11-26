import type { DotColor, DotSize } from './types';
import {
  BASE_DOT_CLASSES,
  DOT_COLOR_CLASSES,
  DOT_SIZE_CLASSES
} from './constant';

export class DotStyleManager {
  static getDotClasses(
    color: DotColor,
    size: DotSize,
    className: string | undefined
  ): string {
    const classes = [
      BASE_DOT_CLASSES,
      DOT_COLOR_CLASSES[color],
      DOT_SIZE_CLASSES[size],
      className
    ];
    return classes.filter(Boolean).join(' ');
  }
}
