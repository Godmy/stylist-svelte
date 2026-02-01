import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  children?: Snippet;
  class?: string;
  ariaLabel?: string;
}

export function createTypographyState(props: TypographyProps) {
  const classes = `${props.class || ''}`;
  
  return {
    classes
  };
}