import type { HTMLAttributes } from 'svelte/elements';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ComponentSize | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  class?: string;
}
