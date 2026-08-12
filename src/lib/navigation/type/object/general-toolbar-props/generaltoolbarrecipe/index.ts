import type { HTMLAttributes } from 'svelte/elements';

export type GeneralToolbarRecipe = HTMLAttributes<HTMLDivElement> & {
	toolbarItems?: {
	id: string;
	label: string;
	icon: string;
	action: () => void;
}[];
	compact?: boolean;
	disabled?: boolean;
	class?: string;
};
