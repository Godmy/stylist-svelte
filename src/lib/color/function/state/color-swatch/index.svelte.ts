import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { ObjectManagerColorSwatch } from '$stylist/color/class/object-manager/color-swatch';
import type { ThemeColorSwatchRecipe } from '$stylist/color/interface/recipe/color-swatch';

export function createColorSwatchState(props: ThemeColorSwatchRecipe) {
	const color = $derived(ObjectManagerColorSwatch.resolveColor(props));
	const size = $derived(ObjectManagerColorSwatch.resolveSize(props));
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const classes = $derived(mergeClassNames('c-color-swatch', className));

	return {
		get color() {
			return color;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}

export default createColorSwatchState;
