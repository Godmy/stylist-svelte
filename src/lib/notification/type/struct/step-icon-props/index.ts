import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';

export interface StepIconProps extends InteractionHTMLAttributes<HTMLSpanElement> {
	status?: 'pending' | 'active' | 'completed' | 'error';
	size?: 'sm' | 'md' | 'lg';
	stepNumber?: number;
	iconName?: string;
	class?: string;
	children?: Snippet;
}
