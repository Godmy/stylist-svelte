import { BASE_CLASSES } from './classes';
import { VARIANT_CLASSES } from './interaction';

export const BASE_CARD_BASE_CLASSES = `${BASE_CLASSES.card} bg-[--color-background-primary] overflow-hidden`;

export const BASE_CARD_VARIANT_CLASSES = {
  ...VARIANT_CLASSES,
  outline: 'bg-transparent',
  ghost: 'bg-transparent border-none shadow-none'
} as const;

export const BASE_CARD_SIZE_CLASSES = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6'
} as const;

export const BASE_CARD_HEADER_CLASSES = 'border-b p-[--spacing-md]';

export const BASE_CARD_TITLE_CLASSES = 'text-lg font-medium text-[--color-text-primary]';

export const BASE_CARD_DESCRIPTION_CLASSES = 'pt-[--spacing-xs] text-sm text-[--color-text-secondary]';

export const BASE_CARD_BODY_CLASSES = 'p-[--spacing-md]';