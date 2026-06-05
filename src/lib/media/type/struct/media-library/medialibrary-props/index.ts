import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { MediaItem } from '../media-item';

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
