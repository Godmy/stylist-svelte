export type DialogConfirmProps = {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title: string;
	message: string;
	confirmText?: string;
	cancelText?: string;
	variant?: DialogConfirmVariant;
	isLoading?: boolean;
}
