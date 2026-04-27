import type { ComponentType, Snippet } from 'svelte';

export type PlaygroundErrorBoundaryProps = {
  component: ComponentType | null | undefined;
  props?: Record<string, any>;
  children?: Snippet;
}
