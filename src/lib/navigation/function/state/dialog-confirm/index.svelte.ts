import type { DialogConfirmProps } from '$stylist/navigation/type/struct/dialog-confirm-props';
import { DIALOG_CONFIRM_VARIANT_CLASSES } from '$stylist/navigation/const/record/dialog-confirm-variant-classes';
import { handleConfirmCallback } from '$stylist/navigation/function/script/dialog-confirm';

const DIALOG_CONFIRM_ICON_COLORS = {
	danger: 'text-[var(--color-danger-600)]',
	warning: 'text-[var(--color-warning-600)]',
	info: 'text-[var(--color-primary-600)]'
} as const;

const DIALOG_CONFIRM_ICON_NAMES = {
	danger: 'alert-triangle',
	warning: 'triangle-alert',
	info: 'info'
} as const;

export function createDialogConfirmState(props: DialogConfirmProps) {
	const variantClasses = $derived(DIALOG_CONFIRM_VARIANT_CLASSES[props.variant ?? 'danger']);
	const iconColor = $derived(DIALOG_CONFIRM_ICON_COLORS[props.variant ?? 'danger']);
	const confirmButtonClasses = $derived(`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${variantClasses} text-base font-medium text-[var(--color-text-inverse)] focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-[var(--opacity-50)] disabled:cursor-not-allowed`);
	const cancelButtonClasses = 'mt-3 w-full inline-flex justify-center rounded-md border border-[var(--color-border-primary)] shadow-sm px-4 py-2 bg-[var(--color-background-primary)] text-base font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-[var(--opacity-50)] disabled:cursor-not-allowed';
	const iconContainerClasses = 'mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-[var(--color-neutral-100)] sm:mx-0 sm:h-10 sm:w-10';
	const titleClasses = 'mb-4 text-lg font-semibold text-[var(--color-text-primary)]';
	const messageClasses = 'text-sm text-[var(--color-text-secondary)]';
	const backdropClasses = 'fixed inset-0 z-[var(--z-index-overlay)] flex items-center justify-center bg-[var(--color-neutral-900)]/40 p-4';
	const dialogClasses = 'w-full max-w-md rounded-lg bg-[var(--color-background-primary)] p-6 shadow-lg';
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
