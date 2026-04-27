<script lang="ts">
	import type { ChartNameRecipe as ChartNameProps } from '$stylist/chart/interface/recipe/chart-name';
	import { createChartNameState } from '$stylist/chart/function/state/chart-name';

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


