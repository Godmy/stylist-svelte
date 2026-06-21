import type { HTMLButtonAttributes } from 'svelte/elements';
import type { RecipeButtonElement as SlotButtonElement } from '$stylist/control/interface/recipe/button-element';

export interface ButtonFactoryContractInput {
	variant?: SlotButtonElement['variant'];
	size?: SlotButtonElement['size'];
	disabled?: SlotButtonElement['disabled'];
	loading?: SlotButtonElement['loading'];
	block?: SlotButtonElement['block'];
	ariaLabel?: SlotButtonElement['ariaLabel'];
	loadingLabel?: SlotButtonElement['loadingLabel'];
}

export interface ButtonFactoryHtmlInput {
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
}

export interface ButtonFactorySlotsInput {
	children?: SlotButtonElement['children'];
}

export interface ButtonFactoryInput {
	contract: ButtonFactoryContractInput;
	html: ButtonFactoryHtmlInput;
	slots: ButtonFactorySlotsInput;
}

export function createButtonFactoryInput(
	props: SlotButtonElement & HTMLButtonAttributes
): ButtonFactoryInput {
	const {
		variant,
		size,
		disabled,
		loading,
		block,
		ariaLabel,
		loadingLabel,
		children,
		class: className,
		type,
		...attrs
	} = props;

	return {
		contract: {
			variant,
			size,
			disabled,
			loading,
			block,
			ariaLabel,
			loadingLabel
		},
		html: {
			class: className,
			type,
			attrs
		},
		slots: {
			children
		}
	};
}
