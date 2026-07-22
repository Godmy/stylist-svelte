<script lang="ts">
	import type { RecipePeriodicElementSummary } from '$stylist/science/interface/recipe/periodic-element-summary';

	let props: RecipePeriodicElementSummary = $props();
</script>

{#if props.element}
	<aside class="c-periodic-element-summary {props.class ?? ''}" aria-live="polite">
		<span class="c-periodic-element-summary__number">{props.element.atomicNumber}</span>
		<strong>{props.element.symbol}</strong>
		<span>{props.element.name}</span>
		<small>{props.element.category} - {props.element.atomicMass}</small>
	</aside>
{/if}

<style>
	.c-periodic-element-summary {
		display: grid;
		grid-template-columns: auto auto auto;
		align-items: baseline;
		gap: 0.25rem 0.5rem;
		min-width: 14rem;
		padding: 0.55rem 0.65rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.c-periodic-element-summary strong {
		font-size: 1.35rem;
		line-height: 1;
	}

	.c-periodic-element-summary small {
		grid-column: 1 / -1;
		color: var(--color-text-secondary);
	}

	.c-periodic-element-summary__number {
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 0.72rem;
	}
</style>
