import type { MotionContract } from '$stylist/interaction/type/struct/motion';
import type { TransformContract } from '$stylist/interaction/type/struct/motion-transform-contract';
import type { AnimateContract } from '$stylist/interaction/type/struct/motion-animate-contract';
import { TOKEN_EASING } from '$stylist/interaction/const/map/easing';
import type { TokenAnimation } from '$stylist/interaction/type/enum/animation';

/**
 * Object Manager для motion
 * Управляет состоянием и данными для анимаций и трансформаций
 */
export class ObjectManagerMotion {
	/**
	 * Нормализует базовый motion контракт
	 */
	static normalizeMotionContract(contract: Partial<MotionContract>): MotionContract {
		return {
			animation: (contract.animation ?? 'ease') as TokenAnimation,
			duration: contract.duration ?? '300ms',
			easing: contract.easing ?? TOKEN_EASING.SMOOTH,
			delay: contract.delay ?? 0,
			infinite: contract.infinite ?? false,
			direction: contract.direction ?? 'normal',
			iterations: contract.iterations ?? 1
		};
	}

	/**
	 * Нормализует transform контракт
	 */
	static normalizeTransformContract(contract: Partial<TransformContract>): TransformContract {
		return {
			...this.normalizeMotionContract(contract),
			scale: contract.scale ?? 1,
			rotate: contract.rotate ?? 0,
			translateX: contract.translateX ?? 0,
			translateY: contract.translateY ?? 0,
			skewX: contract.skewX ?? 0,
			skewY: contract.skewY ?? 0,
			transformOrigin: contract.transformOrigin ?? 'center'
		};
	}

	/**
	 * Нормализует animate контракт
	 */
	static normalizeAnimateContract(contract: Partial<AnimateContract>): AnimateContract {
		return {
			...this.normalizeMotionContract(contract),
			from: contract.from ?? 0,
			to: contract.to ?? 1,
			format: contract.format
		};
	}

	/**
	 * Генерирует transform строку для inline style
	 */
	static generateTransformString(contract: Partial<TransformContract>): string {
		const {
			scale = 1,
			rotate = 0,
			translateX = 0,
			translateY = 0,
			skewX = 0,
			skewY = 0
		} = contract;

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
	 * Генерирует animation строку для inline style
	 */
	static generateAnimationString(contract: Partial<MotionContract>): string {
		const {
			animation = 'fade-in',
			duration = '300ms',
			easing = TOKEN_EASING.SMOOTH,
			delay = 0,
			infinite = false,
			direction = 'normal',
			iterations = 1
		} = contract;

		const iterationValue = infinite ? 'infinite' : iterations.toString();

		return `${animation} ${duration} ${easing} ${delay}ms ${direction} ${iterationValue}`;
	}

	/**
	 * Вычисляет промежуточное значение для анимации
	 */
	static interpolateValue(
		from: number,
		to: number,
		progress: number,
		easing: string = 'ease-in-out'
	): number {
		// Простая линейная интерполяция с easing
		const easedProgress = this.applyEasing(progress, easing);
		return from + (to - from) * easedProgress;
	}

	/**
	 * Применяет easing функцию к прогрессу
	 */
	private static applyEasing(progress: number, easing: string): number {
		switch (easing) {
			case 'ease-in':
				return progress * progress;
			case 'ease-out':
				return 1 - (1 - progress) * (1 - progress);
			case 'ease-in-out':
				return progress < 0.5
					? 2 * progress * progress
					: 1 - Math.pow(-2 * progress + 2, 2) / 2;
			default:
				return progress;
		}
	}
}
