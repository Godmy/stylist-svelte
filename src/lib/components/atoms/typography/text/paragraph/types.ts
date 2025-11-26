import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type ParagraphSize = 'sm' | 'md' | 'lg';

export interface IParagraphProps {
  /**
   * Размер параграфа.
   * @default 'md'
   */
  size?: ParagraphSize;
  /**
   * Сделать текст параграфа приглушенным.
   * @default false
   */
  muted?: boolean;
  /**
   * Содержимое слота параграфа.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type ParagraphProps = IParagraphProps & HTMLAttributes<HTMLParagraphElement>;
