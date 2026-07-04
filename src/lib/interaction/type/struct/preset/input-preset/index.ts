import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { Preset } from '$stylist/interaction/type/struct/preset/preset';

export type InputPreset<V extends string = TokenAppearance, S extends string = TokenSize> = Preset<
	V,
	S
> & {
	classes: Preset<V, S>['classes'] & {
		error?: string;
	};
};
