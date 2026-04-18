export function handleUpload(
  e: Event,
  onUpload?: (files: FileList) => void
): void {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    onUpload?.(target.files);
  }
}
