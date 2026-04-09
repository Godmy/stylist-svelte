import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface ImageItemContract {
	id: string;
	src: string;
	alt?: string;
	caption?: string;
}

export interface ImageGalleryContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** List of images */
	images: ImageItemContract[];
	/** Show thumbnails */
	showThumbnails?: boolean;
	/** Auto play */
	autoPlay?: boolean;
	/** Auto play interval in ms */
	autoPlayInterval?: number;
	/** Show captions */
	showCaptions?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Image CSS class */
	imageClass?: string;
	/** Thumbnail CSS class */
	thumbnailClass?: string;
	/** Navigation CSS class */
	navigationClass?: string;
	/** Caption CSS class */
	captionClass?: string;
}
