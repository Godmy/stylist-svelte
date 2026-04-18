import type { FileItem } from '$stylist/file/type/struct/file-list-item/file-item';

export function handleSelect(
  item: FileItem,
  disabled: boolean,
  enableSelection: boolean,
  isSelected: boolean,
  setIsSelected: (value: boolean) => void,
  onItemSelect?: (item: FileItem) => void
): void {
  if (!disabled && enableSelection) {
    const newValue = !isSelected;
    setIsSelected(newValue);
    onItemSelect?.({ ...item, selected: newValue });
  }
}
