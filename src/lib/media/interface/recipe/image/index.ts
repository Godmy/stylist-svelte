import type { SlotContent } from '$stylist/layout/interface/slot/content';
import type { ContractImage } from '$stylist/media/interface/contract/image';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';
import type { HTMLImgAttributes } from 'svelte/elements';

import type { TOKEN_SIZE } from '$stylist/layout/const/array/size';
export interface RecipeImage
	extends ComputeIntersectAll<
		[
			ContractImage,
			Omit<HTMLImgAttributes, 'class' | 'src' | 'alt' | 'width' | 'height' | 'loading'>,
			SlotContent
		]
	> {
	src: string;
	alt?: string;
	fallback?: string;
	loading?: 'eager' | 'lazy';
	width?: number | string;
	height?: number | string;
	content?: Snippet;
	onLoad?: () => void;
	onError?: () => void;
	variant?: 'default';
	size?: (typeof TOKEN_SIZE)[number];
	class?: string;
}