import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SliderTickProps } from '$stylist/control/type/struct/slider-tick-props';

export type SliderTickComponentProps = SliderTickProps &
	HTMLAttributes<HTMLDivElement> &
	SlotInteraction;
