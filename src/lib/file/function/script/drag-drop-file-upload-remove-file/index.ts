import type { FileType } from '$stylist/file/type/struct/drag-drop-file-upload/file-type';

export function removeFile(
  id: string,
  files: FileType[]
): FileType[] {
  return files.filter(file => file.id !== id);
}
