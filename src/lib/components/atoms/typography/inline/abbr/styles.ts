import { BASE_ABBR_CLASSES } from './constant';

export class AbbrStyleManager {
  static getAbbrClasses(className: string | undefined): string {
    return [BASE_ABBR_CLASSES, className].filter(Boolean).join(' ');
  }
}
