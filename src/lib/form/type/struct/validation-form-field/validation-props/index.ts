import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { ValidationOrientation } from '../validationorientation';

export type ValidationProps = InteractionHTMLAttributes<HTMLDivElement> & {
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
};
