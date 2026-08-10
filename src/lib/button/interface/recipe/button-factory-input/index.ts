import type { RecipeButtonElement as SlotButtonElement } from '$stylist/button/interface/recipe/button-element';
import type { HTMLButtonAttributes } from 'svelte/elements';
export interface ButtonFactoryInput {
	contract: ({
variant?: SlotButtonElement['variant'];
	size?: SlotButtonElement['size'];
	disabled?: SlotButtonElement['disabled'];
	loading?: SlotButtonElement['loading'];
	block?: SlotButtonElement['block'];
	ariaLabel?: SlotButtonElement['ariaLabel'];
	loadingLabel?: SlotButtonElement['loadingLabel'];
});
	html: ({
class?: string;
	type?: HTMLButtonAttributes['type'];
	attrs: Omit<
		HTMLButtonAttributes,
		| 'class'
		| 'type'
		| 'disabled'
		| 'children'
		| 'ariaLabel'
		| 'variant'
		| 'size'
		| 'loading'
		| 'block'
	>;
});
	slots: ({
children?: SlotButtonElement['children'];
});
}
