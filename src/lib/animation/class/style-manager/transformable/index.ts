import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { TransformableStyleManagerOptions } from '$stylist/animation/interface/slot/transformable-style-manager-options';

export class TransformableStyleManager {
	private static readonly BASE = 'transition-transform duration-300 ease-in-out';
	private static readonly HOVER_SCALE = 'hover:scale-105';
	private static readonly HOVER_ROTATE = 'hover:rotate-3';

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

	static getBaseClasses(className?: string): string {
		return mergeClassNames(this.BASE, className);
	}

	static getClasses(options: TransformableStyleManagerOptions = {}): string {
		const {
			animateOnHover = false,
			class: className = ''
		} = options;

		const hoverClasses = animateOnHover ? `${this.HOVER_SCALE} ${this.HOVER_ROTATE}` : '';

		return mergeClassNames(this.BASE, hoverClasses, className);
	}

	static getTransformOriginClasses(origin: string = 'center'): string {
		return `transform-origin-${origin}`;
	}
}
