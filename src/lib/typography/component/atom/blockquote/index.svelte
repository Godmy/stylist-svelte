<script lang="ts">
	import type { BlockquoteRecipe } from '$stylist/typography/interface/recipe/blockquote';
	import createBlockquoteState from '$stylist/typography/function/state/blockquote/index.svelte';

	let props: BlockquoteRecipe = $props();

	const state = createBlockquoteState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<blockquote class={state.classes} cite={state.citeUrl} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
	{#if state.sourceLabel}
		<footer class={state.footerClasses}>
			{state.footerPrefix}{state.sourceLabel}
		</footer>
	{/if}
</blockquote>

<style>
	.c-typography-blockquote {
		margin: 0;
		padding-inline-start: 0;
		color: var(--color-text-secondary);
		font-style: italic;
	}

	.c-typography-blockquote--bordered {
		border-inline-start: 4px solid var(--color-border-primary);
		padding-inline-start: 1rem;
	}

	.c-typography-blockquote--surface {
		padding: 1rem 1.25rem;
		border-radius: 1rem;
		background: color-mix(
			in srgb,
			var(--color-background-secondary) 82%,
			var(--color-background-primary) 18%
		);
	}

	.c-typography-blockquote--bordered.c-typography-blockquote--surface {
		padding-inline-start: calc(1rem + 4px);
	}

	.c-typography-blockquote__footer {
		margin-top: 0.75rem;
		font-size: var(--text-size-sm, 0.875rem);
		font-style: normal;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}
</style>
