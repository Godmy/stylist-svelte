export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface ToastAction {
	label: string;
	onClick: () => void;
}

export interface Toast {
	id: string;
	title?: string;
	message: string;
	type: ToastType;
	duration?: number;
	actions?: ToastAction[];
	onDismiss?: () => void;
}
