import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface IHeadingProps {
  /**
   * Содержимое заголовка.
   */
  children?: Snippet;
  /**
   * Размер заголовка (используется для стилизации, если `level` не указан).
   * @default 'h1'
   */
  size?: HeadingSize;
  /**
   * Уровень заголовка (используется для семантики `h1`-`h6`).
   */
  level?: HeadingLevel;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type HeadingProps = IHeadingProps & HTMLAttributes<HTMLHeadingElement>;
