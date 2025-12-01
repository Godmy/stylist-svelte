/**
 * Типы для компонента AnalyticsChart
 * Следует принципам SOLID и архитектуре SAMO
 */

import type { HTMLAttributes } from 'svelte/elements';

/** Тип диаграммы */
export type ChartType = 'line' | 'bar' | 'area' | 'pie' | 'doughnut';

/** Данные для точки на диаграмме */
export type ChartDataPoint = {
  label: string;
  value: number;
  color?: string;
};

/** Пропсы компонента AnalyticsChart */
export interface IAnalyticsChartProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  data: ChartDataPoint[];
  type?: ChartType;
  showLegend?: boolean;
  showTooltip?: boolean;
  showTrend?: boolean;
  trendValue?: number;
  height?: number;
  width?: number;
  class?: string;
  chartClass?: string;
  legendClass?: string;
}