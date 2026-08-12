import type { GraphWorkspaceConnection } from '$stylist/architecture/type/object/graph-workspace-connection';

export type GraphWorkspaceConnectionInput =
	| readonly [string, string]
	| GraphWorkspaceConnection;
