import type { HeadingSize, HeadingLevel } from './types';
import {
  BASE_HEADING_CLASSES,
  HEADING_SIZE_CLASSES
} from './constant';

export class HeadingStyleManager {
  static getHeadingTag(size: HeadingSize, level: HeadingLevel | undefined): string {
    return level ? `h${level}` : size;
  }

  static getHeadingClasses(
    size: HeadingSize,
    level: HeadingLevel | undefined,
    className: string | undefined
  ): string {
    const headingTag = HeadingStyleManager.getHeadingTag(size, level);
    // Use `size` for styling, `headingTag` for semantics
    const styleTag = size || (headingTag as HeadingSize); // Cast to HeadingSize for indexer

    const classes = [
      BASE_HEADING_CLASSES,
      HEADING_SIZE_CLASSES[styleTag],
      className
    ];
    return classes.filter(Boolean).join(' ');
  }
}
