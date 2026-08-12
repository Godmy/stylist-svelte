<script lang="ts">
	import type { RecipeErrorListPanel } from '$stylist/dashboard/interface/recipe/error-list-panel';
	import type { ErrorDiagnosticItem } from '$stylist/dashboard/type/object/error-diagnostic-item';
	import ErrorDiagnosticList from '$stylist/dashboard/component/molecule/error-diagnostic-list/index.svelte';
	import DashboardCountTile from '$stylist/dashboard/component/atom/dashboard-count-tile/index.svelte';
	import DashboardStatusPill from '$stylist/dashboard/component/atom/dashboard-status-pill/index.svelte';
	import MetricBarsCard from '$stylist/chart/component/molecule/metric-bars-card/index.svelte';

	let {
		items = [],
		selectedId,
		query = '',
		groupBy = 'analyzer',
		severityFilter = 'all',
		baselineMode = 'all',
		loading = false,
		onSelect,
		onQueryChange,
		onGroupChange,
		onOpenFile,
		class: className = ''
	}: RecipeErrorListPanel = $props();

	let localSelectedId = $state<string | undefined>(selectedId);

	const visibleItems = $derived(baselineMode === 'new-only' ? items.filter((item) => item.isNew) : items);
	const selectedItem = $derived(visibleItems.find((item) => item.id === localSelectedId) ?? visibleItems[0]);
	const errorCount = $derived(visibleItems.filter((item) => item.severity === 'error').length);
	const warningCount = $derived(visibleItems.filter((item) => item.severity === 'warning').length);
	const severityBars = $derived(resolveSeverityBars(visibleItems));

	function handleSelect(item: ErrorDiagnosticItem) {
		localSelectedId = item.id;
		onSelect?.(item);
	}

	function resolveSeverityBars(sourceItems: ErrorDiagnosticItem[]) {
		const total = Math.max(sourceItems.length, 1);
		return (['error', 'warning', 'info'] as const)
			.map((severity) => {
				const value = sourceItems.filter((item) => item.severity === severity).length;
				return {
					label: severity,
					value,
					valueLabel: value,
					percentage: Math.round((value / total) * 100)
				};
			})
			.filter((bar) => bar.value > 0);
	}
</script>

