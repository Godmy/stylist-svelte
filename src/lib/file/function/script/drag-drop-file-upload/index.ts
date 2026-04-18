export function handleFileSelect(
  e: Event,
  processFilesFn: (files: FileList) => void
): void {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    processFilesFn(target.files);
  }
}
