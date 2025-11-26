import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface ICaptionProps {
  /**
   * Сделать текст подписи приглушенным.
   * @default false
   */
  muted?: boolean;
  /**
   * Содержимое слота подписи.
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type CaptionProps = ICaptionProps & HTMLAttributes<HTMLDivElement>;
