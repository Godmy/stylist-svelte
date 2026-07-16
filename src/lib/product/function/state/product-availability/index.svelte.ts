import type { RecipeProductAvailability } from '$stylist/product/interface/recipe/product-availability';

export function createProductAvailabilityState(props: RecipeProductAvailability) {
	let showNotificationForm = $state(false);
	const statusClass = $derived(
		props.available
			? 'product-availability__status-badge product-availability__status-badge--available'
			: 'product-availability__status-badge product-availability__status-badge--unavailable'
	);

	return {
		get showNotificationForm() {
			return showNotificationForm;
		},
		get containerClass() {
			return ['product-availability', props.class, props.className].filter(Boolean).join(' ');
		},
		get headerClass() {
			return 'product-availability__header';
		},
		get titleClass() {
			return 'product-availability__title';
		},
		get statusBadgeClass() {
			return statusClass;
		},
		get descriptionClass() {
			return 'product-availability__description';
		},
		get notifyButtonClass() {
			return 'product-availability__notify-button';
		},
		get notificationFormClass() {
			return 'product-availability__notification-form';
		},
		get notificationTextClass() {
			return 'product-availability__notification-text';
		},
		get formContainerClass() {
			return 'product-availability__form-container';
		},
		get emailInputClass() {
			return 'product-availability__email-input';
		},
		get notifySubmitButtonClass() {
			return 'product-availability__notify-submit-button';
		},
		showForm() {
			showNotificationForm = true;
		},
		hideForm() {
			showNotificationForm = false;
		}
	};
}
