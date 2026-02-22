<script lang="ts">
	import type { GraphNodeProps } from '$stylist/design-system';
	import { createGraphNodeState } from '$stylist/design-system/models/architecture/graph-node.svelte';

	let props: GraphNodeProps = $props();

	const state = createGraphNodeState(props);
	const label = $derived(props.label ?? props.id);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				id: _id,
				x: _x,
				y: _y,
				label: _label,
				type: _type,
				color: _color,
				size: _size,
				selected: _selected,
				interactive: _interactive,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div
	class={`${state.stateClasses} ${state.sizeClasses} ${props.class ?? ''}`}
	style={state.style}
	data-node-id={props.id}
	data-node-type={props.type ?? 'default'}
	aria-label={`Graph node ${label}`}
	{...restProps}
>
	{#if props.children}
		{@render props.children?.()}
	{:else}
		{label}
	{/if}
</div>

<style>
	:global(.graph-node) {
		position: absolute;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 999px;
		border: 2px solid #94a3b8;
		background: var(--graph-node-color, #3b82f6);
		color: #f8fafc;
		font-size: 0.75rem;
		font-weight: 700;
		line-height: 1;
		box-shadow: 0 1px 2px rgb(15 23 42 / 0.2);
		user-select: none;
		cursor: pointer;
		transition: transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease;
	}

	:global(.graph-node:hover) {
		transform: translateY(-1px);
		box-shadow: 0 4px 10px rgb(15 23 42 / 0.18);
	}

	:global(.graph-node:focus-visible) {
		outline: 2px solid #0f172a;
		outline-offset: 2px;
	}

	:global(.graph-node.selected) {
		border-color: #0f172a;
		box-shadow: 0 0 0 2px #f8fafc, 0 0 0 4px #2563eb;
	}

	:global(.graph-node[data-node-type='source']) {
		border-style: solid;
	}

	:global(.graph-node[data-node-type='gateway']) {
		border-style: dashed;
	}
</style>
