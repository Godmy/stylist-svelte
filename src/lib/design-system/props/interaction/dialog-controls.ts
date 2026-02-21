import type { HTMLAttributes } from 'svelte/elements';

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  description?: string;
  class?: string;
  onClose?: () => void;
}

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  class?: string;
  onClose?: () => void;
}
