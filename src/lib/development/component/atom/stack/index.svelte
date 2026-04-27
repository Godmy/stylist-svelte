<script lang="ts">
	import type { StackProps } from '$stylist/layout/type/struct/stack';
	import { createStackState } from '$stylist/layout/function/state/stack';

	let props: StackProps = $props();
	const state = createStackState(props);
</script>

<div
	style:gap={state.gap}
	class={state.classes}
	role="group"
	aria-label="Stack layout container"
	{...state.restProps}
>
	{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
</div>





