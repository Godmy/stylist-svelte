import type { ListItemColor, ListItemSize } from './types';
import {
  BASE_MARKER_CLASSES,
  MARKER_COLOR_CLASSES,
  MARKER_SIZE_CLASSES,
  BULLET_CLASSES,
  BULLET_SIZE_CLASSES
} from './constant';

export class ListItemMarkerStyleManager {
  static getMarkerClasses(
    color: ListItemColor,
    size: ListItemSize,
    className: string | undefined
  ): string {
    const classes = [
      BASE_MARKER_CLASSES,
      MARKER_COLOR_CLASSES[color],
      MARKER_SIZE_CLASSES[size],
      className
    ];
    return classes.filter(Boolean).join(' ');
  }

  static getBulletClasses(size: ListItemSize): string {
    return [BULLET_CLASSES, BULLET_SIZE_CLASSES[size]].filter(Boolean).join(' ');
  }
}
