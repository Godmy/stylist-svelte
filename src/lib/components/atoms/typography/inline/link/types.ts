import type { HTMLAnchorAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type LinkVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'underline';
export type LinkSize = 'sm' | 'md' | 'lg';

export interface ILinkProps {
  /**
   * Вариант стиля ссылки.
   * @default 'primary'
   */
  variant?: LinkVariant;
  /**
   * Размер ссылки.
   * @default 'md'
   */
  size?: LinkSize;
  /**
   * Отключенное состояние.
   * @default false
   */
  disabled?: boolean;
  /**
   * Добавлять ли подчеркивание к ссылке.
   * @default true
   */
  underline?: boolean;
  /**
   * URL, на который ведет ссылка.
   */
  href?: string;
  /**
   * Целевое окно/фрейм для перехода по ссылке.
   */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /**
   * Текстовое содержимое ссылки.
   */
  text?: string;
  /**
   * Содержимое слота ссылки (альтернатива `text`).
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type LinkProps = ILinkProps & HTMLAnchorAttributes;
