import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type Props = InteractionHTMLAttributes<HTMLDivElement> & {
  accept?: string;
  maxSize?: number;
  multiple?: boolean;
  status?: 'idle' | 'uploading' | 'success' | 'error';
  file?: File | null;
  onFileSelect?: (file: File | FileList | null) => void;
  onUpload?: (file: File) => Promise<void>;
  children?: Snippet;
  disabled?: boolean;
  uploadText?: string;
};
