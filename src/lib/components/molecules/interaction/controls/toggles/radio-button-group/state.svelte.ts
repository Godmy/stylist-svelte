import type { RadioButtonGroupProps } from '$stylist/design-system/attributes';
import { getToggleContainerClasses } from '$stylist/design-system/presets/interaction/interaction-presets';

export const createRadioButtonGroupState = (props: RadioButtonGroupProps) => {
	const containerClasses = $derived(getToggleContainerClasses(props.class));
	return {
		get containerClasses() {
			return containerClasses;
		}
	};
};
