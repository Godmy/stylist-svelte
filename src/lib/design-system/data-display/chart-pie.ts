import type { HTMLAttributes } from 'svelte/elements';

export type ChartType = 'line' | 'bar' | 'area' | 'pie' | 'doughnut';

export type ChartDataPoint = {
  label: string;
  value: number;
  color?: string;
};

export interface PieChartProps extends HTMLAttributes<HTMLDivElement> {
  data: ChartDataPoint[];
  class?: string;
}

export const getPieChartContainerClass = (className = '') => {
  return `flex items-center justify-center h-full ${className}`.trim();
};

export const getPieChartSvgClass = () => {
  return 'overflow-visible';
};
