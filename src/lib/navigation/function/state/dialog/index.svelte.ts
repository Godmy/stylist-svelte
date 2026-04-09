import type { DialogProps } from '$stylist/navigation/interface/component/dialog-controls/other';

export function createDialogState(props: DialogProps) {
	const dialogClasses = $derived(`bg-[var(--color-background-primary)] rounded-lg p-5 w-full max-w-md ${props.class ?? ''}`);

	return {
		get dialogClasses() {
			return dialogClasses;