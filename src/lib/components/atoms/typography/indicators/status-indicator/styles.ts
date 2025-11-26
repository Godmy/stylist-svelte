import type { IndicatorStatus } from './types';
import {
  BASE_CONTAINER_CLASSES,
  DOT_BASE_CLASSES,
  STATUS_CLASSES_MAP
} from './constant';

export class StatusIndicatorStyleManager {
  static getContainerClasses(className: string | undefined): string {
    return [BASE_CONTAINER_CLASSES, className].filter(Boolean).join(' ');
  }

  static getDotClasses(status: IndicatorStatus): string {
    const classes = [
      DOT_BASE_CLASSES,
      STATUS_CLASSES_MAP[status]
    ];
    return classes.filter(Boolean).join(' ');
  }
}
