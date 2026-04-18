export function handleFileInput(
  e: Event,
  disabled: boolean,
  processFilesFn: (files: FileList) => void
): void {
  if (disabled) return;

  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    processFilesFn(target.files);
  }
}
