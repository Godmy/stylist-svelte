import type { ThemeBackgroundRecipe } from '$stylist/layout/interface/recipe/background';

export class ObjectManagerBackground {
	static resolveBackground(props: ThemeBackgroundRecipe): NonNullable<ThemeBackgroundRecipe['background']> {
		return props.background ?? 'default';
	}

	static resolveBackgroundColor(props: ThemeBackgroundRecipe): string {
		return props.backgroundColor ?? '';
	}

	static resolveBackgroundImage(props: ThemeBackgroundRecipe): string {
		return props.backgroundImage ?? '';
	}

	static resolveBackgroundPosition(
		props: ThemeBackgroundRecipe
	): NonNullable<ThemeBackgroundRecipe['backgroundPosition']> {
		return props.backgroundPosition ?? 'center';
	}

	static resolveBackgroundSize(
		props: ThemeBackgroundRecipe
	): NonNullable<ThemeBackgroundRecipe['backgroundSize']> {
		return props.backgroundSize ?? 'cover';
	}

	static resolveBackgroundRepeat(
		props: ThemeBackgroundRecipe
	): NonNullable<ThemeBackgroundRecipe['backgroundRepeat']> {
		return props.backgroundRepeat ?? 'no-repeat';
	}

	static resolveGradient(props: ThemeBackgroundRecipe): string {
		return props.gradient ?? '';
	}

	static resolveOpacity(props: ThemeBackgroundRecipe): number {
		return props.opacity ?? 1;
	}

	static resolveVariant(props: ThemeBackgroundRecipe): NonNullable<ThemeBackgroundRecipe['variant']> {
		return props.variant ?? 'default';
	}

	static createInlineStyles(input: {
		background: NonNullable<ThemeBackgroundRecipe['background']>;
		backgroundColor: string;
		backgroundImage: string;
		backgroundPosition: NonNullable<ThemeBackgroundRecipe['backgroundPosition']>;
		backgroundSize: NonNullable<ThemeBackgroundRecipe['backgroundSize']>;
		backgroundRepeat: NonNullable<ThemeBackgroundRecipe['backgroundRepeat']>;
		gradient: string;
		opacity: number;
	}): Record<string, string | number> {
		const styles: Record<string, string | number> = {};

		if (input.backgroundColor) {
			styles['--bg-color'] = input.backgroundColor;
		}

		if (input.backgroundImage && input.background === 'image') {
			styles['background-image'] = `url(${input.backgroundImage})`;
			styles['background-position'] = input.backgroundPosition;
			styles['background-size'] = input.backgroundSize;
			styles['background-repeat'] = input.backgroundRepeat;
		}

		if (input.gradient && input.background === 'gradient') {
			styles['background-image'] = input.gradient;
		}

		if (input.opacity < 1) {
			styles.opacity = input.opacity;
		}

		return styles;
	}
}
