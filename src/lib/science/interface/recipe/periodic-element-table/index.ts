import type { HTMLAttributes } from 'svelte/elements';
export interface RecipePeriodicElementTable extends HTMLAttributes<HTMLDivElement> {
elements?: readonly ({
	atomicNumber: number;
	symbol: string;
	name: string;
	atomicMass: string;
	category: string;
	group: number;
	period: number;
	state: 'solid' | 'liquid' | 'gas' | 'unknown';
})[];
	selectedSymbol?: string;
	onElementSelect?: (element: ({
	atomicNumber: number;
	symbol: string;
	name: string;
	atomicMass: string;
	category: string;
	group: number;
	period: number;
	state: 'solid' | 'liquid' | 'gas' | 'unknown';
})) => void;
}
