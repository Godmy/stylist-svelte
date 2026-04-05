/**
 * Alert / Toast / Notification — сообщение обратной связи.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (заголовок сообщения)
 *   ICaptionSlot      (information) — description (тело сообщения)
 *   IIconSlot         (information) — icon (иконка типа сообщения)
 *   IStatusSlot       (information) — severity (success/warning/danger/info)
 *   IClickable        (interaction) — onClick (действие), onDismiss через disabled
 *   IMotionToken      (theme)       — duration, easing (анимация появления/ухода)
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
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IMotionToken } from '$stylist/interaction/interface/proto/motion-token';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AlertRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		IStatusSlot,
		IClickable,
		IMotionToken,
		ISizable,
		ThemeAttributes<HTMLDivElement>
	]>
{}
