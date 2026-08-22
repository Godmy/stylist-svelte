import type { RecipeBackground } from '$stylist/layout/interface/recipe/background';

export class ObjectManagerBackground {
	static resolveBackground(props: RecipeBackground): NonNullable<RecipeBackground['background']> {
		return props.background ?? 'default';
	}

	static resolveBackgroundColor(props: RecipeBackground): string {
		return props.backgroundColor ?? '';
	}

	static resolveBackgroundImage(props: RecipeBackground): string {
		return props.backgroundImage ?? '';
	}

	static resolveBackgroundPosition(
		props: RecipeBackground
	): NonNullable<RecipeBackground['backgroundPosition']> {
		return props.backgroundPosition ?? 'center';
	}

	static resolveBackgroundSize(
		props: RecipeBackground
	): NonNullable<RecipeBackground['backgroundSize']> {
		return props.backgroundSize ?? 'cover';
	}

	static resolveBackgroundRepeat(
		props: RecipeBackground
	): NonNullable<RecipeBackground['backgroundRepeat']> {
		return props.backgroundRepeat ?? 'no-repeat';
	}

	static resolveGradient(props: RecipeBackground): string {
		return props.gradient ?? '';
	}

	static resolveOpacity(props: RecipeBackground): number {
		return props.opacity ?? 1;
	}

	static resolveVariant(props: RecipeBackground): NonNullable<RecipeBackground['variant']> {
		return props.variant ?? 'default';
	}

	static createInlineStyles(input: {
		background: NonNullable<RecipeBackground['background']>;
		backgroundColor: string;
		backgroundImage: string;
		backgroundPosition: NonNullable<RecipeBackground['backgroundPosition']>;
		backgroundSize: NonNullable<RecipeBackground['backgroundSize']>;
		backgroundRepeat: NonNullable<RecipeBackground['backgroundRepeat']>;
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
