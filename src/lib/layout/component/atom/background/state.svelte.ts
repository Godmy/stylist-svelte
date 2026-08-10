import type { RecipeThemeBackground } from '$stylist/layout/interface/recipe/background';
import { ObjectManagerBackground } from '$stylist/layout/class/object-manager/background';

export function createBackgroundState(props: RecipeThemeBackground) {
	const background = $derived(ObjectManagerBackground.resolveBackground(props));
	const backgroundColor = $derived(ObjectManagerBackground.resolveBackgroundColor(props));
	const backgroundImage = $derived(ObjectManagerBackground.resolveBackgroundImage(props));
	const backgroundPosition = $derived(ObjectManagerBackground.resolveBackgroundPosition(props));
	const backgroundSize = $derived(ObjectManagerBackground.resolveBackgroundSize(props));
	const backgroundRepeat = $derived(ObjectManagerBackground.resolveBackgroundRepeat(props));
	const gradient = $derived(ObjectManagerBackground.resolveGradient(props));
	const opacity = $derived(ObjectManagerBackground.resolveOpacity(props));

	const styles = $derived(
		ObjectManagerBackground.createInlineStyles({
			background,
			backgroundColor,
			backgroundImage,
			backgroundPosition,
			backgroundSize,
			backgroundRepeat,
			gradient,
			opacity
		})
	);

	const inlineStyle = $derived(
		Object.entries(styles as Record<string, string | number>)
			.map(([k, v]) => `${k}: ${v};`)
			.join(' ')
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			background: _background,
			backgroundColor: _backgroundColor,
			backgroundImage: _backgroundImage,
			backgroundPosition: _backgroundPosition,
			backgroundSize: _backgroundSize,
			backgroundRepeat: _backgroundRepeat,
			gradient: _gradient,
			opacity: _opacity,
			variant: _variant,
			...rest
		} = props;
		return rest;
	});

	return {
		get background() {
			return background;
		},
		get styles() {
			return styles;
		},
		get inlineStyle() {
			return inlineStyle;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createBackgroundState;
