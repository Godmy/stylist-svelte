import type { ToastProps } from '$stylist/notification/type/struct/toast-props';
import { ToastStyleManager } from '$stylist/notification/class/style-manager/toast';

export function createToastState(props: ToastProps) {
	const type = $derived(props.type ?? 'info');
	let internalVisible = $state(props.visible ?? true);

	$effect(() => {
		internalVisible = props.visible ?? true;
	});

	$effect(() => {
		const duration = props.duration ?? 5000;
		if (internalVisible && duration > 0) {
			const timer = setTimeout(() => {
				internalVisible = false;
			}, duration);
			return () => clearTimeout(timer);
		}
	});

	function closeToast() {
		internalVisible = false;
	}

	const classes = $derived(
		ToastStyleManager.getAllClasses(type, internalVisible, props.class ?? '')
	);

	return {
		get internalVisible() { return internalVisible; },
		get classes() { return classes; },
		closeToast
	};
}

export default createToastState;
