import type { HTMLButtonAttributes } from 'svelte/elements';
import type { ButtonVariant, ButtonSize } from './BaseButton';
import { getButtonClasses } from './BaseButton';

export interface CloseButtonProps extends HTMLButtonAttributes {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  class?: string;
  ariaLabel?: string;
  loadingLabel?: string;
  block?: boolean;
  children?: import('svelte').Snippet;
}

export const getCloseButtonClasses = (
  variant: ButtonVariant = 'ghost',
  size: ButtonSize = 'md',
  disabled = false,
  loading = false,
  className = ''
) => {
  return getButtonClasses(variant, size, disabled, loading, className);
};