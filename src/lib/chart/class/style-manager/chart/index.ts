import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class ChartStyleManager {
	static getPieChartContainerClasses(className = ''): string {
		return mergeClassNames('relative inline-flex items-center justify-center', className);
	}

	static getPieChartSvgClasses(className = ''): string {
		return mergeClassNames('block', className);
	}

	static getChartContainerClasses(className = ''): string {
		return mergeClassNames('c-chart flex flex-col', className);
	}

	static getChartCanvasWrapperClasses(className = ''): string {
		return mergeClassNames('c-chart-canvas relative inline-flex flex-col rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-3', className);
	}

	static getChartSvgClasses(className = ''): string {
		return mergeClassNames('c-chart-canvas__svg overflow-visible', className);
	}

	static getChartBackgroundClasses(className = ''): string {
		return mergeClassNames('c-chart-background fill-[--color-background-secondary] stroke-[--color-border-primary]', className);
	}

	static getChartAxisClasses(className = ''): string {
		return mergeClassNames('c-chart-axis stroke-[--color-border-secondary] text-[--color-text-secondary]', className);
	}

	static getChartAxisGridClasses(className = ''): string {
		return mergeClassNames('c-chart-axis__grid stroke-[--color-border-secondary] opacity-[var(--opacity-40)]', className);
	}

	static getChartAxisLabelClasses(className = ''): string {
		return mergeClassNames('c-chart-axis__label fill-[--color-text-secondary] text-xs', className);
	}

	static getChartPolylineClasses(className = ''): string {
		return mergeClassNames('c-chart-polyline fill-none stroke-[--color-primary-500] transition-[stroke] duration-[var(--duration-200)]', className);
	}

	static getChartNameClasses(className = ''): string {
		return mergeClassNames('c-chart-name fill-[--color-text-primary] text-sm font-semibold', className);
	}

	static getChartLegendClasses(className = ''): string {
		return mergeClassNames('c-chart-legend mt-3 flex flex-wrap items-center gap-3 text-xs text-[--color-text-secondary]', className);
	}

	static getChartLegendItemClasses(className = ''): string {
		return mergeClassNames('c-chart-legend__item inline-flex items-center gap-2', className);
	}

	static getChartLegendDotClasses(className = ''): string {
		return mergeClassNames('c-chart-legend__dot h-2.5 w-2.5 rounded-full', className);
	}
}



