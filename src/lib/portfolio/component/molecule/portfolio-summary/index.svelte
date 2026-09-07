<script lang="ts">
	import type { PortfolioSummaryData } from '$stylist/portfolio/class/manager/portfolio';
	import PortfolioCellAtom from '$stylist/portfolio/component/atom/portfolio-cell/index.svelte';

	interface PortfolioSummaryProps {
		summary: PortfolioSummaryData;
		class?: string;
	}

	let { summary, class: className = '' }: PortfolioSummaryProps = $props();
</script>

<tr class="c-portfolio-summary {className}">
	<td class="_td" colspan="2">
		<div class="_label">РРўРћР“Рћ:</div>
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={summary.new} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={summary.plan} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={summary.estimate} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={summary.inProgress} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={summary.test} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={summary.acceptance} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={summary.deferred} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={summary.open} />
	</td>
	<td class="_td _td-cell">
		<PortfolioCellAtom cell={summary.closed} />
	</td>
	<td class="_td _td-empty"></td>
</tr>

<style>
	.c-portfolio-summary {
		background: color-mix(in srgb, var(--color-background-secondary) 90%, transparent);
		font-weight: 700;
	}

	._td {
		padding: 0;
		height: 3rem;
		border-top: 2px solid var(--color-border-primary);
		vertical-align: stretch;
	}

	._label {
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 0.625rem;
		font-size: 0.8125rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: var(--color-text-secondary);
	}

	._td-cell {
		width: 7rem;
	}

	._td-empty {
		width: 3rem;
	}
</style>
