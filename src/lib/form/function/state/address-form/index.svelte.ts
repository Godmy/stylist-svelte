import type { HTMLAttributes } from 'svelte/elements';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
export function createAddressFormState(props: ((HTMLAttributes<HTMLFormElement> & {
street?: string;
	city?: string;
	region?: string;
	postalCode?: string;
	country?: string;
	class?: string;
}))): ({
rootClass: string;
	inputClass: string;
	gridClass: string;
	gridItemClass: string;
}) {
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
