import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ITransformable } from '$stylist/animation/interface/proto/transformable';

/**
 * TransformationProps — свойства трансформации элемента.
 *
 * LEGO-состав:
 *   ITransformable        (interaction) — scale, rotate, translate, skew, transformOrigin
 *   IMotionToken          (theme)       — duration, easing, delay, animateInfinite
 *   InteractionHTMLAttributes<HTMLDivElement>
 */
export interface TransformationProps
	extends ITransformable,
		InteractionHTMLAttributes<HTMLDivElement>
{
	/** Блокировка трансформации */
	disabled?: boolean;
}
