import type { ToastStackProps } from '$stylist/notification/type/struct/toast-stack-props';
import type { StatusSeverity } from '$stylist/information/type/struct/status-severity';

const iconMap: Record<StatusSeverity, string> = {
	success: 'check-circle',
	warning: 'alert-triangle',
	error: 'x-circle',
	info: 'info'
};

export function createToastStackState(props: ToastStackProps) {
	const position = $derived(props.position ?? 'bottom-right');
	const maxToasts = $derived(props.maxToasts ?? 5);
	const toasts = $derived(props.toasts ?? []);

	const containerClasses = $derived(
		`toast-stack toast-stack--${position} ${props.class ?? ''}`.trim()
	);

	function getToastColor(type: StatusSeverity) {
		return `toast-item toast-item--${type}`;
	}

	function getToastIcon(type: StatusSeverity) {
		return iconMap[type] || 'info';
	}

	function getToastIconColor(type: StatusSeverity) {
		return `toast-item__icon toast-item__icon--${type}`;
	}

	return {
		get containerClasses() {
			return containerClasses;
		},
		get toasts() {
			return toasts;
		},
		get maxToasts() {
			return maxToasts;
		},
		getToastColor,
		getToastIcon,
		getToastIconColor,
		X: 'x' as const
	};
}

export default createToastStackState;
