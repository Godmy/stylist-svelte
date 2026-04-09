import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IDraggable } from '$stylist/interaction/interface/proto/draggable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { IScrollable } from '$stylist/layout/interface/proto/scrollable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ITransformable } from '$stylist/animation/interface/proto/transformable';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { LayoutSpecificProps } from '$stylist/navigation/interface/recipe/layout-specific-props';

/**
 * LayoutRecipe � ��������������� ������ ��� layout-�����������.
 *
 * LEGO-������:
 *   ILabelSlot                (information) � label, title
 *   IIconSlot                 (information) � icon
 *   IClickable                (interaction) � onClick, onDismiss
 *   IDraggable                (interaction) � draggable, onDrag*, onDrop
 *   ITransformable            (interaction) � scale, rotate, translate
 *   IFocusable                (interaction) � tabIndex, onFocus, onBlur
 *   ISizable                  (architecture) � size, density
 *   IScrollable               (architecture) � overflowX, overflowY
 *   ThemeAttributes           (theme)       � variant, tone
 *
 * �������� �������������:
 *   - Sidebar: type='sidebar', ������� ������
 *   - Overlay: type='overlay', ������������� ����
 *   - DragAndDrop: type='drag-drop', ��������������
 *   - Transformation: type='transform', �������������
 *   - Container: type='container', ������� ���������
 */
export interface LayoutRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		IClickable,
		IDraggable,
		ITransformable,
		IFocusable,
		ISizable,
		IScrollable,
		ThemeAttributes<HTMLDivElement>
	]>,
		LayoutSpecificProps
{}
