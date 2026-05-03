<script lang="ts">
	import type { SlotFocusable as FocusProps } from '$stylist/interaction/interface/slot/focusable';
	import { createFocusableState } from '$stylist/interaction/function/state/focusable';

	let props: FocusProps = $props();
	const state = createFocusableState(props);
</script>

<div
	class={state.classes}
	{...state.restProps}
	onfocus={state.handleFocus}
	onblur={state.handleBlur}
>
	{#if props.children}
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	{/if}
</div>
