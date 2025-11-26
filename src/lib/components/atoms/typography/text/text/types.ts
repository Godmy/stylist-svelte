import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type TextType = 'p' | 'span' | 'div' | 'label';
export type TextSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ITextProps {
  /**
   * Содержимое текстового элемента.
   */
  children?: Snippet;
  /**
   * HTML-элемент для рендеринга.
   * @default 'p'
   */
  as?: TextType;
  /**
   * Размер текста.
   * @default 'md'
   */
  size?: TextSize;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
  /**
   * Сделать текст приглушенным.
   * @default false
   */
  muted?: boolean;
  /**
   * Сделать текст полужирным.
   * @default false
   */
  bold?: boolean;
  /**
   * Сделать текст курсивным.
   * @default false
   */
  italic?: boolean;
}

export type TextProps = ITextProps & HTMLAttributes<HTMLElement>;
