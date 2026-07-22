<script lang="ts">
	import type { RecipePeriodicElementTable } from '$stylist/science/interface/recipe/periodic-element-table';
	import { PERIODIC_ELEMENTS } from '$stylist/science/const/array/periodic-elements';
	import PeriodicElement from '$stylist/science/component/atom/periodic-element/index.svelte';
	import PeriodicElementLegend from '$stylist/science/component/molecule/periodic-element-legend/index.svelte';
	import PeriodicElementSummary from '$stylist/science/component/molecule/periodic-element-summary/index.svelte';

	let props: RecipePeriodicElementTable = $props();

	const elements = $derived(props.elements ?? PERIODIC_ELEMENTS);
	const className = $derived(props.class ?? '');
	let internalSelectedSymbol = $state(props.selectedSymbol ?? 'H');
	let selectedCategory = $state('');
	const selectedSymbol = $derived(props.selectedSymbol ?? internalSelectedSymbol);
	const selectedElement = $derived(
		elements.find((element) => element.symbol === selectedSymbol) ?? elements[0]
	);
	const categories = $derived([...new Set(elements.map((element) => element.category))]);

	function selectElement(element: (typeof elements)[number]) {
		internalSelectedSymbol = element.symbol;
		props.onElementSelect?.(element);
	}

	function selectCategory(category: string) {
		selectedCategory = selectedCategory === category ? '' : category;
	}
</script>

<div class="c-periodic-element-table {className}">
	<div class="c-periodic-element-table__header">
		<div>
			<p class="c-periodic-element-table__eyebrow">science</p>
			<h2 class="c-periodic-element-table__title">Periodic table</h2>
		</div>

		<PeriodicElementSummary element={selectedElement} />
	</div>

	<div class="c-periodic-element-table__viewport" role="region" aria-label="Periodic table of chemical elements" tabindex="0">
		<div class="c-periodic-element-table__grid">
			{#each elements as element}
				<PeriodicElement
					{element}
					selected={element.symbol === selectedSymbol}
					highlighted={selectedCategory === element.category}
					dimmed={selectedCategory !== '' && selectedCategory !== element.category}
					onSelect={selectElement}
				/>
			{/each}
		</div>
	</div>

	<PeriodicElementLegend
		{categories}
		{selectedCategory}
		onCategorySelect={selectCategory}
	/>
</div>

<style>
	.c-periodic-element-table {
		display: grid;
		gap: 0.75rem;
		color: var(--color-text-primary);
	}

	.c-periodic-element-table__header {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
	}

	.c-periodic-element-table__eyebrow,
	.c-periodic-element-table__title {
		margin: 0;
	}

	.c-periodic-element-table__eyebrow {
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 0.72rem;
		text-transform: uppercase;
	}

	.c-periodic-element-table__title {
		font-size: 1.1rem;
		font-weight: 650;
	}

	.c-periodic-element-table__viewport {
		overflow: auto;
		padding-bottom: 0.25rem;
	}

	.c-periodic-element-table__grid {
		display: grid;
		grid-template-columns: repeat(18, minmax(3.35rem, 1fr));
		grid-template-rows: repeat(10, 3.8rem);
		gap: 0.25rem;
		min-width: 64rem;
	}

	@media (max-width: 720px) {
		.c-periodic-element-table__header {
			align-items: stretch;
			flex-direction: column;
		}

	}
</style>
