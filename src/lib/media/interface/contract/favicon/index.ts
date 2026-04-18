import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { Snippet } from 'svelte';

export interface ContractFavicon extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Size in pixels */
	size?: number;
	/** Favicon URL */
	url?: string;
	/** Slot content (fallback) */
	content?: Snippet;
	/** Additional CSS class */
	class?: string;
	/** Error state */
	error?: boolean;
	/** On error callback */
	onError?: () => void;
}
