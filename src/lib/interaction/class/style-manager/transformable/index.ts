import { cn } from '$stylist/layout/function/script/merge-class-names';

export interface TransformableStyleManagerOptions {
	scale?: number;
	rotate?: number;
	translateX?: number;
	translateY?: number;
	skewX?: number;
	skewY?: number;
	transformOrigin?: string;
	animateOnHover?: boolean;
	isHovered?: boolean;
	class?: string;
}

export class TransformableStyleManager {
	private static readonly BASE = 'transition-transform duration-300 ease-in-out';
	private static readonly HOVER_SCALE = 'hover:scale-105';
	private static readonly HOVER_ROTATE = 'hover:rotate-3';

	/**
	 * Генерирует inline style для transform
	 */
	static getTransformStyle(options: TransformableStyleManagerOptions = {}): string {
		const {
			scale = 1,
			rotate = 0,
			translateX = 0,
			translateY = 0,
			skewX = 0,
			skewY = 0
		} = options;

		const transforms: string[] = [];

		if (translateX !== 0 || translateY !== 0) {
			transforms.push(`translate(${translateX}px, ${translateY}px)`);
		}
		if (scale !== 1) {
			transforms.push(`scale(${scale})`);
		}
		if (rotate !== 0) {
			transforms.push(`rotate(${rotate}deg)`);
		}
		if (skewX !== 0) {
			transforms.push(`skewX(${skewX}deg)`);
		}
		if (skewY !== 0) {
			transforms.push(`skewY(${skewY}deg)`);
		}

		return transforms.length > 0 ? transforms.join(' ') : 'none';
	}

	/**
	 * Базовые классы для transformable элементов
	 */
	static getBaseClasses(className?: string): string {
		return cn(this.BASE, className);
	}

	/**
	 * Полные классы для transformable компонента
	 */
	static getClasses(options: TransformableStyleManagerOptions = {}): string {
		const {
			animateOnHover = false,
			isHovered = false,
			class: className = ''
		} = options;

		const hoverClasses = animateOnHover
			? `${this.HOVER_SCALE} ${this.HOVER_ROTATE}`
			: '';

		return cn(this.BASE, hoverClasses, className);
	}

	/**
	 * Transform origin классы
	 */
	static getTransformOriginClasses(origin: string = 'center'): string {
		return `transform-origin-${origin}`;
	}
}
