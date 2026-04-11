export type StylistCategoryId = 'architecture' | 'information' | 'interaction';

export type StylistSelection = {
	category: StylistCategoryId;
	option: string;
	selections: Record<StylistCategoryId, string>;
};

export type Props = Omit<import('$stylist/interaction/type/struct/interaction').InteractionHTMLAttributes<HTMLDivElement>, 'class'> & {
	initialCategory?: StylistCategoryId;
	class?: string;
	onSelectionChange?: (selection: StylistSelection) => void;
};
