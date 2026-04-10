import type { OverlayProps } from '$stylist/notification/type/struct/overlay-props';

export function createOverlayState(props: OverlayProps) {
	let isLoading = $state(props.loading ?? false);

	$effect(() => {
		isLoading = props.loading ?? false;
	});

	const spinnerSize = $derived(props.spinnerSize ?? 'md');
	const message = $derived(props.message ?? 'Loading visualization...');

	const spinnerClasses = $derived(`spinner ${spinnerSize}`);

	return {
		get isLoading() {
			return isLoading;
		},
		get spinnerClasses() {
			return spinnerClasses;
		},
		get message() {
			return message;
		}
	};
}

export default createOverlayState;
