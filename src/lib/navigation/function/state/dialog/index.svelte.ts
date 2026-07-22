import type { SlotDialog as DialogProps } from '$stylist/navigation/interface/slot/dialog';

export function createDialogState(props: DialogProps) {
	const dialogClasses = $derived(`nav-dialog ${props.class ?? ''}`.trim());

	return {
		get dialogClasses() {
			return dialogClasses;
		}
	};
}

export default createDialogState;
