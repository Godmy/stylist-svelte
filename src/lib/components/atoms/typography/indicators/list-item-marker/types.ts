import type { HTMLAttributes } from 'svelte/elements';

export type MarkerType = 'bullet' | 'number' | 'icon';
export type ListItemColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
export type ListItemSize = 'sm' | 'md' | 'lg';

export interface IListItemMarkerProps {
  /**
   * Тип маркера списка.
   * @default 'bullet'
   */
  type?: MarkerType;
  /**
   * Значение для маркера (например, число для нумерованного списка или название иконки).
   */
  value?: string | number;
  /**
   * Цвет маркера.
   * @default 'gray'
   */
  color?: ListItemColor;
  /**
   * Размер маркера.
   * @default 'md'
   */
  size?: ListItemSize;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type ListItemMarkerProps = IListItemMarkerProps & HTMLAttributes<HTMLSpanElement>;
