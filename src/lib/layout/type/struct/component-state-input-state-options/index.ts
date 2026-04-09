import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ComponentStateOptions } from '../component-state';

export type InputStateOptions<
	V extends string = TokenAppearance,
	S extends string = TokenSize
> = ComponentStateOptions<V, S>;
