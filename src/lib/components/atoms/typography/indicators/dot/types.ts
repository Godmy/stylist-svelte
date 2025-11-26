import type { HTMLAttributes } from 'svelte/elements';

export type DotColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
export type DotSize = 'sm' | 'md' | 'lg';

export interface IDotProps {
  /**
   * Цвет точки.
   * @default 'primary'
   */
  color?: DotColor;
  /**
   * Размер точки.
   * @default 'md'
   */
  size?: DotSize;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type DotProps = IDotProps & HTMLAttributes<HTMLSpanElement>;
