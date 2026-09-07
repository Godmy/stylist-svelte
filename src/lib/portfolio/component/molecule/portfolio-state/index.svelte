<script lang="ts">
	import type { PortfolioEntry } from '$stylist/portfolio/class/manager/portfolio';
	import PortfolioDigit from '$stylist/portfolio/component/atom/portfolio-digit/index.svelte';
	import PortfolioProject from '$stylist/portfolio/component/atom/portfolio-project/index.svelte';
	import PortfolioCellAtom from '$stylist/portfolio/component/atom/portfolio-cell/index.svelte';

	interface PortfolioStateProps {
		entry: PortfolioEntry;
		class?: string;
	}

	let { entry, class: className = '' }: PortfolioStateProps = $props();
</script>

<tr class="c-portfolio-state {className}">
	<td class="_td _td-num">
		<PortfolioDigit value={entry.id} />
	</td>
	<td class="_td _td-name">
		<PortfolioProject name={entry.name} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={entry.new} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={entry.plan} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={entry.estimate} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={entry.inProgress} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={entry.test} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={entry.acceptance} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={entry.deferred} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={entry.open} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={entry.closed} />
	</td>
	<td class="_td _td-percent">
		<PortfolioDigit value={entry.percent} />
	</td>
</tr>

<style>
	.c-portfolio-state {
		transition: background-color 100ms ease;
	}

	.c-portfolio-state:hover {
		background: color-mix(
			in srgb,
			var(--color-primary-50, var(--color-background-secondary)) 40%,
			transparent
		);
	}

	.c-portfolio-state:nth-child(even) {
		background: color-mix(in srgb, var(--color-background-secondary) 50%, transparent);
	}

	.c-portfolio-state:nth-child(even):hover {
		background: color-mix(
			in srgb,
			var(--color-primary-50, var(--color-background-secondary)) 60%,
			transparent
		);
	}

	._td {
		padding: 0;
		height: 2.75rem;
		border-bottom: 1px solid color-mix(in srgb, var(--color-border-primary) 70%, transparent);
		vertical-align: stretch;
	}

	._td-num {
		width: 2.5rem;
		text-align: center;
	}

	._td-cell {
		width: 7rem;
		padding: 0;
	}

	._td-percent {
		width: 3rem;
		text-align: center;
	}
</style>
