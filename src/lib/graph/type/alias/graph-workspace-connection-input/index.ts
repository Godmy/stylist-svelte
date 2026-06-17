import type { GraphWorkspaceConnection } from '$stylist/graph/type/struct/graph-workspace-connection';

export type GraphWorkspaceConnectionInput =
	| readonly [string, string]
	| GraphWorkspaceConnection;
