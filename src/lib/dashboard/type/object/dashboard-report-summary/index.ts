export type DashboardReportSummary = {
	id: string;
	tool: 'auditor' | 'errors' | 'indexation' | 'di';
	title: string;
	status: 'success' | 'warning' | 'failed' | 'running' | 'unknown' | 'no-data';
	startedAt?: string;
	finishedAt?: string;
	updatedAt?: string;
	outputPath?: string;
	readmePath?: string;
	jsonPaths: string[];
	totalFiles: number;
	errorCount: number;
	warningCount: number;
	issueDensity?: number;
	topDomains?: Array<{ label: string; value: number; errorCount: number; warningCount: number }>;
	topRules?: Array<{ label: string; value: number; errorCount: number; warningCount: number }>;
	insightGroups?: Array<{
		label: string;
		description?: string;
		items: Array<{ label: string; value: number; detail?: string; path?: string }>;
	}>;
	serverOnly: boolean;
};
