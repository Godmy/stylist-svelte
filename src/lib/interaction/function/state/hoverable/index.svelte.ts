import type { RecipeHoverable as HoverProps } from '$stylist/interaction/interface/recipe/hoverable';

export const createHoverableState = (props: HoverProps) => {
	let isHovered = $state(false);

	const classes = $derived.by(() => {
		const { hoverEffect = true, disabled = false, class: className = '' } = props;

		if (disabled)
			return ['c-hoverable', 'c-hoverable--disabled', className].filter(Boolean).join(' ');

		return [
			'c-hoverable',
			hoverEffect && 'c-hoverable--hover-effect',
			isHovered && 'c-hoverable--hovered',
			className
		]
			.filter(Boolean)
			.join(' ');
	});

	const restProps = $derived.by(() => {
		const { class: _class, onMouseEnter, onMouseLeave, disabled, hoverEffect, ...rest } = props;
		return rest;
	});

	function handleMouseEnter(event: MouseEvent) {
		if (!props.disabled) {
			isHovered = true;
			props.onMouseEnter?.(event);
		}
	}

	function handleMouseLeave(event: MouseEvent) {
		if (!props.disabled) {
			isHovered = false;
			props.onMouseLeave?.(event);
		}
	}

	return {
		get isHovered() {
			return isHovered;
		},
		get disabled() {
			return props.disabled;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		},
		handleMouseEnter,
		handleMouseLeave
	};
};

export default createHoverableState;
