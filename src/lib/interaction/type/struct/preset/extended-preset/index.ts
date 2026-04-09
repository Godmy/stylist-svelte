import type { Preset } from '..';

export type ExtendedPreset<V extends string, S extends string, T = {}> =
	Preset<V, S> & {
		classes: Preset<V, S>['classes'] & T;
	};
