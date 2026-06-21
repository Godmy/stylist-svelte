import type { ImageSize } from '$stylist/media/type/struct/image-size';

export interface ContractImage {
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
	/** On load callback */
	onLoad?: () => void;
	/** On error callback */
	onError?: () => void;
	/** Additional CSS class */
	class?: string;
}
