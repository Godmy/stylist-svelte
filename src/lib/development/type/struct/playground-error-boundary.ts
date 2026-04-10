import type { ComponentType, Snippet } from 'svelte';

export interface Props {
  component: ComponentType | null | undefined;
  props?: Record<string, any>;
  children?: Snippet;
}
