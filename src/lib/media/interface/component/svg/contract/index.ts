import type { SVGAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface SvgContract extends Omit<SVGAttributes<SVGSVGElement>, 'class'> {
	/** SVG content */
	content?: Snippet;
	/** SVG source */
	src?: string;
	/** SVG title */
	title?: string;
	/** Icon size */
	size?: number | string;
	/** Stroke width */
	strokeWidth?: number;
	/** Disabled state */
	disabled?: boolean;
	/** Additional CSS class */
	class?: string;
}
