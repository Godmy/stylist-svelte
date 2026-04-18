import type { ThemeGradientBackgroundRecipe } from '$stylist/layout/interface/recipe/gradient-background';
import type { GradientLinear } from '$stylist/layout/type/map/gradient-linear';
import type { TokenGradient } from '$stylist/layout/type/enum/gradient-mode';
import type { GradientBackgroundStyle } from '$stylist/layout/type/struct/gradient-background-style';
import type { GradientDirection } from '$stylist/layout/type/alias/gradient-direction';

export class ObjectManagerGradientBackground {
	static readonly defaultColors = [
		'var(--color-danger-400)',
		'var(--color-success-400)',
		'var(--color-info-500)',
		'var(--color-success-300)',
		'var(--color-warning-300)'
	];

	static resolveVariant(variant?: ThemeGradientBackgroundRecipe['variant']): TokenGradient {
		return variant ?? 'dynamic';
	}

	static resolveColors(colors?: ThemeGradientBackgroundRecipe['colors']): string[] {
		return colors?.length ? colors : [...ObjectManagerGradientBackground.defaultColors];
	}

	static resolveSpeed(speed?: ThemeGradientBackgroundRecipe['speed']): number {
		return speed ?? 20;
	}

	static resolveIntensity(intensity?: ThemeGradientBackgroundRecipe['intensity']): number {
		return intensity ?? 50;
	}

	static resolveDirection(
		direction?: ThemeGradientBackgroundRecipe['direction']
	): GradientDirection {
		switch (direction) {
			case 'horizontal':
			case 'vertical':
			case 'diagonal':
			case 'reverseDiagonal':
				return direction;
			default:
				return 'diagonal';
		}
	}

	static resolveBackgroundImage(direction: GradientDirection): string {
		switch (direction) {
			case 'horizontal':
				return 'var(--gradient-directional-horizontal)';
			case 'vertical':
				return 'var(--gradient-directional-vertical)';
			case 'reverseDiagonal':
				return 'var(--gradient-directional-reverse-diagonal)';
			default:
				return 'var(--gradient-directional-diagonal)';
		}
	}

	static createStyle(
		variant: TokenGradient,
		direction: GradientDirection,
		colors: string[],
		speed: number
	): GradientBackgroundStyle {
		const animationDuration = `${speed * 0.75}s`;
		const startColor = colors[0] ?? 'var(--color-primary-500)';
		const endColor = colors[colors.length - 1] ?? startColor;

		return {
			backgroundImage: ObjectManagerGradientBackground.resolveBackgroundImage(direction),
			gradientStart: startColor,
			gradientEnd: endColor,
			gradientInner: startColor,
			gradientOuter: endColor,
			animationDuration: variant === 'dynamic' ? animationDuration : undefined
		};
	}
}

