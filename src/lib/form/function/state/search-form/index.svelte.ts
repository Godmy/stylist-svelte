import type { SlotSearchForm as SearchFormProps } from '$stylist/form/interface/slot/search-form';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SlotSearchFormState } from '$stylist/form/interface/slot/search-form-state';

export function createSearchFormState(props: SearchFormProps): SlotSearchFormState {
	const rootClass = $derived(mergeClassNames('c-search-form', props.class ?? ''));
	const iconClass = $derived('c-search-form__icon');
	const inputClass = $derived('c-search-form__input');
	const submitButtonClass = $derived('c-search-form__submit');

	return {
		get rootClass() {
			return rootClass;
		},
		get iconClass() {
			return iconClass;
		},
		get inputClass() {
			return inputClass;
		},
		get submitButtonClass() {
			return submitButtonClass;
		}
	};
}

export default createSearchFormState;
