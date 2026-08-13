import type { RecipeClick } from '$stylist/control/interface/recipe/click';

export function createClickState(props: RecipeClick) {
	const disabled = $derived(props.disabled ?? false);
	const variant = $derived(props.variant ?? 'default');
	const pressEffect = $derived(props.pressEffect ?? true);
	const hoverEffect = $derived(props.hoverEffect ?? true);

	const classes = $derived(
		[
			'c-click',
			!disabled && hoverEffect ? 'c-click--hover' : '',
			!disabled && pressEffect ? 'c-click--press' : '',
			disabled ? 'c-click--disabled' : '',
			variant !== 'default' ? `c-click--${variant}` : '',
			props.class ?? ''
		]
			.filter(Boolean)
			.join(' ')
	);

	return {
		get disabled() {
			return disabled;
		},
		get classes() {
			return classes;
		}
	};
}

export default createClickState;
