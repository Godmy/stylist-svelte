import type {
	MediaLibraryProps,
	MediaType,
	MediaItem
} from '$stylist/media/type/struct/media-library';
import { formatMediaDate } from '$stylist/media/function/script/format-media-date';
import { formatMediaFileSize } from '$stylist/media/function/script/media-library';
import { TOKEN_MEDIA_ICON } from '$stylist/media/const/record/media-icon';

export function createMediaLibraryState(props: MediaLibraryProps) {
	let searchQuery = $state('');
	let selectedViewMode = $state(props.viewMode ?? 'grid');
	let selectedItems = $state<string[]>([]);
	let fileInputRef = $state<HTMLInputElement | null>(null);

	const items = $derived(props.items ?? []);
	const allowDelete = $derived(props.allowDelete ?? true);
	const allowDownload = $derived(props.allowDownload ?? true);
	const allowUpload = $derived(props.allowUpload ?? true);
	const searchPlaceholder = $derived(props.searchPlaceholder ?? 'Search media...');
	const headerClass = $derived(props.headerClass ?? '');
	const toolbarClass = $derived(props.toolbarClass ?? '');
	const gridClass = $derived(props.gridClass ?? '');
	const itemClass = $derived(props.itemClass ?? '');

	const hostClasses = $derived(
		`border border-[var(--color-border-primary)] rounded-lg overflow-hidden ${props.class ?? ''}`
	);

	const filteredItems = $derived.by(() => {
		if (!searchQuery) return items;
		return items.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
	});

	function handleFileUpload(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.files && props.onUpload) {
			props.onUpload(target.files);
			target.value = '';
		}
	}

	function handleItemSelect(item: MediaItem) {
		props.onItemSelect?.(item);
	}

	function handleItemDelete(id: string) {
		props.onItemDelete?.(id);
	}

	function handleItemDownload(id: string) {
		props.onItemDownload?.(id);
	}

	function triggerFileInput() {
		fileInputRef?.click();
	}

	function getFileIcon(type: MediaType): string {
		switch (type) {
			case 'image':
				return TOKEN_MEDIA_ICON.IMAGE;
			case 'video':
				return TOKEN_MEDIA_ICON.FILM;
			case 'audio':
				return TOKEN_MEDIA_ICON.MUSIC;
			case 'document':
				return TOKEN_MEDIA_ICON.FILE;
			default:
				return TOKEN_MEDIA_ICON.FILE;
		}
	}

	function toggleItemSelection(id: string) {
		if (selectedItems.includes(id)) {
			selectedItems = selectedItems.filter((i) => i !== id);
		} else {
			selectedItems = [...selectedItems, id];
		}
	}

	const restProps = $derived.by(() => {
		const {
			class: _class,
			items: _items,
			onItemSelect: _onItemSelect,
			onItemDelete: _onItemDelete,
			onItemDownload: _onItemDownload,
			onUpload: _onUpload,
			viewMode: _viewMode,
			allowDelete: _allowDelete,
			allowDownload: _allowDownload,
			allowUpload: _allowUpload,
			searchPlaceholder: _searchPlaceholder,
			headerClass: _headerClass,
			toolbarClass: _toolbarClass,
			gridClass: _gridClass,
			itemClass: _itemClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get searchQuery() {
			return searchQuery;
		},
		set searchQuery(val: string) {
			searchQuery = val;
		},
		get selectedViewMode() {
			return selectedViewMode;
		},
		set selectedViewMode(val: 'grid' | 'list') {
			selectedViewMode = val;
		},
		get selectedItems() {
			return selectedItems;
		},
		set selectedItems(val: string[]) {
			selectedItems = val;
		},
		get fileInputRef() {
			return fileInputRef;
		},
		set fileInputRef(val: HTMLInputElement | null) {
			fileInputRef = val;
		},
		get items() {
			return items;
		},
		get filteredItems() {
			return filteredItems;
		},
		get allowDelete() {
			return allowDelete;
		},
		get allowDownload() {
			return allowDownload;
		},
		get allowUpload() {
			return allowUpload;
		},
		get searchPlaceholder() {
			return searchPlaceholder;
		},
		get headerClass() {
			return headerClass;
		},
		get toolbarClass() {
			return toolbarClass;
		},
		get gridClass() {
			return gridClass;
		},
		get itemClass() {
			return itemClass;
		},
		get hostClasses() {
			return hostClasses;
		},
		get restProps() {
			return restProps;
		},
		get icons() {
			return TOKEN_MEDIA_ICON;
		},
		handleFileUpload,
		handleItemSelect,
		handleItemDelete,
		handleItemDownload,
		triggerFileInput,
		getFileIcon,
		formatMediaFileSize,
		formatMediaDate,
		toggleItemSelection
	};
}

export default createMediaLibraryState;
