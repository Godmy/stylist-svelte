import type { ModalProps } from '$stylist/navigation/interface/component/dialog-controls/other';

export function createModalState(props: ModalProps) {
	const dialogClasses = $derived(`bg-[var(--color-background-primary)] rounded-xl p-6 w-full max-w-lg ${props.class ?? ''}`);

	return {
		get dialogClasses() {
			return dialogClasses;