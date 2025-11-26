import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IKbdProps {
  /**
   * Содержимое элемента `<kbd>`.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type KbdProps = IKbdProps & HTMLAttributes<HTMLElement>;
