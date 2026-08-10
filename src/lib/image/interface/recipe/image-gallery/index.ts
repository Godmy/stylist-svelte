import type { HTMLAttributes } from 'svelte/elements';
export interface RecipeImageGallery extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	images: ({
id: string;
	src: string;
	alt?: string;
	caption?: string;
})[];
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
