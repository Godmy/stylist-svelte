import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type MediaType = 'image' | 'video' | 'audio' | 'document' | 'other';

export interface MediaItem {
	id: string;
	name: string;
	type: MediaType;
	size: number;
	url: string;
	thumbnail?: string;
	uploadDate: Date;
	tags?: string[];
}

export interface MediaLibraryProps {
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

function formatFileSize(bytes: number): string {
	if (bytes < 1024) return bytes + ' B';
	else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
	else return (bytes / 1048576).toFixed(1) + ' MB';
}

function getFileIcon(type: MediaType): string {
	switch (type) {
		case 'image': return 'image';
		case 'video': return 'film';
		case 'audio': return 'music';
		case 'document': return 'file';
		default: return 'file';
	}
}

function formatDate(date: Date): string {
	return date.toLocaleDateString([], {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}

export function createMediaLibraryState(props: MediaLibraryProps & InformationHTMLAttributes<HTMLDivElement>) {
	const items = $derived(props.items ?? []);
	const viewMode = $derived(props.viewMode ?? 'grid');
	const allowDelete = $derived(props.allowDelete ?? true);
	const allowDownload = $derived(props.allowDownload ?? true);
	const allowUpload = $derived(props.allowUpload ?? true);
	const searchPlaceholder = $derived(props.searchPlaceholder ?? 'Search media...');
	const className = $derived(props.class ?? '');
	const headerClass = $derived(props.headerClass ?? '');
	const toolbarClass = $derived(props.toolbarClass ?? '');
	const gridClass = $derived(props.gridClass ?? '');
	const itemClass = $derived(props.itemClass ?? '');

	const hostClasses = $derived(`border border-[var(--color-border-primary)] rounded-lg overflow-hidden ${className}`);

	const restProps = $derived.by(() => {
		const { class: _class, items: _items, onItemSelect: _onItemSelect, onItemDelete: _onItemDelete, onItemDownload: _onItemDownload, onUpload: _onUpload, viewMode: _viewMode, allowDelete: _allowDelete, allowDownload: _allowDownload, allowUpload: _allowUpload, searchPlaceholder: _searchPlaceholder, headerClass: _headerClass, toolbarClass: _toolbarClass, gridClass: _gridClass, itemClass: _itemClass, ...rest } = props;
		return rest;
	});

	return {
		get items() { return items; },
		get viewMode() { return viewMode; },
		get allowDelete() { return allowDelete; },
		get allowDownload() { return allowDownload; },
		get allowUpload() { return allowUpload; },
		get searchPlaceholder() { return searchPlaceholder; },
		get className() { return className; },
		get headerClass() { return headerClass; },
		get toolbarClass() { return toolbarClass; },
		get gridClass() { return gridClass; },
		get itemClass() { return itemClass; },
		get hostClasses() { return hostClasses; },
		get restProps() { return restProps; },
		formatFileSize,
		getFileIcon,
		formatDate
	};
}

export default createMediaLibraryState;
