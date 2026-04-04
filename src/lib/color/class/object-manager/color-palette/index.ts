import type { ThemeColorPaletteRecipe } from '$stylist/color/interface/recipe/color-palette';

export class ObjectManagerColorPalette {
	static resolveColors(props: ThemeColorPaletteRecipe) {
		return props.colors ?? [];
	}

	static resolveTitle(props: ThemeColorPaletteRecipe): string {
		return props.title ?? 'Color Palette';
	}

	static resolveShowLabels(props: ThemeColorPaletteRecipe): boolean {
		return props.showLabels ?? true;
	}

	static resolveShowValues(props: ThemeColorPaletteRecipe): boolean {
		return props.showValues ?? false;
	}

	static resolveColumns(props: ThemeColorPaletteRecipe): number {
		return Math.max(1, Math.min(props.columns ?? 5, 6));
	}
}
