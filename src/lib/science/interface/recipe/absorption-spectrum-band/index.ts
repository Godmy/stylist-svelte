import type { HTMLAttributes } from 'svelte/elements';
import type { SpectralLine } from '$stylist/science/type/struct/spectral-line';
export interface RecipeAbsorptionSpectrumBand extends HTMLAttributes<HTMLDivElement> {
lines: readonly SpectralLine[];
	minWavelength?: number;
	maxWavelength?: number;
}
