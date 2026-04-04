<script lang="ts">
	import type { ClickProps } from '$stylist/interaction/interface/proto/clickable';
	import { createClickableState } from '$stylist/interaction/function/state/clickable';

	let props: ClickProps = $props();
	const state = createClickableState(props);
</script>

<div
	class={state.classes}
	style="cursor: {state.cursor};"
	{...state.restProps}
	onclick={state.handleClick}
	ondblclick={state.handleDblClick}
	oncontextmenu={state.handleContextMenu}
>
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>
