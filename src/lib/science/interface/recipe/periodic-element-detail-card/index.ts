import type { HTMLAttributes } from 'svelte/elements';
export interface RecipePeriodicElementDetailCard extends HTMLAttributes<HTMLElement> {
	element?: {
		atomicNumber: number;
		symbol: string;
		name: string;
		atomicMass: string;
		category: string;
		group: number;
		period: number;
		state: 'solid' | 'liquid' | 'gas' | 'unknown';
	};
}
