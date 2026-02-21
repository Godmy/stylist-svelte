import type { HTMLAttributes } from 'svelte/elements';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  class?: string;
}
