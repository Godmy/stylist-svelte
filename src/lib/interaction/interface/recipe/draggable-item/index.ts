/**
 * DraggableItem — перетаскиваемый элемент (узел, карточка канбана, виджет).
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (подпись узла)
 *   IIconSlot         (information) — icon (тип узла)
 *   IStatusSlot       (information) — state (selected, locked, error…)
 *   IDraggable        (interaction) — draggable, onDragStart/End/Drop
 *   ISelectable<string> (interaction) — selected, onSelect
 *   ISizable          (architecture) — size, shape
 *   IElevatable       (architecture) — layoutElevation (поднятие при drag)
 *   IPositionable     (architecture) — layoutGravity, layoutAnchor
 *   IMotionToken      (theme)       — duration, easing (анимация drop)
 *   ThemeAttributes   (theme)       — data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IDraggable } from '$stylist/interaction/interface/proto/draggable';
import type { ISelectable } from '$stylist/interaction/interface/proto/selectable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { IElevatable } from '$stylist/layout/interface/proto/elevatable';
import type { IPositionable } from '$stylist/layout/interface/proto/positionable';
import type { IMotionToken } from '$stylist/interaction/interface/proto/motion-token';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface DraggableItemRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		IStatusSlot,
		IDraggable,
		ISelectable<string>,
		ISizable,
		IElevatable,
		IPositionable,
		IMotionToken,
		ThemeAttributes<HTMLDivElement>
	]>
{}
