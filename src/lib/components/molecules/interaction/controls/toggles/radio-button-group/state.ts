import type { RadioButtonGroupProps } from '$stylist/design-system/props';
import { getToggleContainerClasses } from '$stylist/design-system/classes/toggles';

export const createRadioButtonGroupState = (props: RadioButtonGroupProps) => {
	const containerClasses = $derived(getToggleContainerClasses(props.class));
	return {
		get containerClasses() {
			return containerClasses;
		}
	};
};

