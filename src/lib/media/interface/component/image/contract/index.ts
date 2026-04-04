import type { HTMLImgAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type ImageSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ImageContract extends Omit<HTMLImgAttributes, 'class' | 'src' | 'alt' | 'width' | 'height' | 'loading'> {
	/** Image variant */
	variant?: 'default';
	/** Image size */
	size?: ImageSize;
	/** Image source */
	src: string;
	/** Alt text */
	alt?: string;
	/** Fallback image */
	fallback?: string;
	/** Loading mode */
	loading?: 'lazy' | 'eager';
	/** Image width */
	width?: number | string;
	/** Image height */
	height?: number | string;
	/** Content snippet */
	content?: Snippet;
	/** On load callback */
	onLoad?: () => void;
	/** On error callback */
	onError?: () => void;
	/** Additional CSS class */
	class?: string;
}
