import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenSize } from '$stylist/layout/type/alias/size';
import type { GraphToolbarItem } from '$stylist/workspace/type/struct/graph-toolbar-item';

export interface RecipeGraphToolbar
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	label?: string;
	size?: TokenSize;
	orientation?: 'horizontal' | 'vertical';
	compact?: boolean;
	showTooltips?: boolean;
	items?: GraphToolbarItem[];
	onItemClick?: (id: string) => void;
	onValueChange?: (id: string, value: unknown) => void;
}
