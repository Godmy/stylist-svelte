import type { HTMLLabelAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type LabelSize = 'sm' | 'md' | 'lg';

export interface ILabelProps {
  /**
   * Размер ярлыка.
   * @default 'md'
   */
  size?: LabelSize;
  /**
   * Указывает, является ли поле обязательным.
   * @default false
   */
  required?: boolean;
  /**
   * Отключенное состояние.
   * @default false
   */
  disabled?: boolean;
  /**
   * Атрибут `for` для связывания с элементом формы.
   */
  htmlFor?: string;
  /**
   * Текстовое содержимое ярлыка.
   */
  text?: string;
  /**
   * Содержимое слота ярлыка (альтернатива `text`).
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type LabelProps = ILabelProps & HTMLLabelAttributes;
