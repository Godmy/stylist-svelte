import type { ExpandableCardRecipe as ExpandableCardRecipe } from '$stylist/commerce/interface/recipe/expandable-card';

export class ObjectManagerExpandableCard {
	static readonly chevronIcon = 'chevron-down';
	static readonly detailsId = 'expandable-card-content';

	static toggleExpanded(isExpanded: boolean, disabled: boolean): boolean {
		return disabled ? isExpanded : !isExpanded;
	}

	static getContainerClasses(
		props: Pick<ExpandableCardRecipe, 'variant' | 'class'>,
		baseClasses: string,
		themedClasses: string
	): string {
		return `${baseClasses} ${themedClasses} ${props.class ?? ''}`.trim();
	}
}
