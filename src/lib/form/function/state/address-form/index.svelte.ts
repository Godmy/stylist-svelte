import type { SlotAddressForm as AddressFormProps } from '$stylist/form/interface/slot/address-form';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SlotAddressFormState } from '$stylist/form/interface/slot/address-form-state';

export function createAddressFormState(props: AddressFormProps): SlotAddressFormState {
	const rootClass = $derived(mergeClassNames('c-address-form', props.class ?? ''));
	const inputClass = $derived('c-address-form__input');
	const gridClass = $derived('c-address-form__grid');
	const gridItemClass = $derived('c-address-form__input');

	return {
		get rootClass() {
			return rootClass;
		},
		get inputClass() {
			return inputClass;
		},
		get gridClass() {
			return gridClass;
		},
		get gridItemClass() {
			return gridItemClass;
		}
	};
}

export default createAddressFormState;
