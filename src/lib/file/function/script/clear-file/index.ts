/**
 * Clear the file input
 */
export function clearFile(
  inputElement: HTMLInputElement | null,
  onFileChange?: (files: File | File[] | null) => void
): void {
  onFileChange?.(null);
  if (inputElement) {
    inputElement.value = '';
  }
}
