<script lang="ts">
	import type { GridSvgProps } from '$stylist/layout/type/struct/grid/grid-svg-props';
	import { stateFn } from '$stylist/layout/function/state/grid-svg';

	let props: GridSvgProps = $props();
	const state = stateFn(props);
</script>

<svg class={state.hostClass} style={state.svgStyle} {...state.restProps}>
	<defs>
		<pattern
			id="grid-pattern"
			x={0}
			y={0}
			width={state.scaledSize}
			height={state.scaledSize}
			patternUnits="userSpaceOnUse"
		>
			<path
				d="M {state.scaledSize} 0 L 0 0 0 {state.scaledSize}"
				fill="none"
				stroke="var(--grid-color)"
				stroke-width="1"
				style="opacity: var(--grid-opacity);"
			/>
		</pattern>
	</defs>
	<rect width="100%" height="100%" fill="url(#grid-pattern)" />
</svg>
