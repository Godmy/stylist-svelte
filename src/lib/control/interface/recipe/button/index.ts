import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';
import type { IBadgeSlot } from '$stylist/information/interface/proto/badge-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * ButtonRecipe — унифицированный рецепт для всех типов кнопок.
 *
 * LEGO-состав:
 *   ILabelSlot                (information) — label, children
 *   IIconSlot                 (information) — icon, iconLeft, iconRight
 *   IBadgeSlot                (information) — count, dot (для FollowButton, CopyButton)
 *   IClickable                (interaction) — onClick, disabled, loading, cursor
 *   IFocusable                (interaction) — onFocus, onBlur, tabIndex, autoFocus
 *   ISizable                  (architecture) — size, density, shape
 *   ThemeAttributes           (theme)       — variant, tone
 *
 * Варианты использования:
 *   - Button: type='button', label + icon
 *   - IconButton: type='icon', icon только
 *   - CloseButton: type='close', icon='×'
 *   - CopyButton: type='copy', text + onSuccess + onError
 *   - FollowButton: type='follow', badge + isActive
 *   - PageButton: type='page', page + isActive (для пагинации)
 */
export interface ButtonRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		IBadgeSlot,
		IClickable,
		IFocusable,
		ISizable,
		ThemeAttributes<HTMLButtonElement>
	]>,
		ButtonSpecificProps
{}

/** Специфичные свойства для различных типов кнопок */
export interface ButtonSpecificProps {
	/** Тип кнопки (определяет поведение) */
	type?: 'button' | 'icon' | 'close' | 'copy' | 'follow' | 'page';

	/** Для CopyButton: текст для копирования */
	text?: string;

	/** Для CopyButton: сообщение об успешном копировании */
	successMessage?: string;

	/** Для CopyButton: обработчик успеха */
	onSuccess?: (text: string) => void;

	/** Для CopyButton: обработчик ошибки */
	onError?: (error: Error) => void;

	/** Для PageButton: номер страницы */
	page?: number;

	/** Для PageButton/FollowButton: активно ли */
	isActive?: boolean;

	/** Для кнопки: блочный режим (100% ширины) */
	block?: boolean;
}
