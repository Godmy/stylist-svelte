import type { HTMLAttributes } from 'svelte/elements';

export type ProgressBarWithLabelProps = HTMLAttributes<HTMLDivElement> & {
	value?: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	color?: string;
	height?: string;
	class?: string;
};
