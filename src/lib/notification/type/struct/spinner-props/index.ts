import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SpinnerVariant } from '$stylist/notification/type/enum/spinner-variant';

export type SpinnerProps = InteractionHTMLAttributes<HTMLDivElement> & {
	variant?: SpinnerVariant;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	color?: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'white' | string;
	label?: string;
	showLabel?: boolean;
	class?: string;
	spinnerClass?: string;
};
