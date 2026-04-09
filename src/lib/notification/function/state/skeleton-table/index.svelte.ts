import { SkeletonTableStyleManager } from '$stylist/notification/class/style-manager/skeleton-table';
import type { SkeletonTableProps } from '$stylist/notification/interface/component/skeleton-table/other/skeleton-table';

export function createSkeletonTableState(props: SkeletonTableProps) {
	const rows = $derived(props.rows ?? 5);
	const columns = $derived(props.columns ?? 4);

	let columnIndexes = $derived(Array.from({ length: columns }, (_, index) => index));
	let containerClass = $derived(SkeletonTableStyleManager.container(props.class));
	let dataBarStyle = $derived(SkeletonTableStyleManager.bar('120px'));
	let dataCellClass = $derived(SkeletonTableStyleManager.dataCell());
	let headerBarStyle = $derived(SkeletonTableStyleManager.bar('80px'));
	let headerCellClass = $derived(SkeletonTableStyleManager.headerCell());
	let headerClass = $derived(SkeletonTableStyleManager.header());
	let restProps = $derived.by(() => {
		const { class: _class, rows: _rows, columns: _columns, ...rest } = props;
		return rest;
	});
	let rowIndexes = $derived(Array.from({ length: rows }, (_, index) => index));
	let tableClass = $derived(SkeletonTableStyleManager.table());

	return {
		get columnIndexes() { return columnIndexes; },
		get containerClass() { return containerClass; },
		get dataBarStyle() { return dataBarStyle; },
		get dataCellClass() { return dataCellClass; },
		get headerBarStyle() { return headerBarStyle; },
		get headerCellClass() { return headerCellClass; },
		get headerClass() { return headerClass; },
		get restProps() { return restProps; },
		get rowIndexes() { return rowIndexes; },
		get tableClass() { return tableClass; }
	};
}

export default createSkeletonTableState;
