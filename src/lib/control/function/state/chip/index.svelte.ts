import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { ChipRecipe } from '$stylist/typography/interface/recipe/chip';

type ChipProps = ChipRecipe & {
	text?: string;
	icon?: unknown;
	content?: unknown;
	class?: unknown;
};

// Определение состояния для Chip
export function createChipState(props: ChipProps) {
	const classes = joinClassNames(
		'chip',
		`variant-${props.variant ?? 'default'}`,
		`size-${props.size ?? 'md'}`,
		props.disabled ? 'disabled' : '',
		props.closable ? 'closable' : '',
		(props.class as string | null | undefined) ?? ''
	);

	const closeButtonClasses = joinClassNames(
		'chip-close-button',
		`size-${props.size ?? 'md'}`,
		props.disabled ? 'disabled' : ''
	);

	const closeButtonIconClasses = joinClassNames(
		'chip-close-icon',
		`size-${props.size ?? 'sm'}`
	);

	return {
		classes,
		variant: props.variant ?? 'default',
		size: props.size ?? 'md',
		closable: props.closable ?? false,
		disabled: props.disabled ?? false,
		label: props.label,
		text: props.text,
		icon: props.icon,
		content: props.content,
		closeButtonClasses,
		closeButtonIconClasses
	};
}

export default createChipState;






