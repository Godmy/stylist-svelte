import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { StylistTabItem } from '../stylist-tab-item';

export type StylistTabProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> & {
	class?: string;
	items?: StylistTabItem[];
	selectedId?: string;
	onSelect?: (item: StylistTabItem) => void;
};
