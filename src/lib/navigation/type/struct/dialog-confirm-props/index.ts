export type DialogConfirmVariant = 'danger' | 'warning' | 'info';

export interface DialogConfirmProps {
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
