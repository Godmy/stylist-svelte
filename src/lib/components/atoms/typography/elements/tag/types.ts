import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type TagVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
export type TagSize = 'sm' | 'md';

export interface ITagProps {
  /**
   * Текст на теге.
   */
  text?: string;
  /**
   * Вариант цветовой схемы.
   * @default 'neutral'
   */
  variant?: TagVariant;
  /**
   * Размер тега.
   * @default 'md'
   */
  size?: TagSize;
  /**
   * Возможность закрытия тега.
   * @default false
   */
  closable?: boolean;
  /**
   * Отключенное состояние.
   * @default false
   */
  disabled?: boolean;
  /**
   * Иконка, отображаемая перед текстом тега.
   */
  icon?: Snippet;
  /**
   * Произвольное содержимое тега (альтернатива text).
   */
  content?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type TagProps = ITagProps & HTMLAttributes<HTMLSpanElement>;
