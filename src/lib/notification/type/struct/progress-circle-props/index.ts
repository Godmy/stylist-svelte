import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type ProgressCircleProps = InteractionHTMLAttributes<HTMLDivElement> & {
	progress?: number;
	size?: 'sm' | 'md' | 'lg';
	color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
	strokeWidth?: number;
	class?: string;
}
