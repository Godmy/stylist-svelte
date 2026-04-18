import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { InputSpecificProps } from '$stylist/input/type/struct/input-specific-props';

/**
 * InputRecipe пїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅ пїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅ.
 *
 * LEGO-пїЅпїЅпїЅпїЅпїЅпїЅ:
 *   ILabelSlot                (information) пїЅ label
 *   ICaptionSlot              (information) пїЅ helperText, caption, error
 *   IIconSlot                 (information) пїЅ iconLeft, iconRight
 *   IStatusSlot               (information) пїЅ error, disabled
 *   IFocusable                (interaction) пїЅ onFocus, onBlur, tabIndex
 *   ISizable                  (architecture) пїЅ size, density
 *   ThemeAttributes           (theme)       пїЅ variant, tone
 *
 * пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ:
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
	extends StructIntersectAll<[
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
