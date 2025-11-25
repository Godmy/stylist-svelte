import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type ChipVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ChipSize = 'sm' | 'md' | 'lg';

export interface IChipProps {
  /**
   * Текст на чипе. Если передан `children`, то он будет отображен вместо `label`.
   */
  label?: string;
  /**
   * Вариант цветовой схемы.
   * @default 'primary'
   */
  variant?: ChipVariant;
  /**
   * Размер чипа.
   * @default 'md'
   */
  size?: ChipSize;
  /**
   * Возможность закрытия чипа.
   * @default false
   */
  closable?: boolean;
  /**
   * Отключенное состояние.
   * @default false
   */
  disabled?: boolean;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
  /**
   * Содержимое чипа (альтернатива label).
   */
  children?: Snippet;
}

export type ChipProps = IChipProps & HTMLAttributes<HTMLDivElement>;
