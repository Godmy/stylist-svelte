import type { RecipeTableCell as RecipeTableCell } from '$stylist/table/interface/recipe/table-cell';
import { ObjectManagerTable } from '$stylist/table/class/object-manager/table';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { TABLE_ALIGNMENT_CLASSES } from '$stylist/table/const/record/table-alignment-classes';
import { TABLE_CLASSES } from '$stylist/table/const/record/table-classes';

export function createTableCellState(props: RecipeTableCell) {
	const variant = $derived(props.variant ?? 'data');
	const align = $derived((props.align ?? 'left') as 'left' | 'center' | 'right');
	const classes = $derived(
		mergeClassNames(
			...TABLE_CLASSES.cell.base,
			...(variant === 'header' ? TABLE_CLASSES.cell.header : TABLE_CLASSES.cell.data),
			...(TABLE_ALIGNMENT_CLASSES[align] ?? TABLE_ALIGNMENT_CLASSES.left),
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const restProps = $derived(ObjectManagerTable.getCellRestProps(props));

	return {
		get variant() {
			return variant;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createTableCellState;
