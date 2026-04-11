import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type ProgressBarWithLabelProps = InteractionHTMLAttributes<HTMLDivElement> & {
	value?: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	color?: string;
	height?: string;
	class?: string;
}
