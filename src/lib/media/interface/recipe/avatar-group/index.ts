/**
 * Avatar � ������������� ������������ (����, ��������, ������).
 *
 * LEGO-������:
 *   IMediaSlot        (information) � src, alt (���� ������������)
 *   ILabelSlot        (information) � label (��� ������������ / �������� fallback)
 *   IStatusSlot       (information) � status (online, away, offline�)
 *   IBadgeSlot        (information) � count, dot (������� ����������� ������ �������)
 *   IClickable        (interaction) � onClick (������� �������)
 *   ISizable          (architecture) � size, shape (circular / rounded)
 *   ThemeAttributes   (theme)       � data-variant
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IMediaSlot } from '$stylist/media/interface/proto/media-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IBadgeSlot } from '$stylist/typography/interface/proto/badge-slot';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
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
