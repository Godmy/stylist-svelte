import type { RecipeDataDisplayCard } from '$stylist/commerce/interface/recipe/data-display-card';
import { ObjectManagerDataDisplayCard } from '$stylist/commerce/class/object-manager/data-display-card';
export function createDataDisplayCardState(props: RecipeDataDisplayCard) {
	const restProps = $derived(ObjectManagerDataDisplayCard.getRestProps({ ...props }));

	return {
		get restProps() {
			return restProps;
		}
	};
}

export default createDataDisplayCardState;
