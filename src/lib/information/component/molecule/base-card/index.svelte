<script lang="ts">
	import type { BaseCardProps } from '$stylist/information/type/struct/base-card-props';
	import createBaseCardState from '$stylist/information/function/state/base-card/index.svelte';

	let props: BaseCardProps = $props();
	const state = createBaseCardState(props);
</script>

<div class={state.containerClasses} {...props}>
	{#if state.hasHeader}
		<div class={state.headerClasses}>
			{#if props.title}
				<h3 class="bc-title">{props.title}</h3>
			{/if}
			{#if props.description}
				<p class="bc-description">{props.description}</p>
			{/if}
		</div>
	{/if}

	<div class={state.bodyClasses}>
		{#if props.children}
			{#if props.children}{@render props.children()}{/if}
		{/if}
	</div>
</div>

<style>
	.bc-title {
		font-size: 1.125rem;
		font-weight: 600;
	}
	.bc-description {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
</style>
