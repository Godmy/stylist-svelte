import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SpinnerVariant } from '$stylist/notification/type/enum/spinner-variant';

export interface SpinnerProps extends InteractionHTMLAttributes<HTMLDivElement> {
	variant?: SpinnerVariant;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	color?: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'white' | string;
	label?: string;
	showLabel?: boolean;
	class?: string;
	spinnerClass?: string;
}
