import type { TextSize } from './types';
import {
  TEXT_SIZE_CLASSES,
  TEXT_MUTED_CLASS,
  TEXT_BOLD_CLASS,
  TEXT_ITALIC_CLASS
} from './constant';

export class TextStyleManager {
  static getTextClasses(
    size: TextSize,
    muted: boolean,
    bold: boolean,
    italic: boolean,
    className: string | undefined
  ): string {
    const classes = [];

    // Size
    classes.push(TEXT_SIZE_CLASSES[size]);

    // Styles
    if (bold) classes.push(TEXT_BOLD_CLASS);
    if (italic) classes.push(TEXT_ITALIC_CLASS);
    if (muted) classes.push(TEXT_MUTED_CLASS);

    if (className) {
      classes.push(className);
    }

    return classes.filter(Boolean).join(' ');
  }
}
