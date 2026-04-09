import { GradientBackgroundStyleManager } from '$stylist/layout/class/style-manager/gradient-background';
import { ObjectManagerGradientBackground } from '$stylist/layout/class/object-manager/gradient-background';
import type { ThemeGradientBackgroundRecipe } from '$stylist/layout/interface/recipe/gradient-background';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createGradientBackgroundState(props: ThemeGradientBackgroundRecipe) {
	const variant = $derived(ObjectManagerGradientBackground.resolveVariant(props.variant));
	const colors = $derived(ObjectManagerGradientBackground.resolveColors(props.colors));
	const speed = $derived(ObjectManagerGradientBackground.resolveSpeed(props.speed));
	const intensity = $derived(ObjectManagerGradientBackground.resolveIntensity(props.intensity));
	const direction = $derived(ObjectManagerGradientBackground.resolveDirection(props.direction));
	const containerClass = $derived(
		GradientBackgroundStyleManager.getContainerClasses(mergeClassNames(props.class))
	);
	const gradientClass = $derived(
		GradientBackgroundStyleManager.getGradientClasses(variant, direction)
	);
	const contentWrapperClass = $derived(
		GradientBackgroundStyleManager.getContentWrapperClasses()
	);
	const gradientStyle = $derived(
		ObjectManagerGradientBackground.createStyle(variant, direction, colors, speed)
	);
	const inlineStyle = $derived(
		GradientBackgroundStyleManager.getGradientInlineStyle(gradientStyle, intensity)
	);
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
		get containerClass() {
			return containerClass;
		},
		get gradientClass() {
			return gradientClass;
		},
		get contentWrapperClass() {
			return contentWrapperClass;
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

