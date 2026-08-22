import type { RecipeGradientBackground } from '$stylist/layout/interface/recipe/gradient-background';
import type { GradientDirection } from '$stylist/layout/type/alias/gradient-direction';
import type { TokenGradient } from '$stylist/layout/type/alias/gradient-mode';

export class ObjectManagerGradientBackground {
	static readonly defaultColors = [
		'var(--color-danger-400)',
		'var(--color-success-400)',
		'var(--color-info-500)',
		'var(--color-success-300)',
		'var(--color-warning-300)'
	];

	static resolveVariant(variant?: RecipeGradientBackground['variant']): TokenGradient {
		return variant ?? 'dynamic';
	}

	static resolveColors(colors?: RecipeGradientBackground['colors']): string[] {
		return colors?.length ? colors : [...ObjectManagerGradientBackground.defaultColors];
	}

	static resolveSpeed(speed?: RecipeGradientBackground['speed']): number {
		return speed ?? 20;
	}

	static resolveIntensity(intensity?: RecipeGradientBackground['intensity']): number {
		return intensity ?? 50;
	}

	static resolveDirection(direction?: RecipeGradientBackground['direction']): GradientDirection {
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
				return 'var(--gradients-directional-horizontal)';
			case 'vertical':
				return 'var(--gradients-directional-vertical)';
			case 'reverseDiagonal':
				return 'var(--gradients-directional-reverse-diagonal)';
			default:
				return 'var(--gradients-directional-diagonal)';
		}
	}

	static createStyle(
		variant: TokenGradient,
		direction: GradientDirection,
		colors: string[],
		speed: number
	): {
		backgroundImage: string;
		gradientStart: string;
		gradientEnd: string;
		gradientInner: string;
		gradientOuter: string;
		animationDuration?: string;
	} {
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
