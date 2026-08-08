import type { Snippet } from 'svelte';
import type { HTMLImgAttributes } from 'svelte/elements';
import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
import type { SlotImage } from '$stylist/image/interface/slot/image';

export interface RecipeImage
	extends SlotImage,
		Omit<HTMLImgAttributes, 'class' | 'src' | 'alt' | 'width' | 'height' | 'loading'> {
	src: string;
	width?: number | string;
	height?: number | string;
	content?: Snippet;
	onLoad?: () => void;
	onError?: () => void;
	variant?: 'default';
	size?: (typeof TOKEN_SIZE)[number];
	class?: string;
}
