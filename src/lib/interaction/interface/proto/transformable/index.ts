import type { TransformContract } from '$stylist/interaction/type/struct/motion-transform-contract';
import type { MotionContract } from '$stylist/interaction/type/struct/motion';

/**
 * Прото-интерфейс для transformable элементов
 * Расширяет TransformContract дополнительными свойствами
 */
export interface ITransformable extends Partial<TransformContract> {
	/** Анимировать при наведении */
	animateOnHover?: boolean;
	/** Анимировать при клике */
	animateOnClick?: boolean;
	/** Бесконечная анимация */
	animateInfinite?: boolean;
	/** Отключить трансформацию */
	disabled?: boolean;
}
