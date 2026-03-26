import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';

export interface InputStateOptions<
	V extends string = TokenAppearance,
	S extends string = TokenSize
> {
	variant?: V;
	size?: S;
	disabled?: boolean;
	loading?: boolean;
	error?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
}
