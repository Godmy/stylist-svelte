import { cn } from '$stylist/information/function/cn/index';
import { CodeStyleManager } from '$stylist/information/class/style-manager/code-block';

export class CodeSectionStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return cn('c-code-section', CodeStyleManager.getSurfaceBaseClasses(), extraClasses);
	}

	static getHeaderContainerClass(): string {
		return cn(CodeStyleManager.getHeaderBaseClasses(), 'px-4 py-3');
	}

	static getHeaderContentClass(): string {
		return 'flex items-center justify-between gap-3';
	}

	static getTitleClass(): string {
		return 'font-semibold text-[var(--color-text-primary)]';
	}

	static getTagsContainerClass(): string {
		return 'flex flex-wrap gap-2';
	}

	static getTagClass(): string {
		return 'text-xs text-[var(--color-text-secondary)]';
	}
}


