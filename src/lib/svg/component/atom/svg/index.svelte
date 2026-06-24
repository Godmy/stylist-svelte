<script lang="ts">
	import createSvgState from '$stylist/svg/function/state/svg/index.svelte';
	import type { RecipeSvg } from '$stylist/svg/interface/recipe/svg';

	let props: RecipeSvg = $props();
	const state = createSvgState(props);
</script>

<span class="svg-wrap">
	{@html state.markup}
</span>

<style>
	.svg-wrap {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
	.svg-wrap :global(svg) {
		display: block;
	}
</style>
