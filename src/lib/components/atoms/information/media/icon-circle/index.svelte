<script lang="ts">
	import type { IconCircleProps } from '$stylist/design-system';
	import { createIconCircleState } from '../state.svelte';

	let props: IconCircleProps = $props();
	const state = createIconCircleState(props);
</script>

<div class={state.classes}>
	{props.icon}
</div>
