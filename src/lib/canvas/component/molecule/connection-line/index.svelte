<script lang="ts">
	import type { ConnectionLineRecipe } from '$stylist/canvas/interface/recipe/connection-line';
	import { createConnectionLineState } from '$stylist/canvas/function/state/connection-line';

	let props: ConnectionLineRecipe = $props();
	const state = createConnectionLineState(props);
</script>

<g
	class={state.classes}
	data-connection-id={state.id}
>
	{#if state.showArrow}
		<defs>
			{@html state.arrowMarkerHtml}
		</defs>
	{/if}

	<path
		d={`M ${state.startX} ${state.startY} C ${state.startX + 50} ${state.startY}, ${state.endX - 50} ${state.endY}, ${state.endX} ${state.endY}`}
		class={state.pathClasses}
		fill="none"
		stroke={state.color}
		stroke-width={state.width}
		stroke-dasharray={state.dashArray}
		stroke-linecap="round"
		{...(state.showArrow ? { 'marker-end': `url(#${state.arrowMarkerId})` } : {})}
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
		d={`M ${state.startX} ${state.startY} C ${state.startX + 50} ${state.startY}, ${state.endX - 50} ${state.endY}, ${state.endX} ${state.endY}`}
		class={state.hitAreaClasses}
		fill="none"
		stroke="transparent"
		stroke-width="calc(var(--connection-stroke-width) + 10px)"
		style="pointer-events: stroke;"
	/>

	{#if state.label}
		<text
			x={(state.startX + state.endX) / 2}
			y={(state.startY + state.endY) / 2}
			text-anchor="middle"
			dominant-baseline="middle"
			class="connection-line__label"
			fill="var(--color-text-primary)"
			font-size="10"
			font-weight="500"
		>
			{state.label}
		</text>
	{/if}
</g>

<style>
	:global(.connection-line) {
		cursor: pointer;
		transition: opacity var(--duration-120) var(--animation-ease);
	}

	:global(.connection-line__path) {
		transition: stroke var(--duration-120) var(--animation-ease), stroke-width var(--duration-120) var(--animation-ease);
	}

	:global(.connection-line--animated .connection-line__path) {
		stroke-dasharray: 10, 5;
	}

	:global(.connection-line--active .connection-line__path) {
		stroke: var(--connection-active-color, var(--color-primary-500));
		stroke-width: calc(var(--connection-stroke-width) + 2px);
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
