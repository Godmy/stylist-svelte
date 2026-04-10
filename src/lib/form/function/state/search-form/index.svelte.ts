import type { SearchFormProps } from '$stylist/form/interface/component/interaction-forms/other';
import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';

export const SEARCH_ICON_NAME = 'search';

export interface SearchFormState {
	rootClass: string;
	iconClass: string;
	inputClass: string;
	submitButtonClass: string;
}

export function createSearchFormState(props: SearchFormProps): SearchFormState {
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
