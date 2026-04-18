import type { SlotTransformation as TransformationProps } from '$stylist/animation/interface/slot/transformation';
import { clsx } from 'clsx';

export function createTransformationState(props: TransformationProps) {
	const scale = $derived(props.scale ?? 1);
	const rotate = $derived(props.rotate ?? 0);
	const translateX = $derived(props.translateX ?? 0);
	const translateY = $derived(props.translateY ?? 0);
	const skewX = $derived(props.skewX ?? 0);
	const skewY = $derived(props.skewY ?? 0);
	const transformOrigin = $derived(props.transformOrigin ?? 'center');
	const duration = $derived(props.duration ?? 300);
	const easing = $derived(props.easing ?? 'ease');
	const delay = $derived(props.delay ?? 0);
	const animateOnHover = $derived(props.animateOnHover ?? false);
	const animateOnClick = $derived(props.animateOnClick ?? false);
	const animateInfinite = $derived(props.animateInfinite ?? false);
	const disabled = $derived(props.disabled ?? false);

	const state = $state({
		isHovered: false,
		isActive: false
	});

	const classes = $derived(() => {
		const baseClasses: string[] = ['relative', 'inline-block'];

		if (disabled) {
			baseClasses.push('disabled', 'pointer-events-none');
		}

		if (animateOnHover && !disabled) {
			baseClasses.push('transform-hover');
		}

		if (animateOnClick && !disabled) {
			baseClasses.push('transform-click');
		}

		if (animateInfinite && !disabled) {
			baseClasses.push('transform-infinite');
		}

		return clsx(...baseClasses, props.class ?? '');
	});

	const styles = $derived(() => {
		const styles: Record<string, string | number> = {};

		// Transform
		const transforms: string[] = [];

		if (translateX !== 0) {
			const xValue = typeof translateX === 'number' ? `${translateX}px` : translateX;
			transforms.push(`translateX(${xValue})`);
		}

		if (translateY !== 0) {
			const yValue = typeof translateY === 'number' ? `${translateY}px` : translateY;
			transforms.push(`translateY(${yValue})`);
		}

		if (scale !== 1) {
			transforms.push(`scale(${scale})`);
		}

		if (rotate !== 0) {
			transforms.push(`rotate(${rotate}deg)`);
		}

		if (skewX !== 0) {
			transforms.push(`skewX(${skewX}deg)`);
		}

		if (skewY !== 0) {
			transforms.push(`skewY(${skewY}deg)`);
		}

		if (transforms.length > 0) {
			styles.transform = transforms.join(' ');
		}

		// Transform origin
		if (transformOrigin) {
			styles['transform-origin'] = transformOrigin;
		}

		// Transition
		if (!disabled && (typeof duration === 'number' && duration > 0 || animateOnHover || animateOnClick)) {
			styles.transition = `transform ${typeof duration === 'number' ? duration : 300}ms ${easing} ${delay}ms`;
		}

		return styles;
	});

	function setHovered(value: boolean) {
		if (!disabled && animateOnHover) {
			state.isHovered = value;
		}
	}

	function setActive(value: boolean) {
		if (!disabled && animateOnClick) {
			state.isActive = value;
		}
	}

	return {
		get scale() {
			return scale;
		},
		get rotate() {
			return rotate;
		},
		get disabled() {
			return disabled;
		},
		get classes() {
			return classes;
		},
		get styles() {
			return styles;
		},
		get isHovered() {
			return state.isHovered;
		},
		get isActive() {
			return state.isActive;
		},
		setHovered,
		setActive
	};
}

export default createTransformationState;
