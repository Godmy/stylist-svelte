import { BASE_HIGHLIGHT_CLASSES } from './constant';

export class HighlightStyleManager {
  static getHighlightClasses(className: string | undefined): string {
    return [BASE_HIGHLIGHT_CLASSES, className].filter(Boolean).join(' ');
  }
}
