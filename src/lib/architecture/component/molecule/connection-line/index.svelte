<script lang="ts">
	import type { RecipeConnectionLine } from '$stylist/architecture/interface/recipe/connection-line';
	import createConnectionLineState from '$stylist/architecture/function/state/connection-line/index.svelte';

	let props: RecipeConnectionLine = $props();
	const state = createConnectionLineState(props);
</script>

<g class={state.classes} data-connection-id={props.id}>
	{#if state.showArrow}
		<defs>
			<marker
				id={`arrow-${props.id}`}
				markerWidth={state.arrowSize}
				markerHeight={state.arrowSize * 0.7}
				refX={state.arrowSize * 0.9}
				refY={state.arrowSize * 0.35}
				orient="auto"
			>
				<polygon
					points={`0 0, ${state.arrowSize} ${state.arrowSize * 0.35}, 0 ${state.arrowSize * 0.7}`}
					fill={state.activeColor}
				/>
			</marker>
		</defs>
	{/if}

	<path
		d={state.pathData.path}
		class="connection-line__path"
		fill="none"
		stroke={state.styles.stroke}
		stroke-width={state.styles['stroke-width']}
		stroke-linecap="round"
		{...(state.showArrow ? { 'marker-end': `url(#arrow-${props.id})` } : {})}
	>
		{#if state.animated}
			<animate
				attributeName="stroke-dasharray"
				from="0, 1000"
				to="1000, 0"
				dur="1.5s"
				repeatCount="indefinite"
			/>
		{/if}
	</path>

	<path
		d={state.pathData.path}
		class="connection-line__hit-area"
		fill="none"
		stroke="transparent"
		stroke-width="calc(var(--connection-stroke-width, 2px) + 10px)"
		style="pointer-events: stroke;"
	/>

	{#if props.label}
		<text
			x={state.pathData.midPoint.x}
			y={state.pathData.midPoint.y}
			text-anchor="middle"
			dominant-baseline="middle"
			class="connection-line__label"
			fill="var(--color-text-primary)"
			font-size="10"
			font-weight="500"
		>
			{props.label}
		</text>
	{/if}
</g>

<style>
	:global(.connection-line) {
		cursor: pointer;
		transition: opacity var(--duration-120) var(--animation-ease);
	}

	:global(.connection-line__path) {
		transition:
			stroke var(--duration-120) var(--animation-ease),
			stroke-width var(--duration-120) var(--animation-ease);
	}

	:global(.connection-line--animated .connection-line__path) {
		stroke-dasharray: 10, 5;
	}

	:global(.connection-line--active .connection-line__path) {
		stroke: var(--connection-active-color, var(--color-primary-500));
		stroke-width: calc(var(--connection-stroke-width, 2px) + 2px);
		filter: drop-shadow(0 0 4px var(--connection-active-color, var(--color-primary-500)));
	}

	:global(.connection-line:hover .connection-line__path) {
		stroke: var(--connection-hover-color, var(--color-primary-400));
	}

	:global(.connection-line__hit-area) {
		pointer-events: stroke;
		cursor: pointer;
	}

	:global(.connection-line__label) {
		user-select: none;
		pointer-events: none;
	}

	:global(.connection-line--dashed .connection-line__path) {
		stroke-dasharray: 5, 5;
	}

	:global(.connection-line--dotted .connection-line__path) {
		stroke-dasharray: 2, 4;
	}
</style>
