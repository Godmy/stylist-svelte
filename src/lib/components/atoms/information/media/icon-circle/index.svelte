<script lang="ts">
	import type { IconCircleProps } from '$stylist/design-system';
	import { createIconCircleState } from '../state.svelte';

	let props: IconCircleProps = $props();
	// Cast to avoid type mismatch
	const state = createIconCircleState(props as any);
</script>

<div class={state.classes}>
	{#if props.icon}
		{@render props.icon()}
	{/if}
</div>
