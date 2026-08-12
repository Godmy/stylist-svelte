<script lang="ts">
	import type { DashboardReportSummary } from '$stylist/dashboard/type/object/dashboard-report-summary';
	import PipelineReportList from '$stylist/dashboard/component/molecule/pipeline-report-list/index.svelte';
	import DashboardCountTile from '$stylist/dashboard/component/atom/dashboard-count-tile/index.svelte';
	import DashboardStatusPill from '$stylist/dashboard/component/atom/dashboard-status-pill/index.svelte';
	import MetricBarsCard from '$stylist/chart/component/molecule/metric-bars-card/index.svelte';

	let {
		reports = [],
		selectedReportId,
		summaryByTool,
		loading = false,
		class: className = '',
		onSelectReport,
		onOpenReport
	}: {
		reports?: DashboardReportSummary[];
		selectedReportId?: string;
		summaryByTool?: Partial<Record<DashboardReportSummary['tool'], DashboardReportSummary>>;
		trend?: unknown;
		loading?: boolean;
		class?: string;
		onSelectReport?: (report: DashboardReportSummary) => void;
		onOpenReport?: (report: DashboardReportSummary) => void;
		onCompare?: (left: DashboardReportSummary, right: DashboardReportSummary) => void;
	} = $props();

	let localSelectedId = $state<string | undefined>(selectedReportId);
	let filter = $state('');

	const selectedReport = $derived(reports.find((report) => report.id === localSelectedId) ?? reports[0]);
	const totalErrors = $derived(reports.reduce((total, report) => total + report.errorCount, 0));
	const totalWarnings = $derived(reports.reduce((total, report) => total + report.warningCount, 0));
	const selectedIssueDensity = $derived(
		selectedReport?.issueDensity === undefined ? 'unknown' : `${Math.round(selectedReport.issueDensity * 100)}%`
	);
	const statusBars = $derived(resolveStatusBars(reports));
	const toolRows = $derived(
		(['auditor', 'errors', 'indexation', 'di'] as const).map((tool) => summaryByTool?.[tool] ?? reports.find((report) => report.tool === tool))
	);

	function handleSelect(report: DashboardReportSummary) {
		localSelectedId = report.id;
		onSelectReport?.(report);
	}

	function resolveStatusBars(sourceReports: DashboardReportSummary[]) {
		const statuses = ['success', 'warning', 'failed', 'running', 'no-data', 'unknown'] as const;
		const total = Math.max(sourceReports.length, 1);
		return statuses
			.map((status) => {
				const value = sourceReports.filter((report) => report.status === status).length;
				return {
					label: status,
					value,
					valueLabel: value,
					percentage: Math.round((value / total) * 100)
				};
			})
			.filter((bar) => bar.value > 0);
	}
</script>

