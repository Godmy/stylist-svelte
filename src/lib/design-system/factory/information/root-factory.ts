import type { FactoryPreset } from '../shared/types';

export function createInformationPreset(
	base: FactoryPreset,
	override: Partial<FactoryPreset> = {}
): FactoryPreset {
	return {
		...base,
		...override,
		classes: {
			...(base.classes ?? {}),
			...(override.classes ?? {})
		}
	};
}
