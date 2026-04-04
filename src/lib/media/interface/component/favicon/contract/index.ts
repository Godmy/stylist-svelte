import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { Snippet } from 'svelte';

export interface FaviconContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Size in pixels */
	size?: number;
	/** Favicon URL */
	url?: string;
	/** Additional CSS class */
	class?: string;
	/** Error state */
	error?: boolean;
	/** On error callback */
	onError?: () => void;
}
