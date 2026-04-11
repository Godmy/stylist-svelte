import type { HTMLAttributes } from 'svelte/elements';

export interface ComparisonItem {
	label: string;
	value: string;
}

export interface ComparisonColumn {
	title: string;
	items: ComparisonItem[];
}

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	before: ComparisonColumn;
	after: ComparisonColumn;
	title?: string;
	class?: string;
}
