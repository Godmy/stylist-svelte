import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface DialogProps extends InteractionHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  description?: string;
  class?: string;
  onClose?: () => void;
}

export interface ModalProps extends InteractionHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  class?: string;
  onClose?: () => void;
}


