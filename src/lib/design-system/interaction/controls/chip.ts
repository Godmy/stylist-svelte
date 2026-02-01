import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { BaseTagProps, BaseTagVariant, BaseTagSize } from './BaseTag';
import { getBaseTagClasses, getBaseTagCloseButtonClasses, getBaseTagCloseButtonIconClasses } from './BaseTag';

export type ChipVariant = BaseTagVariant;
export type ChipSize = BaseTagSize;

export interface ChipProps extends BaseTagProps<HTMLDivElement> {
  label?: string;
  children?: Snippet;
}

export const DEFAULT_CHIP_LABEL = '';
export const DEFAULT_CHIP_VARIANT: ChipVariant = 'primary';
export const DEFAULT_CHIP_SIZE: ChipSize = 'md';
export const DEFAULT_CHIP_CLOSABLE = false;
export const DEFAULT_CHIP_DISABLED = false;

// Функции для получения классов для Chip
export const getChipClasses = (
  variant: ChipVariant,
  size: ChipSize,
  disabled: boolean,
  className = ''
) => {
  return getBaseTagClasses('rounded-full', variant, size, disabled, className);
};

export const getChipCloseButtonClasses = (variant: ChipVariant, className = '') => {
  return getBaseTagCloseButtonClasses(variant, className);
};

export const getChipCloseButtonIconClasses = (size: ChipSize) => {
  return getBaseTagCloseButtonIconClasses(size);
};
