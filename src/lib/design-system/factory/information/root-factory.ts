export interface InformationPreset {
	base?: string;
	classes?: Record<string, string>;
}

export function createInformationPreset(
	base: InformationPreset,
	override: Partial<InformationPreset> = {}
): InformationPreset {
	return {
		...base,
		...override,
		classes: {
			...(base.classes ?? {}),
			...(override.classes ?? {})
		}
	};
}
