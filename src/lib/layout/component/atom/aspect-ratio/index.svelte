<script lang="ts">
	import type { AspectRatioProps } from '$stylist/layout/type/struct/aspect-ratio';
	import { createAspectRatioState } from '$stylist/layout/function/state/aspect-ratio';

	let props: AspectRatioProps = $props();
	const state = createAspectRatioState(props);
</script>

<div style:--aspect-ratio={state.ratio} class={state.classes} {...state.restProps}>
	{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
</div>





