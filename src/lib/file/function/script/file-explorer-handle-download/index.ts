import type { SlotFileSystemItem } from '$stylist/file/type/object/file-explorer/file-system-item';

export function handleDownload(
	item: SlotFileSystemItem,
	onDownload?: (item: SlotFileSystemItem) => void
): void {
	onDownload?.(item);
}
