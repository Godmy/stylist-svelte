import type { HTMLAttributes } from 'svelte/elements';

export type SliderTickComponentProps = {
	value?: number;
	position?: number;
	active?: boolean;
	label?: string;
	class?: string;
} &
	HTMLAttributes<HTMLDivElement>;
