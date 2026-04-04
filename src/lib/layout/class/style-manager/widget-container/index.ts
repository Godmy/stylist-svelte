import { cn } from '$stylist/layout/function/script/merge-class-names';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export class WidgetContainerStyleManager {
	static getRootClass(isMaximized: boolean, className = ''): string {
		return cn(
			'bg-[var(--color-background-primary)] rounded-lg shadow border border-[var(--color-border-primary)] overflow-hidden',
			isMaximized && 'fixed inset-0 z-[var(--z-index-modal)]',
			className
		);
	}

	static getHeaderClass(className = ''): string {
		return cn('flex items-center justify-between p-4 border-b', className);
	}

	static getTitleGroupClass(): string {
		return 'flex-1 ml-2';
	}

	static getTitleClass(size: TokenSize = 'md'): string {
		return {
			sm: 'text-base font-medium text-[var(--color-text-primary)]',
			md: 'text-lg font-medium text-[var(--color-text-primary)]',
			lg: 'text-xl font-medium text-[var(--color-text-primary)]'
		}[size as 'sm' | 'md' | 'lg'];
	}

	static getSubtitleClass(): string {
		return 'text-sm text-[var(--color-text-secondary)]';
	}

	static getHandleClass(draggable: boolean): string {
		return draggable ? 'cursor-move text-[var(--color-text-tertiary)]' : 'hidden';
	}

	static getActionsClass(): string {
		return 'flex items-center space-x-2';
	}

	static getIconButtonClass(): string {
		return 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]';
	}

	static getBodyClass(className = ''): string {
		return cn('p-4', className);
	}
}

