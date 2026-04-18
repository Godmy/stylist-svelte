<script lang="ts">
	import { createSvgState } from '$stylist/media/function/state/svg';
	import type { SvgProps } from '$stylist/media/interface/recipe/svg-svg-props';

	let props: SvgProps = $props();
	const state = createSvgState(props);
</script>

<span class="inline-flex items-center justify-center" {...state.restProps}>
	{@html state.markup}
</span>

<style>
	span :global(svg) {
		display: block;
	}
</style>
