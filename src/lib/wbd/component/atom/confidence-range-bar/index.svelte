<script lang="ts">
	import createConfidenceRangeBarState from '$stylist/wbd/function/state/confidence-range-bar/index.svelte';
	import type { RecipeConfidenceRangeBar } from '$stylist/wbd/interface/recipe/confidence-range-bar';

	let props: RecipeConfidenceRangeBar = $props();
	const state = createConfidenceRangeBarState(props);
</script>

<div class="wbd-range-bar {state.className}">
	<div class="wbd-range-bar__track">
		<div
			class="wbd-range-bar__span"
			style={`left: ${state.optimisticPercent}%; width: ${state.pessimisticPercent - state.optimisticPercent}%;`}
		></div>
		<div class="wbd-range-bar__marker" style={`left: ${state.mostLikelyPercent}%;`}></div>
	</div>
</div>

<style>
	.wbd-range-bar__track {
		position: relative;
		height: 0.5rem;
		border-radius: 9999px;
		background: var(--color-background-secondary, #f1f5f9);
	}
	.wbd-range-bar__span {
		position: absolute;
		top: 0;
		height: 100%;
		border-radius: 9999px;
		background: var(--color-primary-200, #bfdbfe);
	}
	.wbd-range-bar__marker {
		position: absolute;
		top: -0.125rem;
		width: 0.25rem;
		height: 0.75rem;
		border-radius: 9999px;
		background: var(--color-primary-600, #2563eb);
		transform: translateX(-50%);
	}
</style>
