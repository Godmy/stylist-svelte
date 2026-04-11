import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type AnimatedProgressProps = InteractionHTMLAttributes<HTMLDivElement> & {
	value?: number;
	min?: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	class?: string;
}
