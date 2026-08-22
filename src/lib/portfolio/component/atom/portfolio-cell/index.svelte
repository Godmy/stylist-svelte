<script lang="ts">
	import type { PortfolioCell } from '$stylist/portfolio/class/manager/portfolio';
	import { ObjectManagerPortfolio } from '$stylist/portfolio/class/manager/portfolio';

	interface PortfolioCellProps {
		cell: PortfolioCell;
		class?: string;
	}

	let { cell, class: className = '' }: PortfolioCellProps = $props();

	const hasDelta = $derived(ObjectManagerPortfolio.hasDelta(cell));
	const isEmpty = $derived(ObjectManagerPortfolio.isEmpty(cell));
	const currentText = $derived(ObjectManagerPortfolio.formatCurrent(cell.current));
	const addedText = $derived(ObjectManagerPortfolio.formatAdded(cell.added));
	const removedText = $derived(ObjectManagerPortfolio.formatRemoved(cell.removed));
</script>

<div class="c-portfolio-cell {className}" class:is-empty={isEmpty}>
	<div class="_main">
		{currentText}
	</div>
	{#if hasDelta}
		<div class="_delta">
			<div class="_added">{addedText}</div>
			<div class="_removed">{removedText}</div>
		</div>
	{/if}
</div>

<style>
	.c-portfolio-cell {
		display: flex;
		align-items: stretch;
		height: 100%;
		overflow: hidden;
	}

	.c-portfolio-cell.is-empty {
		background: transparent;
	}

	._main {
		flex: 3;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-primary);
		border-right: 1px solid color-mix(in srgb, var(--color-border-primary) 60%, transparent);
	}

	.c-portfolio-cell:not(:has(._delta)) ._main {
		border-right: none;
	}

	._delta {
		flex: 2;
		display: flex;
		flex-direction: column;
		font-size: 0.6875rem;
		font-weight: 500;
	}

	._added {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-success-600, #16a34a);
		border-bottom: 1px solid color-mix(in srgb, var(--color-border-primary) 60%, transparent);
		min-height: 0;
	}

	._removed {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-danger-600, #dc2626);
		min-height: 0;
	}
</style>
