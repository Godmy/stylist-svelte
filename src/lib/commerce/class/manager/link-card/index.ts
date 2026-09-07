import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeLinkCard as RecipeLinkCard } from '$stylist/commerce/interface/recipe/link-card';

export class ObjectManagerLinkCard {
	static readonly arrowIcon = 'arrow-right';

	static getTarget(props: RecipeLinkCard & HTMLAttributes<HTMLAnchorElement>): string {
		return props.newTab ? '_blank' : '_self';
	}

	static getRel(props: RecipeLinkCard & HTMLAttributes<HTMLAnchorElement>): string | undefined {
		return props.newTab ? 'noopener noreferrer' : undefined;
	}

	static getAriaLabel(props: RecipeLinkCard & HTMLAttributes<HTMLAnchorElement>): string {
		return `Link: ${props.title}${props.description ? `, ${props.description}` : ''}`;
	}
}
