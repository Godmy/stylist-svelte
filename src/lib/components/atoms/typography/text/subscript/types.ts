import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface ISubscriptProps {
  /**
   * Содержимое элемента `<sub>`.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type SubscriptProps = ISubscriptProps & HTMLAttributes<HTMLElement>;
