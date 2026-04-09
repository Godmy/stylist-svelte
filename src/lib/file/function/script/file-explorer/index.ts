import type { FileSystemItem } from '$stylist/file/type/struct/file-explorer/file-system-item';

export function handleItemClick(
  item: FileSystemItem,
  enableSelection: boolean,
  multiselect: boolean,
  selectedItems: FileSystemItem[],
  setSelectedItems: (items: FileSystemItem[]) => void,
  onItemSelect?: (item: FileSystemItem) => void
): void {
  if (enableSelection) {
    if (multiselect) {
      if (selectedItems.some(i => i.id === item.id)) {
        setSelectedItems(selectedItems.filter(i => i.id !== item.id));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    } else {
      setSelectedItems([item]);
    }
  }

  onItemSelect?.(item);
}

export function handleItemDoubleClick(
  item: FileSystemItem,
  onItemDoubleClick?: (item: FileSystemItem) => void
): void {
  onItemDoubleClick?.(item);
}

export function handleItemKeyDown(
  event: KeyboardEvent,
  item: FileSystemItem,
  handleItemClickFn: () => void,
  handleItemDoubleClickFn: () => void
): void {
  if (event.key === ' ' || event.key === 'Spacebar') {
    event.preventDefault();
    handleItemClickFn();
    return;
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    handleItemClickFn();
    handleItemDoubleClickFn();
  }
}

export function handleSearchInput(
  e: Event,
  setSearchQuery: (value: string) => void
): void {
  const target = e.target as HTMLInputElement;
  setSearchQuery(target.value);
}

export function handleUpload(
  e: Event,
  onUpload?: (files: FileList) => void
): void {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    onUpload?.(target.files);
  }
}

export function handleDownload(
  item: FileSystemItem,
  onDownload?: (item: FileSystemItem) => void
): void {
  onDownload?.(item);
}

export function toggleViewMode(
  currentViewMode: 'grid' | 'list',
  setCurrentViewMode: (mode: 'grid' | 'list') => void
): void {
  setCurrentViewMode(currentViewMode === 'list' ? 'grid' : 'list');
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function getFileIcon(item: FileSystemItem): string {
  if (item.type === 'folder') return 'folder';
  return 'file';
}
