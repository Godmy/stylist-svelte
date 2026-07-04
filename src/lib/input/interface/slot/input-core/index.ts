import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface SlotInputCore<V extends string = TokenAppearance, S extends string = TokenSize> {
	variant?: V;
	size?: S;
	disabled?: boolean;
	error?: boolean;
	class?: string;
	block?: boolean;
}
