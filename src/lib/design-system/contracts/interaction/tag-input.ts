import type { HTMLAttributes } from 'svelte/elements';

export interface TagInputProps extends HTMLAttributes<HTMLDivElement> {
  tags?: string[];
  placeholder?: string;
  class?: string;
}
