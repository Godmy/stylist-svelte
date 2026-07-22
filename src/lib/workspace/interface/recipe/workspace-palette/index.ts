import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotWorkspacePalette } from '$stylist/workspace/interface/slot/workspace-palette';
import type { SlotWorkspaceNode } from '$stylist/workspace/interface/slot/workspace-node';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWorkspacePalette
	extends ComputeIntersectAll<[SlotWorkspacePalette, HTMLAttributes<HTMLDivElement>, SlotChildren]> {
	isOpen?: boolean;
	x?: number;
	y?: number;
	width?: number;
	height?: number;
	searchQuery?: string;
	viewMode?: 'grid' | 'list';
	selectedCategory?: string;
	dismissible?: boolean;
	onSearch?: (query: string) => void;
	onNodeSelect?: (item: SlotWorkspaceNode) => void;
	onClose?: () => void;
	onViewModeChange?: (mode: 'grid' | 'list') => void;
	onCategorySelect?: (category: string) => void;
	class?: string;
}
