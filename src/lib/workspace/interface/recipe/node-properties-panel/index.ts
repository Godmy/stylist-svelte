import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { TokenSize } from '$stylist/layout/type/alias/size';
import type { LiteGraphNodeProperty } from '$stylist/workspace/type/struct/lite-graph-node-property';

export interface RecipeNodePropertiesPanel
	extends ComputeIntersectAll<[SlotTheme, SlotChildren, HTMLAttributes<HTMLElement>]> {
	nodeId?: string;
	title?: string;
	visible?: boolean;
	properties?: readonly LiteGraphNodeProperty[];
	size?: TokenSize;
	compact?: boolean;
	showHeader?: boolean;
	showClose?: boolean;
	editable?: boolean;
	groupByType?: boolean;
	onPropertyChange?: (propertyId: string, value: unknown) => void;
}
