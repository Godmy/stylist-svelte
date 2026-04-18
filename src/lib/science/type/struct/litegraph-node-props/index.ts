import type { Snippet } from 'svelte';
import type { LitegraphNodeRecipe } from '$stylist/science/interface/recipe/litegraph-node';
import type { LiteGraphPort } from '$stylist/science/type/struct/litegraph-port';

export type LitegraphNodeProps = LitegraphNodeRecipe & {
	selectable?: boolean;
	resizable?: boolean;
	deletable?: boolean;
	duplicable?: boolean;
	showActions?: boolean;
	onNodeSelect?: (nodeId?: string) => void;
	onNodeDrag?: (nodeId: string | undefined, position: { x: number; y: number }) => void;
	onNodeResize?: (nodeId: string | undefined, size: { width?: number; height?: number | 'auto' }) => void;
	ondelete?: (nodeId?: string) => void;
	onduplicate?: (nodeId?: string) => void;
	onConnectionStart?: (port: LiteGraphPort, event: MouseEvent) => void;
	onConnectionEnd?: (port: LiteGraphPort, event: MouseEvent) => void;
	onPropertyChange?: (propertyId: string, value: unknown) => void;
	headerContent?: Snippet;
	bodyContent?: Snippet;
};
