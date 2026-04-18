import { SEARCH_ICON_NAME } from '$stylist/form/const/value/search-icon-name';
import type { SlotSearchForm as SearchFormProps } from '$stylist/form/interface/slot/search-form';
import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';
import type { SlotSearchFormState } from '$stylist/form/interface/slot/search-form-state';


export function createSearchFormState(props: SearchFormProps): SlotSearchFormState {
	const rootClass = $derived(InteractionFormsStyleManager.root('c-search-form border rounded-lg p-3 flex items-center gap-2', props.class ?? ''));
	const iconClass = $derived('h-4 w-4 text-[var(--color-text-secondary)]');
	const inputClass = $derived('flex-1 border rounded px-2 py-1');
	const submitButtonClass = $derived('px-3 py-1 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded');

	return {
		get rootClass() { return rootClass; },
		get iconClass() { return iconClass; },
		get inputClass() { return inputClass; },
		get submitButtonClass() { return submitButtonClass; }
	};
}

export default createSearchFormState;
