import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { SlotSortableGridItem } from '$stylist/layout/interface/slot/sortable-grid-item';
export interface SortableGridProps extends LayoutHTMLAttributes<HTMLDivElement> {
	items?: SlotSortableGridItem[];
	class?: string;
	itemClass?: string;
	cols?: number | string;
	gap?: string;
	draggable?: boolean;
	disabled?: boolean;
	variant?: 'card' | 'minimal';
	onItemsChange?: (items: SlotSortableGridItem[]) => void;
}
