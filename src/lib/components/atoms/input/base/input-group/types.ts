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