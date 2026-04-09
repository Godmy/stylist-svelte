import type { SimpleModalProps } from '$stylist/notification/interface/component/interaction-feedback/other';

export function createSimpleModalState(props: SimpleModalProps) {
	const dialogClasses = $derived(`bg-[var(--color-background-primary)] rounded-lg p-5 w-full max-w-sm ${props.class ?? ''}`);

	return {
		get dialogClasses() {
			return dialogCla