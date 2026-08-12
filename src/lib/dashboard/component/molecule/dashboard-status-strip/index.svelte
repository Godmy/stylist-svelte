<script lang="ts">
	import type { DashboardPipelineStatus } from '$stylist/dashboard/type/object/dashboard-pipeline-status';
	import type { DashboardReportSummary } from '$stylist/dashboard/type/object/dashboard-report-summary';
	import DashboardStatusPill from '$stylist/dashboard/component/atom/dashboard-status-pill/index.svelte';
	import DashboardCountTile from '$stylist/dashboard/component/atom/dashboard-count-tile/index.svelte';
	import DashboardRunButton from '$stylist/dashboard/component/atom/dashboard-run-button/index.svelte';

	let {
		pipeline,
		steps,
		updatedAt,
		busy = false,
		class: className = '',
		onRefresh
	}: {
		pipeline: DashboardPipelineStatus;
		steps?: DashboardReportSummary[];
		updatedAt?: string;
		busy?: boolean;
		class?: string;
		onRefresh?: () => void;
	} = $props();

	const visibleSteps = $derived(steps ?? pipeline.steps ?? []);
	const displayUpdatedAt = $derived(updatedAt ?? pipeline.updatedAt ?? 'not loaded');
</script>

<section class="c-dashboard-status-strip {className}" aria-label="Dashboard pipeline status">
	<div class="c-dashboard-status-strip__summary">
		<div class="c-dashboard-status-strip__title-row">
			<h2 class="c-dashboard-status-strip__title">Pipeline</h2>
			<DashboardStatusPill status={busy ? 'running' : pipeline.status} label={busy ? 'running' : pipeline.status} />
		</div>
		<p class="c-dashboard-status-strip__timestamp">Updated: {displayUpdatedAt}</p>
	</div>

	<div class="c-dashboard-status-strip__metrics">
		<DashboardCountTile label="Errors" value={pipeline.errorCount} status={pipeline.errorCount > 0 ? 'error' : 'ok'} />
		<DashboardCountTile
			label="Warnings"
			value={pipeline.warningCount}
			status={pipeline.warningCount > 0 ? 'warning' : 'ok'}
		/>
		<DashboardCountTile label="Files" value={pipeline.totalFiles} status={pipeline.totalFiles > 0 ? 'ok' : 'unknown'} />
	</div>

	<div class="c-dashboard-status-strip__steps">
		{#each visibleSteps as step}
			<DashboardStatusPill status={step.status === 'success' ? 'ok' : step.status === 'failed' ? 'error' : step.status} label={step.title} />
		{/each}
	</div>

	<DashboardRunButton
		label="Refresh"
		status={busy ? 'running' : 'idle'}
		pending={busy}
		disabled={!onRefresh}
		onRun={onRefresh}
	/>
</section>

<style>
	.c-dashboard-status-strip {
		box-sizing: border-box;
		display: grid;
		grid-template-columns: minmax(10rem, 1fr) minmax(20rem, 2fr) minmax(12rem, 1fr) auto;
		gap: 0.75rem;
		align-items: center;
		min-width: 0;
		padding: 0.75rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
	}

	.c-dashboard-status-strip__summary,
	.c-dashboard-status-strip__steps {
		min-width: 0;
	}

	.c-dashboard-status-strip__title-row {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		min-width: 0;
	}

	.c-dashboard-status-strip__title {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.15;
	}

	.c-dashboard-status-strip__timestamp {
		margin: 0.25rem 0 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.c-dashboard-status-strip__metrics {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.55rem;
		min-width: 0;
	}

	.c-dashboard-status-strip__metrics :global(.c-dashboard-count-tile) {
		min-width: 0;
		min-height: 4.25rem;
		padding: 0.55rem;
	}

	.c-dashboard-status-strip__metrics :global(.c-dashboard-count-tile__value) {
		font-size: 1.2rem;
	}

	.c-dashboard-status-strip__steps {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	@media (max-width: 1020px) {
		.c-dashboard-status-strip {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 560px) {
		.c-dashboard-status-strip__metrics {
			grid-template-columns: 1fr;
		}
	}
</style>
