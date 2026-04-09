/**
 * AlertCard � ��������� �������� ����� (Alert / Toast / Notification).
 *
 * LEGO-������:
 *   ILabelSlot        (information) � title (��������� ���������)
 *   ICaptionSlot      (information) � subtitle (���� ���������)
 *   IIconSlot         (information) � icon (������ ���� ���������)
 *   IStatusSlot       (information) � severity (success/warning/danger/info)
 *   IBadgeSlot        (information) � badge (������� �����������)
 *   IMediaSlot        (information) � image (������������ �����������)
 *   ISizable          (architecture) � size, shape
 *   ThemeAttributes   (theme)       � data-variant, data-tone
 *
 * ��� Toast ������: autoDismiss?: boolean; dismissTimeout?: number.
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IBadgeSlot } from '$stylist/typography/interface/proto/badge-slot';
import type { IMediaSlot } from '$stylist/media/interface/proto/media-slot';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { AlertCardAction } from '$stylist/commerce/interface/recipe/alert-card-action';

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
