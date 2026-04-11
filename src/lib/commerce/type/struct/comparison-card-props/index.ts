import type { HTMLAttributes } from 'svelte/elements';
import type { ComparisonColumn } from '../comparison-column';

export type ComparisonCardProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
	before: ComparisonColumn;
	after: ComparisonColumn;
	title?: string;
	class?: string;
}
