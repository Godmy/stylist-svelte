import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export type ToggleProps = {
	size?: TokenSize;
	disabled?: boolean;
	checked?: boolean;
	class?: string;
	ariaLabel?: string;
	name?: string;
} & Omit<InteractionHTMLAttributes<HTMLInputElement>, 'size' | 'checked'>;
