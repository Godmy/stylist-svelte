<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';
	import Spinner from '$stylist/information/component/atom/spinner/index.svelte';
	import { createLoadingState } from '$stylist/information/function/state/loading/index.svelte';
	import type { RecipeLoading } from '$stylist/information/interface/recipe/loading';

	let props: RecipeLoading & HTMLAttributes<HTMLDivElement> = $props();
	const state = createLoadingState(props);
</script>

{#if state.loading}
	<div class={state.classes} style={props.style} role="status" aria-live="polite">
		<Spinner size={state.size} label={state.label} />
		<span>{state.label}</span>
	</div>
{/if}

<style>
	.information-loading {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		color: var(--color-text-secondary);
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.information-loading--centered {
		justify-content: center;
		width: 100%;
		min-height: 4rem;
	}
</style>
