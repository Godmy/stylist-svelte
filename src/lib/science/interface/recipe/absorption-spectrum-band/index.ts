import type { HTMLAttributes } from 'svelte/elements';
export interface RecipeAbsorptionSpectrumBand extends HTMLAttributes<HTMLDivElement> {
lines: readonly ({
	wavelength: number;
	intensity: number;
	label: string;
})[];
	minWavelength?: number;
	maxWavelength?: number;
}
