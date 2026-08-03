import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeLinkCard as RecipeLinkCard } from '$stylist/commerce/interface/recipe/link-card';
import { ObjectManagerLinkCard } from '$stylist/commerce/class/object-manager/link-card';

export function createLinkCardState(props: RecipeLinkCard & HTMLAttributes<HTMLAnchorElement>) {
	const target = $derived(ObjectManagerLinkCard.getTarget(props));
	const rel = $derived(ObjectManagerLinkCard.getRel(props));
	const ariaLabel = $derived(ObjectManagerLinkCard.getAriaLabel(props));

	return {
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
