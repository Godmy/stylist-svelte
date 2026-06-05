import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export type AnimatedProgressProps = InteractionHTMLAttributes<HTMLDivElement> & {
	value?: number;
	min?: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	class?: string;
};
