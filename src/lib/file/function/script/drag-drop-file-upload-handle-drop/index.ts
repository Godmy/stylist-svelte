export function handleDrop(
  e: DragEvent,
  setIsDragging: (value: boolean) => void,
  processFilesFn: (files: FileList) => void
): void {
  e.preventDefault();
  setIsDragging(false);

  if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
    processFilesFn(e.dataTransfer.files);
  }
}
