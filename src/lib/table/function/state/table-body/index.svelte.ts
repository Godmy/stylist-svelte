import type { RecipeTableSection as RecipeTableSection } from '$stylist/table/interface/recipe/table-section';
import { ObjectManagerTable } from '$stylist/table/class/object-manager/table';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { TABLE_CLASSES } from '$stylist/table/const/record/table-classes';

export function createTableBodyState(props: RecipeTableSection) {
	const classes = $derived(
		mergeClassNames(
			...TABLE_CLASSES.body,
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const restProps = $derived(ObjectManagerTable.getSectionRestProps(props));

	return {
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createTableBodyState;
