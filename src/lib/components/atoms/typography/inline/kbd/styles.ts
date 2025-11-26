import { BASE_KBD_CLASSES } from './constant';

export class KbdStyleManager {
  static getKbdClasses(className: string | undefined): string {
    return [BASE_KBD_CLASSES, className].filter(Boolean).join(' ');
  }
}
