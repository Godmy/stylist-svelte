<script lang="ts">
	import type { PortfolioData } from '$stylist/portfolio/class/manager/portfolio';
	import PortfolioHeader from '$stylist/portfolio/component/molecule/portfolio-header/index.svelte';
	import PortfolioState from '$stylist/portfolio/component/molecule/portfolio-state/index.svelte';
	import PortfolioSummary from '$stylist/portfolio/component/molecule/portfolio-summary/index.svelte';

	interface PortfolioProps {
		data: PortfolioData;
		class?: string;
	}

	let { data, class: className = '' }: PortfolioProps = $props();
</script>

<div class="c-portfolio {className}">
	<div class="_scroll">
		<table class="_table">
			<thead>
				<PortfolioHeader />
			</thead>
			<tbody>
				{#each data.entries as entry (entry.id)}
					<PortfolioState {entry} />
				{/each}
				<PortfolioSummary summary={data.summary} />
			</tbody>
		</table>
	</div>
</div>

<style>
	.c-portfolio {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.75rem;
		overflow: hidden;
		background: var(--color-background-primary);
	}

	._scroll {
		overflow-x: auto;
	}

	._table {
		width: 100%;
		min-width: 56rem;
		border-collapse: collapse;
		table-layout: fixed;
	}
</style>
