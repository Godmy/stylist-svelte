import type { HTMLAttributes } from 'svelte/elements';

export interface SeparatorProps extends HTMLAttributes<HTMLHRElement> {
	class?: string;
	orientation?: 'horizontal' | 'vertical';
	decorative?: boolean;
}
