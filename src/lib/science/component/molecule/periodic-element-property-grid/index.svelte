<script lang="ts">
	import type { RecipePeriodicElementPropertyGrid } from '$stylist/science/interface/recipe/periodic-element-property-grid';
	import ChemicalProperty from '$stylist/science/component/atom/chemical-property/index.svelte';

	let props: RecipePeriodicElementPropertyGrid = $props();
</script>

<div class="c-periodic-element-property-grid {props.class ?? ''}">
	{#each props.properties as property}
		<ChemicalProperty chemicalProperty={property} />
	{/each}
</div>

<style>
	.c-periodic-element-property-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
		gap: 0.5rem;
	}
</style>
