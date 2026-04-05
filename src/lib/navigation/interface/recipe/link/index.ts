import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * LinkRecipe — унифицированный рецепт для всех типов ссылок.
 *
 * LEGO-состав:
 *   ILabelSlot                (information) — text, children
 *   IIconSlot                 (information) — icon
 *   IClickable                (interaction) — onClick, disabled
 *   IFocusable                (interaction) — tabIndex, onFocus, onBlur
 *   ISizable                  (architecture) — size
 *   ThemeAttributes           (theme)       — variant, tone
 *
 * Варианты использования:
 *   - Link: type='link', href, target
 *   - BreadcrumbLink: type='breadcrumb' (в цепочке навигации)
 *   - InlineText: type='inline' (в тексте)
 *   - ButtonLink: type='button' (стилизованная ссылка)
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

/** Специфичные свойства для различных типов ссылок */
export interface LinkSpecificProps {
	/** Тип ссылки */
	type?: 'link' | 'breadcrumb' | 'inline' | 'button';

	/** URL ссылки */
	href?: string;

	/** Цель открытия */
	target?: '_blank' | '_self' | '_parent' | '_top';

	/** Атрибут rel (для внешних ссылок) */
	rel?: string;

	/** Download атрибут */
	download?: string;
}
