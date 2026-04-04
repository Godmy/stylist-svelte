<script lang="ts">
	import type { ConnectionLineRecipe } from '$stylist/canvas/interface/recipe/connection-line';
	import { createConnectionLineState } from '$stylist/canvas/function/state/connection-line';

	let props: ConnectionLineRecipe = $props();
	const connState = createConnectionLineState(props);
</script>

<g
	class={connState.classes}
	data-connection-id={connState.id}
>
	{#if connState.showArrow}
		<defs>
			{@html connState.arrowMarkerHtml}
		</defs>
	{/if}

	<path
		d={`M ${connState.startX} ${connState.startY} C ${connState.startX + 50} ${connState.startY}, ${connState.endX - 50} ${connState.endY}, ${connState.endX} ${connState.endY}`}
		class={connState.pathClasses}
		fill="none"
		stroke={connState.color}
		stroke-width={connState.width}
		stroke-dasharray={connState.dashArray}
		stroke-linecap="round"
		{...(connState.showArrow ? { 'marker-end': `url(#${connState.arrowMarkerId})` } : {})}
	>
		{#if connState.animated}
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
		d={`M ${connState.startX} ${connState.startY} C ${connState.startX + 50} ${connState.startY}, ${connState.endX - 50} ${connState.endY}, ${connState.endX} ${connState.endY}`}
		class={connState.hitAreaClasses}
		fill="none"
		stroke="transparent"
		stroke-width="calc(var(--connection-stroke-width) + 10px)"
		style="pointer-events: stroke;"
	/>

	{#if connState.label}
		<text
			x={(connState.startX + connState.endX) / 2}
			y={(connState.startY + connState.endY) / 2}
			text-anchor="middle"
			dominant-baseline="middle"
			class="connection-line__label"
			fill="var(--color-text-primary)"
			font-size="10"
			font-weight="500"
		>
			{connState.label}
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
