import type { HTMLAttributes } from 'svelte/elements';

export type LoaderProps = {
  class?: string;
} & HTMLAttributes<HTMLDivElement>;