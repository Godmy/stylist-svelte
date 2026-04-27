<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
	import type { GraphPortRecipe as GraphPortProps } from '$stylist/science/interface/recipe/graph-port';
	import type { GraphPortDataTypeColor } from '$stylist/canvas/type/struct/graph-port/graph-port-data-type-color';
	import type { TokenPropertyType } from '$stylist/development/type/enum/property-type';
	import { GraphPortStyleManager } from '$stylist/canvas/class/style-manager/graph-port';
	import { createGraphPortState } from '$stylist/canvas/function/state/graph-port';

	let props: GraphPortProps = $props();

	const state = createGraphPortState(props);
	const label = $derived(props.label ?? '');
	const dataType = $derived((props.dataType ?? 'any') as TokenPropertyType);
	const portColor = $derived(
		props.color ?? GraphPortStyleManager.getDataTypeColor(dataType as keyof GraphPortDataTypeColor)
	);

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
	onmousedown={(event) => props.onConnectionStart?.(event)}
	onmouseup={(event) => props.onConnectionEnd?.(event)}
	onclick={(event) => props.onclick?.(event as MouseEvent & { currentTarget: EventTarget & HTMLDivElement })}
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
				{@render props.icon()}}
			{/if}
		</span>
	{/if}
	{#if props.children}
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	{/if}
</div>

<style>
	:global(.graph-port) {
		position: absolute;
		top: 50%;
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-2);
		cursor: crosshair;
		user-select: none;
		transition: transform var(--duration-120) var(--animation-ease), opacity var(--duration-120) var(--animation-ease);
	}

	:global(.graph-port:hover) {
		transform: translateY(-50%) scale(1.1);
	}

	:global(.graph-port:focus-visible) {
		outline: 2px solid var(--graph-port-color, var(--color-border-secondary));
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
		opacity: var(--opacity-0);
	}

	:global(.graph-port:hover .graph-port__hit-area) {
		opacity: var(--opacity-10);
		background: var(--color-graph-port-state-hovered, var(--graph-port-color, var(--color-border-secondary)));
	}

	/* Port circle */
	:global(.graph-port__circle) {
		position: relative;
		width: var(--port-size, 12px);
		height: var(--port-size, 12px);
		border-radius: 50%;
		border: 2px solid var(--color-background-primary);
		box-shadow: var(--shadow-custom27);
		transition: transform var(--duration-120) var(--animation-ease), box-shadow var(--duration-120) var(--animation-ease);
		z-index: var(--z-index-layer1);
	}

	:global(.graph-port:hover .graph-port__circle) {
		transform: scale(1.2);
		box-shadow: var(--shadow-custom34);
	}

	:global(.graph-port--connected .graph-port__circle) {
		border-color: var(--color-background-primary);
		box-shadow: 0 0 0 2px var(--color-graph-port-state-connected), var(--shadow-custom12);
	}

	:global(.graph-port--active .graph-port__circle) {
		box-shadow: 0 0 0 2px var(--color-graph-port-state-active), var(--shadow-custom34);
		animation: graph-port-pulse var(--duration-1500) var(--animation-ease-in-out) infinite;
	}

	@keyframes graph-port-pulse {
		0%, 100% {
			transform: scale(1);
			opacity: var(--opacity-100);
		}
		50% {
			transform: scale(1.3);
			opacity: var(--opacity-80);
		}
	}

	/* Port label */
	:global(.graph-port__label) {
		position: relative;
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-medium);
		color: var(--color-text-primary);
		white-space: nowrap;
		pointer-events: none;
		z-index: var(--z-index-layer1);
	}

	:global(.graph-port[data-port-direction="input"] .graph-port__label) {
		margin-left: var(--spacing-3);
	}

	:global(.graph-port[data-port-direction="output"] .graph-port__label) {
		margin-right: var(--spacing-3);
	}

	/* Port icon */
	:global(.graph-port__icon) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: inherit;
		z-index: var(--z-index-layer1);
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





