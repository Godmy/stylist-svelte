import type { SlotScreenReader as ScreenReaderProps } from '$stylist/form/interface/slot/screen-reader';
import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';
import type { SlotScreenReaderState } from '$stylist/form/interface/slot/screen-reader-state';

export function createScreenReaderState(props: ScreenReaderProps): SlotScreenReaderState {
	const rootClass = $derived(InteractionFormsStyleManager.root('c-screen-reader border rounded-lg p-4', props.class ?? ''));
	const titleClass = $derived('font-semibold');
	const contentClass = $derived('text-sm text-[var(--color-text-primary)]');
	const actionButtonClass = $derived('sr-only');

	return {
		get rootClass() { return rootClass; },
		get titleClass() { return titleClass; },
		get contentClass() { return contentClass; },
		get actionButtonClass() { return actionButtonClass; }
	};
}

export default createScreenReaderState;
