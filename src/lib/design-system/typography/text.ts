import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface CaptionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  children?: Snippet;
  class?: string;
  ariaLabel?: string;
}

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  children?: Snippet;
  class?: string;
  ariaLabel?: string;
}

export interface ParagraphProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  children?: Snippet;
  class?: string;
  ariaLabel?: string;
}

export interface SmallProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  children?: Snippet;
  class?: string;
  ariaLabel?: string;
}

export interface StrikethroughProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  children?: Snippet;
  class?: string;
  ariaLabel?: string;
}

export interface StrongProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  children?: Snippet;
  class?: string;
  ariaLabel?: string;
}

export interface SubscriptProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  children?: Snippet;
  class?: string;
  ariaLabel?: string;
}

export interface SuperscriptProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  children?: Snippet;
  class?: string;
  ariaLabel?: string;
}

export interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  children?: Snippet;
  class?: string;
  ariaLabel?: string;
}

export const getCaptionClasses = (className = '') => {
  return `text-sm ${className}`.trim();
};