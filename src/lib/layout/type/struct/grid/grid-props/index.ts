import type { Snippet } from 'svelte';
import type { GridRestProps } from '../grid-rest-props';

export type GridProps = GridRestProps & {
	children: Snippet;
	class?: string;
	cols?: number;
	gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
	responsive?: boolean;
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
};
