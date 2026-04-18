export function handleDragLeave(
  e: DragEvent,
  setIsDragOver: (value: boolean) => void,
  onDragLeave?: (e: DragEvent) => void
): void {
  e.preventDefault();
  setIsDragOver(false);
  onDragLeave?.(e);
}
