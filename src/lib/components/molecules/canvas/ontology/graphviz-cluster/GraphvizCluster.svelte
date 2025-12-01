<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type ClusterStyle = 'solid' | 'dashed' | 'dotted' | 'bold' | 'rounded';

  type Props = {
    id: string;
    label?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    color?: string;
    fillColor?: string;
    style?: ClusterStyle;
    fontSize?: number;
    padding?: number;
    selected?: boolean;
    highlight?: boolean;
    children?: Snippet;
  } & HTMLAttributes<SVGElement>;

  let { 
    id,
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
    highlight = false,
    children,
    ...restProps
  }: Props = $props();

  // Define style classes
  const styleClasses = {
    solid: 'stroke-solid',
    dashed: 'stroke-dashed',
    dotted: 'stroke-dotted',
    bold: 'stroke-bold',
    rounded: 'stroke-rounded'
  };

  let strokeDashArray = $derived(style === 'dashed' ? '6,6' : style === 'dotted' ? '2,6' : 'none');
  let strokeWidth = $derived(style === 'bold' ? '4' : '2');
  let borderRadius = $derived(style === 'rounded' ? '8' : '4');
</script>

<svg class="graphviz-cluster" {...restProps}>
  <rect 
    x={x}
    y={y}
    width={width}
    height={height}
    rx={borderRadius}
    ry={borderRadius}
    fill={fillColor}
    stroke={color}
    stroke-width={strokeWidth}
    stroke-dasharray={strokeDashArray}
    class="{selected ? 'selected' : ''} {highlight ? 'highlighted' : ''}"
  />
  
  {#if label}
    <text 
      x={x + 10}
      y={y - 5}
      font-size={fontSize}
      fill={color}
      font-weight="bold"
    >
      {label}
    </text>
  {/if}
  
  {#if children}
    {@render children()}
  {/if}
</svg>

<style>
  .graphviz-cluster {
    position: absolute;
  }
  
  .graphviz-cluster:hover {
    filter: brightness(95%);
  }
  
  .graphviz-cluster.selected {
    stroke: #3b82f6;
    stroke-width: 3px;
  }
  
  .graphviz-cluster.highlighted {
    stroke: #f59e0b;
    stroke-width: 3px;
  }
</style>