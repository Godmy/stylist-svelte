export class StatusDashboardStyleManager {
	static getContainerClass(_variant: string, _size: string, className = ''): string {
		return ['status-dashboard', 'space-y-4', className].filter(Boolean).join(' ');
	}

	static getHeaderClass(className = ''): string {
		return ['space-y-1', className].filter(Boolean).join(' ');
	}

	static getTitleClass(): string {
		return 'text-lg font-semibold text-[var(--color-text-primary)]';
	}

	static getSubtitleClass(): string {
		return 'text-sm text-[var(--color-text-secondary)]';
	}

	static getItemsGridClass(layout: 'horizontal' | 'vertical'): string {
		return layout === 'vertical'
			? 'grid grid-cols-1 gap-4'
			: 'grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4';
	}

	static getItemCardClass(className = ''): string {
		return ['rounded-lg border bg-[var(--color-background-primary)] p-4 shadow-sm', className]
			.filter(Boolean)
			.join(' ');
	}

	static getItemContentClass(): string {
		return 'flex items-start';
	}

	static getItemHeaderClass(): string {
		return 'flex items-center justify-between gap-2';
	}

	static getItemTitleClass(_size?: string): string {
		return 'text-sm font-medium text-[var(--color-text-primary)]';
	}

	static getItemValueClass(): string {
		return 'text-sm font-semibold text-[var(--color-text-primary)]';
	}

	static getItemDescriptionClass(_size?: string): string {
		return 'mt-1 text-sm text-[var(--color-text-secondary)]';
	}

	static getItemFooterClass(): string {
		return 'mt-3 border-t border-[var(--color-border-primary)] pt-3';
	}

	static getItemActionsClass(): string {
		return 'ml-3 flex shrink-0 items-center gap-2';
	}

	static getStatusIconWrapperClass(): string {
		return 'flex h-10 w-10 items-center justify-center rounded-full';
	}

	static getStatusIconClass(): string {
		return 'h-5 w-5';
	}
}
