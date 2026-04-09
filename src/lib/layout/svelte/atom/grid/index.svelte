<script lang="ts">
	import type { GridContract } from '$stylist/layout/type/struct/grid';
	import { createGridState } from '$stylist/layout/function/state/grid';

	let props: GridContract = $props();
	const state = createGridState(props);
</script>

<svg class={state.classes} style={state.style} {...state.restProps}>
	<defs>
		<pattern
			id="grid-pattern"
			x={0}
			y={0}
			width={state.gridSize}
			height={state.gridSize}
			patternUnits="userSpaceOnUse"
		>
			<path
				d="M {state.gridSize} 0 L 0 0 0 {state.gridSize}"
				fill="none"
				stroke="var(--grid-color)"
				stroke-width="1"
				style="opacity: var(--grid-opacity);"
			/>
		</pattern>
	</defs>
	<rect width="100%" height="100%" fill="url(#grid-pattern)" />
</svg>
