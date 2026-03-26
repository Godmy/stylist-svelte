<script lang="ts">
	import type { GraphEdgeProps } from '$stylist/information/interface/graph';
	import { createGraphEdgeState } from '$stylist/architecture/state/graph-edge';

	let props: GraphEdgeProps = $props();

	const state = createGraphEdgeState(props);
	const fromNodeId = $derived(props.fromNodeId);
	const toNodeId = $derived(props.toNodeId);
	const edgeLabel = $derived(props.label ?? `${fromNodeId} ${state.directed ? '->' : '-'} ${toNodeId}`);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				fromNodeId: _fromNodeId,
				toNodeId: _toNodeId,
				directed: _directed,
				type: _type,
				label: _label,
				active: _active,
				style: _style,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div
	class={`${state.classes} ${props.class ?? ''}`}
	style={state.styles}
	data-edge-type={state.type}
	data-edge-active={state.active}
	aria-label={edgeLabel}
	{...restProps}
>
	<div class="graph-edge__line" aria-hidden="true"></div>
	{#if state.directed}
		<div class="graph-edge__arrow" aria-hidden="true"></div>
	{/if}
	<span class="graph-edge__label">{edgeLabel}</span>
</div>

<style>
	:global(.graph-edge) {
		position: absolute;
		left: var(--edge-left, 0px);
		top: var(--edge-top, 0px);
		width: var(--edge-length, 120px);
		transform: translateY(-50%) rotate(var(--edge-angle, 0deg));
		transform-origin: left center;
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-1);
		color: var(--edge-color, var(--color-text-secondary));
		pointer-events: none;
	}

	:global(.graph-edge__line) {
		flex: 1 1 auto;
		height: var(--edge-thickness, 2px);
		background: currentColor;
		border-radius: var(--border-radius-full);
		opacity: var(--opacity-80);
	}

	:global(.graph-edge__arrow) {
		width: var(--size-0);
		height: var(--size-0);
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-left: 8px solid currentColor;
	}

	:global(.graph-edge__label) {
		display: var(--edge-label-display, inline-flex);
		position: absolute;
		left: 50%;
		top: calc(-0.75rem - var(--edge-label-offset, 0px));
		transform: translateX(-50%) rotate(calc(-1 * var(--edge-angle, 0deg)));
		transform-origin: center;
		padding: var(--spacing-1) var(--spacing-1);
		border-radius: var(--border-radius-full);
		background: color-mix(in srgb, var(--color-background-secondary) 95%, transparent);
		border: 1px solid color-mix(in srgb, var(--color-border-secondary) 80%, transparent);
		color: var(--color-text-primary);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
		line-height: var(--line-height-none);
		white-space: nowrap;
	}

	:global(.graph-edge.graph-edge--curve .graph-edge__line) {
		height: var(--spacing-3);
		background: transparent;
		border-top: var(--edge-thickness, 2px) solid currentColor;
		border-right: var(--edge-thickness, 2px) solid currentColor;
		border-radius: 0 var(--border-radius-full) 0 0;
		opacity: var(--opacity-100);
	}

	:global(.graph-edge.graph-edge--polyline .graph-edge__line) {
		height: var(--edge-thickness, 2px);
		background: var(--gradient-custom122);
	}

	:global(.graph-edge.directed) {
		color: var(--edge-directed-color, var(--edge-color, var(--color-primary-600)));
	}

	:global(.graph-edge.active) {
		color: var(--edge-active-color, var(--color-text-primary));
	}
</style>

