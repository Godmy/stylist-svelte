import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IAbbrProps {
  /**
   * Содержимое аббревиатуры.
   */
  children?: Snippet;
  /**
   * Полное название, отображаемое при наведении.
   */
  title?: string;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type AbbrProps = IAbbrProps & HTMLAttributes<HTMLElement>;
