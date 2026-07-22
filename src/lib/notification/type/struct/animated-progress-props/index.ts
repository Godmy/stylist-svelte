import type { HTMLAttributes } from 'svelte/elements';

export type AnimatedProgressProps = HTMLAttributes<HTMLDivElement> & {
	value?: number;
	min?: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	class?: string;
};
