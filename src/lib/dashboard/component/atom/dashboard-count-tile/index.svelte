<script lang="ts">
	import DashboardStatusPill from '$stylist/dashboard/component/atom/dashboard-status-pill/index.svelte';

	type DashboardCountStatus = 'ok' | 'warning' | 'error' | 'running' | 'stale' | 'unknown';

	let {
		label,
		value,
		unit,
		status = 'unknown',
		delta,
		caption,
		href,
		loading = false,
		class: className = '',
		onclick
	}: {
		label: string;
		value: string | number;
		unit?: string;
		status?: DashboardCountStatus;
		delta?: string | number;
		caption?: string;
		href?: string;
		loading?: boolean;
		class?: string;
		onclick?: () => void;
	} = $props();

	const interactive = $derived(Boolean(href || onclick));
</script>

{#if href}
	<a class="c-dashboard-count-tile {className}" class:c-dashboard-count-tile--interactive={interactive} {href}>
		<span class="c-dashboard-count-tile__header">
			<span class="c-dashboard-count-tile__label">{label}</span>
			<DashboardStatusPill {status} label={status} compact />
		</span>
		<span class="c-dashboard-count-tile__value" class:c-dashboard-count-tile__value--loading={loading}>
			{#if loading}...{:else}{value}{/if}
			{#if unit}<span class="c-dashboard-count-tile__unit">{unit}</span>{/if}
		</span>
		<span class="c-dashboard-count-tile__footer">
			{#if delta !== undefined}<span class="c-dashboard-count-tile__delta">{delta}</span>{/if}
			{#if caption}<span class="c-dashboard-count-tile__caption">{caption}</span>{/if}
		</span>
	</a>
{:else}
	<button
		type="button"
		class="c-dashboard-count-tile {className}"
		class:c-dashboard-count-tile--interactive={interactive}
		disabled={!onclick}
		onclick={() => onclick?.()}
	>
		<span class="c-dashboard-count-tile__header">
			<span class="c-dashboard-count-tile__label">{label}</span>
			<DashboardStatusPill {status} label={status} compact />
		</span>
		<span class="c-dashboard-count-tile__value" class:c-dashboard-count-tile__value--loading={loading}>
			{#if loading}...{:else}{value}{/if}
			{#if unit}<span class="c-dashboard-count-tile__unit">{unit}</span>{/if}
		</span>
		<span class="c-dashboard-count-tile__footer">
			{#if delta !== undefined}<span class="c-dashboard-count-tile__delta">{delta}</span>{/if}
			{#if caption}<span class="c-dashboard-count-tile__caption">{caption}</span>{/if}
		</span>
	</button>
{/if}

<style>
	.c-dashboard-count-tile {
		box-sizing: border-box;
		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: 0.5rem;
		min-width: 10rem;
		min-height: 7.25rem;
		padding: 0.8rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		text-align: left;
		text-decoration: none;
		font: inherit;
	}

	button.c-dashboard-count-tile {
		cursor: default;
	}

	button.c-dashboard-count-tile:disabled {
		opacity: 1;
	}

	.c-dashboard-count-tile--interactive {
		cursor: pointer;
	}

	.c-dashboard-count-tile__header,
	.c-dashboard-count-tile__footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		min-width: 0;
	}

	.c-dashboard-count-tile__label,
	.c-dashboard-count-tile__caption {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: var(--color-text-secondary);
	}

	.c-dashboard-count-tile__label {
		font-size: 0.78rem;
		font-weight: 700;
	}

	.c-dashboard-count-tile__value {
		display: flex;
		align-items: baseline;
		gap: 0.35rem;
		min-width: 0;
		font-size: 1.85rem;
		font-weight: 750;
		line-height: 1;
		overflow-wrap: anywhere;
	}

	.c-dashboard-count-tile__value--loading {
		color: var(--color-text-tertiary);
	}

	.c-dashboard-count-tile__unit,
	.c-dashboard-count-tile__delta,
	.c-dashboard-count-tile__caption {
		font-size: 0.75rem;
	}

	.c-dashboard-count-tile__unit,
	.c-dashboard-count-tile__delta {
		color: var(--color-text-secondary);
	}
</style>
