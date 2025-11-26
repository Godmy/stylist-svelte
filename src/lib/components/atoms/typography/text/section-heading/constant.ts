import type { SectionHeadingSize } from './types';

// Default values
export const DEFAULT_SECTION_HEADING_LEVEL: 1 | 2 | 3 | 4 | 5 | 6 = 2;
export const DEFAULT_SECTION_HEADING_SIZE: SectionHeadingSize = 'lg';

// Base classes for section headings
export const BASE_SECTION_HEADING_CLASSES = 'font-semibold text-gray-900';

// Size classes for section headings
export const SECTION_HEADING_SIZE_CLASSES: Record<SectionHeadingSize, string> = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl'
};
