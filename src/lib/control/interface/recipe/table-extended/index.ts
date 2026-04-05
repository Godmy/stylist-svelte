import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISelectable } from '$stylist/interaction/interface/proto/selectable';
import type { IScrollable } from '$stylist/layout/interface/proto/scrollable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * TableRecipe — унифицированный рецепт для таблиц.
 *
 * LEGO-состав:
 *   ILabelSlot                (information) — headers, captions
 *   IIconSlot                 (information) — sort icons, action icons
 *   ISelectable<T>            (interaction) — selectedRows, onRowSelect
 *   IClickable                (interaction) — onRowClick, onSort
 *   IFocusable                (interaction) — tabIndex, onFocus, onBlur
 *   ISizable                  (architecture) — size, density
 *   IScrollable               (architecture) — overflowX, overflowY
 *   ThemeAttributes           (theme)       — variant, tone
 *
 * Варианты использования:
 *   - TableExtended: type='extended', полная таблица с данными
 *   - TableControls: type='controls', панель управления
 *   - SortableHeader: type='header', сортируемый заголовок
 *   - DataTable: type='data', таблица с данными
 */
export interface TableRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		ISelectable<string | string[]>,
		IClickable,
		IFocusable,
		ISizable,
		IScrollable,
		ThemeAttributes<HTMLTableElement>
	]>,
		TableSpecificProps
{}

/** Специфичные свойства для таблиц */
export interface TableSpecificProps {
	/** Тип таблицы */
	type?: 'extended' | 'controls' | 'header' | 'data';
	
	/** Колонки таблицы */
	columns?: Array<{ key: string; label: string; sortable?: boolean; icon?: string }>;
	
	/** Данные строк */
	data?: Array<Record<string, any>>;
	
	/** Сортировка */
	sortBy?: string;
	sortDirection?: 'asc' | 'desc' | 'none';
	onSort?: (column: string, direction: 'asc' | 'desc') => void;
	
	/** Пагинация */
	pagination?: boolean;
	pageSize?: number;
	currentPage?: number;
	
	/** Выделение строк */
	selectableRows?: boolean;
	multiSelect?: boolean;
	
	/** children как Snippet */
	children?: Snippet;
}
