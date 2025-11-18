import type { IBlockquoteStyleClasses } from './types';
import {
  DEFAULT_BLOCKQUOTE_CLASSES,
  BORDER_BLOCKQUOTE_CLASSES,
  BACKGROUND_BLOCKQUOTE_CLASSES,
  DEFAULT_PADDING_CLASSES,
  FOOTER_CLASSES
} from './constant';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing blockquote styling logic
 */
export class BlockquoteStyleManager {
  static getBlockquoteClasses(withBorder: boolean, withBackground: boolean, className: string): string {
    let classes = DEFAULT_BLOCKQUOTE_CLASSES;

    if (withBorder) {
      classes += ` ${BORDER_BLOCKQUOTE_CLASSES}`;
    }

    if (withBackground) {
      classes += ` ${BACKGROUND_BLOCKQUOTE_CLASSES}`;
    } else {
      classes += ` ${DEFAULT_PADDING_CLASSES}`;
    }

    return classes + ` ${className}`.trim();
  }

  static getFooterClasses(): string {
    return FOOTER_CLASSES;
  }

  static getAllClasses(withBorder: boolean, withBackground: boolean, className: string): string {
    const blockquoteClasses = this.getBlockquoteClasses(withBorder, withBackground, className);
    return blockquoteClasses;
  }
}