/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

import type { FactoryPreset } from '../factory-types';

export function createArchitecturePreset(
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
