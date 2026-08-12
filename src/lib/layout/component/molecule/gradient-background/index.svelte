<script lang="ts">
	import type { RecipeGradientBackground } from '$stylist/layout/interface/recipe/gradient-background';
	import createGradientBackgroundState from './state.svelte';

	let props: RecipeGradientBackground = $props();
	const state = createGradientBackgroundState(props);
</script>

<div
	class={['layout-gradient-bg', props.class].filter(Boolean).join(' ')}
	role="presentation"
	{...state.restProps}
>
	<div class="layout-gradient-bg__layer" style={state.inlineStyle} aria-hidden="true"></div>

	{#if props.children}
		<div class="layout-gradient-bg__content">
			{@render props.children()}
		</div>
	{/if}
</div>

<style>
	.layout-gradient-bg {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}

	.layout-gradient-bg__layer {
		position: absolute;
		inset: 0;
		background-size: 400% 400%;
		animation: gradient-shift var(--duration-s15, 15s) var(--animation-ease, ease) infinite;
	}

	.layout-gradient-bg__content {
		position: relative;
		z-index: var(--z-index-docked, 40);
	}

	@keyframes gradient-shift {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
