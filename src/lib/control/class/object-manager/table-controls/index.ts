import type {
	DataTableColumn,
	DataTableRecipe
} from '$stylist/control/interface/component/table-controls/other';
import type { TableRecord, TableWithFiltersProps } from '$stylist/control/interface/component/table-extended/other';

type Row = Record<string, unknown>;

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
