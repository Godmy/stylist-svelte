<script lang="ts">
  import type { GraphEdgeProps } from '$stylist/design-system/graph';
  import { createGraphEdgeState } from '../state.svelte';

  let props: GraphEdgeProps = $props();

  const state = createGraphEdgeState(props);
  const fromNodeId = $derived(props.fromNodeId);
  const toNodeId = $derived(props.toNodeId);
</script>

<div class={state.classes} style={state.styles}>
  {fromNodeId} to {toNodeId}
</div>
