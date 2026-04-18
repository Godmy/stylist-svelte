import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotSearchSuggestionItem {
	id: string;
	text: string;
	category?: string;
	icon?: string;
	count?: number;
}
