export function handleDragOver(
  e: DragEvent,
  setIsDragOver: (value: boolean) => void,
  onDragOver?: (e: DragEvent) => void
): void {
  e.preventDefault();
  setIsDragOver(true);
  onDragOver?.(e);
}
