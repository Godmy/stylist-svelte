import type { HTMLAttributes } from 'svelte/elements';

export type ProgressBarProps = HTMLAttributes<HTMLDivElement> & {
	value: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	size?: 'sm' | 'md' | 'lg';
	variant?: 'primary' | 'success' | 'warning' | 'danger';
	class?: string;
};
