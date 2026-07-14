import type { SlotInputLabel as IInputLabelProps } from '$stylist/input/interface/slot/input-label';

export const createInputLabelState = (props: IInputLabelProps) => {
	return {
		get labelClasses() {
			return 'input-field-label';
		},
		get requiredIndicatorClasses() {
			return 'input-field-required';
		}
	};
};

export default createInputLabelState;
