import { twMerge } from 'tailwind-merge';
import {
  DEFAULT_BLOCKQUOTE_CLASSES,
  BORDER_BLOCKQUOTE_CLASSES,
  BACKGROUND_BLOCKQUOTE_CLASSES,
  FOOTER_CLASSES
} from './constant';

export class BlockquoteStyleManager {
  static getBlockquoteClasses(
    withBorder: boolean,
    withBackground: boolean,
    className: string | undefined
  ): string {
    const classes = [DEFAULT_BLOCKQUOTE_CLASSES];

    if (withBorder) {
      classes.push(BORDER_BLOCKQUOTE_CLASSES);
    }

    if (withBackground) {
      classes.push(BACKGROUND_BLOCKQUOTE_CLASSES);
    }

    return twMerge(classes.join(' '), className);
  }

  static getFooterClasses(): string {
    return twMerge(FOOTER_CLASSES);
  }
}