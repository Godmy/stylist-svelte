import type { HTMLAttributes } from 'svelte/elements';

export type SeparatorProps = HTMLAttributes<HTMLHRElement> & {
	class?: string;
	orientation?: 'horizontal' | 'vertical';
	decorative?: boolean;
}
