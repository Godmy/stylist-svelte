/**
 * Tabs — вкладки.
 *
 * LEGO-состав:
 *   ILabelSlot                (information/label-slot)
 *   IIconSlot                 (information/icon-slot)
 *   ISelectable<string>       (interaction/selectable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISelectable } from '$stylist/interaction/interface/proto/selectable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';

export interface TabsRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		ISelectable<string>,
		IFocusable,
		ISizable
	]>
{}
