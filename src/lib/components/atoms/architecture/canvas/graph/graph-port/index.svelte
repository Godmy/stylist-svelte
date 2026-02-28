<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/components/atoms';
	import type { GraphPortProps, GraphPortDataType } from '$stylist/design-system/contracts';
	import { createGraphPortState } from '$stylist/design-system/models/architecture/graph-port.svelte';
	import { GRAPH_PORT_COLORS } from '$stylist/design-system/tokens';

	let props: GraphPortProps = $props();

	const state = createGraphPortState(props);
	const label = $derived(props.label ?? '');
	const dataType = $derived((props.dataType ?? 'any') as GraphPortDataType);
	const portColor = $derived(props.color ?? GRAPH_PORT_COLORS[dataType as keyof typeof GRAPH_PORT_COLORS]);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				id: _id,
				direction: _direction,
				dataType: _dataType,
				label: _label,
				size: _size,
				index: _index,
				connected: _connected,
				active: _active,
				color: _color,
				icon: _icon,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);

	function handleMouseDown(event: MouseEvent) {
		if (props.onConnectionStart) {
			props.onConnectionStart(event);
		}
	}

	function handleMouseUp(event: MouseEvent) {
		if (props.onConnectionEnd) {
			props.onConnectionEnd(event);
		}
	}

	function handleClick(event: MouseEvent) {
		if (props.onclick) {
			props.onclick(event);
		}
	}
</script>

<div
	class={`${state.stateClasses} ${state.sizeClasses} ${props.class ?? ''}`}
	style={state.styles}
	data-port-id={props.id}
	data-port-direction={props.direction}
	data-port-type={dataType}
	data-port-connected={state.connected}
	aria-label={label || `Port ${props.id}`}
	role="button"
	tabindex={0}
	onmousedown={handleMouseDown}
	onmouseup={handleMouseUp}
	onclick={handleClick}
	{...restProps}
>
	<div class="graph-port__hit-area" aria-hidden="true"></div>
	<div class="graph-port__circle" style={`background-color: ${portColor};`}></div>
	{#if label}
		<span class="graph-port__label">{label}</span>
	{/if}
	{#if props.icon}
		<span class="graph-port__icon">
			{#if typeof props.icon === 'string'}
				<BaseIcon name={props.icon} size={14} />
			{:else}
				{@render props.icon?.()}
			{/if}
		</span>
	{/if}
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>

<style>
	:global(.graph-port) {
		position: absolute;
		top: 50%;
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		cursor: crosshair;
		user-select: none;
		transition: transform 120ms ease, opacity 120ms ease;
	}

	:global(.graph-port:hover) {
		transform: translateY(-50%) scale(1.1);
	}

	:global(.graph-port:focus-visible) {
		outline: 2px solid var(--graph-port-color, #9e9e9e);
		outline-offset: 2px;
	}

	/* Hit area for easier interaction */
	:global(.graph-port__hit-area) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: var(--hit-area-size, 24px);
		height: var(--hit-area-size, 24px);
		border-radius: 50%;
		cursor: crosshair;
		opacity: 0;
	}

	:global(.graph-port:hover .graph-port__hit-area) {
		opacity: 0.1;
		background: var(--graph-port-color, #9e9e9e);
	}

	/* Port circle */
	:global(.graph-port__circle) {
		position: relative;
		width: var(--port-size, 12px);
		height: var(--port-size, 12px);
		border-radius: 50%;
		border: 2px solid #1e1e1e;
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.3);
		transition: transform 120ms ease, box-shadow 120ms ease;
		z-index: 1;
	}

	:global(.graph-port:hover .graph-port__circle) {
		transform: scale(1.2);
		box-shadow: 0 2px 4px rgb(0 0 0 / 0.4);
	}

	:global(.graph-port--connected .graph-port__circle) {
		border-color: #1e1e1e;
		box-shadow: 0 0 0 2px #1e1e1e, 0 2px 4px rgb(0 0 0 / 0.3);
	}

	:global(.graph-port--active .graph-port__circle) {
		animation: graph-port-pulse 1.5s ease-in-out infinite;
	}

	@keyframes graph-port-pulse {
		0%, 100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.3);
			opacity: 0.8;
		}
	}

	/* Port label */
	:global(.graph-port__label) {
		position: relative;
		font-size: 0.6875rem;
		font-weight: 500;
		color: #e5e7eb;
		white-space: nowrap;
		pointer-events: none;
		z-index: 1;
	}

	:global(.graph-port[data-port-direction="input"] .graph-port__label) {
		margin-left: 0.75rem;
	}

	:global(.graph-port[data-port-direction="output"] .graph-port__label) {
		margin-right: 0.75rem;
	}

	/* Port icon */
	:global(.graph-port__icon) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: inherit;
		z-index: 1;
	}

	/* Size variants */
	:global(.graph-port--xs) {
		--port-size: 8px;
		--hit-area-size: 16px;
	}

	:global(.graph-port--sm) {
		--port-size: 10px;
		--hit-area-size: 20px;
	}

	:global(.graph-port--md) {
		--port-size: 12px;
		--hit-area-size: 24px;
	}

	:global(.graph-port--lg) {
		--port-size: 16px;
		--hit-area-size: 32px;
	}

	/* Position variants */
	:global(.graph-port[data-port-direction="input"]) {
		left: -6px;
		transform: translate(-100%, -50%);
	}

	:global(.graph-port[data-port-direction="output"]) {
		right: -6px;
		transform: translate(100%, -50%);
	}

	:global(.graph-port:hover) {
		transform: translateY(-50%) scale(1.1);
	}

	:global(.graph-port[data-port-direction="input"]:hover) {
		transform: translate(-100%, -50%) scale(1.1);
	}

	:global(.graph-port[data-port-direction="output"]:hover) {
		transform: translate(100%, -50%) scale(1.1);
	}
</style>
