import type { FileType } from '$stylist/file/type/struct/drag-drop-file-upload/file-type';

export function processFiles(
  selectedFiles: FileList,
  files: FileType[],
  maxSize: number,
  onFileSelect?: (files: FileList) => void,
  simulateUploadFn?: (fileId: string, file: File, updateProgress: (id: string, progress: number, status: string) => void, onFileUpload?: (file: File) => void) => void,
  onFileUpload?: (file: File) => void
): FileType[] {
  onFileSelect?.(selectedFiles);

  const newFiles: FileType[] = [...files];

  for (let i = 0; i < selectedFiles.length; i++) {
    const file = selectedFiles[i];

    if (file.size > maxSize) {
      console.error(`File ${file.name} exceeds max size of ${maxSize} bytes`);
      continue;
    }

    const newFile: FileType = {
      id: Math.random().toString(36).substring(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'uploading',
      progress: 0
    };

    newFiles.push(newFile);

    if (simulateUploadFn) {
      simulateUploadFn(newFile.id, file, (id, progress, status) => {
        void id;
        void progress;
        void status;
      }, onFileUpload);
    }
  }

  return newFiles;
}
