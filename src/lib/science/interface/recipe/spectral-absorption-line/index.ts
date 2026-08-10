import type { HTMLAttributes } from 'svelte/elements';
import type { SpectralLine } from '$stylist/science/type/struct/spectral-line';
export interface RecipeSpectralAbsorptionLine extends HTMLAttributes<HTMLSpanElement> {
line: SpectralLine;
	minWavelength?: number;
	maxWavelength?: number;
}
