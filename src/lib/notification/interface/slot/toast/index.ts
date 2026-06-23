import type { StatusSeverity } from '$stylist/information/type/struct/status-severity';
import type { ToastAction } from '../toast-action';

export interface Toast {
	id: string;
	title?: string;
	message: string;
	type: StatusSeverity;
	duration?: number;
	actions?: ToastAction[];
	onDismiss?: () => void;
}
