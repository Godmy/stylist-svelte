export interface GraphNodeCardStyleManagerInterface {
	getContainerClass: (variant: string, size: string, selected: boolean, highlight: boolean, className?: string) => string;
	getHeaderClass: () => string;
	getTitleClass: () => string;
	getTypeClass: (type: string) => string;
	getContentClass: () => string;
	getDescriptionClass: () => string;
	getFieldsListClass: () => string;
	getFieldItemClass: () => string;
	getFieldNameClass: () => string;
	getFieldTypeClass: () => string;
	getFieldRequiredClass: () => string;
	getActionsClass: () => string;
}

export const GraphNodeCardStyleManager: GraphNodeCardStyleManagerInterface = {
	getContainerClass: (_variant, _size, selected, highlight, className = '') =>
		[
			'rounded-lg border bg-[var(--color-background-primary)] shadow-sm',
			selected ? 'ring-2 ring-[var(--color-primary-500)]' : '',
			highlight ? 'border-[var(--color-primary-400)]' : 'border-[var(--color-border-primary)]',
			className
		]
			.filter(Boolean)
			.join(' '),
	getHeaderClass: () =>
		'flex cursor-pointer items-center gap-2 border-b border-[var(--color-border-primary)] px-4 py-3',
	getTitleClass: () => 'flex-1 text-sm font-semibold text-[var(--color-text-primary)]',
	getTypeClass: () =>
		'rounded bg-[var(--color-background-secondary)] px-2 py-0.5 text-xs text-[var(--color-text-secondary)]',
	getContentClass: () => 'space-y-3 px-4 py-3',
	getDescriptionClass: () => 'text-sm text-[var(--color-text-secondary)]',
	getFieldsListClass: () => 'space-y-2',
	getFieldItemClass: () =>
		'flex cursor-pointer items-center justify-between rounded border border-[var(--color-border-primary)] px-3 py-2',
	getFieldNameClass: () => 'text-sm text-[var(--color-text-primary)]',
	getFieldTypeClass: () => 'text-xs text-[var(--color-text-secondary)]',
	getFieldRequiredClass: () => 'ml-0.5 text-[var(--color-danger-500)]',
	getActionsClass: () => 'flex gap-2 pt-2'
};
