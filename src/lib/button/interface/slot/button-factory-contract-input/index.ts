import type { RecipeButtonElement as SlotButtonElement } from '$stylist/button/interface/recipe/button-element';

export interface ButtonFactoryContractInput {
	variant?: SlotButtonElement['variant'];
	size?: SlotButtonElement['size'];
	disabled?: SlotButtonElement['disabled'];
	loading?: SlotButtonElement['loading'];
	block?: SlotButtonElement['block'];
	ariaLabel?: SlotButtonElement['ariaLabel'];
	loadingLabel?: SlotButtonElement['loadingLabel'];
}
