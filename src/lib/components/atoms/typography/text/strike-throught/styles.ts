import { BASE_STRIKETHROUGH_CLASSES } from './constant';

export class StrikethroughStyleManager {
  static getStrikethroughClasses(className: string | undefined): string {
    return [BASE_STRIKETHROUGH_CLASSES, className].filter(Boolean).join(' ');
  }
}
