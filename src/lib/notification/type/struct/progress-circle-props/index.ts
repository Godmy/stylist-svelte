import type { HTMLAttributes } from 'svelte/elements';

export type ProgressCircleProps = HTMLAttributes<HTMLDivElement> & {
	progress?: number;
	size?: 'sm' | 'md' | 'lg';
	color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
	strokeWidth?: number;
	class?: string;
};
