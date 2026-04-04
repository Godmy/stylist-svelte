import { cn } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';

export class PostCardStyleManager {
	static getContainerClasses(className = ''): string {
		return cn('max-w-sm rounded-lg shadow-md overflow-hidden', CardStyleManager.getBaseClasses(), className);
	}

	static getImageClasses(className = ''): string {
		return cn('w-full h-48 object-cover', className);
	}

	static getBodyClasses(className = ''): string {
		return cn('p-6', className);
	}

	static getHeaderClasses(className = ''): string {
		return cn('flex justify-between items-start mb-2', className);
	}

	static getTitleClasses(className = ''): string {
		return cn('text-xl font-bold', className);
	}

	static getDateClasses(className = ''): string {
		return cn('text-sm text-[var(--color-text-secondary)]', className);
	}

	static getSubtitleClasses(className = ''): string {
		return cn('text-[var(--color-text-secondary)] mb-3', className);
	}

	static getExcerptClasses(className = ''): string {
		return cn('text-[var(--color-text-primary)] mb-4', className);
	}

	static getMetaClasses(className = ''): string {
		return cn('flex items-center mb-4', className);
	}

	static getAuthorClasses(className = ''): string {
		return cn('text-sm text-[var(--color-text-secondary)]', className);
	}

	static getTagsClasses(className = ''): string {
		return cn('ml-auto flex space-x-1', className);
	}

	static getTagClasses(className = ''): string {
		return cn('text-xs bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] px-2 py-1 rounded', className);
	}

	static getActionsClasses(className = ''): string {
		return cn('flex space-x-2', className);
	}

	static getActionButtonClasses(className = ''): string {
		return cn('px-3 py-1 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] text-sm rounded hover:bg-[var(--color-primary-600)]', className);
	}
}

