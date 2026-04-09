import type { CategoryCardRecipe } from '$stylist/commerce/interface/recipe/category-card';
import { CategoryCardStyleManager } from '$stylist/commerce/class/style-manager/category-card';

export function createCategoryCardState(props: CategoryCardRecipe) {
	const classes = $derived(
		CategoryCardStyleManager.getBaseClasses(
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const linkWrapperClasses = $derived(CategoryCardStyleManager.getLinkWrapperClasses());
	const headerClasses = $derived(CategoryCardStyleManager.getHeaderClasses());
	const iconContainerClasses = $derived(CategoryCardStyleManager.getIconContainerClasses());
	const contentContainerClasses = $derived(CategoryCardStyleManager.getContentContainerClasses());
	const titleClasses = $derived(CategoryCardStyleManager.getTitleClasses());
	const countBadgeClasses = $derived(CategoryCardStyleManager.getCountBadgeClasses());
	const descriptionClasses = $derived(CategoryCardStyleManager.getDescriptionClasses());
	const examplesContainerClasses = $derived(
		CategoryCardStyleManager.getExamplesContainerClasses()
	);
	const examplesTitleClasses = $derived(CategoryCardStyleManager.getExamplesTitleClasses());
	const examplesListClasses = $derived(CategoryCardStyleManager.getExamplesListClasses());
	const exampleItemClasses = $derived(CategoryCardStyleManager.getExampleItemClasses());
	const ariaLabel = $derived(`${props.title} category with ${props.count} components`);

	return {
		get classes() {
			return classes;
		},
		get linkWrapperClasses() {
			return linkWrapperClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get iconContainerClasses() {
			return iconContainerClasses;
		},
		get contentContainerClasses() {
			return contentContainerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get countBadgeClasses() {
			return countBadgeClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get examplesContainerClasses() {
			return examplesContainerClasses;
		},
		get examplesTitleClasses() {
			return examplesTitleClasses;
		},
		get examplesListClasses() {
			return examplesListClasses;
		},
		get exampleItemClasses() {
			return exampleItemClasses;
		},
		get ariaLabel() {
			return ariaLabel;
		}
	};
}

export default createCategoryCardState;
