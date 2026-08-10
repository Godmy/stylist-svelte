export type ErrorDiagnosticItem = {
	id: string;
	project: 'stylist-svelte' | 'stylist-playground' | 'unknown';
	analyzer:
		| 'tsc_stylist_svelte'
		| 'tsc_stylist_playground'
		| 'yarn_check_stylist_svelte'
		| 'yarn_check_stylist_playground'
		| 'unknown';
	severity: 'error' | 'warning' | 'info';
	code?: string;
	path: string;
	line?: number;
	column?: number;
	message: string;
	isNew?: boolean;
	runId?: string;
};
