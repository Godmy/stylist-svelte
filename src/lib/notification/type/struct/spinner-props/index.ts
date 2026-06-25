import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SpinnerVariant } from '$stylist/token/type/alias/spinner-variant';

export type SpinnerProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	variant?: SpinnerVariant;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	color?: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'white' | string;
	label?: string;
	showLabel?: boolean;
	class?: string;
	spinnerClass?: string;
};

