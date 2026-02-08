<script lang="ts">
	import type { ColorSwatchProps } from '$stylist/design-system';
	import { createColorSwatchState } from '../state.svelte';

	let props: ColorSwatchProps = $props();
	const state = createColorSwatchState(props);
</script>

<div class={state.classes} style={state.style} {...props}>
	{#if props.content}
		<div class="flex h-full w-full items-center justify-center">
			{@render props.content()}
		</div>
	{/if}
</div>
