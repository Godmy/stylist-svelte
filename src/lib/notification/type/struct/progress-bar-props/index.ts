import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type ProgressBarProps = InteractionHTMLAttributes<HTMLDivElement> & {
	value: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	size?: 'sm' | 'md' | 'lg';
	variant?: 'primary' | 'success' | 'warning' | 'danger';
	class?: string;
}
