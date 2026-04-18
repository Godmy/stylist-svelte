import type { SlotAddressForm as AddressFormProps } from '$stylist/form/interface/slot/address-form';
import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';
import type { SlotAddressFormState } from '$stylist/form/interface/slot/address-form-state';

export function createAddressFormState(props: AddressFormProps): SlotAddressFormState {
	const rootClass = $derived(InteractionFormsStyleManager.root('c-address-form border rounded-lg p-4 space-y-2', props.class ?? ''));
	const inputClass = $derived('w-full border rounded px-2 py-1');
	const gridClass = $derived('grid grid-cols-2 gap-2');
	const gridItemClass = $derived('w-full border rounded px-2 py-1');

	return {
		get rootClass() { return rootClass; },
		get inputClass() { return inputClass; },
		get gridClass() { return gridClass; },
		get gridItemClass() { return gridItemClass; }
	};
}

export default createAddressFormState;
