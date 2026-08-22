import type { HTMLAttributes } from 'svelte/elements';
export interface RecipePeriodicElement extends HTMLAttributes<HTMLButtonElement> {
	element: {
		atomicNumber: number;
		symbol: string;
		name: string;
		atomicMass: string;
		category: string;
		group: number;
		period: number;
		state: 'solid' | 'liquid' | 'gas' | 'unknown';
	};
	selected?: boolean;
	highlighted?: boolean;
	dimmed?: boolean;
	onSelect?: (element: {
		atomicNumber: number;
		symbol: string;
		name: string;
		atomicMass: string;
		category: string;
		group: number;
		period: number;
		state: 'solid' | 'liquid' | 'gas' | 'unknown';
	}) => void;
}
