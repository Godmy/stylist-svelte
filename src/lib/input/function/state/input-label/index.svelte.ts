import type { SlotInputLabel } from '$stylist/input/interface/slot/input-label';

export const createInputLabelState = (props: SlotInputLabel) => {
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
