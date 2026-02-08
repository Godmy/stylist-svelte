import type { SwitchProps } from '$stylist/design-system/attributes';
import {
	getSwitchInputClasses,
	getSwitchKnobClasses,
	getSwitchTrackClasses
} from '$stylist/design-system/presets';

export const createSwitchState = (props: SwitchProps) => {
	return {
		trackClasses: getSwitchTrackClasses(props.class),
		knobClasses: getSwitchKnobClasses(),
		inputClasses: getSwitchInputClasses()
	};
};
