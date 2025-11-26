import { BASE_SUPERSCRIPT_CLASSES } from './constant';

export class SuperscriptStyleManager {
  static getSuperscriptClasses(className: string | undefined): string {
    return [BASE_SUPERSCRIPT_CLASSES, className].filter(Boolean).join(' ');
  }
}
