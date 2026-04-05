/**
 * Node Palette — палитра узлов.
 *
 * LEGO-состав:
 *   ILabelSlot                (information/label-slot)
 *   IIconSlot                 (information/icon-slot)
 *   IDraggable                (interaction/draggable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IDraggable } from '$stylist/interaction/interface/proto/draggable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';

export interface NodePaletteRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		IDraggable,
		IFocusable,
		ISizable
	]>
{}
