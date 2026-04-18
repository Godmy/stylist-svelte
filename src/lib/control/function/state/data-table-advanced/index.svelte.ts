import { DataTableAdvancedStyleManager } from '$stylist/control/class/style-manager/data-table-advanced-style-manager';
import type { SlotAdvancedColumnDefinition as AdvancedColumnDefinition } from '$stylist/control/interface/slot/advanced-column-definition';
import type { SlotDataTableAdvanced as DataTableAdvancedProps } from '$stylist/control/interface/slot/data-table-advanced';

type TableRow = Record<string, unknown>;

export function createDataTableAdvancedState(props: DataTableAdvancedProps<TableRow>) {
	let searchTerm = $state('');
	let pageSize = $state(props.defaultPageSize ?? 10);
	let currentPage = $state(1);

	const filtered = $derived.by(() => {
		if (!searchTerm) {
			return props.data;
		}

		const normalizedQuery = searchTerm.toLowerCase();
		return props.data.filter((row: TableRow) =>
			Object.values(row).some((value) =>
				String(value ?? '')
					.toLowerCase()
					.includes(normalizedQuery)
			)
		);
	});

	const totalPages = $derived(Math.max(1, Math.ceil(filtered.length / pageSize)));
	const pageData = $derived(filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize));
	const rootClass = $derived(DataTableAdvancedStyleManager.root(props.class ?? ''));

	const setSearchTerm = (value: string) => {
		searchTerm = value;
		currentPage = 1;
	};

	const setPageSize = (value: number) => {
		pageSize = value;
		currentPage = 1;
	};

	const goPrev = () => {
		if (currentPage > 1) {
			currentPage -= 1;
		}
	};

	const goNext = () => {
		if (currentPage < totalPages) {
			currentPage += 1;
		}
	};

	return {
		get searchTerm() {
			return searchTerm;
		},
		get pageSize() {
			return pageSize;
		},
		get currentPage() {
			return currentPage;
		},
		get filtered() {
			return filtered;
		},
		get totalPages() {
			return totalPages;
		},
		get pageData() {
			return pageData;
		},
		get rootClass() {
			return rootClass;
		},
		getCellValue(row: TableRow, column: AdvancedColumnDefinition<TableRow>): unknown {
			return column.renderCell ? column.renderCell(row) : row[column.key];
		},
		setSearchTerm,
		setPageSize,
		goPrev,
		goNext
	};
}

export default createDataTableAdvancedState;
