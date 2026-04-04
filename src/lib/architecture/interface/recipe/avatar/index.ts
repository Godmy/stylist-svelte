/**
 * Avatar — представление пользователя (фото, инициалы, статус).
 *
 * LEGO-состав:
 *   IMediaSlot        (information) — src, alt (фото пользователя)
 *   ILabelSlot        (information) — label (имя пользователя / инициалы fallback)
 *   IStatusSlot       (information) — status (online, away, offline…)
 *   IBadgeSlot        (information) — count, dot (счётчик уведомлений поверх аватара)
 *   IClickable        (interaction) — onClick (открыть профиль)
 *   ISizable          (architecture) — size, shape (circular / rounded)
 *   ThemeAttributes   (theme)       — data-variant
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IMediaSlot } from '$stylist/information/interface/proto/media-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IBadgeSlot } from '$stylist/information/interface/proto/badge-slot';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AvatarRecipe
	extends RecordArchitectureMerge<[
		IMediaSlot,
		ILabelSlot,
		IStatusSlot,
		IBadgeSlot,
		IClickable,
		ISizable,
		ThemeAttributes<HTMLDivElement>
	]>
{}
