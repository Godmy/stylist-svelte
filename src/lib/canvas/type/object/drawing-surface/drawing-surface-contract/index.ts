import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';

export type DrawingSurfaceContract = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
};
