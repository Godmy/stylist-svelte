import type { ErrorDiagnosticItem } from '$stylist/dashboard/type/struct/error-diagnostic-item';

export function transformErrorReportToItems(report: unknown): ErrorDiagnosticItem[] {
	const payload = report as {
		project?: string;
		file?: string;
		errors?: unknown[];
		errors_by_file?: Record<string, unknown[]>;
		timestamp?: string;
		command?: string;
	};
	const projectName =
		payload.project?.includes('stylist-playground') ? 'stylist-playground' : payload.project?.includes('stylist-svelte') ? 'stylist-svelte' : 'unknown';
	const analyzerName = payload.command?.includes('yarn')
		? projectName === 'stylist-playground'
			? 'yarn_check_stylist_playground'
			: 'yarn_check_stylist_svelte'
		: payload.command?.includes('tsc') && projectName === 'stylist-playground'
			? 'tsc_stylist_playground'
			: payload.command?.includes('tsc')
				? 'tsc_stylist_svelte'
				: 'unknown';
	const directErrors = Array.isArray(payload.errors) && payload.file ? { [payload.file]: payload.errors } : undefined;
	const errorsByFile = directErrors ?? payload.errors_by_file ?? {};

	return Object.entries(errorsByFile).flatMap(([filePath, diagnostics]) =>
		(Array.isArray(diagnostics) ? diagnostics : []).map((diagnostic, index) => {
			const item = diagnostic as {
				tool?: string;
				line?: number;
				column?: number;
				severity?: string;
				code?: string | null;
				message?: string;
			};
			const analyzer =
				item.tool === 'yarn'
					? projectName === 'stylist-playground'
						? 'yarn_check_stylist_playground'
						: 'yarn_check_stylist_svelte'
					: item.tool === 'npx'
						? projectName === 'stylist-playground'
							? 'tsc_stylist_playground'
							: 'tsc_stylist_svelte'
						: analyzerName;

			return {
				id: `${payload.timestamp ?? 'unknown'}:${projectName}:${filePath}:${item.line ?? 0}:${item.column ?? 0}:${index}`,
				project: projectName,
				analyzer,
				severity: item.severity === 'warning' ? 'warning' : item.severity === 'info' ? 'info' : 'error',
				code: item.code ?? undefined,
				path: filePath.replaceAll('\\', '/'),
				line: item.line,
				column: item.column,
				message: item.message ?? '',
				runId: payload.timestamp
			} satisfies ErrorDiagnosticItem;
		})
	);
}
