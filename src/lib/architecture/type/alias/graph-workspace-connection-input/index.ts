import type { GraphWorkspaceConnection } from '$stylist/architecture/interface/slot/graph-workspace-connection';

export type GraphWorkspaceConnectionInput =
	| readonly [string, string]
	| GraphWorkspaceConnection;
