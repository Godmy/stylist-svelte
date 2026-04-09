import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { LinkSpecificProps } from '$stylist/navigation/interface/recipe/link-specific-props';

/**
 * LinkRecipe � ��������������� ������ ��� ���� ����� ������.
 *
 * LEGO-������:
 *   ILabelSlot                (information) � text, children
 *   IIconSlot                 (information) � icon
 *   IClickable                (interaction) � onClick, disabled
 *   IFocusable                (interaction) � tabIndex, onFocus, onBlur
 *   ISizable                  (architecture) � size
 *   ThemeAttributes           (theme)       � variant, tone
 *
 * �������� �������������:
 *   - Link: type='link', href, target
 *   - BreadcrumbLink: type='breadcrumb' (� ������� ���������)
 *   - InlineText: type='inline' (� ������)
 *   - ButtonLink: type='button' (������������� ������)
 */
export interface LinkRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		IClickable,
		IFocusable,
		ISizable,
		ThemeAttributes<HTMLAnchorElement>
	]>,
		LinkSpecificProps
{}
