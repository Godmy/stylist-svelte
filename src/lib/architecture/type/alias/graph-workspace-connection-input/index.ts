import type { GraphWorkspaceConnection } from '$stylist/architecture/type/struct/graph-workspace-connection';

export type GraphWorkspaceConnectionInput =
	| readonly [string, string]
	| GraphWorkspaceConnection;
