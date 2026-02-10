import type { SliderTickProps } from '$stylist/design-system/attributes';
import { BASE_CLASSES } from '$stylist/design-system/classes';
import { cn, mergeClasses } from '$stylist/utils/classes';

export const createSliderTickState = (props: SliderTickProps) => {
	const baseClasses = $derived(mergeClasses('absolute top-0 -translate-x-1/2', props.class));
	const position = $derived(typeof props.position === 'number' ? props.position : 0);
	const style = $derived(`left: ${position}%;${props.active ? ' font-weight: 600;' : ''}`);
	const labelContainerClasses = $derived(
		cn(BASE_CLASSES.text, 'mt-2 text-xs text-[--color-text-secondary] whitespace-nowrap')
	);
	return {
		get baseClasses() {
			return baseClasses;
		},
		get style() {
			return style;
		},
		get labelContainerClasses() {
			return labelContainerClasses;
		}
	};
};
