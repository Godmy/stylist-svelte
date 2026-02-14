<script lang="ts">
	import type { GraphEdgeProps } from '$stylist/design-system';
	import { createGraphEdgeState } from '../state.svelte';

	let props: GraphEdgeProps = $props();

	const state = createGraphEdgeState(props);
	const fromNodeId = $derived(props.fromNodeId);
	const toNodeId = $derived(props.toNodeId);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				fromNodeId: _fromNodeId,
				toNodeId: _toNodeId,
				directed: _directed,
				type: _type,
				style: _style,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={`${state.classes} ${props.class ?? ''}`} style={state.styles} {...restProps}>
	{fromNodeId} to {toNodeId}
</div>
