<script lang="ts">
  import type { GraphNodeProps } from './types';
  import { getGraphNodeSizeClasses, getGraphNodePositionStyle } from './styles';

  let {
    id,
    x,
    y,
    label,
    type = 'default',
    color = '#3b82f6',
    size = 'md',
    children
  }: GraphNodeProps = $props();

  let sizeClasses = $derived(getGraphNodeSizeClasses(size));
  let positionStyle = $derived(getGraphNodePositionStyle(x, y));
</script>

<!-- Placeholder for graph node implementation -->
<div class={`graph-node ${sizeClasses}`} style={positionStyle}>
  {#if children}
    {@render children()}
  {:else}
    {label || id}
  {/if}
</div>