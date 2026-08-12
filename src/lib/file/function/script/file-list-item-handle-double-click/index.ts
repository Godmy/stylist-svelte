import type { FileItem } from '$stylist/file/type/object/file-list-item/file-item';

export function handleDoubleClick(
	item: FileItem,
	disabled: boolean,
	onItemDoubleClick?: (item: FileItem) => void
): void {
	if (!disabled) {
		onItemDoubleClick?.(item);
	}
}
