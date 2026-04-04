/**
 * Form Footer — нижняя часть формы.
 *
 * LEGO-состав:
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';

export interface FormFooterRecipe
	extends RecordArchitectureMerge<[
		IClickable,
		IFocusable,
		ISizable
	]>
{}
