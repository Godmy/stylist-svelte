import type { DataDisplayCardRecipe } from '$stylist/commerce/interface/recipe/data-display-card';
import { ObjectManagerDataDisplayCard } from '$stylist/commerce/class/object-manager/data-display-card';
import { DataDisplayCardStyleManager } from '$stylist/commerce/class/style-manager/data-display-card';

export function createDataDisplayCardState(props: DataDisplayCardRecipe) {
	const containerClasses = $derived(
		DataDisplayCardStyleManager.getContainerClasses(
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const restProps = $derived(ObjectManagerDataDisplayCard.getRestProps({ ...props }));
	const imageClasses = $derived(
		DataDisplayCardStyleManager.getImageClasses(props.imageClass ?? '')
	);
	const bodyClasses = $derived(DataDisplayCardStyleManager.getBodyClasses());
	const headerClasses = $derived(
		DataDisplayCardStyleManager.getHeaderClasses(props.headerClass ?? '')
	);
	const titleClasses = $derived(DataDisplayCardStyleManager.getTitleClasses());
	const subtitleClasses = $derived(DataDisplayCardStyleManager.getSubtitleClasses());
	const descriptionContainerClasses = $derived(
		DataDisplayCardStyleManager.getDescriptionContainerClasses(props.bodyClass ?? '')
	);
	const descriptionClasses = $derived(DataDisplayCardStyleManager.getDescriptionClasses());
	const actionsClasses = $derived(
		DataDisplayCardStyleManager.getActionsClasses(props.actionsClass ?? '')
	);
	const footerClasses = $derived(
		DataDisplayCardStyleManager.getFooterClasses(props.footerClass ?? '')
	);

	return {
		get containerClasses() {
			return containerClasses;
		},
		get restProps() {
			return restProps;
		},
		get imageClasses() {
			return imageClasses;
		},
		get bodyClasses() {
			return bodyClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get subtitleClasses() {
			return subtitleClasses;
		},
		get descriptionContainerClasses() {
			return descriptionContainerClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get actionsClasses() {
			return actionsClasses;
		},
		get footerClasses() {
			return footerClasses;
		}
	};
}

export default createDataDisplayCardState;
