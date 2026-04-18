/**
 * Handle file change event for file input
 */
export function handleFileChange(
  e: Event,
  multiple: boolean,
  onFileChange?: (files: File | File[] | null) => void
): { internalValue: File | File[] | null; fileName: string } {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    if (multiple) {
      const files = Array.from(target.files);
      onFileChange?.(files);
      return { internalValue: files, fileName: `${files.length} file(s) selected` };
    } else {
      const file = target.files[0];
      onFileChange?.(file);
      return { internalValue: file, fileName: file.name };
    }
  } else {
    onFileChange?.(null);
    return { internalValue: null, fileName: '' };
  }
}
