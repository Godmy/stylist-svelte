import type { HTMLAttributes } from 'svelte/elements';

export type Props = {
  class?: string;
} & HTMLAttributes<HTMLDivElement>;

