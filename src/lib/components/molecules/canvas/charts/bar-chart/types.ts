/**
 * Типы для компонента BarChart
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный файл отвечает только за типизацию компонента BarChart
 */

/**
 * Тип цветовой схемы диаграммы
 */
export type ColorScheme = 'default' | 'warm' | 'cool' | 'neutral';

/**
 * Интерфейс точки данных для диаграммы
 */
export interface IChartDataPoint {
  /**
   * Уникальный идентификатор точки данных
   */
  id: string;
  
  /**
   * Название/метка точки данных
   */
  name: string;
  
  /**
   * Значение точки данных
   */
  value: number;
  
  /**
   * Цвет точки данных
   */
  color?: string;
  
  /**
   * Описание точки данных
   */
  description?: string;
}

/**
 * Интерфейс позиции бара (столбца)
 */
export interface IBarPosition {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

/**
 * Интерфейс пропсов компонента BarChart
 */
export interface IBarChartProps {
  /**
   * Данные для отображения на диаграмме
   */
  data: IChartDataPoint[];
  
  /**
   * Заголовок диаграммы
   * @default 'Bar Chart'
   */
  title?: string;
  
  /**
   * Ширина диаграммы
   * @default 600
   */
  width?: number;
  
  /**
   * Высота диаграммы
   * @default 400
   */
  height?: number;
  
  /**
   * Показывать ли подсказку (тултип)
   * @default true
   */
  showTooltip?: boolean;
  
  /**
   * Показывать ли легенду
   * @default true
   */
  showLegend?: boolean;
  
  /**
   * Цветовая схема диаграммы
   * @default 'default'
   */
  colorScheme?: ColorScheme;
  
  /**
   * Максимальное значение для шкалы Y
   */
  maxValue?: number;
  
  /**
   * Расстояние между барами
   * @default 10
   */
  barGap?: number;
  
  /**
   * Ширина бара
   * @default 30
   */
  barWidth?: number;
  
  /**
   * Показывать ли оси
   * @default true
   */
  showAxis?: boolean;
  
  /**
   * Цвет осей
   * @default '#E5E7EB'
   */
  axisColor?: string;
  
  /**
   * Обработчик клика по бару
   */
  onBarClick?: (item: IChartDataPoint) => void;
  
  /**
   * Дополнительный CSS класс для контейнера
   */
  class?: string;
  
  /**
   * Дополнительный CSS класс для области диаграммы
   */
  chartClass?: string;
}