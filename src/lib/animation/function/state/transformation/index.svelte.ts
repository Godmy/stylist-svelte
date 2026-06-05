import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SlotTransformation as TransformationProps } from '$stylist/animation/interface/slot/transformation';

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

	const state = $state({ isHovered: false, isActive: false });

	const classes = $derived(
		mergeClassNames(
			'c-layout-transformation',
			animateOnHover && !disabled && 'c-layout-transformation--hover',
			animateOnClick && !disabled && 'c-layout-transformation--click',
			animateInfinite && !disabled && 'c-layout-transformation--infinite',
			disabled && 'c-layout-transformation--disabled',
			props.class
		)
	);

	const styles = $derived.by(() => {
		const result: Record<string, string | number> = {};
		const transforms: string[] = [];

		if (translateX !== 0) {
			transforms.push(
				`translateX(${typeof translateX === 'number' ? `${translateX}px` : translateX})`
			);
		}
		if (translateY !== 0) {
			transforms.push(
				`translateY(${typeof translateY === 'number' ? `${translateY}px` : translateY})`
			);
		}
		if (scale !== 1) transforms.push(`scale(${scale})`);
		if (rotate !== 0) transforms.push(`rotate(${rotate}deg)`);
		if (skewX !== 0) transforms.push(`skewX(${skewX}deg)`);
		if (skewY !== 0) transforms.push(`skewY(${skewY}deg)`);

		if (transforms.length > 0) result.transform = transforms.join(' ');
		if (transformOrigin) result['transform-origin'] = transformOrigin;

		if (!disabled && (duration > 0 || animateOnHover || animateOnClick)) {
			result.transition = `transform ${typeof duration === 'number' ? duration : 300}ms ${easing} ${delay}ms`;
		}

		return result;
	});

	function setHovered(value: boolean) {
		if (!disabled && animateOnHover) state.isHovered = value;
	}

	function setActive(value: boolean) {
		if (!disabled && animateOnClick) state.isActive = value;
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
