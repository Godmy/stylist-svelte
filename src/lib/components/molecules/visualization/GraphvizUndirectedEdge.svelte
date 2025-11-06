<script lang="ts">
  import GraphvizEdge from './GraphvizEdge.svelte';

  type EdgeStyle = 'solid' | 'dashed' | 'dotted' | 'bold' | 'tapered' | 'invisible';

  // Props
  let { 
    id,
    sourceX = 0,
    sourceY = 0,
    targetX = 100,
    targetY = 100,
    label = '',
    color = '#000000',
    width = 2,
    style = 'solid',
    selected = false,
    highlight = false
  }: {
    id: string;
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    label?: string;
    color?: string;
    width?: number;
    style?: EdgeStyle;
    selected?: boolean;
    highlight?: boolean;
  } = $props();
</script>

<div class="undirected-edge-container" style="position: relative;">
  <GraphvizEdge 
    {id}
    {sourceX}
    {sourceY}
    {targetX}
    {targetY}
    {label}
    {color}
    {width}
    {style}
    sourceArrow="none"
    targetArrow="none"
    {selected}
    {highlight}
  />
</div>