import type { HTMLAttributes } from 'svelte/elements';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';

export interface IInputGroupProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  buttonLabel?: string;
  buttonVariant?: ButtonVariant;
  buttonDisabled?: boolean;
  className?: string;
  onButtonClick?: () => void;
}

export const getInputGroupContainerClasses = () => {
  return "flex rounded-md shadow-sm";
};

export const getInputGroupInputClasses = (className: string) => {
  return `rounded-none rounded-l-md focus:z-10 border-r-0 ${className}`.trim();
};

export const getInputGroupButtonClasses = () => {
  return "rounded-none rounded-r-md -ml-px";
};

