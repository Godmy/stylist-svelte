import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface ISmallProps {
  /**
   * Содержимое элемента `<small>`.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type SmallProps = ISmallProps & HTMLAttributes<HTMLElement>;
