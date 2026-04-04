import type { ThemeBackgroundRecipe } from '$stylist/layout/interface/recipe/background';
import { ObjectManagerBackground } from '$stylist/layout/class/object-manager/background';
import { StyleManagerBackground } from '$stylist/layout/class/style-manager/background';
import { cn } from '$stylist/layout/function/script/merge-class-names';

export function createBackgroundState(props: ThemeBackgroundRecipe) {
	const background = $derived(ObjectManagerBackground.resolveBackground(props));
	const backgroundColor = $derived(ObjectManagerBackground.resolveBackgroundColor(props));
	const backgroundImage = $derived(ObjectManagerBackground.resolveBackgroundImage(props));
	const backgroundPosition = $derived(ObjectManagerBackground.resolveBackgroundPosition(props));
	const backgroundSize = $derived(ObjectManagerBackground.resolveBackgroundSize(props));
	const backgroundRepeat = $derived(ObjectManagerBackground.resolveBackgroundRepeat(props));
	const gradient = $derived(ObjectManagerBackground.resolveGradient(props));
	const opacity = $derived(ObjectManagerBackground.resolveOpacity(props));
	const variant = $derived(ObjectManagerBackground.resolveVariant(props));

	const classes = $derived(
		StyleManagerBackground.root(
			background,
			variant,
			!!gradient,
			!!backgroundImage,
			cn(props.class)
		)
	);

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
	const inlineStyle = $derived(StyleManagerBackground.inlineStyle(styles));
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
		get classes() {
			return classes;
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


