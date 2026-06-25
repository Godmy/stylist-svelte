import type { Preset } from '$stylist/interaction/type/struct/preset/preset';

export type ExtendedPreset<V extends string, S extends string, T = {}> = Preset<V, S> & {
	classes: Preset<V, S>['classes'] & T;
};
