<script lang="ts">
	import { createSvgState, type SvgProps } from '$stylist/media/function/state/svg';

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
