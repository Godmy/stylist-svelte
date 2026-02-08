import type { RadioButtonGroupProps } from '$stylist/design-system/attributes';
import { getToggleContainerClasses } from '$stylist/design-system/presets/interaction/interaction-presets';

export const createRadioButtonGroupState = (props: RadioButtonGroupProps) => {
	return {
		containerClasses: getToggleContainerClasses(props.class)
	};
};
