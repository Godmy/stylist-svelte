import type { TransformContract, MotionContract } from '$stylist/interaction/type/struct/motion';
import type { Snippet } from 'svelte';

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

/**
 * Props для transformable компонента
 */
export interface TransformProps extends ITransformable {
	class?: string;
	children?: Snippet;
}
