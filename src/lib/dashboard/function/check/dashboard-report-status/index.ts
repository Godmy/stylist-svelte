export function checkDashboardReportStatus(summary?: {
	status?: string;
	success?: boolean;
	errorCount?: number;
	warningCount?: number;
	totalErrors?: number;
	totalWarnings?: number;
	total_issues?: number;
	updatedAt?: string;
	timestamp?: string;
} | null): 'ok' | 'warning' | 'error' | 'running' | 'stale' | 'unknown' {
	if (!summary) {
		return 'unknown';
	}

	if (summary.status === 'running') {
		return 'running';
	}

	if (summary.status === 'stale') {
		return 'stale';
	}

	const errors = summary.errorCount ?? summary.totalErrors ?? (summary.success === false ? 1 : 0);
	const warnings = summary.warningCount ?? summary.totalWarnings ?? 0;
	const issues = summary.total_issues ?? errors + warnings;

	if (errors > 0 || summary.status === 'failed') {
		return 'error';
	}

	if (warnings > 0 || issues > 0 || summary.status === 'warning') {
		return 'warning';
	}

	if (summary.success === true || summary.status === 'success' || summary.status === 'ok' || summary.status === 'no-data') {
		return 'ok';
	}

	return 'unknown';
}
