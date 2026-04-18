export function handleDrop(
  e: DragEvent,
  setIsDragOver: (value: boolean) => void,
  disabled: boolean,
  processFilesFn: (files: FileList) => void
): void {
  e.preventDefault();
  setIsDragOver(false);

  if (disabled) return;

  const files = e.dataTransfer?.files;
  if (files && files.length > 0) {
    processFilesFn(files);
  }
}
