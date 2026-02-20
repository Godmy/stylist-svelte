import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IconChevronProps extends HTMLAttributes<HTMLSpanElement> {
  direction?: 'up' | 'down' | 'left' | 'right';
  size?: 'sm' | 'md' | 'lg' | '2xl';
  class?: string;
  isOpen?: boolean;
  variant?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
}

export interface IconCircleProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  filled?: boolean;
  disabled?: boolean;
  icon?: Snippet;
}

export interface IconWrapperProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  content?: Snippet;
}
