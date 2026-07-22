<script lang="ts">
	import type { RecipeChemicalProperty } from '$stylist/science/interface/recipe/chemical-property';

	let props: RecipeChemicalProperty = $props();
</script>

<div class="c-chemical-property {props.class ?? ''}">
	<span>{props.chemicalProperty.label}</span>
	<strong>{props.chemicalProperty.value ?? 'n/a'}</strong>
</div>

<style>
	.c-chemical-property {
		display: grid;
		gap: 0.2rem;
		min-width: 0;
		padding: 0.65rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		background: var(--color-background-secondary);
	}

	.c-chemical-property span {
		color: var(--color-text-secondary);
		font-size: 0.72rem;
	}

	.c-chemical-property strong {
		overflow-wrap: anywhere;
		color: var(--color-text-primary);
		font-size: 0.88rem;
		font-weight: 650;
	}
</style>
