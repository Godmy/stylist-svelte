import type { SectionHeadingSize } from './types';
import {
  BASE_SECTION_HEADING_CLASSES,
  SECTION_HEADING_SIZE_CLASSES
} from './constant';

export class SectionHeadingStyleManager {
  static getSectionHeadingClasses(
    size: SectionHeadingSize,
    className: string | undefined
  ): string {
    const classes = [
      BASE_SECTION_HEADING_CLASSES,
      SECTION_HEADING_SIZE_CLASSES[size],
      className
    ];
    return classes.filter(Boolean).join(' ');
  }
}
