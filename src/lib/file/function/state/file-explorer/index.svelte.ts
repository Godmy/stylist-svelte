import type { Props } from '$stylist/file/type/struct/file-explorer/props';
import type { FileSystemItem } from '$stylist/file/type/struct/file-explorer/file-system-item';
import type { ViewMode } from '$stylist/file/type/struct/file-explorer/view-mode';
import {
  handleDownload as handleDownloadFn,
  handleItemClick as handleItemClickFn,
  handleItemDoubleClick as handleItemDoubleClickFn,
  handleItemKeyDown as handleItemKeyDownFn,
  handleSearchInput as handleSearchInputFn,
  handleUpload as handleUploadFn,
  toggleViewMode as toggleViewModeFn,
} from '$stylist/file/function/script/file-explorer';

export function createFileExplorerState(
  props: Props
) {
  let selectedItems = $state<FileSystemItem[]>([]);
  let searchQuery = $state('');
  let currentViewMode = $state<ViewMode>(props.viewMode ?? 'grid');
  let fileInputElement = $state<HTMLInputElement | null>(null);
  const currentPath = $derived(props.currentPath ?? '/');
  const searchable = $derived(props.searchable ?? true);
  const showPath = $derived(props.showPath ?? true);
  const enableSelection = $derived(props.enableSelection ?? true);
  const multiselect = $derived(props.multiselect ?? false);
  const items = $derived(props.items ?? []);
  const disabled = $derived(props.disabled ?? false);
  const classes = $derived([props.class || ''].filter(Boolean).join(' '));

  const pathParts = $derived(currentPath.split('/').filter((part) => part));
  const filteredItems = $derived.by(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return items;
    }

    return items.filter((item) => {
      const path = typeof item.path === 'string' ? item.path.toLowerCase() : '';
      return item.name.toLowerCase().includes(query) || path.includes(query);
    });
  });

  const restProps = $derived.by(() => {
    const {
      items: _items,
      viewMode,
      currentPath: _currentPath,
      searchable: _searchable,
      showPath: _showPath,
      enableSelection: _enableSelection,
      multiselect: _multiselect,
      onItemSelect,
      onItemDoubleClick,
      onItemAction,
      class: _class,
      itemClass,
      headerClass,
      toolbarClass,
      searchClass,
      pathClass,
      onUpload,
      onDownload,
      ...rest
    } = props;

    return rest;
  });

  function setSelectedItems(nextItems: FileSystemItem[]): void {
    selectedItems = nextItems;
  }

  function handleItemClick(item: FileSystemItem): void {
    handleItemClickFn(item, enableSelection, multiselect, selectedItems, setSelectedItems, props.onItemSelect);
  }

  function handleItemDoubleClick(item: FileSystemItem): void {
    handleItemDoubleClickFn(item, props.onItemDoubleClick);
  }

  function handleItemKeyDown(event: KeyboardEvent, item: FileSystemItem): void {
    handleItemKeyDownFn(
      event,
      item,
      () => handleItemClick(item),
      () => handleItemDoubleClick(item),
    );
  }

  function handleSearchInput(event: Event): void {
    handleSearchInputFn(event, (value) => {
      searchQuery = value;
    });
  }

  function handleUpload(event: Event): void {
    handleUploadFn(event, props.onUpload);
  }

  function handleDownload(item: FileSystemItem): void {
    handleDownloadFn(item, props.onDownload);
  }

  function toggleViewMode(): void {
    toggleViewModeFn(currentViewMode, (mode) => {
      currentViewMode = mode;
    });
  }

  function openUploadDialog(): void {
    if (!disabled) {
      fileInputElement?.click();
    }
  }

  return {
    get variant() {
      return 'default';
    },
    get size() {
      return 'md';
    },
    get disabled() {
      return disabled;
    },
    get classes() {
      return classes;
    },
    get searchable() {
      return searchable;
    },
    get showPath() {
      return showPath;
    },
    get currentPath() {
      return currentPath;
    },
    get items() {
      return items;
    },
    get selectedItems() {
      return selectedItems;
    },
    get searchQuery() {
      return searchQuery;
    },
    get currentViewMode() {
      return currentViewMode;
    },
    get pathParts() {
      return pathParts;
    },
    get filteredItems() {
      return filteredItems;
    },
    get restProps() {
      return restProps;
    },
    get fileInputElement() {
      return fileInputElement;
    },
    set fileInputElement(value: HTMLInputElement | null) {
      fileInputElement = value;
    },
    handleItemClick,
    handleItemDoubleClick,
    handleItemKeyDown,
    handleSearchInput,
    handleUpload,
    handleDownload,
    toggleViewMode,
    openUploadDialog,
  };
}

export default createFileExplorerState;
