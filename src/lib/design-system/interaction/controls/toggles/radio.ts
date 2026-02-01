import type { HTMLInputAttributes } from 'svelte/elements';

export interface RadioProps extends HTMLInputAttributes {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  required?: boolean;
  class?: string;
}

export const getRadioContainerClasses = () => 'flex items-center space-x-[--spacing-sm]';

export const getRadioInputClasses = (disabled: boolean) => {
  const baseClasses =
    'h-4 w-4 text-[--color-primary-600] focus:ring-[--color-primary-500] border-[--color-border-primary]';
  const disabledClass = disabled ? 'cursor-not-allowed text-[--color-text-secondary]' : 'cursor-pointer';
  return `${baseClasses} ${disabledClass}`.trim();
};

export const getRadioLabelClasses = (disabled: boolean) => {
  const baseClasses = 'block text-sm font-medium text-[--color-text-primary]';
  const disabledClass = disabled ? 'cursor-not-allowed text-[--color-text-secondary]' : 'cursor-pointer';
  return `${baseClasses} ${disabledClass}`.trim();
};
