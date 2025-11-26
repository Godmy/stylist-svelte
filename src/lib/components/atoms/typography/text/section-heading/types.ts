import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type SectionHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type SectionHeadingSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ISectionHeadingProps {
  /**
   * Уровень заголовка (1-6) для семантики HTML (например, h1, h2).
   * @default 2
   */
  level?: SectionHeadingLevel;
  /**
   * Визуальный размер заголовка ('sm' | 'md' | 'lg' | 'xl').
   * @default 'lg'
   */
  size?: SectionHeadingSize;
  /**
   * Содержимое заголовка секции.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type SectionHeadingProps = ISectionHeadingProps & HTMLAttributes<HTMLHeadingElement>;
