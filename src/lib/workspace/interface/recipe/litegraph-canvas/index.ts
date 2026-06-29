import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';
import type { SlotGraphToolbarItem } from '$stylist/workspace/interface/slot/graph-toolbar-item';
import type { ContractLitegraphPort } from '$stylist/workspace/interface/contract/litegraph-port';
import type { ContractLitegraphNode } from '$stylist/workspace/interface/contract/litegraph-node';
import type { SlotLitegraphConnection } from '$stylist/workspace/interface/slot/litegraph-connection';
import type { GraphGridMode } from '$stylist/architecture/type/alias/graph-grid-mode';

import type { TOKEN_PAN_MODES } from '$stylist/architecture/const/array/pan-mode';
export interface RecipeLitegraphCanvas extends ComputeIntersectAll<[SlotChildren]> {
	nodes?: ContractLitegraphNode[];
	connections?: SlotLitegraphConnection[];
	selectedNodeIds?: string[];
	zoom?: number;
	offset?: { x: number; y: number };
	showGrid?: boolean;
	gridMode?: GraphGridMode;
	panMode?: (typeof TOKEN_PAN_MODES)[number];
	showToolbar?: boolean;
	showMiniMap?: boolean;
	toolbarItems?: SlotGraphToolbarItem[];
	allowAddNodes?: boolean;
	allowDeleteNodes?: boolean;
	allowDuplicateNodes?: boolean;
	onNodeSelect?: (nodeId: string) => void;
	onNodeDrag?: (nodeId: string, position: { x: number; y: number }) => void;
	onNodeDelete?: (nodeId: string) => void;
	onNodeDuplicate?: (nodeId: string) => void;
	onNodeAdd?: (node: ContractLitegraphNode) => void;
	onConnectionStart?: (port: ContractLitegraphPort, event: MouseEvent) => void;
	onConnectionEnd?: (fromPort: ContractLitegraphPort, toPort: ContractLitegraphPort) => void;
	onZoomChange?: (zoom: number) => void;
	onOffsetChange?: (offset: { x: number; y: number }) => void;
	onSave?: () => void;
	onExport?: () => void;
	onImport?: (data: unknown) => void;
	class?: string;
	toolbarContent?: Snippet;
}

