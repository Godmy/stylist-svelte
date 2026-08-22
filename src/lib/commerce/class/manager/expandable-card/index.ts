import type { RecipeExpandableCard as RecipeExpandableCard } from '$stylist/commerce/interface/recipe/expandable-card';

export class ObjectManagerExpandableCard {
	static readonly chevronIcon = 'chevron-down';
	static readonly detailsId = 'expandable-card-content';

	static toggleExpanded(isExpanded: boolean, disabled: boolean): boolean {
		return disabled ? isExpanded : !isExpanded;
	}

	static getContainerClasses(
		props: Pick<RecipeExpandableCard, 'variant'> & { class?: unknown },
		baseClasses: string,
		themedClasses: string
	): string {
		const className = typeof props.class === 'string' ? props.class : '';
		return `${baseClasses} ${themedClasses} ${className}`.trim();
	}
}
