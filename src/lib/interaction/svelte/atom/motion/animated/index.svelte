<script lang="ts">
	import type { AnimateProps } from '$stylist/interaction/interface/proto/animate';
	import { createAnimatedState } from '$stylist/interaction/function/state/animated';

	let props: AnimateProps = $props();
	const state = createAnimatedState(props);
</script>

<div
	class={state.classes}
	style={state.inlineStyle}
	{...state.restProps}
>
	{#if props.children}
		{@render props.children?.()}
	{:else}
		{state.formattedValue}
	{/if}
</div>
