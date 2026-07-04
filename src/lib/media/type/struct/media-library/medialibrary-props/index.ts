import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { MediaItem } from '$stylist/media/type/struct/media-library/media-item';

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
} & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography;
