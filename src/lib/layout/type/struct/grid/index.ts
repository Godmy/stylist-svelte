import type { SVGAttributes } from 'svelte/elements';

export type GridContract = SVGAttributes<SVGSVGElement> & {
	class?: string;
	zoom?: number;
	gridSize?: number;
	color?: string;
	visible?: boolean;
};
