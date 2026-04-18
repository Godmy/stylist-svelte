import type { FileItem } from '$stylist/file/type/struct/file-list-item/file-item';

export function handleAction(
  item: FileItem,
  action: string,
  disabled: boolean,
  onItemAction?: (item: FileItem, action: string) => void
): void {
  if (!disabled) {
    onItemAction?.(item, action);
  }
}
