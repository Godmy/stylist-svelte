<script lang="ts">
	import createBorderState from './state.svelte';
	import type { RecipeBorder } from '$stylist/layout/interface/recipe/border';

	let props: RecipeBorder = $props();
	const state = createBorderState(props);
</script>

<div
	class={['layout-border', state.animated && 'layout-border--animated', props.class]
		.filter(Boolean)
		.join(' ')}
	style={state.inlineStyle}
	{...state.restProps}
>
	{#if props.children}
		{@render props.children()}
	{/if}
</div>

<style>
	.layout-border {
		position: relative;
	}

	.layout-border--animated {
		animation: border-pulse 2s ease-in-out infinite;
	}

	@keyframes border-pulse {
		0%,
		100% {
			border-color: var(--border-color);
		}
		50% {
			border-color: color-mix(in srgb, var(--border-color) 60%, transparent);
		}
	}
</style>
