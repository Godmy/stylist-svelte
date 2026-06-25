import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
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
} & HTMLAttributes<HTMLDivElement> & BehaviorBorderToken & BehaviorTypography;
