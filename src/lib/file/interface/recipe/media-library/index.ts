import type { HTMLAttributes } from 'svelte/elements';
import type { MediaItem } from '$stylist/file/type/object/media-item';
export interface RecipeMediaLibrary extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
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
}
