import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** Специфичные свойства для таблиц */
import type { Snippet } from 'svelte';

export interface TableSpecificProps extends StructIntersectAll<[]> {
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
