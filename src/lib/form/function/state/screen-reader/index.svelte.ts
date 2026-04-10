import type { ScreenReaderProps } from '$stylist/form/interface/component/interaction-forms/other';
import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';

export interface ScreenReaderState {
	rootClass: string;
	titleClass: string;
	contentClass: string;
	actionButtonClass: string;
}

export function createScreenReaderState(props: ScreenReaderProps): ScreenReaderState {
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
