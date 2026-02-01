<script lang="ts">
  import type { GraphNodeProps } from '$stylist/design-system/graph';
  import { createGraphNodeState } from '../state.svelte';

  let props: GraphNodeProps = $props();

  const state = createGraphNodeState(props);
  const label = $derived(props.label ?? props.id);
</script>

<div class={`graph-node ${state.sizeClasses}`} style={state.style}>
  {#if props.children}
    {@render props.children()}
  {:else}
    {label}
  {/if}
</div>
