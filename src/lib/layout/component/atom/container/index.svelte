<script lang="ts">
	import type { RecipeContainer } from '$stylist/layout/interface/recipe/container';
	import createContainerState from './state.svelte';

	let props: RecipeContainer = $props();
	const state = createContainerState(props);

	const MAX_WIDTH: Record<string, string> = {
		xs: '480px',
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		'2xl': '1536px',
		'1/4': '25%',
		'1/3': '33.333333%',
		'2/5': '40%',
		'1/2': '50%',
		'3/5': '60%',
		'2/3': '66.666667%',
		'3/4': '75%',
		full: '100%'
	};

	const maxWidth = $derived(MAX_WIDTH[state.size] ?? '100%');
</script>

<div
	class={['layout-container', props.class].filter(Boolean).join(' ')}
	style:--max-width={maxWidth}
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.layout-container {
		margin-inline: auto;
		width: 100%;
		max-width: var(--max-width, 100%);
		padding-inline: 1rem;
	}

	@media (min-width: 640px) {
		.layout-container {
			padding-inline: 1.5rem;
		}
	}

	@media (min-width: 1024px) {
		.layout-container {
			padding-inline: 2rem;
		}
	}
</style>
