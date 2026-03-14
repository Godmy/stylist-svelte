import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { Snippet } from 'svelte';

export interface SortableGridItem {
	id: string;
	title: string;
	content?: string;
	render?: Snippet;
	data?: unknown;
}

export interface SortableGridProps {
	items: SortableGridItem[];
	class?: string;
	itemClass?: string;
	gridClass?: string;
	onItemsChange?: (items: SortableGridItem[]) => void;
	onItemDragStart?: (item: SortableGridItem) => void;
	onItemDragEnd?: (item: SortableGridItem) => void;
	disabled?: boolean;
	cols?: number;
	gap?: ComponentSize;
	variant?: 'card' | 'minimal';
	size?: ComponentSize;
}



