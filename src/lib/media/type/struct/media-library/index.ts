import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type MediaType = 'image' | 'video' | 'audio' | 'document' | 'other';

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

export type MediaLibraryProps = {
	items: MediaItem[];
	onItemSelect?: (item: MediaItem) => void;
	onItemDelete?: (id: string) => void;
	onItemDownload?: (id: string) => void;
	onUpload?: (files: FileList) => void;
	viewMode?: 'grid' | 'list';
	allowDelete?: boolean;
	allowDownload?: boolean;
	allowUpload?: boolean;
	searchPlaceholder?: string;
	class?: string;
	headerClass?: string;
	toolbarClass?: string;
	gridClass?: string;
	itemClass?: string;
} & InformationHTMLAttributes<HTMLDivElement>;
