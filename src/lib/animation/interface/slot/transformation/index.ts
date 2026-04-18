import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { BehaviorTransformable as ITransformable } from '$stylist/animation/interface/behavior/transformable';
import type { BehaviorMotionToken } from '$stylist/animation/interface/behavior/motion-token';
import type { BehaviorTransformable } from '$stylist/animation/interface/behavior/transformable';

/**
 * SlotTransformation — свойства трансформации элемента.
 *
 * LEGO-состав:
 *   BehaviorTransformable        (interaction) — scale, rotate, translate, skew, transformOrigin
 *   BehaviorMotionToken          (theme)       — duration, easing, delay, animateInfinite
 *   InteractionHTMLAttributes<HTMLDivElement>
 */
export interface SlotTransformation
	extends BehaviorTransformable,
		InteractionHTMLAttributes<HTMLDivElement>
{
	/** Блокировка трансформации */
	disabled?: boolean;
}
