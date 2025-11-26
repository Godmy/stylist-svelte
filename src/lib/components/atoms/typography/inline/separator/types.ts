import type { HTMLAttributes } from 'svelte/elements';

export type SeparatorOrientation = 'horizontal' | 'vertical';

export interface ISeparatorProps {
  /**
   * Ориентация разделителя.
   * @default 'horizontal'
   */
  orientation?: SeparatorOrientation;
  /**
   * Указывает, является ли разделитель декоративным (используется `div` вместо `hr`).
   * @default false
   */
  decorative?: boolean;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type SeparatorProps = ISeparatorProps & HTMLAttributes<HTMLDivElement | HTMLHRElement>;
