import type { SortableGridItem } from '$stylist/control/type/alias/sortable-grid-item';

const gridColsMap = {} as Record<string | number, string>;
const gapMap = {} as Record<string, string>;
export type SortableGridProps = {
	[key: string]: any;
	items?: SortableGridItem[];
	class?: string;
	itemClass?: string;
	cols?: number | keyof typeof gridColsMap;
	gap?: keyof typeof gapMap;
	draggable?: boolean;
	onItemsChange?: (items: SortableGridItem[]) => void;
};