<section class="c-error-list-panel {className}" aria-label="Error list panel">
	<header class="c-error-list-panel__header">
		<div>
			<p class="c-error-list-panel__eyebrow">Error List</p>
			<h2 class="c-error-list-panel__title">Unified diagnostics</h2>
		</div>
		<DashboardStatusPill status={errorCount > 0 ? 'error' : warningCount > 0 ? 'warning' : 'ok'} label={`${visibleItems.length} diagnostics`} />
	</header>

	<div class="c-error-list-panel__summary">
		<DashboardCountTile label="Errors" value={errorCount} status={errorCount > 0 ? 'error' : 'ok'} />
		<DashboardCountTile label="Warnings" value={warningCount} status={warningCount > 0 ? 'warning' : 'ok'} />
		<DashboardCountTile label="New" value={visibleItems.filter((item) => item.isNew).length} status="unknown" />
		<MetricBarsCard title="Severity distribution" total={`${visibleItems.length} items`} bars={severityBars} />
	</div>

	<div class="c-error-list-panel__group-row">
		<label>
			Group by
			<select
				value={groupBy}
				onchange={(event) =>
					onGroupChange?.((event.currentTarget as HTMLSelectElement).value as NonNullable<RecipeErrorListPanel['groupBy']>)}
			>
				<option value="analyzer">Analyzer</option>
				<option value="project">Project</option>
				<option value="file">File</option>
				<option value="none">None</option>
			</select>
		</label>
	</div>

	<div class="c-error-list-panel__body">
		<ErrorDiagnosticList
			items={visibleItems}
			selectedId={localSelectedId}
			{query}
			{severityFilter}
			{groupBy}
			{loading}
			onSelect={handleSelect}
			{onQueryChange}
		/>

		<aside class="c-error-list-panel__detail" aria-label="Selected diagnostic">
			{#if selectedItem}
				<p class="c-error-list-panel__eyebrow">{selectedItem.analyzer}</p>
				<h3 class="c-error-list-panel__detail-title">{selectedItem.code ?? selectedItem.severity}</h3>
				<DashboardStatusPill status={selectedItem.severity} label={selectedItem.severity} />
				<p class="c-error-list-panel__message">{selectedItem.message}</p>
				<dl class="c-error-list-panel__properties">
					<div><dt>Path</dt><dd>{selectedItem.path}</dd></div>
					<div><dt>Project</dt><dd>{selectedItem.project}</dd></div>
					<div><dt>Location</dt><dd>{selectedItem.line ?? '?'}:{selectedItem.column ?? '?'}</dd></div>
					<div><dt>Run</dt><dd>{selectedItem.runId ?? 'unknown'}</dd></div>
				</dl>
				<button
					type="button"
					class="c-error-list-panel__open"
					disabled={!onOpenFile}
					onclick={() => onOpenFile?.(selectedItem)}
				>
					Open file
				</button>
			{:else}
				<p class="c-error-list-panel__state">No diagnostic selected.</p>
			{/if}
		</aside>
	</div>
</section>

<style>
	.c-error-list-panel {
		display: grid;
		gap: 0.75rem;
		min-width: 0;
	}

	.c-error-list-panel__header {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
		align-items: center;
	}

	.c-error-list-panel__eyebrow,
	.c-error-list-panel__title,
	.c-error-list-panel__detail-title,
	.c-error-list-panel__message,
	.c-error-list-panel__state {
		margin: 0;
	}

	.c-error-list-panel__eyebrow {
		font-size: 0.72rem;
		font-weight: 800;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.c-error-list-panel__title,
	.c-error-list-panel__detail-title {
		margin-top: 0.2rem;
		font-size: 1rem;
		line-height: 1.2;
		overflow-wrap: anywhere;
	}

	.c-error-list-panel__summary {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(16rem, 1.5fr);
		gap: 0.6rem;
	}

	.c-error-list-panel__summary :global(.c-dashboard-count-tile) {
		min-width: 0;
		min-height: 5.8rem;
		padding: 0.65rem;
	}

	.c-error-list-panel__summary :global(.metric-bars-card) {
		min-width: 0;
		padding: 0.85rem;
		border-radius: 0.5rem;
		box-shadow: none;
	}

	.c-error-list-panel__group-row label {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-text-secondary);
		font-size: 0.78rem;
	}

	.c-error-list-panel__group-row select {
		min-height: 2.1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.45rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		font: inherit;
	}

	.c-error-list-panel__body {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.75fr);
		gap: 0.75rem;
		align-items: start;
		min-width: 0;
	}

	.c-error-list-panel__detail {
		box-sizing: border-box;
		display: grid;
		gap: 0.65rem;
		min-width: 0;
		padding: 0.75rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
	}

	.c-error-list-panel__message {
		overflow-wrap: anywhere;
		font-size: 0.84rem;
		line-height: 1.4;
	}

	.c-error-list-panel__properties {
		display: grid;
		gap: 0.45rem;
		margin: 0;
	}

	.c-error-list-panel__properties div {
		display: grid;
		grid-template-columns: 5rem minmax(0, 1fr);
		gap: 0.75rem;
		min-width: 0;
	}

	.c-error-list-panel__properties dt,
	.c-error-list-panel__properties dd {
		margin: 0;
		min-width: 0;
		overflow-wrap: anywhere;
		font-size: 0.8rem;
	}

	.c-error-list-panel__properties dt {
		color: var(--color-text-secondary);
	}

	.c-error-list-panel__properties dd {
		font-family: var(--font-family-mono, ui-monospace, monospace);
	}

	.c-error-list-panel__open {
		min-height: 2.35rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
		font: inherit;
		font-size: 0.82rem;
		font-weight: 700;
	}

	.c-error-list-panel__open:disabled {
		cursor: not-allowed;
		opacity: 0.55;
	}

	@media (max-width: 980px) {
		.c-error-list-panel__summary,
		.c-error-list-panel__body {
			grid-template-columns: 1fr;
		}
	}
</style>
