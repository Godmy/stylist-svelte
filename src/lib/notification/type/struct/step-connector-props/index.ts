import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type StepConnectorProps = HTMLAttributes<HTMLDivElement> & {
	status?: 'pending' | 'active' | 'completed' | 'error';
	class?: string;
	children?: Snippet;
};
