import type { StylistCategoryId } from '$stylist/development/type/struct/stylist-category-id';
import type { StylistSelection } from '$stylist/development/type/struct/stylist-selection';

export type StylistProps = Omit<import('$stylist/interaction/type/struct/interaction').InteractionHTMLAttributes<HTMLDivElement>, 'class'> & {
	initialCategory?: StylistCategoryId;
	class?: string;
	onSelectionChange?: (selection: StylistSelection) => void;
};
