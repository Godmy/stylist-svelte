import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface ISuperscriptProps {
  /**
   * Содержимое элемента `<sup>`.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type SuperscriptProps = ISuperscriptProps & HTMLAttributes<HTMLElement>;
