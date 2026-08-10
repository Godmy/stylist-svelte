<script lang="ts">
	import type { NodeDotProps } from '$stylist/layout/interface/recipe/node-dot';
	import createNodeDotState from './state.svelte';

	let props: NodeDotProps = $props();
	const state = createNodeDotState(props);
</script>

<div
	class="layout-node-dot"
	style:--dot-size="{state.size}px"
	style:--dot-color={state.accent}
	style:--dot-opacity={state.opacity}
	role="img"
	aria-label="Node dot"
></div>

<style>
	.layout-node-dot {
		width: var(--dot-size, 16px);
		height: var(--dot-size, 16px);
		border-radius: 9999px;
		background: var(--dot-color, var(--color-accent, #3498db));
		opacity: var(--dot-opacity, 0.8);
		box-shadow: 0 0 8px
			color-mix(in srgb, var(--dot-color, var(--color-accent, #3498db)) 60%, transparent);
		transition: all 180ms var(--easing-standard, ease);
	}
</style>
