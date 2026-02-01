import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { BaseTagProps, BaseTagVariant, BaseTagSize } from './BaseTag';
import { getBaseTagClasses, getBaseTagCloseButtonClasses, getBaseTagCloseButtonIconClasses } from './BaseTag';

export type TagVariant = BaseTagVariant;
export type TagSize = BaseTagSize;

export interface TagProps extends BaseTagProps<HTMLSpanElement> {
  text?: string;
  icon?: Snippet;
  content?: Snippet;
}

export const DEFAULT_TAG_VARIANT: TagVariant = 'neutral';
export const DEFAULT_TAG_SIZE: TagSize = 'md';
export const DEFAULT_TAG_CLOSABLE = false;
export const DEFAULT_TAG_DISABLED = false;

// Функции для получения классов для Tag
export const getTagClasses = (
  variant: TagVariant,
  size: TagSize,
  disabled: boolean,
  className = ''
) => {
  return getBaseTagClasses('border rounded-full', variant, size, disabled, className);
};

export const getTagCloseButtonClasses = (variant: TagVariant, className = '') => {
  return getBaseTagCloseButtonClasses(variant, className);
};

export const getTagCloseButtonIconClasses = (size: TagSize) => {
  return getBaseTagCloseButtonIconClasses(size);
};
