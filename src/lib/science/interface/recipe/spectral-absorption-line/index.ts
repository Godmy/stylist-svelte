import type { HTMLAttributes } from 'svelte/elements';
export interface RecipeSpectralAbsorptionLine extends HTMLAttributes<HTMLSpanElement> {
	line: {
		wavelength: number;
		intensity: number;
		label: string;
	};
	minWavelength?: number;
	maxWavelength?: number;
}
