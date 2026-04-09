import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { Preset } from '..';

export type InputPreset<
	V extends string = TokenAppearance,
	S extends string = TokenSize
> = Preset<V, S> & {
	classes: Preset<V, S>['classes'] & {
		error?: string;
	};
};
