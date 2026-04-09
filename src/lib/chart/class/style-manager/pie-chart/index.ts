import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class PieChartStyleManager {
	static getContainerClasses(className?: string): string {
		return mergeClassNames('inline-block', className);
	}

	static getLegendClasses(): string {
		return 'mt-4 grid grid-cols-2 gap-2';
	}

	static getLegendItemClasses(): string {
		return 'flex items-center';
	}

	static getLegendSwatchClasses(): string {
		return 'mr-2 h-4 w-4';
	}

	static getLegendTextClasses(): string {
		return 'text-sm';
	}
}

