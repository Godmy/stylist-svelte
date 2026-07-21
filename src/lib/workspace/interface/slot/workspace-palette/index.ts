import type { SlotWorkspaceNode } from '$stylist/workspace/interface/slot/workspace-node';

export interface SlotWorkspacePalette {
	items?: readonly SlotWorkspaceNode[];
	categories?: readonly string[];
}
