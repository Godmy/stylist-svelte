import type { HTMLAttributes } from 'svelte/elements';

export type RadioButtonGroupOrientation = 'horizontal' | 'vertical';

export interface RadioButtonOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  options: RadioButtonOption[];
  value?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  orientation?: RadioButtonGroupOrientation;
  class?: string;
  optionClass?: string;
  labelClass?: string;
  radioClass?: string;
  onInput?: (value: string) => void;
  onChange?: (value: string) => void;
}

export const DEFAULT_RADIO_GROUP_ORIENTATION: RadioButtonGroupOrientation = 'vertical';

export const getRadioGroupContainerClass = (
  orientation: RadioButtonGroupOrientation,
  className = ''
) => {
  const baseClass = 'space-y-2';
  const orientationClass =
    orientation === 'horizontal' ? 'flex flex-row space-y-0 space-x-[--spacing-lg]' : '';
  return [baseClass, orientationClass, className].filter(Boolean).join(' ');
};

export const getRadioGroupOptionClass = (
  orientation: RadioButtonGroupOrientation,
  disabled: boolean,
  optionClass = ''
) => {
  const baseClass = 'flex items-center';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const marginClass = orientation === 'horizontal' ? 'mr-[--spacing-lg]' : 'mb-[--spacing-sm]';
  return [baseClass, disabledClass, marginClass, optionClass].filter(Boolean).join(' ');
};

export const getRadioGroupInputClass = (radioClass = '') => {
  const baseClass =
    'h-4 w-4 text-[--color-primary-600] border-[--color-border-primary] focus:ring-[--color-primary-500]';
  return radioClass ? `${baseClass} ${radioClass}`.trim() : baseClass;
};

export const getRadioGroupLabelClass = (labelClass = '') => {
  const baseClass = 'ml-[--spacing-sm] block text-sm font-medium text-[--color-text-primary]';
  return labelClass ? `${baseClass} ${labelClass}`.trim() : baseClass;
};
