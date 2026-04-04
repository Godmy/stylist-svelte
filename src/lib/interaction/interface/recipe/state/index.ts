import type { ClickProps } from '$stylist/interaction/interface/proto/clickable';
import type { DragProps } from '$stylist/interaction/interface/proto/draggable';
import type { HoverProps } from '$stylist/interaction/interface/proto/hoverable';
import type { FocusProps } from '$stylist/interaction/interface/proto/focusable';
import type { TransformProps } from '$stylist/interaction/interface/proto/transformable';
import type { AnimateProps } from '$stylist/interaction/interface/proto/animate';

/**
 * Recipe типы для state функций
 * Используются потребителями state для типизации входных параметров
 */

export type ClickableStateRecipe = ClickProps;
export type DraggableStateRecipe = DragProps;
export type HoverableStateRecipe = HoverProps;
export type FocusableStateRecipe = FocusProps;
export type TransformableStateRecipe = TransformProps;
export type AnimatedStateRecipe = AnimateProps;
