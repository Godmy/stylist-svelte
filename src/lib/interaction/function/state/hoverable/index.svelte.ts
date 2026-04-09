import { HoverableStyleManager } from '$stylist/interaction/class/style-manager/hoverable';
import type { HoverProps } from '$stylist/interaction/interface/proto/hoverable-props';

export const createHoverableState = (props: HoverProps) => {
	// State
	let isHovered = $state(false);

	// Вычисляемые классы
	const classes = $derived.by(() =>
		HoverableStyleManager.getClasses({
			hoverEffect: props.hoverEffect,
			isHovered,
			disabled: props.disabled,
			class: props.class
		})
	);

	// Извлечение rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			onMouseEnter,
			onMouseLeave,
			disabled,
			hoverEffect,
			...rest
		} = props;
		return rest;
	});

	// Обработчики
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
		// State getters
		get isHovered() {
			return isHovered;
		},
		get disabled() {
			return props.disabled;
		},

		// State
		classes,
		restProps,

		// Handlers
		handleMouseEnter,
		handleMouseLeave
	};
};

export default createHoverableState;
