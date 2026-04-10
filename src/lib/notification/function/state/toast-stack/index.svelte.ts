import type { ToastStackProps } from '$stylist/notification/type/struct/toast-stack-props';
import type { ToastType } from '$stylist/notification/type/enum/toast-type';
import CheckCircle from '$stylist/svg/information/outline/check-circle.svg';
import AlertCircle from '$stylist/svg/information/outline/alert-circle.svg';
import Info from '$stylist/svg/information/outline/info.svg';
import XCircle from '$stylist/svg/information/outline/x-circle.svg';
import AlertTriangle from '$stylist/svg/information/outline/alert-triangle.svg';
import X from '$stylist/svg/information/outline/x.svg';

const positionClassesMap = {
	'top-right': 'top-4 right-4',
	'top-left': 'top-4 left-4',
	'bottom-right': 'bottom-4 right-4',
	'bottom-left': 'bottom-4 left-4',
	'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
	'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
};

const colorClassesMap: Record<ToastType, string> = {
	success: 'bg-[var(--color-success-50)] border-[var(--color-success-200)] text-[var(--color-success-800)]',
	warning: 'bg-yellow-50 border-[var(--color-success-200)] text-yellow-800',
	error: 'bg-[var(--color-danger-50)] border-[var(--color-danger-200)] text-[var(--color-danger-800)]',
	info: 'bg-[var(--color-primary-50)] border-[var(--color-primary-200)] text-[var(--color-primary-800)]'
};

const iconClassesMap: Record<ToastType, string> = {
	success: 'text-[var(--color-success-500)]',
	warning: 'text-yellow-500',
	error: 'text-[var(--color-danger-500)]',
	info: 'text-[var(--color-primary-500)]'
};

const iconMap: Record<ToastType, string> = {
	success: CheckCircle,
	warning: AlertTriangle,
	error: XCircle,
	info: Info
};

export function createToastStackState(props: ToastStackProps) {
	const position = $derived(props.position ?? 'bottom-right');
	const maxToasts = $derived(props.maxToasts ?? 5);
	const toasts = $derived(props.toasts ?? []);

	const containerClasses = $derived(
		`fixed z-[var(--z-index-modal)] space-y-3 ${positionClassesMap[position]} ${props.class ?? ''}`
	);

	function getToastColor(type: ToastType) {
		return colorClassesMap[type] || colorClassesMap.info;
	}

	function getToastIcon(type: ToastType) {
		return iconMap[type] || Info;
	}

	function getToastIconColor(type: ToastType) {
		return iconClassesMap[type] || iconClassesMap.info;
	}

	return {
		get containerClasses() { return containerClasses; },
		get toasts() { return toasts; },
		get maxToasts() { return maxToasts; },
		getToastColor,
		getToastIcon,
		getToastIconColor,
		X
	};
}

export default createToastStackState;
