import { BASE_EM_CLASSES } from './constant';

export class EmStyleManager {
  static getEmClasses(className: string | undefined): string {
    return [BASE_EM_CLASSES, className].filter(Boolean).join(' ');
  }
}
