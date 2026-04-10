import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

export type ValidationOrientation = 'horizontal' | 'vertical';

export interface ValidationProps extends InteractionHTMLAttributes<HTMLDivElement> {
	label?: string;
	description?: string;
	required?: boolean;
	error?: string;
	hint?: string;
	disabled?: boolean;
	orientation?: ValidationOrientation;
	class?: string;
	id?: string;
	children: Snippet;
}
