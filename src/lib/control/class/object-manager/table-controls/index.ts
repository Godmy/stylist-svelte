import type { SlotDataTableColumn as DataTableColumn } from '$stylist/control/interface/slot/data-table-column';
import type { SlotDataTableRecipe as DataTableRecipe } from '$stylist/control/interface/slot/data-table-recipe';
import type { SlotTableRecord as TableRecord } from '$stylist/control/interface/slot/table-record';
import type { SlotTableWithFilters as TableWithFiltersProps } from '$stylist/control/interface/slot/table-with-filters';
import type { Row } from '$stylist/control/type/alias/row';

export class ObjectManagerTableControls {
	static sortData<T extends Row>(
		data: T[],
		sortKey: string | null,
		sortDirection: 'asc' | 'desc'
	): T[] {
		if (!sortKey) {
			return data;
		}

		return [...data].sort((a, b) => {
			const av = a[sortKey as keyof T];
			const bv = b[sortKey as keyof T];
			const compareResult = String(av ?? '').localeCompare(String(bv ?? ''));
			return sortDirection === 'asc' ? compareResult : -compareResult;
		});
	}

	static groupRows(
		data: TableRecord[],
		groupBy: TableWithFiltersProps['columns'][number] | string
	): Record<string, TableRecord[]> {
		return data.reduce<Record<string, TableRecord[]>>((accumulator, row) => {
			const key = String(row[groupBy] ?? 'Other');
			if (!accumulator[key]) {
				accumulator[key] = [];
			}
			accumulator[key].push(row);
			return accumulator;
		}, {});
	}

	static filterRows(
		data: TableRecord[],
		columns: string[],
		filters: Record<string, string>
	): TableRecord[] {
		return data.filter((row) =>
			columns.every((column) =>
				String(row[column] ?? '')
					.toLowerCase()
					.includes((filters[column] ?? '').toLowerCase())
			)
		);
	}

	static getCellValue<T extends Row>(row: T, column: DataTableColumn<T>): unknown {
		return row[column.key];
	}
}
