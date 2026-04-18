import type { SlotModal as ModalProps } from '$stylist/navigation/interface/slot/modal';

export function createModalState(props: ModalProps) {
	const dialogClasses = $derived(`bg-[var(--color-background-primary)] rounded-xl p-6 w-full max-w-lg ${props.class ?? ''}`);

	return {
		get dialogClasses() {
			return dialogClasses;
		}
	};
}
 
 
export default createModalState; 
