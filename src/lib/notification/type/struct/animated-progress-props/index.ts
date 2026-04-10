import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface AnimatedProgressProps extends InteractionHTMLAttributes<HTMLDivElement> {
	value?: number;
	min?: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	class?: string;
}
