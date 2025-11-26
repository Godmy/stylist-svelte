import type { HeadingSize } from './types';

// Default values
export const DEFAULT_HEADING_SIZE: HeadingSize = 'h1';

// Base classes for headings
export const BASE_HEADING_CLASSES = 'font-bold';

// Size-specific classes for headings
export const HEADING_SIZE_CLASSES: Record<HeadingSize, string> = {
  h1: 'text-4xl md:text-5xl leading-tight',
  h2: 'text-3xl md:text-4xl leading-tight',
  h3: 'text-2xl md:text-3xl leading-snug',
  h4: 'text-xl md:text-2xl leading-snug',
  h5: 'text-lg md:text-xl leading-normal',
  h6: 'text-base md:text-lg leading-normal'
};
