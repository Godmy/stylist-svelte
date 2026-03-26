<script lang="ts">
	import type { ChartNameProps } from '$stylist';
	import { createChartNameState } from '$stylist/information/state/chart-function';

	let props: ChartNameProps = $props();
	const state = createChartNameState(props);
</script>

<text
	class={state.classes}
	x={props.x ?? 16}
	y={props.y ?? 24}
	fill={props.color ?? 'var(--color-text-primary)'}
>
	{props.text}
</text>


