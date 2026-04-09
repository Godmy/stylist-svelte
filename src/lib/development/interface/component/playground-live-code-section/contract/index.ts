import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { Snippet } from 'svelte';

export interface PlaygroundLiveCodeSectionContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Content snippet */
	children?: Snippet;
	/** Additional CSS class */
	class?: string;
}
