<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import type { FaviconProps } from '$stylist/design-system';
	import { createFaviconState } from '../state.svelte';

	type Props = FaviconProps & HTMLImgAttributes;

	let { error = false, onError, content, ...restProps }: Props = $props();

	const state = createFaviconState(restProps);

	function handleError() {
		if (onError) onError();
	}
</script>

{#if state.faviconUrl && !error}
	<img
		src={state.faviconUrl}
		width={state.size}
		height={state.size}
		class={state.classes.image}
		onerror={handleError}
		{...restProps}
	/>
{:else}
	<div class={state.classes.fallback} style={state.sizeStyle}>
		{#if content}
			{@render content()}
		{:else}
			?
		{/if}
	</div>
{/if}
