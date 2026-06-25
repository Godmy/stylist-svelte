import type { Snippet } from 'svelte';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { LiteGraphNodeProperty } from '$stylist/architecture/type/struct/lite-graph-node-property';
import type { LiteGraphPort } from '$stylist/architecture/type/struct/lite-graph-port';
import type { LiteGraphNodePresentation } from '$stylist/architecture/type/struct/lite-graph-node-presentation';

export interface RecipeLitegraphNode
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	id?: string;
	title?: string;
	x: number;
	y: number;
	type?: 'default' | 'custom' | 'source' | 'processor' | 'output' | 'gateway';
	mode?: string;
	status?: string;
	size?: TokenSize;
	selected?: boolean;
	draggable?: boolean;
	selectable?: boolean;
	resizable?: boolean;
	deletable?: boolean;
	duplicable?: boolean;
	width?: number;
	minWidth?: number;
	height?: number | 'auto';
	color?: string;
	headerColor?: string;
	hideHeader?: boolean;
	hidePorts?: boolean;
	hideProperties?: boolean;
	showActions?: boolean;
	onNodeSelect?: (nodeId?: string) => void;
	onNodeDrag?: (nodeId: string | undefined, position: { x: number; y: number }) => void;
	onNodeResize?: (
		nodeId: string | undefined,
		size: { width?: number; height?: number | 'auto' }
	) => void;
	ondelete?: (nodeId?: string) => void;
	onduplicate?: (nodeId?: string) => void;
	onConnectionStart?: (port: LiteGraphPort, event: MouseEvent) => void;
	onConnectionEnd?: (port: LiteGraphPort, event: MouseEvent) => void;
	onPropertyChange?: (propertyId: string, value: unknown) => void;
	worldDepth?: number;
	cameraDepth?: number;
	presentation?: LiteGraphNodePresentation;
	properties?: LiteGraphNodeProperty[];
	inputs?: LiteGraphPort[];
	outputs?: LiteGraphPort[];
	headerContent?: Snippet;
	bodyContent?: Snippet;
}
