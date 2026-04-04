/**
 * Click — базовый кликабельный элемент.
 *
 * LEGO-состав:
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';

export interface ClickRecipe
	extends RecordArchitectureMerge<[
		IClickable,
		IFocusable
	]>
{}
