import type { HTMLButtonAttributes } from 'svelte/elements';
import type { ButtonElementProps } from '$stylist/interaction/interface/button';

export interface ButtonFactoryContractInput {
	variant?: ButtonElementProps['variant'];
	size?: ButtonElementProps['size'];
	disabled?: ButtonElementProps['disabled'];
	loading?: ButtonElementProps['loading'];
	block?: ButtonElementProps['block'];
	ariaLabel?: ButtonElementProps['ariaLabel'];
	loadingLabel?: ButtonElementProps['loadingLabel'];
}

export interface ButtonFactoryHtmlInput {
	class?: string;
	type?: HTMLButtonAttributes['type'];
	attrs: Omit<
		HTMLButtonAttributes,
		'class' | 'type' | 'disabled' | 'children' | 'ariaLabel' | 'variant' | 'size' | 'loading' | 'block'
	>;
}

export interface ButtonFactorySlotsInput {
	children?: ButtonElementProps['children'];
}

export interface ButtonFactoryInput {
	contract: ButtonFactoryContractInput;
	html: ButtonFactoryHtmlInput;
	slots: ButtonFactorySlotsInput;
}

export function createButtonFactoryInput(
	props: ButtonElementProps & HTMLButtonAttributes
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
