<script lang="ts">
	import type { RecipePeriodicElement } from '$stylist/science/interface/recipe/periodic-element';
	import { PERIODIC_ELEMENT_CATEGORY_ACCENT } from '$stylist/science/const/record/periodic-element-category-accent';

	let props: RecipePeriodicElement = $props();

	const accent = $derived(PERIODIC_ELEMENT_CATEGORY_ACCENT[props.element.category] ?? '#777');
</script>

<button
	type="button"
	class="c-periodic-element {props.class ?? ''}"
	class:is-selected={props.selected}
	class:is-highlighted={props.highlighted}
	class:is-dimmed={props.dimmed}
	style:grid-column={props.element.group}
	style:grid-row={props.element.period}
	style:--periodic-element-accent={accent}
	aria-pressed={props.selected}
	aria-label={`${props.element.name}, atomic number ${props.element.atomicNumber}`}
	onclick={() => props.onSelect?.(props.element)}
>
	<span class="c-periodic-element__atomic-number">{props.element.atomicNumber}</span>
	<span class="c-periodic-element__symbol">{props.element.symbol}</span>
	<span class="c-periodic-element__name">{props.element.name}</span>
</button>

<style>
	.c-periodic-element {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-width: 0;
		min-height: 0;
		padding: 0.3rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 70%, var(--periodic-element-accent));
		border-radius: 0.25rem;
		background: color-mix(in srgb, var(--color-background-primary) 84%, var(--periodic-element-accent));
		color: inherit;
		text-align: left;
		cursor: pointer;
		transition:
			background-color 0.16s ease,
			border-color 0.16s ease,
			opacity 0.16s ease,
			transform 0.16s ease;
	}

	.c-periodic-element:hover,
	.c-periodic-element:focus-visible,
	.c-periodic-element.is-selected,
	.c-periodic-element.is-highlighted {
		outline: 2px solid color-mix(in srgb, var(--color-text-primary) 44%, var(--periodic-element-accent));
		outline-offset: 1px;
	}

	.c-periodic-element.is-highlighted {
		background: color-mix(in srgb, var(--color-background-primary) 70%, var(--periodic-element-accent));
		transform: translateY(-1px);
	}

	.c-periodic-element.is-dimmed {
		opacity: 0.36;
	}

	.c-periodic-element__atomic-number {
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		font-size: 0.62rem;
	}

	.c-periodic-element__symbol {
		align-self: center;
		font-size: 1rem;
		font-weight: 700;
		line-height: 1;
	}

	.c-periodic-element__name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: var(--color-text-secondary);
		font-size: 0.58rem;
	}
</style>
