export const StatusDashboardStyleManager = {
	getContainerClass: (_variant, _size, className = '') =>
		['status-dashboard', 'space-y-4', className].filter(Boolean).join(' '),
	getHeaderClass: (className = '') => ['space-y-1', className].filter(Boolean).join(' '),
	getTitleClass: () => 'text-lg font-semibold text-[var(--color-text-primary)]',
	getSubtitleClass: () => 'text-sm text-[var(--color-text-secondary)]',
	getItemsGridClass: (layout) =>
		layout === 'vertical' ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4',
	getItemCardClass: (className = '') =>
		[
			'rounded-lg border bg-[var(--color-background-primary)] p-4 shadow-sm',
			className
		]
			.filter(Boolean)
			.join(' '),
	getItemContentClass: () => 'flex items-start',
	getItemHeaderClass: () => 'flex items-center justify-between gap-2',
	getItemTitleClass: () => 'text-sm font-medium text-[var(--color-text-primary)]',
	getItemValueClass: () => 'text-sm font-semibold text-[var(--color-text-primary)]',
	getItemDescriptionClass: () => 'mt-1 text-sm text-[var(--color-text-secondary)]',
	getItemFooterClass: () => 'mt-3 border-t border-[var(--color-border-primary)] pt-3',
	getItemActionsClass: () => 'ml-3 flex shrink-0 items-center gap-2',
	getStatusIconWrapperClass: () => 'flex h-10 w-10 items-center justify-center rounded-full',
	getStatusIconClass: () => 'h-5 w-5'
};
