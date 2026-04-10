import type { CardWithImageRecipe } from '$stylist/commerce/interface/recipe/card-with-image';
import { CardWithImageStyleManager } from '$stylist/commerce/class/style-manager/card-with-image';
import { ObjectManagerCardWithImage } from '$stylist/commerce/class/object-manager/card-with-image';

export function createCardWithImageState(props: CardWithImageRecipe) {
	const containerClasses = $derived(
		CardWithImageStyleManager.getContainerClasses(typeof props.class === 'string' ? props.class : undefined)
	);
	const imageClasses = $derived(
		CardWithImageStyleManager.getImageClasses(props.imageClass ?? 'h-48 w-full object-cover')
	);
	const bodyClasses = $derived(CardWithImageStyleManager.getBodyClasses(props.bodyClass));
	const headerClasses = $derived(CardWithImageStyleManager.getHeaderClasses(props.headerClass));
	const titleClasses = $derived(CardWithImageStyleManager.getTitleClasses());
	const subtitleClasses = $derived(CardWithImageStyleManager.getSubtitleClasses());
	const descriptionClasses = $derived(CardWithImageStyleManager.getDescriptionClasses());
	const restProps = $derived(ObjectManagerCardWithImage.getRestProps(props as Record<string, unknown>));

	return {
		get containerClasses() { return containerClasses; },
		get imageClasses() { return imageClasses; },
		get bodyClasses() { return bodyClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get subtitleClasses() { return subtitleClasses; },
		get descriptionClasses() { return descriptionClasses; },
		get restProps() { return restProps; }
	};
}

export default createCardWithImageState;
