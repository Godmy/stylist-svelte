import type { SliderTickProps } from '$stylist/design-system/attributes';
import { BASE_CLASSES } from '$stylist/design-system/tokens/classes';
import { cn, mergeClasses } from '$stylist/utils/classes';
import { getSliderTickStyle } from './helpers';

export const createSliderTickState = (props: SliderTickProps) => {
	return {
		baseClasses: mergeClasses('absolute top-0 -translate-x-1/2', props.class),
		style: getSliderTickStyle(props.position, props.value, props.active),
		labelContainerClasses: cn(
			BASE_CLASSES.text,
			'mt-2 text-xs text-[--color-text-secondary] whitespace-nowrap'
		)
	};
};
