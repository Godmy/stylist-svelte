import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { SlotImageItem } from '$stylist/media/interface/slot/image-item';

export interface ContractImageGallery extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** List of images */
	images: SlotImageItem[];
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
