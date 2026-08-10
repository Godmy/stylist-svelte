import type { DashboardReportSummary } from '$stylist/dashboard/type/struct/dashboard-report-summary';

export const DASHBOARD_PIPELINE_STEP = [
	{
		id: 'auditor-latest',
		tool: 'auditor',
		title: 'Auditor',
		status: 'unknown',
		outputPath: 'stylist/auditor/output/<latest>',
		readmePath: 'stylist/auditor/output/<latest>/README.md',
		jsonPaths: ['stylist/auditor/output/<latest>/json/consolidated.json'],
		totalFiles: 0,
		errorCount: 0,
		warningCount: 0,
		serverOnly: true
	},
	{
		id: 'di-current',
		tool: 'di',
		title: 'Dependency Inventory',
		status: 'unknown',
		outputPath: 'stylist/di/output',
		jsonPaths: ['stylist/di/output/step-2-dependencies.json', 'stylist/di/output/step-6-crossdomain-links.json'],
		totalFiles: 0,
		errorCount: 0,
		warningCount: 0,
		serverOnly: true
	},
	{
		id: 'indexation-current',
		tool: 'indexation',
		title: 'Indexation',
		status: 'unknown',
		outputPath: 'stylist/indexation/output',
		readmePath: 'stylist/indexation/output/result.md',
		jsonPaths: ['stylist/indexation/output/stylist-svelte.json', 'stylist/indexation/output/stylist-svelte-components.json'],
		totalFiles: 0,
		errorCount: 0,
		warningCount: 0,
		serverOnly: true
	},
	{
		id: 'errors-latest',
		tool: 'errors',
		title: 'Errors',
		status: 'unknown',
		outputPath: 'stylist/errors/output/<latest>',
		readmePath: 'stylist/errors/output/<latest>/README.md',
		jsonPaths: ['stylist/errors/npx/tsc_stylist_svelte.json', 'stylist/errors/yarn/yarn_check_stylist_svelte.json'],
		totalFiles: 0,
		errorCount: 0,
		warningCount: 0,
		serverOnly: true
	}
] satisfies readonly DashboardReportSummary[];
