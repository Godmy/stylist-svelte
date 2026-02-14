<script lang="ts">
  import type { GraphvizDirectedEdgeProps } from '$stylist/design-system/props/molecules-migration';
  import { GraphvizDirectedEdgeStyleManager } from '$stylist/design-system/styles/molecules-migration';

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
    class: className = ''
  }: GraphvizDirectedEdgeProps = $props();

  const dashArray = $derived(style === 'dashed' ? '5,5' : style === 'dotted' ? '2,2' : 'none');
</script>

<svg class={GraphvizDirectedEdgeStyleManager.root(className)} style="position: absolute; width: 100%; height: 100%;">
  <defs>
    <marker id={`arrowhead-${id}`} markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill={color} />
    </marker>
  </defs>

  <line
    x1={sourceX}
    y1={sourceY}
    x2={targetX}
    y2={targetY}
    stroke={color}
    stroke-width={width}
    stroke-dasharray={dashArray}
    marker-end={`url(#arrowhead-${id})`}
  />

  {#if label}
    <text x={(sourceX + targetX) / 2} y={(sourceY + targetY) / 2 - 10} text-anchor="middle" fill={color} font-size="12" class="select-none pointer-events-none">{label}</text>
  {/if}
</svg>
