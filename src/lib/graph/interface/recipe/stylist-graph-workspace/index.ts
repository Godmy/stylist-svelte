import type { GraphWorkspaceNode } from '$stylist/graph/type/struct/graph-workspace-node';
import type { GraphWorkspaceConnectionInput } from '$stylist/graph/type/alias/graph-workspace-connection-input';
import type { GraphWorkspaceBounds } from '$stylist/graph/type/struct/graph-workspace-bounds';

export interface RecipeStylistGraphWorkspace {
	initialNodes?: readonly GraphWorkspaceNode[];
	initialConnections?: readonly GraphWorkspaceConnectionInput[];
	worldBounds?: GraphWorkspaceBounds;
}
