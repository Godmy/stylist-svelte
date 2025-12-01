/**
 * Типы данных для компонента Heatmap
 * 
 * Эти типы определяют контракты для props и внутренних данных компонента,
 * обеспечивая строгую типизацию и улучшая поддерживаемость кода.
 */

import type { HTMLAttributes } from 'svelte/elements';

/**
 * Данные для отдельной ячейки тепловой карты
 */
export interface IHeatmapCell {
  /** Уникальный идентификатор ячейки */
  id: string;
  /** Название строки */
  row: string;
  /** Название столбца */
  column: string;
  /** Значение ячейки */
  value: number;
  /** Цвет ячейки (опционально) */
  color?: string;
  /** Описание ячейки (опционально) */
  description?: string;
}

/**
 * Расширенные данные для ячейки с вычисленными параметрами
 */
export interface IExtendedHeatmapCell extends IHeatmapCell {
  /** Позиция X на графике */
  x: number;
  /** Позиция Y на графике */
  y: number;
  /** Ширина ячейки */
  width: number;
  /** Высота ячейки */
  height: number;
  /** Цвет ячейки */
  color: string;
  /** Интенсивность значения (от 0 до 1) */
  intensity: number;
}

/**
 * Доступные цветовые схемы для тепловой карты
 */
export type THeatmapColorScheme = 'blue' | 'red' | 'green' | 'purple' | 'warm' | 'cool';

/**
 * Типы для пропсов компонента Heatmap
 */
export interface IHeatmapProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  /** Данные для отображения на тепловой карте */
  data: IHeatmapCell[];
  /** Заголовок тепловой карты */
  title?: string;
  /** Ширина компонента */
  width?: number;
  /** Высота компонента */
  height?: number;
  /** Показывать ли подсказки при наведении */
  showTooltip?: boolean;
  /** Показывать ли легенду */
  showLegend?: boolean;
  /** Цветовая схема отображения */
  colorScheme?: THeatmapColorScheme;
  /** Показывать ли оси координат */
  showAxis?: boolean;
  /** Цвет осей координат */
  axisColor?: string;
  /** Отступ внутри ячейки */
  cellPadding?: number;
  /** Обработчик клика по ячейке */
  onCellClick?: (item: IHeatmapCell) => void;
  /** Дополнительные CSS классы для контейнера */
  class?: string;
  /** Дополнительные CSS классы для области диаграммы */
  chartClass?: string;
  /** Максимальное значение для нормализации цвета (если не указано, будет вычислено автоматически) */
  maxValue?: number;
  /** Минимальное значение для нормализации цвета */
  minValue?: number;
}

/**
 * Остальные пропсы, кроме class
 */
export type TRestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;