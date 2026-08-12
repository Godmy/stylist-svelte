<script lang="ts">
	import type { RecipeIndexationPanel } from '$stylist/dashboard/interface/recipe/indexation-panel';
	import DashboardCountTile from '$stylist/dashboard/component/atom/dashboard-count-tile/index.svelte';
	import DashboardRunButton from '$stylist/dashboard/component/atom/dashboard-run-button/index.svelte';
	import DashboardStatusPill from '$stylist/dashboard/component/atom/dashboard-status-pill/index.svelte';
	import PipelineReportList from '$stylist/dashboard/component/molecule/pipeline-report-list/index.svelte';
	import MetricBarsCard from '$stylist/chart/component/molecule/metric-bars-card/index.svelte';

	let {
		summary,
		steps = [],
		changedIndexes = summary?.changedIndexPaths ?? [],
		affectedDomains = summary?.affectedDomains ?? [],
		canRun = false,
		running = false,
		onRun,
		onOpenOutput,
		onSelectChangedFile,
		class: className = ''
	}: Partial<RecipeIndexationPanel> = $props();

	const fileTypeBars = $derived(
		(summary?.processedFileTypes ?? []).map((fileType) => ({
			label: fileType,
			value: 1,
			valueLabel: fileType,
			percentage: Math.round(100 / Math.max(summary?.processedFileTypes.length ?? 1, 1))
		}))
	);
</script>

<section class="c-indexation-panel {className}" aria-label="Indexation panel">
	<header class="c-indexation-panel__header">
		<div>
			<p class="c-indexation-panel__eyebrow">Indexation</p>
			<h2 class="c-indexation-panel__title">Generated barrel status</h2>
		</div>
		<DashboardStatusPill status={summary?.status === 'success' ? 'ok' : summary?.status === 'failed' ? 'error' : summary?.status ?? 'unknown'} label={summary?.status ?? 'unknown'} />
	</header>

	<div class="c-indexation-panel__summary">
		<DashboardCountTile label="Generated indexes" value={summary?.generatedIndexCount ?? 0} status={(summary?.generatedIndexCount ?? 0) > 0 ? 'warning' : 'ok'} />
		<DashboardCountTile label="Changed files" value={changedIndexes.length} status={changedIndexes.length > 0 ? 'warning' : 'ok'} />
		<DashboardCountTile label="Domains" value={affectedDomains.length} status={affectedDomains.length > 0 ? 'warning' : 'ok'} />
		<MetricBarsCard title="Processed file types" total={`${summary?.processedFileTypes.length ?? 0} types`} bars={fileTypeBars} />
	</div>

	<div class="c-indexation-panel__actions">
		<DashboardRunButton
			label="Run indexation"
			status={running ? 'running' : 'idle'}
			pending={running}
			disabled={!canRun || !onRun}
			title={canRun ? 'Run through server boundary' : 'Server command endpoint is not enabled'}
			{onRun}
		/>
		<button
			type="button"
			class="c-indexation-panel__open"
			disabled={!summary?.outputPath || !onOpenOutput}
			onclick={() => summary?.outputPath && onOpenOutput?.(summary.outputPath)}
		>
			Open output
		</button>
	</div>

	<div class="c-indexation-panel__body">
		<section class="c-indexation-panel__section">
			<h3>Pipeline steps</h3>
			<PipelineReportList reports={steps} emptyLabel="No indexation steps loaded." />
		</section>

		<section class="c-indexation-panel__section">
			<h3>Touched index files</h3>
			{#if changedIndexes.length === 0}
				<p class="c-indexation-panel__state">No changed index files in the fixture.</p>
			{:else}
				<div class="c-indexation-panel__file-list">
					{#each changedIndexes as path}
						<button type="button" onclick={() => onSelectChangedFile?.(path)}>{path}</button>
					{/each}
				</div>
			{/if}
		</section>
	</div>

	<div class="c-indexation-panel__paths">
		<span>{summary?.resultPath ?? 'result path pending'}</span>
		<span>{summary?.treePath ?? 'tree path pending'}</span>
		<span>{summary?.componentMapPath ?? 'component map path pending'}</span>
	</div>
</section>

<style>
	.c-indexation-panel {
		display: grid;
		gap: 0.75rem;
		min-width: 0;
	}

	.c-indexation-panel__header,
	.c-indexation-panel__actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.c-indexation-panel__eyebrow,
	.c-indexation-panel__title,
	.c-indexation-panel__state,
	.c-indexation-panel__section h3 {
		margin: 0;
	}

	.c-indexation-panel__eyebrow {
		font-size: 0.72rem;
		font-weight: 800;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.c-indexation-panel__title {
		margin-top: 0.2rem;
		font-size: 1rem;
		line-height: 1.2;
	}

	.c-indexation-panel__summary,
	.c-indexation-panel__body {
		display: grid;
		gap: 0.6rem;
		min-width: 0;
	}

	.c-indexation-panel__summary {
		grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(16rem, 1.5fr);
	}

	.c-indexation-panel__summary :global(.c-dashboard-count-tile) {
		min-width: 0;
		min-height: 5.8rem;
		padding: 0.65rem;
	}

	.c-indexation-panel__summary :global(.metric-bars-card) {
		min-width: 0;
		padding: 0.85rem;
		border-radius: 0.5rem;
		box-shadow: none;
	}

	.c-indexation-panel__open {
		min-height: 2.35rem;
		padding: 0 0.8rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		font: inherit;
		font-size: 0.82rem;
		font-weight: 700;
	}

	.c-indexation-panel__open:disabled {
		cursor: not-allowed;
		opacity: 0.55;
	}

	.c-indexation-panel__body {
		grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.9fr);
		align-items: start;
	}

	.c-indexation-panel__section,
	.c-indexation-panel__paths {
		box-sizing: border-box;
		min-width: 0;
		padding: 0.75rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
	}

	.c-indexation-panel__section {
		display: grid;
		gap: 0.6rem;
	}

	.c-indexation-panel__section h3 {
		font-size: 0.86rem;
	}

	.c-indexation-panel__state {
		color: var(--color-text-secondary);
		font-size: 0.82rem;
	}

	.c-indexation-panel__file-list {
		display: grid;
		gap: 0.4rem;
	}

	.c-indexation-panel__file-list button,
	.c-indexation-panel__paths span {
		min-width: 0;
		overflow-wrap: anywhere;
		font-family: var(--font-family-mono, ui-monospace, monospace);
		font-size: 0.78rem;
	}

	.c-indexation-panel__file-list button {
		padding: 0.5rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.45rem;
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
		text-align: left;
	}

	.c-indexation-panel__paths {
		display: grid;
		gap: 0.35rem;
		color: var(--color-text-secondary);
	}

	@media (max-width: 980px) {
		.c-indexation-panel__summary,
		.c-indexation-panel__body {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 620px) {
		.c-indexation-panel__header,
		.c-indexation-panel__actions {
			align-items: stretch;
			flex-direction: column;
		}
	}
</style>
