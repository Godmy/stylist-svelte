/**
 * Card — универсальная карточка-контейнер.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (заголовок карточки)
 *   ICaptionSlot      (information) — caption, description, subtitle
 *   IMediaSlot        (information) — src, alt, thumbnail (обложка)
 *   IStatusSlot       (information) — status, severity, state
 *   IClickable        (interaction) — onClick, cursor, hoverEffect (кликабельная карточка)
 *   ISizable          (architecture) — size, shape, layoutPadding
 *   IElevatable       (architecture) — layoutElevation
 *   ThemeAttributes   (theme)       — data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { IMediaSlot } from '$stylist/information/interface/proto/media-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { IElevatable } from '$stylist/layout/interface/proto/elevatable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CardRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IMediaSlot,
		IStatusSlot,
		IClickable,
		ISizable,
		IElevatable,
		ThemeAttributes<HTMLDivElement>
	]>
{}
