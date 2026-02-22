<script lang="ts">
	import type { GraphEdgeProps } from '$stylist/design-system';
	import { createGraphEdgeState } from '$stylist/design-system/models/architecture/graph-edge.svelte';

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
		gap: 0.25rem;
		color: var(--edge-color, #64748b);
		pointer-events: none;
	}

	:global(.graph-edge__line) {
		flex: 1 1 auto;
		height: var(--edge-thickness, 2px);
		background: currentColor;
		border-radius: 999px;
		opacity: 0.8;
	}

	:global(.graph-edge__arrow) {
		width: 0;
		height: 0;
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
		padding: 0.125rem 0.375rem;
		border-radius: 999px;
		background: rgb(248 250 252 / 0.95);
		border: 1px solid rgb(203 213 225 / 0.8);
		color: #0f172a;
		font-size: 0.65rem;
		font-weight: 600;
		line-height: 1;
		white-space: nowrap;
	}

	:global(.graph-edge.graph-edge--curve .graph-edge__line) {
		height: 12px;
		background: transparent;
		border-top: var(--edge-thickness, 2px) solid currentColor;
		border-right: var(--edge-thickness, 2px) solid currentColor;
		border-radius: 0 999px 0 0;
		opacity: 1;
	}

	:global(.graph-edge.graph-edge--polyline .graph-edge__line) {
		height: var(--edge-thickness, 2px);
		background:
			linear-gradient(currentColor, currentColor) left center / 45% 100% no-repeat,
			linear-gradient(currentColor, currentColor) center center / 1px 8px no-repeat,
			linear-gradient(currentColor, currentColor) right center / 45% 100% no-repeat;
	}

	:global(.graph-edge.directed) {
		color: var(--edge-directed-color, var(--edge-color, #2563eb));
	}

	:global(.graph-edge.active) {
		color: var(--edge-active-color, #0f172a);
	}
</style>
