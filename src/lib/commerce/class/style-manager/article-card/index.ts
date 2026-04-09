import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';

export class ArticleCardStyleManager {
	static getContainerClasses(className = ''): string {
		return mergeClassNames('max-w-sm rounded-lg shadow-md overflow-hidden', CardStyleManager.getBaseClasses(), className);
	}

	static getImageClasses(className = ''): string {
		return mergeClassNames('w-full h-48 object-cover', className);
	}

	static getBodyClasses(className = ''): string {
		return mergeClassNames('p-6', className);
	}

	static getTitleClasses(className = ''): string {
		return mergeClassNames('text-xl font-bold mb-2', className);
	}

	static getSubtitleClasses(className = ''): string {
		return mergeClassNames('text-[var(--color-text-secondary)] mb-4', className);
	}

	static getActionsClasses(className = ''): string {
		return mergeClassNames('flex space-x-2', className);
	}

	static getActionButtonClasses(className = ''): string {
		return mergeClassNames('px-4 py-2 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded hover:bg-[var(--color-primary-600)]', className);
	}
}

