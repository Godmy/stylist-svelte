import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type StepIconProps = HTMLAttributes<HTMLSpanElement> & {
	status?: 'pending' | 'active' | 'completed' | 'error';
	size?: 'sm' | 'md' | 'lg';
	stepNumber?: number;
	iconName?: string;
	class?: string;
	children?: Snippet;
};
