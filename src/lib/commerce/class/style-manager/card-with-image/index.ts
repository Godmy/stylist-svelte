import { cn } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';

export class CardWithImageStyleManager {
	static getContainerClasses(className = ''): string {
		return cn('rounded-lg shadow overflow-hidden', CardStyleManager.getBaseClasses(), className);
	}

	static getImageClasses(className = ''): string {
		return cn('h-48 w-full object-cover', className);
	}

	static getBodyClasses(className = ''): string {
		return cn('p-6', className);
	}

	static getHeaderClasses(className = ''): string {
		return cn('mb-4', className);
	}

	static getTitleClasses(className = ''): string {
		return cn('text-lg font-semibold text-[var(--color-text-primary)]', className);
	}

	static getSubtitleClasses(className = ''): string {
		return cn('text-sm text-[var(--color-text-secondary)]', className);
	}

	static getDescriptionClasses(className = ''): string {
		return cn('text-[var(--color-text-primary)] mb-4', className);
	}
}