<section class="c-pipeline-reports-panel {className}" aria-label="Pipeline reports panel">
	<header class="c-pipeline-reports-panel__header">
		<div>
			<p class="c-pipeline-reports-panel__eyebrow">Pipeline Reports</p>
			<h2 class="c-pipeline-reports-panel__title">Latest internal runs</h2>
		</div>
		<DashboardStatusPill status={totalErrors > 0 ? 'error' : totalWarnings > 0 ? 'warning' : 'ok'} label={`${reports.length} runs`} />
	</header>

	<div class="c-pipeline-reports-panel__summary">
		<DashboardCountTile label="Runs" value={reports.length} status={reports.length > 0 ? 'ok' : 'unknown'} />
		<DashboardCountTile label="Errors" value={totalErrors} status={totalErrors > 0 ? 'error' : 'ok'} />
		<DashboardCountTile label="Warnings" value={totalWarnings} status={totalWarnings > 0 ? 'warning' : 'ok'} />
		<MetricBarsCard title="Status distribution" total={`${reports.length} runs`} bars={statusBars} />
	</div>

	<div class="c-pipeline-reports-panel__toolbar">
		<input
			class="c-pipeline-reports-panel__input"
			type="search"
			bind:value={filter}
			placeholder="Filter report, tool or path"
		/>
	</div>

	<div class="c-pipeline-reports-panel__body">
		<PipelineReportList
			{reports}
			activeReportId={localSelectedId}
			{filter}
			{loading}
			onSelect={handleSelect}
			{onOpenReport}
		/>

		<aside class="c-pipeline-reports-panel__detail" aria-label="Selected pipeline report">
			{#if selectedReport}
				<p class="c-pipeline-reports-panel__eyebrow">{selectedReport.tool}</p>
				<h3 class="c-pipeline-reports-panel__detail-title">{selectedReport.title}</h3>
				<DashboardStatusPill status={selectedReport.status === 'success' ? 'ok' : selectedReport.status === 'failed' ? 'error' : selectedReport.status} label={selectedReport.status} />
				<dl class="c-pipeline-reports-panel__properties">
					<div><dt>Updated</dt><dd>{selectedReport.updatedAt ?? selectedReport.finishedAt ?? selectedReport.startedAt ?? 'unknown'}</dd></div>
					<div><dt>Errors</dt><dd>{selectedReport.errorCount}</dd></div>
					<div><dt>Warnings</dt><dd>{selectedReport.warningCount}</dd></div>
					<div><dt>Files</dt><dd>{selectedReport.totalFiles}</dd></div>
					<div><dt>Density</dt><dd>{selectedIssueDensity}</dd></div>
					<div><dt>Output</dt><dd>{selectedReport.outputPath ?? 'server output path pending'}</dd></div>
					<div><dt>README</dt><dd>{selectedReport.readmePath ?? 'not available'}</dd></div>
				</dl>

				{#if (selectedReport.topDomains?.length ?? 0) > 0}
					<section class="c-pipeline-reports-panel__ranking" aria-label="Top affected domains">
						<h4>Top affected domains</h4>
						{#each selectedReport.topDomains ?? [] as row}
							<div>
								<span>{row.label}</span>
								<strong>{row.value}</strong>
								<small>{row.errorCount} errors / {row.warningCount} warnings</small>
							</div>
						{/each}
					</section>
				{/if}

				{#if (selectedReport.topRules?.length ?? 0) > 0}
					<section class="c-pipeline-reports-panel__ranking" aria-label="Top audit rules">
						<h4>Top audit rules</h4>
						{#each selectedReport.topRules ?? [] as row}
							<div>
								<span>{row.label}</span>
								<strong>{row.value}</strong>
								<small>{row.errorCount} errors / {row.warningCount} warnings</small>
							</div>
						{/each}
					</section>
				{/if}

				{#each selectedReport.insightGroups ?? [] as group}
					<section class="c-pipeline-reports-panel__ranking" aria-label={group.label}>
						<h4>{group.label}</h4>
						{#if group.description}
							<p>{group.description}</p>
						{/if}
						{#each group.items as row}
							<div>
								<span>{row.label}</span>
								<strong>{row.value}</strong>
								<small>{row.detail ?? row.path ?? 'detail pending'}</small>
							</div>
						{/each}
					</section>
				{/each}
			{:else}
				<p class="c-pipeline-reports-panel__state">No report selected.</p>
			{/if}
		</aside>
	</div>

	<div class="c-pipeline-reports-panel__tools" aria-label="Tool summaries">
		{#each toolRows as report}
			{#if report}
				<article>
					<span>{report.tool}</span>
					<DashboardStatusPill status={report.status === 'success' ? 'ok' : report.status === 'failed' ? 'error' : report.status} label={report.status} compact />
				</article>
			{/if}
		{/each}
	</div>
</section>

<style>
	.c-pipeline-reports-panel,
	.c-pipeline-reports-panel__body {
		display: grid;
		gap: 0.75rem;
		min-width: 0;
	}

	.c-pipeline-reports-panel__header {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
		align-items: center;
	}

	.c-pipeline-reports-panel__eyebrow,
	.c-pipeline-reports-panel__title,
	.c-pipeline-reports-panel__detail-title,
	.c-pipeline-reports-panel__state {
		margin: 0;
	}

	.c-pipeline-reports-panel__eyebrow {
		font-size: 0.72rem;
		font-weight: 800;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.c-pipeline-reports-panel__title,
	.c-pipeline-reports-panel__detail-title {
		margin-top: 0.2rem;
		font-size: 1rem;
		line-height: 1.2;
	}

	.c-pipeline-reports-panel__summary {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(16rem, 1.5fr);
		gap: 0.6rem;
	}

	.c-pipeline-reports-panel__summary :global(.c-dashboard-count-tile) {
		min-width: 0;
		min-height: 5.8rem;
		padding: 0.65rem;
	}

	.c-pipeline-reports-panel__summary :global(.metric-bars-card) {
		min-width: 0;
		padding: 0.85rem;
		border-radius: 0.5rem;
		box-shadow: none;
	}

	.c-pipeline-reports-panel__input {
		box-sizing: border-box;
		width: 100%;
		min-height: 2.35rem;
		padding: 0.45rem 0.7rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		font: inherit;
		font-size: 0.82rem;
	}

	.c-pipeline-reports-panel__body {
		grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.75fr);
		align-items: start;
	}

	.c-pipeline-reports-panel__detail,
	.c-pipeline-reports-panel__tools article {
		box-sizing: border-box;
		min-width: 0;
		padding: 0.75rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
	}

	.c-pipeline-reports-panel__properties {
		display: grid;
		gap: 0.45rem;
		margin: 0.75rem 0 0;
	}

	.c-pipeline-reports-panel__ranking {
		display: grid;
		gap: 0.4rem;
		margin-top: 0.85rem;
	}

	.c-pipeline-reports-panel__ranking h4,
	.c-pipeline-reports-panel__ranking p {
		margin: 0;
	}

	.c-pipeline-reports-panel__ranking h4 {
		font-size: 0.82rem;
		line-height: 1.2;
	}

	.c-pipeline-reports-panel__ranking p {
		color: var(--color-text-secondary);
		font-size: 0.74rem;
		line-height: 1.35;
	}

	.c-pipeline-reports-panel__ranking div {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 0.15rem 0.55rem;
		min-width: 0;
		padding: 0.45rem 0;
		border-top: 1px solid color-mix(in srgb, var(--color-border-primary) 70%, transparent);
	}

	.c-pipeline-reports-panel__ranking span,
	.c-pipeline-reports-panel__ranking small {
		min-width: 0;
		overflow-wrap: anywhere;
	}

	.c-pipeline-reports-panel__ranking span {
		font-size: 0.78rem;
		font-weight: 700;
	}

	.c-pipeline-reports-panel__ranking strong {
		font-size: 0.8rem;
	}

	.c-pipeline-reports-panel__ranking small {
		grid-column: 1 / -1;
		color: var(--color-text-secondary);
		font-size: 0.72rem;
	}

	.c-pipeline-reports-panel__properties div {
		display: grid;
		grid-template-columns: 5rem minmax(0, 1fr);
		gap: 0.75rem;
		min-width: 0;
	}

	.c-pipeline-reports-panel__properties dt,
	.c-pipeline-reports-panel__properties dd {
		margin: 0;
		min-width: 0;
		overflow-wrap: anywhere;
		font-size: 0.8rem;
	}

	.c-pipeline-reports-panel__properties dt {
		color: var(--color-text-secondary);
	}

	.c-pipeline-reports-panel__properties dd {
		font-family: var(--font-family-mono, ui-monospace, monospace);
	}

	.c-pipeline-reports-panel__tools {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 0.55rem;
	}

	.c-pipeline-reports-panel__tools article {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		font-size: 0.8rem;
		font-weight: 700;
	}

	@media (max-width: 980px) {
		.c-pipeline-reports-panel__summary,
		.c-pipeline-reports-panel__body,
		.c-pipeline-reports-panel__tools {
			grid-template-columns: 1fr;
		}
	}
</style>
