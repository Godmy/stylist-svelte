import type { TokenSize } from '$stylist/layout/type/alias/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ComponentStateOptions } from '$stylist/layout/type/struct/component-state';

export type InputStateOptions<
	V extends string = TokenAppearance,
	S extends string = TokenSize
> = ComponentStateOptions<V, S>;
