import type { AddressFormProps } from '$stylist/form/interface/component/interaction-forms/other';
import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';

export interface AddressFormState {
	rootClass: string;
	inputClass: string;
	gridClass: string;
	gridItemClass: string;
}

export function createAddressFormState(props: AddressFormProps): AddressFormState {
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
