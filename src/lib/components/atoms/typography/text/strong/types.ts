import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IStrongProps {
  /**
   * Содержимое элемента `<strong>`.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type StrongProps = IStrongProps & HTMLAttributes<HTMLElement>;
