import type { Snippet } from 'svelte';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { LinkSpecificProps } from '$stylist/navigation/interface/recipe/link-specific-props';

/**
 * LinkRecipe пїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅ пїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅ.
 *
 * LEGO-пїЅпїЅпїЅпїЅпїЅпїЅ:
 *   ILabelSlot                (information) пїЅ text, children
 *   IIconSlot                 (information) пїЅ icon
 *   IClickable                (interaction) пїЅ onClick, disabled
 *   IFocusable                (interaction) пїЅ tabIndex, onFocus, onBlur
 *   ISizable                  (architecture) пїЅ size
 *   ThemeAttributes           (theme)       пїЅ variant, tone
 *
 * пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ:
 *   - Link: type='link', href, target
 *   - BreadcrumbLink: type='breadcrumb' (пїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ)
 *   - InlineText: type='inline' (пїЅ пїЅпїЅпїЅпїЅпїЅпїЅ)
 *   - ButtonLink: type='button' (пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅ)
 */
export interface LinkRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IIconSlot,
		IClickable,
		IFocusable,
		ISizable,
		ThemeAttributes<HTMLAnchorElement>
	]>,
		LinkSpecificProps
{}

