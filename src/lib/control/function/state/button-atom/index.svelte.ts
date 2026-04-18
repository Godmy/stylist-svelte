import type { HTMLButtonAttributes } from 'svelte/elements';
import type { SlotButtonElement as ButtonElementProps } from '$stylist/control/interface/slot/button-element';
import { createButtonFactoryInput } from '$stylist/interaction/factory/button';
import { createButtonState as createOriginalButtonState } from '$stylist/control/function/state/button';

export function createButtonState(props: ButtonElementProps & HTMLButtonAttributes) {
	const factoryInput = $derived(createButtonFactoryInput(props));
	const state = $derived.by(() => createOriginalButtonState(factoryInput));

	return {
		get factoryInput() { return factoryInput; },
		get state() { return state; },
		get classes() { return state.classes; },
		get attrs() { return state.attrs; },
		get loading() { return state.loading; },
		get loaderClasses() { return state.loaderClasses; }
	};
}

export default createButtonState;
