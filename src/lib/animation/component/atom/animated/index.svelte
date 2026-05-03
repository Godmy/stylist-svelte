<script lang="ts">
	import type { SlotAnimate as AnimateProps } from '$stylist/animation/interface/slot/animate';
	import { createAnimatedState } from '$stylist/animation/function/state/animated';

	let props: AnimateProps = $props();
	const state = createAnimatedState(props);
</script>

<div
	class={state.classes}
	style={state.inlineStyle}
	{...state.restProps}
>
	{#if props.children}
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	{:else}
		{state.formattedValue}
	{/if}
</div>
