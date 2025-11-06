<script lang="ts">
  // Define types locally
  interface Position2D {
    x: number;
    y: number;
  }

  interface GraphNode {
    id: string;
    name: string;
    type: string;
    position: Position2D;
    width?: number;
    height?: number;
    description?: string;
    fields?: Array<{
      name: string;
      type: string;
      isRequired?: boolean;
      description?: string;
    }>;
  }

  interface GraphEdge {
    id: string;
    source: string;
    target: string;
    type: string;
    label?: string;
  }

  // Props
  let { 
    edge,
    sourceNode,
    targetNode,
    selected = false,
    highlight = false
  }: {
    edge: GraphEdge;
    sourceNode: GraphNode;
    targetNode: GraphNode;
    selected?: boolean;
    highlight?: boolean;
  } = $props();

  // Calculate position based on node positions
  const startX = $derived(sourceNode.position.x + (sourceNode.width || 120) / 2);
  const startY = $derived(sourceNode.position.y + (sourceNode.height || 80) / 2);
  const endX = $derived(targetNode.position.x + (targetNode.width || 120) / 2);
  const endY = $derived(targetNode.position.y + (targetNode.height || 80) / 2);

  // Determine edge type for styling
  const edgeTypeClass = (type: string) => {
    switch (type) {
      case 'field': return 'edge-field';
      case 'interface': return 'edge-interface';
      case 'union': return 'edge-union';
      case 'argument': return 'edge-argument';
      default: return 'edge-default';
    }
  };

  let edgeClasses = $derived([
    'graph-edge',
    edgeTypeClass(edge.type),
    selected ? 'selected' : '',
    highlight ? 'highlighted' : ''
  ].filter(Boolean).join(' '));
</script>

<style>
  .graph-edge {
    position: absolute;
    pointer-events: none;
    z-index: 1;
  }

  .edge-line {
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  .edge-field .edge-line { stroke: #94a3b8; }
  .edge-interface .edge-line { stroke: #34d399; }
  .edge-union .edge-line { stroke: #f472b6; }
  .edge-argument .edge-line { stroke: #60a5fa; }
  .edge-default .edge-line { stroke: #cbd5e0; }

  .edge-line.selected {
    stroke: #3b82f6;
    stroke-width: 3;
  }

  .edge-line.highlighted {
    stroke: #f59e0b;
    stroke-width: 3;
  }

  .edge-label {
    font-size: 12px;
    fill: #1e293b;
    text-anchor: middle;
    pointer-events: none;
    font-weight: 500;
  }

  .arrowhead {
    fill: inherit;
  }
</style>

<svg class={edgeClasses} style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;">
  <defs>
    <marker
      id="arrowhead"
      markerWidth="10"
      markerHeight="7"
      refX="9"
      refY="3.5"
      orient="auto"
    >
      <polygon
        class="arrowhead"
        points="0 0, 10 3.5, 0 7"
        fill="inherit"
      />
    </marker>
  </defs>
  
  <line
    class="edge-line"
    x1={startX}
    y1={startY}
    x2={endX}
    y2={endY}
    marker-end="url(#arrowhead)"
  />
  
  {#if edge.label}
    <text
      class="edge-label"
      x={(startX + endX) / 2}
      y={(startY + endY) / 2 - 10}
    >
      {edge.label}
    </text>
  {/if}
</svg>