import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { SlotImageItem } from '$stylist/media/interface/slot/image-item';

export interface ContractImageGallery
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography {
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
