export type DragDropFileStatus = 'uploading' | 'success' | 'error';

export interface IDragDropFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: DragDropFileStatus;
  progress?: number;
}

export interface IDragDropFileUploadProps {
  multiple?: boolean;
  accept?: string;
  maxSize?: number;
  disabled?: boolean;
  class?: string;
  dropZoneClass?: string;
  fileListClass?: string;
  fileItemClass?: string;
  buttonClass?: string;
  preview?: boolean;
  onFileSelect?: (files: FileList) => void;
  onFileUpload?: (file: File) => void;
  [key: string]: unknown;
}
