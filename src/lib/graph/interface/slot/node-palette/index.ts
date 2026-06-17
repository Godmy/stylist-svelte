import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotNodePaletteItem } from '$stylist/graph/interface/slot/node-palette-item';

export interface SlotNodePalette
	extends StructIntersectAll<[InteractionHTMLAttributes<HTMLDivElement>, SlotChildren]> {
	items?: readonly SlotNodePaletteItem[];
	isOpen?: boolean;
	x?: number;
	y?: number;
	width?: number;
	height?: number;
	searchQuery?: string;
	viewMode?: 'grid' | 'list';
	selectedCategory?: string;
	categories?: readonly string[];
	dismissible?: boolean;
	onSearch?: (query: string) => void;
	onNodeSelect?: (item: SlotNodePaletteItem) => void;
	onClose?: () => void;
	onViewModeChange?: (mode: 'grid' | 'list') => void;
	onCategorySelect?: (category: string) => void;
	class?: string;
}
