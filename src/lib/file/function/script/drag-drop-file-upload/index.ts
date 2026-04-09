import type { FileType } from '$stylist/file/type/struct/drag-drop-file-upload/file-type';

export function handleFileSelect(
  e: Event,
  processFilesFn: (files: FileList) => void
): void {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    processFilesFn(target.files);
  }
}

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
        // This will be handled by component state
      }, onFileUpload);
    }
  }

  return newFiles;
}

export function simulateUpload(
  fileId: string,
  file: File,
  updateFile: (id: string, updates: Partial<FileType>) => void,
  onFileUpload?: (file: File) => void
): void {
  const interval = setInterval(() => {
    updateFile(fileId, { progress: Math.min(100, (Math.random() * 100)) });
  }, 200);
}

export function removeFile(
  id: string,
  files: FileType[]
): FileType[] {
  return files.filter(file => file.id !== id);
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' bytes';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}
