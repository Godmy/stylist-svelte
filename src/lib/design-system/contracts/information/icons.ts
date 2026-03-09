import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { DefaultVariants } from '$stylist/design-system/tokens/information/input-variants';

export interface IconChevronProps extends HTMLAttributes<HTMLSpanElement> {
  direction?: 'up' | 'down' | 'left' | 'right';
  size?: ComponentSize | '2xl';
  class?: string;
  isOpen?: boolean;
  variant?: DefaultVariants;
  disabled?: boolean;
}

export interface IconCircleProps extends HTMLAttributes<HTMLDivElement> {
  size?: ComponentSize;
  class?: string;
  variant?: DefaultVariants | 'success' | 'warning' | 'danger';
  filled?: boolean;
  disabled?: boolean;
  icon?: Snippet;
}

export interface IconWrapperProps extends HTMLAttributes<HTMLDivElement> {
  size?: ComponentSize;
  variant?: DefaultVariants | 'success' | 'warning' | 'danger';
  shape?: 'circle' | 'square' | 'rounded' | 'pill';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  class?: string;
  content?: Snippet;
}
