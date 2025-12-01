<script lang="ts">
  // Define local types
  interface GraphEdge {
    id: string;
    source: string;
    target: string;
    type: string;
    label?: string;
    attributes?: Record<string, any>;
  }
  
  type EdgeStyle = 'solid' | 'dashed' | 'dotted' | 'bold' | 'tapered' | 'invisible';
  type ArrowType = 'normal' | 'dot' | 'odot' | 'none' | 'tee' | 'crow' 
                | 'box' | 'obox' | 'diamond' | 'odiamond' | 'open' 
                | 'inv' | 'oinv' | 'invdot' | 'oinvdot' | 'vee' | 'halfopen';

  interface GraphNode {
    id: string;
    name: string;
    type: string;
    position?: { x: number; y: number };
    width?: number;
    height?: number;
    attributes?: Record<string, any>;
    description?: string;
    fields?: Array<{
      name: string;
      type: string;
      isRequired?: boolean;
      description?: string;
    }>;
  }

  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    id: string;
    source: string;
    target: string;
    sourceX?: number;
    sourceY?: number;
    targetX?: number;
    targetY?: number;
    label?: string;
    style?: EdgeStyle;
    color?: string;
    width?: number;
    sourceArrow?: ArrowType;
    targetArrow?: ArrowType;
    sourceNode?: GraphNode;
    targetNode?: GraphNode;
    highlight?: boolean;
    selected?: boolean;
    class?: string;
  } & HTMLAttributes<SVGSVGElement>;

  let {
    id,
    source,
    target,
    sourceX = 0,
    sourceY = 0,
    targetX = 100,
    targetY = 100,
    label = '',
    style = 'solid',
    color = '#000000',
    width = 2,
    sourceArrow = 'none',
    targetArrow = 'normal',
    sourceNode,
    targetNode,
    highlight = false,
    selected = false,
    class: className = '',
    ...restProps
  }: Props = $props();
</script>

<!-- Temporary placeholder for GraphvizEdge -->
<div class="graphviz-edge {className}">
  <svg class="w-full h-full" {...restProps}>
    <line 
      x1={sourceX} y1={sourceY} 
      x2={targetX} y2={targetY} 
      stroke={highlight ? '#3b82f6' : color} 
      stroke-width={selected ? width * 2 : width}
      stroke-dasharray={style === 'dashed' ? '5,5' : style === 'dotted' ? '2,2' : 'none'}
    />
    {#if label}
      <text x="50" y="40" text-anchor="middle" fill={color} font-size="12">{label}</text>
    {/if}
  </svg>
</div>

<style>
  .graphviz-edge {
    position: absolute;
  }
</style>