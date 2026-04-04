import type { ThemeColorSwatchRecipe } from '$stylist/color/interface/recipe/color-swatch';

export class ObjectManagerColorSwatch {
	static resolveColor(props: ThemeColorSwatchRecipe): string {
		return String(props.color ?? '#0ea5e9');
	}

	static resolveSize(props: ThemeColorSwatchRecipe): number {
		return props.size ?? 32;
	}
}
