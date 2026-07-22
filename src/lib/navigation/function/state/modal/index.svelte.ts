import type { SlotModal as ModalProps } from '$stylist/navigation/interface/slot/modal';

export function createModalState(props: ModalProps) {
	const dialogClasses = $derived(`nav-dialog ${props.class ?? ''}`.trim());

	return {
		get dialogClasses() {
			return dialogClasses;
		}
	};
}

export default createModalState;
