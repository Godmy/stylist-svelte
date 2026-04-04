import type { LinkCardRecipe as LinkCardRecipe } from '$stylist/commerce/interface/recipe/link-card';

export class ObjectManagerLinkCard {
	static readonly arrowIcon = 'arrow-right';

	static getTarget(props: LinkCardRecipe): string {
		return props.newTab ? '_blank' : '_self';
	}

	static getRel(props: LinkCardRecipe): string | undefined {
		return props.newTab ? 'noopener noreferrer' : undefined;
	}

	static getAriaLabel(props: LinkCardRecipe): string {
		return `Link: ${props.title}${props.description ? `, ${props.description}` : ''}`;
	}
}
