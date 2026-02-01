import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type LinkVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted';
export type LinkSize = 'sm' | 'md' | 'lg';

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  size?: LinkSize;
  disabled?: boolean;
  underline?: boolean;
  href?: string;
  target?: string;
  text?: string;
  children?: Snippet;
  class?: string;
}

export const DEFAULT_LINK_VARIANT: LinkVariant = 'default';
export const DEFAULT_LINK_SIZE: LinkSize = 'md';
export const DEFAULT_LINK_DISABLED = false;
export const DEFAULT_LINK_UNDERLINE = true;

const LINK_VARIANT_CLASSES: Record<LinkVariant, string> = {
  default: 'text-[--color-text-primary]',
  primary: 'text-[--color-primary-600]',
  secondary: 'text-[--color-secondary-600]',
  success: 'text-[--color-success-600]',
  warning: 'text-[--color-warning-600]',
  danger: 'text-[--color-danger-600]',
  info: 'text-[--color-info-600]',
  muted: 'text-[--color-text-tertiary]'
};

const LINK_SIZE_CLASSES: Record<LinkSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
};

export const getLinkClasses = (
  variant: LinkVariant,
  size: LinkSize,
  disabled: boolean,
  underline: boolean,
  className = ''
) => {
  const underlineClass = underline ? 'underline underline-offset-2' : '';
  const disabledClass = disabled ? 'opacity-50 pointer-events-none' : 'hover:opacity-80';
  return `${LINK_VARIANT_CLASSES[variant]} ${LINK_SIZE_CLASSES[size]} ${underlineClass} ${disabledClass} ${className}`.trim();
};
