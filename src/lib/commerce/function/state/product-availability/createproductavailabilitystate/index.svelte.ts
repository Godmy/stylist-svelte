import { ProductAvailabilityStyleManager } from '$stylist/commerce/class/style-manager/product-availability';
import type { ProductAvailabilityProps } from '../productavailabilityprops';

export function createProductAvailabilityState(props: ProductAvailabilityProps) {
	let showNotificationForm = $state(false);

	const containerClass = $derived(
		ProductAvailabilityStyleManager.getContainerClass(
			props.available
				? ProductAvailabilityStyleManager.getInStockClass()
				: ProductAvailabilityStyleManager.getOutOfStockClass(),
			props.className ?? ''
		)
	);
	const headerClass = $derived(ProductAvailabilityStyleManager.getHeaderClass());
	const titleClass = $derived(ProductAvailabilityStyleManager.getTitleClass());
	const statusBadgeClass = $derived(
		ProductAvailabilityStyleManager.getStatusBadgeClass(
			props.available
				? ProductAvailabilityStyleManager.getInStockBadgeClass()
				: ProductAvailabilityStyleManager.getOutOfStockBadgeClass()
		)
	);
	const descriptionClass = $derived(ProductAvailabilityStyleManager.getDescriptionClass());
	const notifyButtonClass = $derived(ProductAvailabilityStyleManager.getNotifyButtonClass());
	const notificationFormClass = $derived(ProductAvailabilityStyleManager.getNotificationFormClass());
	const notificationTextClass = $derived(ProductAvailabilityStyleManager.getNotificationTextClass());
	const formContainerClass = $derived(ProductAvailabilityStyleManager.getFormContainerClass());
	const emailInputClass = $derived(ProductAvailabilityStyleManager.getEmailInputClass());
	const notifySubmitButtonClass = $derived(ProductAvailabilityStyleManager.getNotifySubmitButtonClass());

	return {
		get showNotificationForm() { return showNotificationForm; },
		get containerClass() { return containerClass; },
		get headerClass() { return headerClass; },
		get titleClass() { return titleClass; },
		get statusBadgeClass() { return statusBadgeClass; },
		get descriptionClass() { return descriptionClass; },
		get notifyButtonClass() { return notifyButtonClass; },
		get notificationFormClass() { return notificationFormClass; },
		get notificationTextClass() { return notificationTextClass; },
		get formContainerClass() { return formContainerClass; },
		get emailInputClass() { return emailInputClass; },
		get notifySubmitButtonClass() { return notifySubmitButtonClass; },
		showForm() { showNotificationForm = true; },
		hideForm() { showNotificationForm = false; }
	};
}

export default createProductAvailabilityState;
