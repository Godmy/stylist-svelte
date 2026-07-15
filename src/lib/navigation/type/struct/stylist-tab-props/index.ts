import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { StylistTabItem } from '$stylist/navigation/type/struct/stylist-tab-item';

export type StylistTabProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> &
	SlotInteraction & {
		class?: string;
		items?: StylistTabItem[];
		selectedId?: string;
		onSelect?: (item: StylistTabItem) => void;
	};
