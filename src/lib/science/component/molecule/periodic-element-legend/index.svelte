<script lang="ts">
	import type { RecipePeriodicElementLegend } from '$stylist/science/interface/recipe/periodic-element-legend';
	import { PERIODIC_ELEMENT_CATEGORY_ACCENT } from '$stylist/science/const/record/periodic-element-category-accent';
	import PeriodicElementType from '$stylist/science/component/atom/periodic-element-type/index.svelte';

	let props: RecipePeriodicElementLegend = $props();

	const restProps = $derived.by(() => {
		const {
			categories: _categories,
			selectedCategory: _selectedCategory,
			onCategorySelect: _onCategorySelect,
			class: _class,
			...rest
		} = props;
		return rest;
	});
</script>

<div {...restProps} class="c-periodic-element-legend {props.class ?? ''}" aria-label="Element categories">
	{#each props.categories as category}
		<PeriodicElementType
			{category}
			accent={PERIODIC_ELEMENT_CATEGORY_ACCENT[category]}
			selected={props.selectedCategory === category}
			onSelect={props.onCategorySelect}
		/>
	{/each}
</div>

<style>
	.c-periodic-element-legend {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}
</style>
