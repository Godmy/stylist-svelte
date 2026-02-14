import type {
	TableCellProps,
	TableProps,
	TableRowProps,
	TableSectionProps
} from '$stylist/design-system/props';
import { TableStyleManager } from '$stylist/design-system/styles/table';

export function createTableState(props: TableProps) {
	const classes = $derived(TableStyleManager.getTableClasses(props.class));
	const captionClasses = $derived(TableStyleManager.getCaptionClasses());

	return {
		get classes() {
			return classes;
		},
		get captionClasses() {
			return captionClasses;
		}
	};
}
function createTableHeaderState(props: TableSectionProps) {
	const classes = $derived(TableStyleManager.getHeaderClasses(props.class));
	return {
		get classes() {
			return classes;
		}
	};
}
function createTableBodyState(props: TableSectionProps) {
	const classes = $derived(TableStyleManager.getBodyClasses(props.class));
	return {
		get classes() {
			return classes;
		}
	};
}
function createTableRowState(props: TableRowProps) {
	const striped = $derived(props.striped ?? false);
	const active = $derived(props.active ?? false);
	const classes = $derived(TableStyleManager.getRowClasses(striped, active, props.class));

	return {
		get classes() {
			return classes;
		}
	};
}
function createTableCellState(props: TableCellProps) {
	const variant = $derived(props.variant ?? 'data');
	const align = $derived((props.align ?? 'left') as 'left' | 'center' | 'right');
	const classes = $derived(TableStyleManager.getCellClasses(variant, align, props.class));

	return {
		get variant() {
			return variant;
		},
		get classes() {
			return classes;
		}
	};
}

export default createTableState;



