<script lang="ts">
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
    highlight = false,
    class: className = ''
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
    class?: string;
  } = $props();
</script>

<svg class="directed-edge-container {className}" style="position: absolute; width: 100%; height: 100%;">
  <defs>
    <marker 
      id="arrowhead-{id}"
      markerWidth="10" 
      markerHeight="7" 
      refX="9" 
      refY="3.5" 
      orient="auto"
    >
      <polygon 
        points="0 0, 10 3.5, 0 7" 
        fill={color} 
      />
    </marker>
  </defs>
  
  <line 
    x1={sourceX} 
    y1={sourceY} 
    x2={targetX} 
    y2={targetY} 
    stroke={color} 
    stroke-width={width} 
    stroke-dasharray={style === 'dashed' ? '5,5' : style === 'dotted' ? '2,2' : 'none'} 
    marker-end="url(#arrowhead-{id})"
  />
  
  {#if label}
    <text 
      x={(sourceX + targetX) / 2} 
      y={(sourceY + targetY) / 2 - 10} 
      text-anchor="middle" 
      fill={color} 
      font-size="12" 
      class="select-none pointer-events-none"
    >
      {label}
    </text>
  {/if}
</svg>