import { InputStyleManager } from '$stylist/input/class/style-manager/input';
import { createInputTextState } from '$stylist/input/function/state/input-text';
import type { IInputDoubleProps } from '$stylist/input/interface/component/input/other';

export const createInputDoubleState = (props: IInputDoubleProps) => {
	const hasError1 = $derived((props.errors1?.length ?? 0) > 0);
	const hasError2 = $derived((props.errors2?.length ?? 0) > 0);
	const errorId1 = $derived(props.id1 ? `${props.id1}-error` : undefined);
	const errorId2 = $derived(props.id2 ? `${props.id2}-error` : undefined);
	const inputState1 = $derived(
		createInputTextState({
			variant: props.variant,
			size: props.size,
			disabled: props.disabled1,
			error: hasError1,
			block: false,
			class: props.class
		})
	);
	const inputState2 = $derived(
		createInputTextState({
			variant: props.variant,
			size: props.size,
			disabled: props.disabled2,
			error: hasError2,
			block: false,
			class: props.class
		})
	);
	const containerClasses = $derived(InputStyleManager.getInputDoubleContainerClass(props.class ?? ''));
	const labelClasses = $derived(InputStyleManager.getLabelClass(''));
	const errorTextClasses = $derived(InputStyleManager.getErrorTextClass(''));
	const requiredIndicatorClasses = $derived(InputStyleManager.getRequiredIndicatorClass(''));

	return {
		get hasError1() {
			return hasError1;
		},
		get hasError2() {
			return hasError2;
		},
		get errorId1() {
			return errorId1;
		},
		get errorId2() {
			return errorId2;
		},
		get inputClasses1() {
			return inputState1.classes;
		},
		get inputClasses2() {
			return inputState2.classes;
		},
		get containerClasses() {
			return containerClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		get errorTextClasses() {
			return errorTextClasses;
		},
		get requiredIndicatorClasses() {
			return requiredIndicatorClasses;
		}
	};
};

export default createInputDoubleState;
