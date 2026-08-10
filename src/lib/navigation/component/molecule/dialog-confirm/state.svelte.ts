import type { DialogConfirmProps } from '$stylist/navigation/type/struct/dialog-confirm-props/dialogconfirm-props';
import { handleConfirmCallback } from '$stylist/navigation/function/script/dialog-confirm';

const DIALOG_CONFIRM_ICON_NAMES = {
	danger: 'alert-triangle',
	warning: 'triangle-alert',
	info: 'info'
} as const;

export function createDialogConfirmState(props: DialogConfirmProps) {
	const variantClasses = $derived(`dc-btn-confirm--${props.variant ?? 'danger'}`);
	const iconColor = $derived(`dc-icon--${props.variant ?? 'danger'}`);
	const confirmButtonClasses = $derived(variantClasses);
	const cancelButtonClasses = 'dc-btn-cancel';
	const iconContainerClasses = 'dc-icon-wrap';
	const titleClasses = 'dc-title';
	const messageClasses = 'dc-message';
	const backdropClasses = 'dc-overlay';
	const dialogClasses = 'dc-card';
	const iconName = $derived(DIALOG_CONFIRM_ICON_NAMES[props.variant ?? 'danger']);
	const isLoading = $derived(props.isLoading ?? false);

	return {
		get variantClasses() {
			return variantClasses;
		},
		get iconColor() {
			return iconColor;
		},
		get confirmButtonClasses() {
			return confirmButtonClasses;
		},
		get cancelButtonClasses() {
			return cancelButtonClasses;
		},
		get iconContainerClasses() {
			return iconContainerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get messageClasses() {
			return messageClasses;
		},
		get backdropClasses() {
			return backdropClasses;
		},
		get dialogClasses() {
			return dialogClasses;
		},
		get iconName() {
			return iconName;
		},
		get isLoading() {
			return isLoading;
		},
		handleConfirm() {
			handleConfirmCallback(props.onConfirm);
		}
	};
}

export default createDialogConfirmState;
