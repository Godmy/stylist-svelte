<script lang="ts">
	import type { NodeDotProps } from '$stylist/typography/function/state/node-dot';
	import { createNodeDotState } from '$stylist/typography/function/state/node-dot';

	let props: NodeDotProps = $props();
	const state = createNodeDotState(props);
</script>

<div
	class="node-dot"
	style={state.style}
	role="img"
	aria-label="Node dot"
></div>

<style>
	.node-dot {
		border-radius: 9999px;
		transition: all 180ms var(--easing-standard, ease);
	}
</style>
