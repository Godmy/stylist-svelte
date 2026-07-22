import type { HTMLAttributes } from 'svelte/elements';
import type { Toast } from '$stylist/notification/interface/slot/toast';

export type ToastStackProps = HTMLAttributes<HTMLDivElement> & {
	toasts: Toast[];
	position?:
		| 'top-right'
		| 'top-left'
		| 'bottom-right'
		| 'bottom-left'
		| 'top-center'
		| 'bottom-center';
	maxToasts?: number;
	class?: string;
	toastClass?: string;
};
