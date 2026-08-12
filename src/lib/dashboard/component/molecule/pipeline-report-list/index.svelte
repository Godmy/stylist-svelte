<script lang="ts">
	import type { DashboardReportSummary } from '$stylist/dashboard/type/object/dashboard-report-summary';
	import DashboardStatusPill from '$stylist/dashboard/component/atom/dashboard-status-pill/index.svelte';

	let {
		reports = [],
		activeReportId,
		filter = '',
		loading = false,
		emptyLabel = 'No pipeline reports found.',
		class: className = '',
		onSelect,
		onOpenReport
	}: {
		reports?: DashboardReportSummary[];
		activeReportId?: string;
		filter?: string;
		loading?: boolean;
		emptyLabel?: string;
		class?: string;
		onSelect?: (report: DashboardReportSummary) => void;
		onOpenReport?: (report: DashboardReportSummary) => void;
	} = $props();

	const filteredReports = $derived(
		reports.filter((report) => {
			const query = filter.trim().toLowerCase();
			if (!query) {
				return true;
			}

			return `${report.tool} ${report.title} ${report.outputPath ?? ''} ${report.readmePath ?? ''}`.toLowerCase().includes(query);
		})
	);
</script>

<section class="c-pipeline-report-list {className}" aria-label="Pipeline reports">
	{#if loading}
		<p class="c-pipeline-report-list__state">Loading pipeline reports...</p>
	{:else if filteredReports.length === 0}
		<p class="c-pipeline-report-list__state">{emptyLabel}</p>
	{:else}
		{#each filteredReports as report}
			<article
				class="c-pipeline-report-list__item"
				class:c-pipeline-report-list__item--active={report.id === activeReportId}
			>
				<button type="button" class="c-pipeline-report-list__select" onclick={() => onSelect?.(report)}>
					<span class="c-pipeline-report-list__header">
						<span class="c-pipeline-report-list__title">{report.title}</span>
						<DashboardStatusPill
							status={report.status === 'success' ? 'ok' : report.status === 'failed' ? 'error' : report.status}
							label={report.status}
							compact
						/>
					</span>
					<span class="c-pipeline-report-list__meta">
						<span>{report.tool}</span>
						<span>{report.updatedAt ?? report.finishedAt ?? report.startedAt ?? 'no timestamp'}</span>
					</span>
					<span class="c-pipeline-report-list__path">{report.outputPath ?? report.readmePath ?? 'server output path pending'}</span>
				</button>
				<button
					type="button"
					class="c-pipeline-report-list__open"
					disabled={!onOpenReport || !report.readmePath}
					onclick={() => onOpenReport?.(report)}
				>
					Open
				</button>
			</article>
		{/each}
	{/if}
</section>

<style>
	.c-pipeline-report-list {
		box-sizing: border-box;
		display: grid;
		gap: 0.5rem;
		min-width: 0;
	}

	.c-pipeline-report-list__state {
		box-sizing: border-box;
		margin: 0;
		min-height: 5rem;
		padding: 1rem;
		border: 1px dashed color-mix(in srgb, var(--color-border-primary) 84%, transparent);
		border-radius: 0.5rem;
		color: var(--color-text-secondary);
	}

	.c-pipeline-report-list__item {
		box-sizing: border-box;
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 0.5rem;
		align-items: center;
		min-width: 0;
		padding: 0.55rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
	}

	.c-pipeline-report-list__item--active {
		border-color: color-mix(in srgb, var(--color-primary-500) 38%, var(--color-border-primary));
	}

	.c-pipeline-report-list__select {
		display: grid;
		gap: 0.32rem;
		min-width: 0;
		padding: 0;
		border: 0;
		background: transparent;
		color: inherit;
		font: inherit;
		text-align: left;
		cursor: pointer;
	}

	.c-pipeline-report-list__header,
	.c-pipeline-report-list__meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.65rem;
		min-width: 0;
	}

	.c-pipeline-report-list__title {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.86rem;
		font-weight: 750;
	}

	.c-pipeline-report-list__meta,
	.c-pipeline-report-list__path {
		font-size: 0.72rem;
		color: var(--color-text-secondary);
	}

	.c-pipeline-report-list__path {
		min-width: 0;
		overflow-wrap: anywhere;
		font-family: var(--font-family-mono, ui-monospace, monospace);
		line-height: 1.35;
	}

	.c-pipeline-report-list__open {
		min-width: 4rem;
		min-height: 2rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.45rem;
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
		font: inherit;
		font-size: 0.75rem;
		font-weight: 700;
	}

	.c-pipeline-report-list__open:disabled {
		cursor: not-allowed;
		opacity: 0.55;
	}
</style>
