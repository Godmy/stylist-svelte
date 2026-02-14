<script lang="ts">
	import type { GraphNodeProps } from '$stylist/design-system';
	import { createGraphNodeState } from '$stylist/design-system/models/graph-node.svelte';

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
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={`graph-node ${state.sizeClasses} ${props.class ?? ''}`} style={state.style} {...restProps}>
	{#if props.children}
		{@render props.children()}
	{:else}
		{label}
	{/if}
</div>
