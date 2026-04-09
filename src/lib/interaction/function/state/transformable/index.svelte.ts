import { TransformableStyleManager } from '$stylist/interaction/class/style-manager/transformable';
import { ObjectManagerMotion } from '$stylist/interaction/class/object-manager/motion';
import type { TransformProps } from '$stylist/interaction/interface/proto/transformable-props';

export const createTransformableState = (props: TransformProps) => {
	// State
	let isHovered = $state(false);
	let isActive = $state(false);

	// Нормализация props
	const normalizedProps = $derived(ObjectManagerMotion.normalizeTransformContract(props));

	// Вычисляемые классы
	const classes = $derived.by(() =>
		TransformableStyleManager.getClasses({
			animateOnHover: props.animateOnHover,
			isHovered,
			class: props.class
		})
	);

	// Вычисляемые inline стили
	const inlineStyle = $derived.by(() =>
		TransformableStyleManager.getTransformStyle({
			scale: isHovered && props.animateOnHover ? (props.scale ?? 1) * 1.05 : props.scale,
			rotate: isHovered && props.animateOnHover ? (props.rotate ?? 0) + 3 : props.rotate,
			translateX: props.translateX,
			translateY: props.translateY,
			skewX: props.skewX,
			skewY: props.skewY,
			transformOrigin: props.transformOrigin
		})
	);

	// Извлечение rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			scale,
			rotate,
			translateX,
			translateY,
			skewX,
			skewY,
			transformOrigin,
			duration,
			easing,
			delay,
			animateOnHover,
			animateOnClick,
			animateInfinite,
			disabled,
			...rest
		} = props;
		return rest;
	});

	// Обработчики
	function handleMouseEnter() {
		if (!props.disabled && props.animateOnHover) {
			isHovered = true;
		}
	}

	function handleMouseLeave() {
		if (!props.disabled) {
			isHovered = false;
			isActive = false;
		}
	}

	function handleMouseDown() {
		if (!props.disabled && props.animateOnClick) {
			isActive = true;
		}
	}

	function handleMouseUp() {
		if (!props.disabled) {
			isActive = false;
		}
	}

	return {
		// State getters
		get isHovered() {
			return isHovered;
		},
		get isActive() {
			return isActive;
		},

		// State
		classes,
		inlineStyle,
		restProps,

		// Handlers
		handleMouseEnter,
		handleMouseLeave,
		handleMouseDown,
		handleMouseUp
	};
};

export default createTransformableState;
