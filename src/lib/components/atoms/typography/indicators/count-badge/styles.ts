import { BASE_COUNT_BADGE_CLASSES } from './constant';

export class CountBadgeStyleManager {
  static getCountBadgeClasses(className: string | undefined): string {
    return [BASE_COUNT_BADGE_CLASSES, className].filter(Boolean).join(' ');
  }
}
