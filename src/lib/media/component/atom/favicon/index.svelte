<script lang="ts">
	import type { FaviconProps } from '$stylist/media/type/struct/favicon';
	import { createFaviconState } from '$stylist/media/function/state/favicon';

	let props: FaviconProps = $props();
	const state = createFaviconState(props);
</script>

{#if state.faviconUrl && !state.error}
	<img
		src={state.faviconUrl}
		width={state.size}
		height={state.size}
		class={state.classes.image}
		onerror={() => state.handleError()}
		{...state.restProps}
	/>
{:else}
	<div class={state.classes.fallback} style={state.sizeStyle}>
		{#if props.content}
			{@render props.content()}
		{:else}
			?
		{/if}
	</div>
{/if}
