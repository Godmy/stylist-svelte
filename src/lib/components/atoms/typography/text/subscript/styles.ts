import { BASE_SUBSCRIPT_CLASSES } from './constant';

export class SubscriptStyleManager {
  static getSubscriptClasses(className: string | undefined): string {
    return [BASE_SUBSCRIPT_CLASSES, className].filter(Boolean).join(' ');
  }
}
