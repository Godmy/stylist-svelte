import type {
	TableCellProps,
	TableProps,
	TableRowProps,
	TableSectionProps
} from '$stylist/design-system/attributes';
import { TABLE_ALIGNMENT_CLASSES, TABLE_CLASSES } from '$stylist/design-system/classes';
import { cn } from '$stylist/utils/classes';

export function createTableState(props: TableProps) {
	const classes = $derived(cn(...TABLE_CLASSES.table, props.class));
	const captionClasses = $derived(cn(...TABLE_CLASSES.caption));

	return {
		get classes() {
			return classes;
		},
		get captionClasses() {
			return captionClasses;
		}
	};
}

export function createTableHeaderState(props: TableSectionProps) {
	const classes = $derived(cn(...TABLE_CLASSES.header, props.class));
	return {
		get classes() {
			return classes;
		}
	};
}

export function createTableBodyState(props: TableSectionProps) {
	const classes = $derived(cn(...TABLE_CLASSES.body, props.class));
	return {
		get classes() {
			return classes;
		}
	};
}

export function createTableRowState(props: TableRowProps) {
	const striped = $derived(props.striped ?? false);
	const active = $derived(props.active ?? false);
	const classes = $derived(
		cn(
			...(striped ? TABLE_CLASSES.row.striped : TABLE_CLASSES.row.normal),
			active && TABLE_CLASSES.row.active,
			props.class
		)
	);

	return {
		get classes() {
			return classes;
		}
	};
}

export function createTableCellState(props: TableCellProps) {
	const variant = $derived(props.variant ?? 'data');
	const align = $derived(props.align ?? 'left');
	const classes = $derived(
		cn(
			...TABLE_CLASSES.cell.base,
			...(variant === 'header' ? TABLE_CLASSES.cell.header : TABLE_CLASSES.cell.data),
			...(TABLE_ALIGNMENT_CLASSES[align as keyof typeof TABLE_ALIGNMENT_CLASSES] || TABLE_ALIGNMENT_CLASSES.left),
			props.class
		)
	);

	return {
		get variant() {
			return variant;
		},
		get classes() {
			return classes;
		}
	};
}
