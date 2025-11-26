import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IHighlightProps {
  /**
   * Содержимое элемента `<mark>`.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type HighlightProps = IHighlightProps & HTMLAttributes<HTMLElement>;
