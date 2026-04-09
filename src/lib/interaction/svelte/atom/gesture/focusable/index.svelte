<script lang="ts">
	import type { FocusProps } from '$stylist/interaction/interface/proto/focusable-props';
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
		{@render props.children?.()}
	{/if}
</div>
