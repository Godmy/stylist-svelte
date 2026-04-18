import type { TransformContract } from '$stylist/animation/type/struct/motion-transform-contract';
import type { MotionContract } from '$stylist/animation/type/struct/motion';

/**
 * Прото-интерфейс для transformable элементов
 * Расширяет TransformContract дополнительными свойствами
 */
export interface BehaviorTransformable extends Partial<TransformContract> {
	/** Анимировать при наведении */
	animateOnHover?: boolean;
	/** Анимировать при клике */
	animateOnClick?: boolean;
	/** Бесконечная анимация */
	animateInfinite?: boolean;
	/** Отключить трансформацию */
	disabled?: boolean;
}
