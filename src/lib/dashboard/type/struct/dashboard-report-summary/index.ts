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
	serverOnly: boolean;
};
