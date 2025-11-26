import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IEmProps {
  /**
   * Содержимое элемента `<em>`.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type EmProps = IEmProps & HTMLAttributes<HTMLElement>;
