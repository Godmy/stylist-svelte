import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type Props = {
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
} & InteractionHTMLAttributes<HTMLDivElement>;
