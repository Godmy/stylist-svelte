<script lang="ts">
	import type { ChartBackgroundProps } from '$stylist/design-system';
	import { createChartBackgroundState } from '$stylist/design-system/models/information/chart-function.svelte';

	let props: ChartBackgroundProps = $props();
	const state = createChartBackgroundState(props);
</script>

<rect
	class={state.classes}
	x="0"
	y="0"
	rx="8"
	ry="8"
	width={props.width}
	height={props.height}
	fill={props.fill ?? 'var(--color-background-secondary)'}
	stroke={props.stroke ?? 'var(--color-border-primary)'}
	stroke-width="1"
/>
