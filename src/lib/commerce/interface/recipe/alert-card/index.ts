/**
 * AlertCard — сообщение обратной связи (Alert / Toast / Notification).
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — title (заголовок сообщения)
 *   ICaptionSlot      (information) — subtitle (тело сообщения)
 *   IIconSlot         (information) — icon (иконка типа сообщения)
 *   IStatusSlot       (information) — severity (success/warning/danger/info)
 *   IBadgeSlot        (information) — badge (счётчик уведомлений)
 *   IMediaSlot        (information) — image (опциональное изображение)
 *   ISizable          (architecture) — size, shape
 *   ThemeAttributes   (theme)       — data-variant, data-tone
 *
 * Для Toast добавь: autoDismiss?: boolean; dismissTimeout?: number.
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IBadgeSlot } from '$stylist/information/interface/proto/badge-slot';
import type { IMediaSlot } from '$stylist/information/interface/proto/media-slot';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AlertCardAction {
	label: string;
	onClick?: () => void;
}

export type AlertCardRecipe = Omit<
	RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		IStatusSlot,
		IBadgeSlot,
		IMediaSlot,
		ISizable,
		ThemeAttributes<HTMLDivElement>
	]>,
	'icon'
> & {
	title?: string;
	subtitle?: string;
	variant?: string;
	disabled?: boolean;
	icon?: string | Snippet;
	actions?: AlertCardAction[];
	children?: Snippet;
};
