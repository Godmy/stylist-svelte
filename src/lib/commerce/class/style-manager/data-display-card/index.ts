import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';

export class DataDisplayCardStyleManager {
	static getContainerClasses(className = ''): string {
		return mergeClassNames('rounded-lg shadow-md overflow-hidden', CardStyleManager.getBaseClasses(), className);
	}

	static getImageClasses(className = ''): string {
		return mergeClassNames('w-full h-auto', className);
	}

	static getBodyClasses(className = ''): string {
		return mergeClassNames('p-6', className);
	}

	static getHeaderClasses(className = ''): string {
		return mergeClassNames('mb-4', className);
	}

	static getTitleClasses(className = ''): string {
		return mergeClassNames('text-xl font-bold text-[var(--color-text-primary)]', className);
	}

	static getSubtitleClasses(className = ''): string {
		return mergeClassNames('text-sm text-[var(--color-text-secondary)]', className);
	}

	static getDescriptionContainerClasses(className = ''): string {
		return mergeClassNames('mb-4', className);
	}

	static getDescriptionClasses(className = ''): string {
		return mergeClassNames('text-[var(--color-text-primary)]', className);
	}

	static getActionsClasses(className = ''): string {
		return mergeClassNames('mt-4', className);
	}

	static getFooterClasses(className = ''): string {
		return mergeClassNames('px-6 py-3 bg-[var(--color-background-secondary)] border-t border-[var(--color-border-primary)]', className);
	}
}

