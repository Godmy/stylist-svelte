import { clsx } from 'clsx';
import type { ThemeBackgroundRecipe } from '$stylist/layout/interface/recipe/background';

export class StyleManagerBackground {
	static root(
		background: NonNullable<ThemeBackgroundRecipe['background']>,
		variant: NonNullable<ThemeBackgroundRecipe['variant']>,
		hasGradient: boolean,
		hasBackgroundImage: boolean,
		className?: string
	): string {
		const baseClasses = ['relative'];

		if (background === 'gradient' && hasGradient) {
			baseClasses.push('bg-gradient');
		} else if (background === 'image' && hasBackgroundImage) {
			baseClasses.push('bg-image');
		} else if (background === 'particles') {
			baseClasses.push('bg-particles');
		} else {
			baseClasses.push('bg-solid');
		}

		if (variant !== 'default') {
			baseClasses.push(`bg-${variant}`);
		}

		return clsx(...baseClasses, className ?? '');
	}

	static inlineStyle(styles: Record<string, string | number>): string {
		return Object.entries(styles)
			.map(([key, value]) => `${key}: ${value};`)
			.join(' ');
	}
}
