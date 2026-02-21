import { mergeClasses } from '$stylist/utils/classes';
﻿import type { SwitchProps } from '$stylist/design-system/props';
import { TogglesStyleManager } from '$stylist/design-system/styles/interaction/toggles';

export const createSwitchState = (props: SwitchProps) => {
	const disabled = props.disabled ?? false;
	const required = props.required ?? false;
	const className = props.class ?? '';

	const trackClasses = mergeClasses(
		TogglesStyleManager.getSwitchTrackClasses('md', disabled, props.checked),
		className
	);
	const knobClasses = mergeClasses(
		TogglesStyleManager.getToggleThumbClasses('md', disabled, props.checked)
	);
	const inputClasses = TogglesStyleManager.getSwitchInputClasses(disabled);
	const containerClasses = mergeClasses(
		'flex items-center',
		props.label || props.description ? 'space-x-3' : ''
	);
	const labelTextClasses = 'flex flex-col';
	const labelTitleClasses = 'text-sm font-medium leading-5';
	const requiredMarkerClasses = 'text-[--color-danger-500] ml-1';
	const labelDescriptionClasses = 'text-xs text-[--color-text-secondary] mt-1';

	return {
		trackClasses,
		knobClasses,
		inputClasses,
		containerClasses,
		disabled,
		required,
		labelClasses: 'flex items-center gap-2',
		labelTextClasses,
		labelTitleClasses,
		requiredMarkerClasses,
		labelDescriptionClasses
	};
};


export default createSwitchState;



