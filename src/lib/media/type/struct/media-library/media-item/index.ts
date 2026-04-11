import type { MediaType } from '../mediatype';

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
