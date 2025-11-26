import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IStrikethroughProps {
  /**
   * Содержимое элемента `<s>`.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
  /**
   * Указывает, что элемент должен быть скрыт от вспомогательных технологий.
   */
  ariaHidden?: boolean;
}

export type StrikethroughProps = IStrikethroughProps & HTMLAttributes<HTMLElement>;
