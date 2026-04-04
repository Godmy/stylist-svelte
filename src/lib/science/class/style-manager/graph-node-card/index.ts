export class GraphNodeCardStyleManager {
	static getContainerClass(
		_variant: string,
		_size: string,
		selected: boolean,
		highlight: boolean,
		className = ''
	): string {
		return [
			'rounded-lg border bg-[var(--color-background-primary)] shadow-sm',
			selected ? 'ring-2 ring-[var(--color-primary-500)]' : '',
			highlight ? 'border-[var(--color-primary-400)]' : 'border-[var(--color-border-primary)]',
			className
		]
			.filter(Boolean)
			.join(' ');
	}

	static getHeaderClass(): string {
		return 'flex cursor-pointer items-center gap-2 border-b border-[var(--color-border-primary)] px-4 py-3';
	}

	static getTitleClass(): string {
		return 'flex-1 text-sm font-semibold text-[var(--color-text-primary)]';
	}

	static getTypeClass(_type?: string): string {
		return 'rounded bg-[var(--color-background-secondary)] px-2 py-0.5 text-xs text-[var(--color-text-secondary)]';
	}

	static getContentClass(): string {
		return 'space-y-3 px-4 py-3';
	}

	static getDescriptionClass(): string {
		return 'text-sm text-[var(--color-text-secondary)]';
	}

	static getFieldsListClass(): string {
		return 'space-y-2';
	}

	static getFieldItemClass(): string {
		return 'flex cursor-pointer items-center justify-between rounded border border-[var(--color-border-primary)] px-3 py-2';
	}

	static getFieldNameClass(): string {
		return 'text-sm text-[var(--color-text-primary)]';
	}

	static getFieldTypeClass(): string {
		return 'text-xs text-[var(--color-text-secondary)]';
	}

	static getFieldRequiredClass(): string {
		return 'ml-0.5 text-[var(--color-danger-500)]';
	}

	static getActionsClass(): string {
		return 'flex gap-2 pt-2';
	}
}
