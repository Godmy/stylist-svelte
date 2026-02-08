export interface ArchitecturePreset {
	base?: string;
	classes?: Record<string, string>;
}

export function createArchitecturePreset(
	base: ArchitecturePreset,
	override: Partial<ArchitecturePreset> = {}
): ArchitecturePreset {
	return {
		...base,
		...override,
		classes: {
			...(base.classes ?? {}),
			...(override.classes ?? {})
		}
	};
}
