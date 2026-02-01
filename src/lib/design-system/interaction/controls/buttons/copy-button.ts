import type { HTMLButtonAttributes } from 'svelte/elements';
import type { ButtonVariant, ButtonSize } from './BaseButton';
import { getButtonClasses } from './BaseButton';

export interface CopyButtonProps extends HTMLButtonAttributes {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  class?: string;
  ariaLabel?: string;
  loadingLabel?: string;
  block?: boolean;
  children?: import('svelte').Snippet;
  text?: string;
  label?: string;
  successMessage?: string;
  showIcon?: boolean;
  onSuccess?: (text: string) => void;
  onError?: (error: Error) => void;
}

export const getCopyButtonClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  disabled = false,
  loading = false,
  className = ''
) => {
  return getButtonClasses(variant, size, disabled, loading, className);
};