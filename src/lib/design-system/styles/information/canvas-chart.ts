import { cn } from '../../utils/cn/index';

export type ChartType = 'line' | 'bar' | 'pie';

export class CanvasChartStyleManager {
  static getWrapperClasses(className = ''): string {
    return cn(
      'c-canvas-chart',
      'relative',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      className
    );
  }

  static getCanvasClasses(className = ''): string {
    return cn(
      'c-canvas-chart__canvas',
      'max-w-full',
      'h-auto',
      'rounded-lg',
      'shadow-sm',
      'bg-[--color-background-primary]',
      className
    );
  }

  static getTitleClasses(className = ''): string {
    return cn(
      'c-canvas-chart__title',
      'text-lg',
      'font-semibold',
      'text-[--color-text-primary]',
      'mb-4',
      className
    );
  }

  static getLegendClasses(className = ''): string {
    return cn(
      'c-canvas-chart__legend',
      'flex',
      'flex-wrap',
      'gap-4',
      'mt-4',
      className
    );
  }

  static getLegendItemClasses(className = ''): string {
    return cn(
      'c-canvas-chart__legend-item',
      'flex',
      'items-center',
      'gap-2',
      className
    );
  }

  static getLegendColorClasses(color: string, className = ''): string {
    return cn(
      'c-canvas-chart__legend-color',
      'w-4',
      'h-4',
      'rounded',
      className
    );
  }

  static getContainerClasses(width: number, height: number, className = ''): string {
    return cn(
      'c-canvas-chart__container',
      'relative',
      'overflow-hidden',
      'rounded-xl',
      'border',
      'border-[--color-border-primary]',
      'bg-[--color-background-primary]',
      'shadow-sm',
      className
    );
  }

  static getGridClasses(showGrid: boolean, className = ''): string {
    return cn(
      'c-canvas-chart__grid',
      'absolute',
      'inset-0',
      showGrid ? 'opacity-100' : 'opacity-0',
      'pointer-events-none',
      className
    );
  }

  static getAxisClasses(className = ''): string {
    return cn(
      'c-canvas-chart__axis',
      'stroke-[--color-border-secondary]',
      'stroke-1',
      className
    );
  }

  static getAxisLabelClasses(className = ''): string {
    return cn(
      'c-canvas-chart__axis-label',
      'fill-[--color-text-secondary]',
      'text-xs',
      'font-medium',
      className
    );
  }
}
