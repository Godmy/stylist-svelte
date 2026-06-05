<script lang="ts">
	import createSvgState from '$stylist/media/function/state/svg/index.svelte';
	import type { SvgProps } from '$stylist/media/interface/recipe/svg-svg-props';

	let props: SvgProps = $props();
	const state = createSvgState(props);
</script>

<span class="svg-wrap" {...state.restProps}>
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
