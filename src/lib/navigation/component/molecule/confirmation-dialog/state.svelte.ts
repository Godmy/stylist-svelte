import type { SlotConfirmationDialog as RecipeConfirmationDialog } from '$stylist/navigation/interface/slot/confirmation-dialog';

export function createConfirmationDialogState(props: RecipeConfirmationDialog) {
	const handleConfirm = () => {
		props.onConfirm?.();
		props.onClose?.();
	};

	const handleCancel = () => {
		props.onCancel?.();
		props.onClose?.();
	};

	const handleClose = () => {
		props.onClose?.();
	};

	return {
		handleConfirm,
		handleCancel,
		handleClose
	};
}
