import type { MediaType } from '$stylist/media/type/alias/media-library-media-type';

export type MediaItem = {
	id: string;
	name: string;
	type: MediaType;
	size: number;
	url: string;
	thumbnail?: string;
	uploadDate: Date;
	tags?: string[];
};

