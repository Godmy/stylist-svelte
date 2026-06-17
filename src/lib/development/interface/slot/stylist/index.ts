import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { StylistCategoryId } from '$stylist/development/type/struct/stylist-category-id';
import type { StylistSelection } from '$stylist/development/type/struct/stylist-selection';

export interface SlotStylist extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
	initialCategory?: StylistCategoryId;
	class?: string;
	onSelectionChange?: (selection: StylistSelection) => void;
}
