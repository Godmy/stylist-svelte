<script lang="ts">
	import type { ConnectionLineProps } from '$stylist';
	import { createConnectionLineState } from '$stylist/information/state/connection-line';
	import { ConnectionLineStyleManager } from '$stylist';

	let props: ConnectionLineProps = $props();

	const state = createConnectionLineState(props);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				id: _id,
				startX: _startX,
				startY: _startY,
				endX: _endX,
				endY: _endY,
				type: _type,
				lineStyle: _lineStyle,
				strokeWidth: _strokeWidth,
				color: _color,
				activeColor: _activeColor,
				hoverColor: _hoverColor,
				active: _active,
				animated: _animated,
				showArrow: _showArrow,
				arrowSize: _arrowSize,
				label: _label,
				labelPosition: _labelPosition,
				onclick: _onclick,
				onmouseenter: _onmouseenter,
				onmouseleave: _onmouseleave,
				...rest
			} = props;
			return rest;
		})()
	);

	function handleClick(event: MouseEvent) {
		if (props.onclick) {
			props.onclick(event);
		}
	}

	function handleMouseEnter(event: MouseEvent) {
		if (props.onmouseenter) {
			props.onmouseenter(event);
		}
	}

	function handleMouseLeave(event: MouseEvent) {
		if (props.onmouseleave) {
			props.onmouseleave(event);
		}
	}

	// Генерируем уникальный ID для маркера стрелки
	const arrowMarkerId = $derived(`arrowhead-${props.id}-${state.arrowSize}`);
</script>

<g
	class={`${state.classes}`}
	style={state.styles}
	data-connection-id={props.id}
	data-connection-active={state.active}
	onclick={handleClick}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	{...restProps}
>
	<!-- Определяем маркер стрелки -->
	{#if state.showArrow}
		<defs>
			{@html ConnectionLineStyleManager.getArrowMarker(state.arrowSize, state.active ? state.activeColor : state.color)}
		</defs>
	{/if}

	<!-- Основная линия -->
	<path
		d={state.pathData.path}
		class="connection-line__path"
		fill="none"
		stroke="var(--connection-color)"
		stroke-width="var(--connection-stroke-width)"
		stroke-linecap="round"
		{...(state.showArrow ? { 'marker-end': `url(#${arrowMarkerId})` } : {})}
	>
		{#if state.animated}
			<animate
				attributeName="stroke-dasharray"
				from="0, {state.pathData.length}"
				to="{state.pathData.length}, 0"
				dur="1.5s"
				repeatCount="indefinite"
			/>
		{/if}
	</path>

	<!-- Невидимая линия для улучшения hit area -->
	<path
		d={state.pathData.path}
		class="connection-line__hit-area"
		fill="none"
		stroke="transparent"
		stroke-width="calc(var(--connection-stroke-width) + 10px)"
		style="pointer-events: stroke;"
	/>

	<!-- Метка линии -->
	{#if state.hasLabel}
		<g
			transform={`translate(${state.pathData.midPoint.x}, ${state.pathData.midPoint.y}) rotate(${state.pathData.angle})`}
			class="connection-line__label-group"
		>
			<rect
				x="-20"
				y="-10"
				width="40"
				height="20"
				fill="var(--color-background-primary)"
				fill-opacity="0.9"
				stroke="var(--color-border-primary)"
				stroke-width="1"
				rx="4"
			/>
			<text
				x="0"
				y="0"
				text-anchor="middle"
				dominant-baseline="middle"
				class="connection-line__label"
				fill="var(--color-text-primary)"
				font-size="10"
				font-weight="500"
			>
				{props.label}
			</text>
		</g>
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

