import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface PushNotificationProps extends StructIntersectAll<[]> {
	title?: string;
	message?: string;
	type?: 'info' | 'success' | 'warning' | 'error';
	showIcon?: boolean;
	autoDismiss?: boolean;
	duration?: number;
	onClose?: () => void;
	class?: string;
}
