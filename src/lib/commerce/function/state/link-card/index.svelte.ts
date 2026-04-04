import type { LinkCardRecipe as LinkCardRecipe } from '$stylist/commerce/interface/recipe/link-card';
import { LinkCardStyleManager } from '$stylist/commerce/class/style-manager/link-card';
import { ObjectManagerLinkCard } from '$stylist/commerce/class/object-manager/link-card';

export function createLinkCardState(props: LinkCardRecipe) {
	const containerClasses = $derived(
		`${LinkCardStyleManager.getContainerClasses(props.variant)} ${props.class ?? ''}`.trim()
	);
	const contentClasses = $derived(LinkCardStyleManager.getContentClasses());
	const iconContainerClasses = $derived(LinkCardStyleManager.getIconContainerClasses());
	const iconClasses = $derived(LinkCardStyleManager.getIconClasses());
	const textContainerClasses = $derived(LinkCardStyleManager.getTextContainerClasses());
	const titleClasses = $derived(LinkCardStyleManager.getTitleClasses());
	const descriptionClasses = $derived(LinkCardStyleManager.getDescriptionClasses());
	const arrowClasses = $derived(LinkCardStyleManager.getArrowClasses());
	const target = $derived(ObjectManagerLinkCard.getTarget(props));
	const rel = $derived(ObjectManagerLinkCard.getRel(props));
	const ariaLabel = $derived(ObjectManagerLinkCard.getAriaLabel(props));

	return {
		get containerClasses() {
			return containerClasses;
		},
		get contentClasses() {
			return contentClasses;
		},
		get iconContainerClasses() {
			return iconContainerClasses;
		},
		get iconClasses() {
			return iconClasses;
		},
		get textContainerClasses() {
			return textContainerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get arrowClasses() {
			return arrowClasses;
		},
		get target() {
			return target;
		},
		get rel() {
			return rel;
		},
		get ariaLabel() {
			return ariaLabel;
		}
	};
}

export default createLinkCardState;
