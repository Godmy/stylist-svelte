import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * InputRecipe � ��������������� ������ ��� ���� ����� ����� �����.
 *
 * LEGO-������:
 *   ILabelSlot                (information) � label
 *   ICaptionSlot              (information) � helperText, caption, error
 *   IIconSlot                 (information) � iconLeft, iconRight
 *   IStatusSlot               (information) � error, disabled
 *   IFocusable                (interaction) � onFocus, onBlur, tabIndex
 *   ISizable                  (architecture) � size, density
 *   ThemeAttributes           (theme)       � variant, tone
 *
 * �������� �������������:
 *   - Input: type='text'
 *   - Email: type='email'
 *   - Password: type='password', showPasswordToggle
 *   - TextArea: type='textarea', rows, maxLength
 *   - Number: type='number', min, max, step
 *   - Pin: type='pin', length
 *   - Phone: type='tel'
 *   - Search: type='search', onSearch
 */
export interface InputRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		IStatusSlot,
		IFocusable,
		ISizable,
		ThemeAttributes<HTMLInputElement>
	]>,
		InputSpecificProps
{}

/** ����������� �������� ��� ��������� ����� ����� ����� */
export interface InputSpecificProps {
	/** ��� ���� ����� */
	type?: 'text' | 'email' | 'password' | 'textarea' | 'number' | 'pin' | 'tel' | 'search';

	/** ������������ ����� */
	maxLength?: number;

	/** ��� TextArea: ���������� ����� */
	rows?: number;

	/** ��� Password: ��������/������ ������ */
	showPasswordToggle?: boolean;

	/** ��� Pin: ���������� ���� */
	length?: number;

	/** ��� Number: min/max/step */
	min?: number;
	max?: number;
	step?: number;

	/** children ��� Snippet (��� �������) */
	children?: Snippet;
}
