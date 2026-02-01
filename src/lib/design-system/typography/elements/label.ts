import type { HTMLLabelAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type LabelSize = 'sm' | 'md' | 'lg';

export interface LabelProps extends HTMLLabelAttributes {
  size?: LabelSize;
  required?: boolean;
  disabled?: boolean;
  htmlFor?: string;
  text?: string;
  children?: Snippet;
  class?: string;
}

export const DEFAULT_LABEL_SIZE: LabelSize = 'md';
export const DEFAULT_LABEL_REQUIRED = false;
export const DEFAULT_LABEL_DISABLED = false;

const BASE_LABEL_CLASSES = 'font-medium';
const REQUIRED_INDICATOR_CLASSES = 'text-red-500';
const LABEL_SIZE_CLASSES: Record<LabelSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
};
const LABEL_DISABLED_CLASSES = 'text-gray-400 cursor-not-allowed';
const LABEL_ENABLED_CLASSES = 'text-gray-700';

export const getLabelClasses = (size: LabelSize, disabled: boolean, className = '') => {
  return [
    BASE_LABEL_CLASSES,
    LABEL_SIZE_CLASSES[size],
    disabled ? LABEL_DISABLED_CLASSES : LABEL_ENABLED_CLASSES,
    className
  ]
    .filter(Boolean)
    .join(' ');
};

export const getRequiredIndicatorClasses = () => REQUIRED_INDICATOR_CLASSES;
