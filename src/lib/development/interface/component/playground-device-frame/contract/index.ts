import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { Snippet } from 'svelte';

export interface PlaygroundDeviceFrameContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Device type */
	device?: 'mobile' | 'tablet' | 'desktop' | 'laptop';
	/** Device orientation */
	orientation?: 'portrait' | 'landscape';
	/** Content snippet */
	children?: Snippet;
	/** Additional CSS class */
	class?: string;
}
