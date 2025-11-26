import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type IndicatorStatus = 'online' | 'offline' | 'away' | 'busy';

export interface IStatusIndicatorProps {
  /**
   * Статус индикатора.
   * @default 'online'
   */
  status?: IndicatorStatus;
  /**
   * Текстовая метка для индикатора. Если не указана, будет использоваться значение по умолчанию для статуса.
   */
  label?: string;
  /**
   * Содержимое слота (если требуется вставка других элементов).
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы для контейнера.
   */
  class?: string;
}

export type StatusIndicatorProps = IStatusIndicatorProps & HTMLAttributes<HTMLSpanElement>;
