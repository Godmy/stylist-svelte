import type { RecipeRow } from '$stylist/table/interface/recipe/row';
import { ObjectManagerTable } from '$stylist/table/class/object-manager/table';

export function createRowState(props: RecipeRow) {
	const striped = $derived(props.striped ?? false);
	const active = $derived(props.active ?? false);
	const hoverable = $derived(props.hoverable ?? false);
	const restProps = $derived(ObjectManagerTable.getRowRestProps(props));

	return {
		get striped() { return striped; },
		get active() { return active; },
		get hoverable() { return hoverable; },
		get restProps() { return restProps; }
	};
}
