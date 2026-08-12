import type { HTMLAttributes } from 'svelte/elements';
import type { StylistTabItem } from '$stylist/navigation/type/object/stylist-tab-item';

export type StylistTabProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
		class?: string;
		items?: StylistTabItem[];
		selectedId?: string;
		onSelect?: (item: StylistTabItem) => void;
	};
