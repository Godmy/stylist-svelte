import { BASE_SMALL_CLASSES } from './constant';

export class SmallStyleManager {
  static getSmallClasses(className: string | undefined): string {
    return [BASE_SMALL_CLASSES, className].filter(Boolean).join(' ');
  }
}
