import type { RecipeTableRow as RecipeTableRow } from '$stylist/table/interface/recipe/table-row';
import { ObjectManagerTable } from '$stylist/table/class/object-manager/table';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { TABLE_CLASSES } from '$stylist/table/const/record/table-classes';

export function createTableRowState(props: RecipeTableRow) {
	const striped = $derived(props.striped ?? false);
	const active = $derived(props.active ?? false);
	const classes = $derived(
		mergeClassNames(
			...(striped ? TABLE_CLASSES.row.striped : TABLE_CLASSES.row.normal),
			active && TABLE_CLASSES.row.active,
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const restProps = $derived(ObjectManagerTable.getRowRestProps(props));

	return {
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createTableRowState;
