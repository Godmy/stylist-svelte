import type { ToastStackProps } from '$stylist/notification/type/struct/toast-stack-props';

import type { TOKEN_STATUS } from '$stylist/information/const/array/status';
const iconMap: Partial<Record<(typeof TOKEN_STATUS)[number], string>> = {
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

	function getToastColor(type: (typeof TOKEN_STATUS)[number]) {
		return `toast-item toast-item--${type}`;
	}

	function getToastIcon(type: (typeof TOKEN_STATUS)[number]) {
		return iconMap[type] || 'info';
	}

	function getToastIconColor(type: (typeof TOKEN_STATUS)[number]) {
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
