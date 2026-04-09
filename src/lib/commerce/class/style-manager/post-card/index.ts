import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';

export class PostCardStyleManager {
	static getContainerClasses(className = ''): string {
		return mergeClassNames('max-w-sm rounded-lg shadow-md overflow-hidden', CardStyleManager.getBaseClasses(), className);
	}

	static getImageClasses(className = ''): string {
		return mergeClassNames('w-full h-48 object-cover', className);
	}

	static getBodyClasses(className = ''): string {
		return mergeClassNames('p-6', className);
	}

	static getHeaderClasses(className = ''): string {
		return mergeClassNames('flex justify-between items-start mb-2', className);
	}

	static getTitleClasses(className = ''): string {
		return mergeClassNames('text-xl font-bold', className);
	}

	static getDateClasses(className = ''): string {
		return mergeClassNames('text-sm text-[var(--color-text-secondary)]', className);
	}

	static getSubtitleClasses(className = ''): string {
		return mergeClassNames('text-[var(--color-text-secondary)] mb-3', className);
	}

	static getExcerptClasses(className = ''): string {
		return mergeClassNames('text-[var(--color-text-primary)] mb-4', className);
	}

	static getMetaClasses(className = ''): string {
		return mergeClassNames('flex items-center mb-4', className);
	}

	static getAuthorClasses(className = ''): string {
		return mergeClassNames('text-sm text-[var(--color-text-secondary)]', className);
	}

	static getTagsClasses(className = ''): string {
		return mergeClassNames('ml-auto flex space-x-1', className);
	}

	static getTagClasses(className = ''): string {
		return mergeClassNames('text-xs bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] px-2 py-1 rounded', className);
	}

	static getActionsClasses(className = ''): string {
		return mergeClassNames('flex space-x-2', className);
	}

	static getActionButtonClasses(className = ''): string {
		return mergeClassNames('px-3 py-1 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] text-sm rounded hover:bg-[var(--color-primary-600)]', className);
	}
}

