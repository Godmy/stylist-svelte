import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';

export type ViewportContract = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
};
