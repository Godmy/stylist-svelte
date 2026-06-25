import type { SlotNodePaletteItem } from '$stylist/architecture/interface/slot/node-palette-item';

export interface SlotNodePalette {
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
