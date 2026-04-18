import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Toast } from '$stylist/notification/interface/slot';

export type ToastStackProps = InteractionHTMLAttributes<HTMLDivElement> & {
	toasts: Toast[];
	position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
	maxToasts?: number;
	class?: string;
	toastClass?: string;
}
