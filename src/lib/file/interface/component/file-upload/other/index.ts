import type { Snippet } from 'svelte';

export type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

export interface IFileUploadProps {
  accept?: string;
  maxSize?: number;
  multiple?: boolean;
  status?: UploadStatus;
  file?: File | null;
  onFileSelect?: (file: File | FileList | null) => void;
  onUpload?: (file: File) => Promise<void>;
  children?: Snippet;
  disabled?: boolean;
  uploadText?: string;
  class?: string;
  [key: string]: unknown;
}
