<script lang="ts">
	let {
		zoom = 1,
		gridSize = 100,
		visible = true,
		color = 'var(--color-border-subtle, #e0e0e0)'
	}: {
		zoom?: number;
		gridSize?: number;
		visible?: boolean;
		color?: string;
	} = $props();
	const opacity = $derived(visible ? Math.max(0.1, Math.min(1, zoom * 0.5)) : 0);
</script>

<svg class="grid" style={`--grid-color: ${color}; --grid-opacity: ${opacity};`}>
	<defs>
		<pattern
			id="grid-pattern"
			x={0}
			y={0}
			width={gridSize}
			height={gridSize}
			patternUnits="userSpaceOnUse"
		>
			<path
				d="M {gridSize} 0 L 0 0 0 {gridSize}"
				fill="none"
				stroke="var(--grid-color)"
				stroke-width="1"
				style="opacity: var(--grid-opacity);"
			/>
		</pattern>
	</defs>
	<rect width="100%" height="100%" fill="url(#grid-pattern)" />
</svg>

<style>
	.grid {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
	}
</style>
