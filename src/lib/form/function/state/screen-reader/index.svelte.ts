import type { SlotScreenReader as ScreenReaderProps } from '$stylist/form/interface/slot/screen-reader';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SlotScreenReaderState } from '$stylist/form/interface/slot/screen-reader-state';

export function createScreenReaderState(props: ScreenReaderProps): SlotScreenReaderState {
	const rootClass = $derived(mergeClassNames('c-screen-reader', props.class ?? ''));
	const titleClass = $derived('c-screen-reader__title');
	const contentClass = $derived('c-screen-reader__content');
	const actionButtonClass = $derived('c-screen-reader__action');

	return {
		get rootClass() {
			return rootClass;
		},
		get titleClass() {
			return titleClass;
		},
		get contentClass() {
			return contentClass;
		},
		get actionButtonClass() {
			return actionButtonClass;
		}
	};
}

export default createScreenReaderState;
