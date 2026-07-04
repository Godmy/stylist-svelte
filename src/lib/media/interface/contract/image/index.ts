
import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
export interface ContractImage {
	/** Image variant */
	variant?: 'default';
	/** Image size */
	size?: (typeof TOKEN_SIZE)[number];
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
