import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotNodePaletteItem } from '$stylist/science/interface/slot/node-palette-item';

export interface SlotNodePalette extends InteractionHTMLAttributes<HTMLDivElement> {	items?: readonly SlotNodePaletteItem[];	isOpen?: boolean;	x?: number;	y?: number;	width?: number;	height?: number;	searchQuery?: string;	viewMode?: 'grid' | 'list';	selectedCategory?: string;	categories?: readonly string[];	dismissible?: boolean;	onSearch?: (query: string) => void;	onNodeSelect?: (item: SlotNodePaletteItem) => void;	onClose?: () => void;	onViewModeChange?: (mode: 'grid' | 'list') => void;	onCategorySelect?: (category: string) => void;	children?: Snippet;	class?: string;}
