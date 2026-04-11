import type { ComponentType, Snippet } from 'svelte';

export type Props = {
  component: ComponentType | null | undefined;
  props?: Record<string, any>;
  children?: Snippet;
}
