import type { HTMLAttributes } from 'svelte/elements';
import type { SlotImageItem } from '$stylist/image/interface/slot/image-item';

export interface RecipeImageGallery extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	images: SlotImageItem[];
	showThumbnails?: boolean;
	autoPlay?: boolean;
	autoPlayInterval?: number;
	showCaptions?: boolean;
	class?: string;
	imageClass?: string;
	thumbnailClass?: string;
	navigationClass?: string;
	captionClass?: string;
}
