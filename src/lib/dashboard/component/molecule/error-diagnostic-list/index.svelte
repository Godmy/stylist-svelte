<script lang="ts">
	import type { ErrorDiagnosticItem } from '$stylist/dashboard/type/struct/error-diagnostic-item';
	import DashboardStatusPill from '$stylist/dashboard/component/atom/dashboard-status-pill/index.svelte';

	let {
		items = [],
		selectedId,
		query = '',
		severityFilter = 'all',
		groupBy = 'analyzer',
		loading = false,
		class: className = '',
		onSelect,
		onQueryChange,
		onSeverityChange
	}: {
		items?: ErrorDiagnosticItem[];
		selectedId?: string;
		query?: string;
		severityFilter?: 'all' | 'error' | 'warning' | 'info';
		groupBy?: 'project' | 'analyzer' | 'file' | 'none';
		loading?: boolean;
		class?: string;
		onSelect?: (item: ErrorDiagnosticItem) => void;
		onQueryChange?: (value: string) => void;
		onSeverityChange?: (value: 'all' | 'error' | 'warning' | 'info') => void;
	} = $props();

	const filteredItems = $derived(
		items.filter((item) => {
			const matchesSeverity = severityFilter === 'all' || item.severity === severityFilter;
			const normalizedQuery = query.trim().toLowerCase();
			const matchesQuery =
				!normalizedQuery ||
				`${item.path} ${item.message} ${item.code ?? ''} ${item.project} ${item.analyzer}`.toLowerCase().includes(normalizedQuery);
			return matchesSeverity && matchesQuery;
		})
	);

	const groupedItems = $derived.by(() => {
		const groups = new Map<string, ErrorDiagnosticItem[]>();
		for (const item of filteredItems) {
			const key =
				groupBy === 'project'
					? item.project
					: groupBy === 'file'
						? item.path
						: groupBy === 'none'
							? 'Diagnostics'
							: item.analyzer;
			groups.set(key, [...(groups.get(key) ?? []), item]);
		}
		return Array.from(groups.entries());
	});
</script>

<section class="c-error-diagnostic-list {className}" aria-label="Error diagnostics">
	<div class="c-error-diagnostic-list__toolbar">
		<input
			class="c-error-diagnostic-list__search"
			type="search"
			value={query}
			placeholder="Search path, code or message"
			oninput={(event) => onQueryChange?.((event.currentTarget as HTMLInputElement).value)}
		/>
		<select
			class="c-error-diagnostic-list__select"
			value={severityFilter}
			onchange={(event) =>
				onSeverityChange?.((event.currentTarget as HTMLSelectElement).value as 'all' | 'error' | 'warning' | 'info')}
		>
			<option value="all">All severities</option>
			<option value="error">Errors</option>
			<option value="warning">Warnings</option>
			<option value="info">Info</option>
		</select>
	</div>

	{#if loading}
		<p class="c-error-diagnostic-list__state">Loading diagnostics...</p>
	{:else if filteredItems.length === 0}
		<p class="c-error-diagnostic-list__state">No diagnostics match the current filters.</p>
	{:else}
		<div class="c-error-diagnostic-list__groups">
			{#each groupedItems as [group, groupItems]}
				<section class="c-error-diagnostic-list__group">
					<h3 class="c-error-diagnostic-list__group-title">{group}</h3>
					{#each groupItems as item}
						<button
							type="button"
							class="c-error-diagnostic-list__item"
							class:c-error-diagnostic-list__item--active={item.id === selectedId}
							onclick={() => onSelect?.(item)}
						>
							<span class="c-error-diagnostic-list__line">
								<span class="c-error-diagnostic-list__path">{item.path}</span>
								<DashboardStatusPill status={item.severity} label={item.code ?? item.severity} compact />
							</span>
							<span class="c-error-diagnostic-list__message">{item.message}</span>
							<span class="c-error-diagnostic-list__meta">
								{item.project} / {item.analyzer}
								{#if item.line}: {item.line}{#if item.column}:{item.column}{/if}{/if}
							</span>
						</button>
					{/each}
				</section>
			{/each}
		</div>
	{/if}
</section>

<style>
	.c-error-diagnostic-list {
		box-sizing: border-box;
		display: grid;
		gap: 0.65rem;
		min-width: 0;
	}

	.c-error-diagnostic-list__toolbar {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 0.55rem;
		min-width: 0;
	}

	.c-error-diagnostic-list__search,
	.c-error-diagnostic-list__select {
		box-sizing: border-box;
		min-height: 2.35rem;
		min-width: 0;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		font: inherit;
		font-size: 0.82rem;
	}

	.c-error-diagnostic-list__search {
		padding: 0.45rem 0.7rem;
	}

	.c-error-diagnostic-list__select {
		padding: 0.45rem 0.55rem;
	}

	.c-error-diagnostic-list__state {
		box-sizing: border-box;
		margin: 0;
		min-height: 5rem;
		padding: 1rem;
		border: 1px dashed color-mix(in srgb, var(--color-border-primary) 84%, transparent);
		border-radius: 0.5rem;
		color: var(--color-text-secondary);
	}

	.c-error-diagnostic-list__groups,
	.c-error-diagnostic-list__group {
		display: grid;
		gap: 0.45rem;
		min-width: 0;
	}

	.c-error-diagnostic-list__group-title {
		margin: 0.4rem 0 0;
		font-size: 0.75rem;
		font-weight: 800;
		color: var(--color-text-secondary);
	}

	.c-error-diagnostic-list__item {
		box-sizing: border-box;
		display: grid;
		gap: 0.3rem;
		min-width: 0;
		width: 100%;
		padding: 0.65rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		font: inherit;
		text-align: left;
		cursor: pointer;
	}

	.c-error-diagnostic-list__item--active {
		border-color: color-mix(in srgb, var(--color-primary-500) 38%, var(--color-border-primary));
		background: color-mix(in srgb, var(--color-primary-500) 8%, var(--color-background-primary));
	}

	.c-error-diagnostic-list__line {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 0.55rem;
		align-items: center;
		min-width: 0;
	}

	.c-error-diagnostic-list__path {
		min-width: 0;
		overflow-wrap: anywhere;
		font-family: var(--font-family-mono, ui-monospace, monospace);
		font-size: 0.77rem;
		font-weight: 700;
	}

	.c-error-diagnostic-list__message {
		min-width: 0;
		overflow-wrap: anywhere;
		font-size: 0.82rem;
		line-height: 1.35;
	}

	.c-error-diagnostic-list__meta {
		min-width: 0;
		overflow-wrap: anywhere;
		font-size: 0.72rem;
		color: var(--color-text-secondary);
	}

	@media (max-width: 620px) {
		.c-error-diagnostic-list__toolbar {
			grid-template-columns: 1fr;
		}
	}
</style>
