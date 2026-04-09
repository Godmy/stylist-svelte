/**
 * MediaItem � ����������� / �����-������ / �����-������.
 *
 * LEGO-������:
 *   IMediaSlot        (information) � src, alt, thumbnail, srcSet, loading
 *   ILabelSlot        (information) � label (������� ��� �����)
 *   ICaptionSlot      (information) � caption, description
 *   IClickable        (interaction) � onClick (������� � ���������)
 *   ISizable          (architecture) � size, shape
 *   IElevatable       (architecture) � layoutElevation (�������� � �����)
 *   IMotionToken      (theme)       � duration, easing (fade-in ��� ��������)
 *   ThemeAttributes   (theme)       � data-variant
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IMediaSlot } from '$stylist/media/interface/proto/media-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { IElevatable } from '$stylist/layout/interface/proto/elevatable';
import type { IMotionToken } from '$stylist/interaction/interface/proto/motion-token';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface MediaItemRecipe
	extends RecordArchitectureMerge<[
		IMediaSlot,
		ILabelSlot,
		ICaptionSlot,
		IClickable,
		ISizable,
		IElevatable,
		IMotionToken,
		ThemeAttributes<HTMLDivElement>
	]>
{}
