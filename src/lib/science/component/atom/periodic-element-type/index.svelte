<script lang="ts">
	import type { RecipePeriodicElementType } from '$stylist/science/interface/recipe/periodic-element-type';

	let props: RecipePeriodicElementType = $props();
</script>

<button
	type="button"
	class="c-periodic-element-type {props.class ?? ''}"
	class:is-selected={props.selected}
	style:--periodic-element-type-accent={props.accent ?? '#777'}
	aria-pressed={props.selected}
	onclick={() => props.onSelect?.(props.category)}
>
	<span class="c-periodic-element-type__swatch"></span>
	<span>{props.category}</span>
</button>

<style>
	.c-periodic-element-type {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		min-height: 1.75rem;
		padding: 0.22rem 0.45rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 70%, var(--periodic-element-type-accent));
		border-radius: 999px;
		background: var(--color-background-primary);
		color: var(--color-text-secondary);
		font-size: 0.72rem;
		cursor: pointer;
	}

	.c-periodic-element-type:hover,
	.c-periodic-element-type:focus-visible,
	.c-periodic-element-type.is-selected {
		background: color-mix(in srgb, var(--color-background-primary) 78%, var(--periodic-element-type-accent));
		color: var(--color-text-primary);
		outline: 2px solid color-mix(in srgb, var(--color-text-primary) 40%, var(--periodic-element-type-accent));
		outline-offset: 1px;
	}

	.c-periodic-element-type__swatch {
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 999px;
		background: var(--periodic-element-type-accent);
	}
</style>
