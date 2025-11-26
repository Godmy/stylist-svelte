import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type InlineCodeVariant = 'default' | 'accent' | 'success' | 'warning' | 'danger';

export interface IInlineCodeProps {
  /**
   * Вариант стиля.
   * @default 'default'
   */
  variant?: InlineCodeVariant;
  /**
   * Содержимое встроенного кода.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type InlineCodeProps = IInlineCodeProps & HTMLAttributes<HTMLElement>;
