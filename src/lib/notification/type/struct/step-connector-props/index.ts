import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { Snippet } from 'svelte';

export type StepConnectorProps = InteractionHTMLAttributes<HTMLDivElement> & {
	status?: 'pending' | 'active' | 'completed' | 'error';
	class?: string;
	children?: Snippet;
};
