<script lang="ts">
  import GraphvizCluster from './GraphvizCluster.svelte';
  import Label from '../../atoms/typography/elements/Label.svelte';

  type ClusterStyle = 'solid' | 'dashed' | 'dotted' | 'bold' | 'rounded';

  // Props
  let { 
    id,
    title = '',
    label = '',
    x = 0,
    y = 0,
    width = 200,
    height = 150,
    color = '#94a3b8',
    fillColor = 'transparent',
    style = 'solid',
    fontSize = 12,
    padding = 20,
    selected = false,
    highlight = false
  }: {
    id: string;
    title: string;
    label?: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color?: string;
    fillColor?: string;
    style?: ClusterStyle;
    fontSize?: number;
    padding?: number;
    selected?: boolean;
    highlight?: boolean;
  } = $props();
</script>

<div class="cluster-with-title-container" style="position: relative;">
  <span 
    class="absolute top-[-25px] left-[10px] font-bold text-sm"
    style="position: absolute; top: -25px; left: 10px; font-weight: bold; color: {color};"
  >
    {title}
  </span>
  <GraphvizCluster 
    {id}
    {label}
    {x}
    {y}
    {width}
    {height}
    {color}
    {fillColor}
    {style}
    {fontSize}
    {padding}
    {selected}
    {highlight}
  />
</div>