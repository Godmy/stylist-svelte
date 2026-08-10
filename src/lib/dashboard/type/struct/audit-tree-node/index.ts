export type AuditTreeNode = {
	id: string;
	label: string;
	path: string;
	kind: 'root' | 'domain' | 'cluster' | 'joint' | 'family' | 'file';
	status: 'ok' | 'warning' | 'error' | 'stale' | 'unknown';
	errorCount: number;
	warningCount: number;
	fileCount: number;
	domain?: string;
	cluster?: string;
	joint?: string;
	family?: string;
	sourceReportPath?: string;
	children?: AuditTreeNode[];
};
