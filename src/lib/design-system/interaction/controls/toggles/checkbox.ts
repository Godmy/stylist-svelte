import type { HTMLInputAttributes } from 'svelte/elements';

export interface CheckboxProps extends HTMLInputAttributes {
  id: string;
  label: string;
  description?: string;
  checked?: boolean;
  errors?: string[];
  required?: boolean;
  disabled?: boolean;
  class?: string;
}

export const DEFAULT_CHECKBOX_CHECKED = false;
export const DEFAULT_CHECKBOX_ERRORS: string[] = [];
export const DEFAULT_CHECKBOX_REQUIRED = false;
export const DEFAULT_CHECKBOX_DISABLED = false;

export const getCheckboxContainerClasses = (className = '') => {
  return `flex items-start space-x-2 ${className}`.trim();
};

export const getCheckboxWrapperClasses = () => 'flex items-center h-5';

export const getCheckboxInputClasses = (hasError: boolean, disabled: boolean) => {
  const baseClasses = 'h-4 w-4 rounded border text-[--color-primary-500] focus:ring-[--color-primary-500]';
  const errorClasses = hasError ? 'border-[--color-danger-500] focus:ring-[--color-danger-500]' : 'border-[--color-border-primary]';
  const disabledClasses = disabled ? 'cursor-not-allowed opacity-50' : '';
  return `${baseClasses} ${errorClasses} ${disabledClasses}`.trim();
};

export const getCheckboxLabelWrapperClasses = () => 'ml-2';

export const getCheckboxLabelClasses = (disabled: boolean) => {
  const baseClasses = 'block text-sm font-medium leading-5';
  const disabledClasses = disabled ? 'text-[--color-text-disabled]' : 'text-[--color-text-primary]';
  return `${baseClasses} ${disabledClasses}`.trim();
};

export const getCheckboxDescriptionClasses = () => 'block text-sm text-[--color-text-secondary]';

export const getCheckboxInputWrapperClasses = () => 'flex items-center h-5';

export const getCheckboxErrorClasses = () => 'mt-1 text-sm text-[--color-danger-500]';