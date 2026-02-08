<script lang="ts">
	import type { AnimatedNumberProps } from '$stylist/design-system';
	import { createAnimatedNumberState } from '../state.svelte';

	let props: AnimatedNumberProps = $props();
	const state = createAnimatedNumberState(props);
</script>

<span class={state.classes}>
	{state.prefix}{state.formattedValue}{state.suffix}
</span>
