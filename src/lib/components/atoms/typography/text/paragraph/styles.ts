import type { ParagraphSize } from './types';
import {
  BASE_PARAGRAPH_CLASSES,
  PARAGRAPH_SIZE_CLASSES,
  PARAGRAPH_MUTED_CLASSES,
  PARAGRAPH_DEFAULT_TEXT_CLASSES
} from './constant';

export class ParagraphStyleManager {
  static getParagraphClasses(
    size: ParagraphSize,
    muted: boolean,
    className: string | undefined
  ): string {
    const classes = [
      BASE_PARAGRAPH_CLASSES,
      PARAGRAPH_SIZE_CLASSES[size],
      muted ? PARAGRAPH_MUTED_CLASSES : PARAGRAPH_DEFAULT_TEXT_CLASSES,
      className
    ];
    return classes.filter(Boolean).join(' ');
  }
}
