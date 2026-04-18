import type { FileType } from '$stylist/file/type/struct/drag-drop-file-upload/file-type';

export function simulateUpload(
  fileId: string,
  file: File,
  updateFile: (id: string, updates: Partial<FileType>) => void,
  onFileUpload?: (file: File) => void
): void {
  void file;
  void onFileUpload;
  setInterval(() => {
    updateFile(fileId, { progress: Math.min(100, (Math.random() * 100)) });
  }, 200);
}
