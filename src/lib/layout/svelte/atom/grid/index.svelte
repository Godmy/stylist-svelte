<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { GridStyleManager } from '$stylist/layout/class/style-manager/grid';

	type GridProps = SVGAttributes<SVGSVGElement> & {
		class?: string;
		zoom?: number;
		gridSize?: number;
		color?: string;
		visible?: boolean;
	};

	const contract: GridProps = $props();
	const { zoom = 1, gridSize = 100, color = 'var(--color-border-subtle, #e0e0e0)' } = contract;
	const opacity = $derived(contract.visible ? Math.max(0.1, Math.min(1, (contract.zoom ?? zoom) * 0.5)) : 0);
	const classString = typeof contract.class === 'string' ? contract.class : '';
</script>

<svg class={GridStyleManager.getGridClass(classString)} style={GridStyleManager.getGridStyle(color, opacity)}>
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
