import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { AnimatedStyleManagerOptions } from '$stylist/animation/class/style-manager/animated-style-manager-options';

export class AnimatedStyleManager {
	private static readonly BASE = 'will-change-transform';
	private static readonly ANIMATING = 'animate';
	private static readonly INFINITE = 'animate-infinite';

	/**
	 * Генерирует inline style для анимации
	 */
	static getAnimationStyle(options: AnimatedStyleManagerOptions = {}): string {
		const {
			animation = 'none',
			duration = '300ms',
			easing = 'ease-in-out',
			delay = 0,
			infinite = false
		} = options;

		const animationValue = infinite
			? `${animation} ${duration} ${easing} ${delay}ms infinite`
			: `${animation} ${duration} ${easing} ${delay}ms`;

		return `animation: ${animationValue};`;
	}

	/**
	 * Базовые классы для animated элементов
	 */
	static getBaseClasses(className?: string): string {
		return mergeClassNames(this.BASE, className);
	}

	/**
	 * Полные классы для animated компонента
	 */
	static getClasses(options: AnimatedStyleManagerOptions = {}): string {
		const {
			isAnimating = false,
			infinite = false,
			class: className = ''
		} = options;

		return mergeClassNames(
			this.BASE,
			isAnimating ? this.ANIMATING : '',
			infinite ? this.INFINITE : '',
			className
		);
	}
}
