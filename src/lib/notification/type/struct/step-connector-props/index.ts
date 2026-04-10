import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

export interface StepConnectorProps extends InteractionHTMLAttributes<HTMLDivElement> {
	status?: 'pending' | 'active' | 'completed' | 'error';
	class?: string;
	children?: Snippet;
}
