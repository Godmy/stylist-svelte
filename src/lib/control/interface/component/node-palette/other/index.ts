import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface NodePaletteItem {
	id: string;
	type: string;
	title: string;
	description?: string;
	icon?: string;
	color?: string;
	category: string;
}

export interface NodePaletteProps extends InteractionHTMLAttributes<HTMLDivElement> {
	items?: readonly NodePaletteItem[];
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
	onNodeSelect?: (item: NodePaletteItem) => void;
	onClose?: () => void;
	onViewModeChange?: (mode: 'grid' | 'list') => void;
	onCategorySelect?: (category: string) => void;
	children?: Snippet;
	class?: string;
}
