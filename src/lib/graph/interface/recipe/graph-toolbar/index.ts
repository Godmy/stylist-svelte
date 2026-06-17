import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { GraphToolbarItem } from '$stylist/graph/type/struct/graph-toolbar-item';

/**
 * RecipeGraphToolbar — панель инструментов графа.
 */
export interface RecipeGraphToolbar
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	label?: string;
	size?: TokenSize;
	orientation?: 'horizontal' | 'vertical';
	compact?: boolean;
	showTooltips?: boolean;
	items?: GraphToolbarItem[];
	onItemClick?: (id: string) => void;
	onValueChange?: (id: string, value: unknown) => void;
}
