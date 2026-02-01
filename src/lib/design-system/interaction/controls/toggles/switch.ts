import type { HTMLInputAttributes } from 'svelte/elements';

export interface SwitchProps extends Omit<HTMLInputAttributes, 'size'> {
  id: string;
  label?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  switchSize?: SwitchSize;
  required?: boolean;
  class?: string;
}

export type SwitchSize = 'sm' | 'md' | 'lg';

export const DEFAULT_SWITCH_SIZE = 'md';

export const getSwitchInputClasses = (disabled: boolean) => {
  const baseClasses = 'peer sr-only';
  const disabledClasses = disabled ? 'cursor-not-allowed' : '';
  return `${baseClasses} ${disabledClasses}`.trim();
};

export const getSwitchTrackClasses = (switchSize: 'sm' | 'md' | 'lg', disabled: boolean) => {
  const sizeClasses = switchSize === 'sm' ? 'w-8 h-4' : switchSize === 'lg' ? 'w-12 h-6' : 'w-10 h-5';
  const baseClasses = 'relative inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary-500] focus-visible:ring-offset-2';
  const checkedClasses = 'bg-[--color-primary-500] peer-checked:peer-focus-visible:ring-[--color-primary-500]/50';
  const uncheckedClasses = 'bg-[--color-border-primary]';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  return `${baseClasses} ${checkedClasses} ${uncheckedClasses} ${disabledClasses} ${sizeClasses}`.trim();
};

export const getSwitchKnobClasses = (switchSize: 'sm' | 'md' | 'lg', disabled: boolean) => {
  const sizeClasses = switchSize === 'sm' ? 'h-3 w-3' : switchSize === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
  const baseClasses = 'pointer-events-none block rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition-transform';
  const checkedClasses = 'translate-x-4 peer-checked:translate-x-5';
  const uncheckedClasses = 'translate-x-0';
  const disabledClasses = disabled ? 'opacity-50' : '';
  return `${baseClasses} ${checkedClasses} ${uncheckedClasses} ${disabledClasses} ${sizeClasses}`.trim();
};

export const getSwitchLabelClasses = () => 'flex items-center justify-between cursor-pointer';

export const getSwitchLabelTextClasses = () => 'flex flex-col ml-3';

export const getSwitchLabelTitleClasses = () => 'text-sm font-medium leading-none text-[--color-text-primary]';

export const getSwitchLabelDescriptionClasses = () => 'text-xs text-[--color-text-secondary]';

export const getSwitchRequiredMarkerClasses = () => 'text-[--color-danger-500] ml-1';