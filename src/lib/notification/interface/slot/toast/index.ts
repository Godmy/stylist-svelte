import type { ToastType } from '$stylist/notification/type/enum/toast-type';
import type { ToastAction } from '../toast-action';

export interface Toast {
	id: string;
	title?: string;
	message: string;
	type: ToastType;
	duration?: number;
	actions?: ToastAction[];
	onDismiss?: () => void;
}
