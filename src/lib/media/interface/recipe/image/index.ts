import type { SlotContent } from '$stylist/architecture/interface/slot/content';
import type { ContractImage } from '$stylist/media/interface/contract/image';
import type { ImageSize } from '$stylist/media/type/struct/image-size';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';
import type { HTMLImgAttributes } from 'svelte/elements';

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
	size?: ImageSize;
	class?: string;
}