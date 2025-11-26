import { BASE_STRONG_CLASSES } from './constant';

export class StrongStyleManager {
  static getStrongClasses(className: string | undefined): string {
    return [BASE_STRONG_CLASSES, className].filter(Boolean).join(' ');
  }
}
