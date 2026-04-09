import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';
import { INPUT_FIELD_PRESET } from '$stylist/input/preset/input';
import type { InputStateOptions } from '$stylist/layout/type/struct/component-state-input-state-options';

export function createAdvancedInputState(
	props: InputStateOptions
) {
	const inputState = createBaseInputState(INPUT_FIELD_PRESET, props);
	const containerClass = $derived(['w-full', String(props.class ?? '')].filter(Boolean).join(' '));
	const labelClass = $derived(
		[
			'block text-sm font-medium text-[--color-text-primary] mb-[--spacing-xs]',
			inputState.isDisabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : ''
		]
			.filter(Boolean)
			.join(' ')
	);

	return {
		...inputState,
		get containerClass() {
			return containerClass;
		},
		get labelClass() {
			return labelClass;
		},
		get inputClass() {
			return inputState.classes;
		}
	};
}

export default createAdvancedInputState;


