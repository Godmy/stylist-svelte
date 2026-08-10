import { ObjectManagerGradientBackground } from '$stylist/layout/class/object-manager/gradient-background';
import type { RecipeThemeGradientBackground } from '$stylist/layout/interface/recipe/gradient-background';

export function createGradientBackgroundState(props: RecipeThemeGradientBackground) {
	const variant = $derived(ObjectManagerGradientBackground.resolveVariant(props.variant));
	const colors = $derived(ObjectManagerGradientBackground.resolveColors(props.colors));
	const speed = $derived(ObjectManagerGradientBackground.resolveSpeed(props.speed));
	const intensity = $derived(ObjectManagerGradientBackground.resolveIntensity(props.intensity));
	const direction = $derived(ObjectManagerGradientBackground.resolveDirection(props.direction));

	const gradientStyle = $derived(
		ObjectManagerGradientBackground.createStyle(variant, direction, colors, speed)
	);

	const inlineStyle = $derived.by(() => {
		const opacity = Math.max(0, Math.min(intensity, 100)) / 100;
		return [
			`--gradient-start: ${gradientStyle.gradientStart}`,
			`--gradient-end: ${gradientStyle.gradientEnd}`,
			`--gradient-inner: ${gradientStyle.gradientInner}`,
			`--gradient-outer: ${gradientStyle.gradientOuter}`,
			`background-image: ${gradientStyle.backgroundImage}`,
			`opacity: ${opacity}`,
			gradientStyle.animationDuration
				? `animation-duration: ${gradientStyle.animationDuration}`
				: null
		]
			.filter(Boolean)
			.join('; ');
	});

	const restProps = $derived.by(() => {
		const {
			variant: _variant,
			colors: _colors,
			speed: _speed,
			intensity: _intensity,
			direction: _direction,
			class: _class,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	return {
		get variant() {
			return variant;
		},
		get inlineStyle() {
			return inlineStyle;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createGradientBackgroundState;
