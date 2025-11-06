<script lang="ts">
  type EdgeArrowType = 'normal' | 'dot' | 'odot' | 'none' | 'tee' | 'crow' 
                     | 'box' | 'obox' | 'diamond' | 'odiamond' | 'open' 
                     | 'inv' | 'oinv' | 'invdot' | 'oinvdot' | 'vee' | 'halfopen';

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
    sourceArrow = 'none',
    targetArrow = 'normal',
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
    sourceArrow?: EdgeArrowType;
    targetArrow?: EdgeArrowType;
    selected?: boolean;
    highlight?: boolean;
  } = $props();

  // Calculate midpoint for label
  const midX = $derived((sourceX + targetX) / 2);
  const midY = $derived((sourceY + targetY) / 2);

  // Calculate angle for label rotation
  const angle = $derived(Math.atan2(targetY - sourceY, targetX - sourceX) * 180 / Math.PI);

  // Determine path for the edge
  const path = $derived(`M ${sourceX} ${sourceY} L ${targetX} ${targetY}`);

  // Determine arrowhead markers
  const sourceMarker = $derived(getArrowMarker(sourceArrow));
  const targetMarker = $derived(getArrowMarker(targetArrow));

  // Helper function to get arrow marker URL
  function getArrowMarker(arrowType: EdgeArrowType): string {
    switch (arrowType) {
      case 'none': return '';
      default: return `url(#arrowhead-${arrowType})`;
    }
  }

  // Edge classes
  let edgeClasses = $derived([
    'graphviz-edge',
    `style-${style}`,
    selected ? 'selected' : '',
    highlight ? 'highlighted' : ''
  ].filter(Boolean).join(' '));
</script>

<style>
  .graphviz-edge {
    position: absolute;
    pointer-events: none;
    z-index: 1;
  }

  .edge-line {
    stroke-width: var(--width, 2);
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  .style-solid .edge-line { stroke-dasharray: none; }
  .style-dashed .edge-line { stroke-dasharray: 6,6; }
  .style-dotted .edge-line { stroke-dasharray: 2,6; }
  .style-bold .edge-line { stroke-width: 4; }
  .style-invisible .edge-line { stroke: transparent; }

  .edge-line.selected {
    stroke: #3b82f6;
    stroke-width: var(--width, 2) + 1;
  }

  .edge-line.highlighted {
    stroke: #f59e0b;
    stroke-width: var(--width, 2) + 1;
  }

  .edge-label {
    font-size: 12px;
    fill: var(--color, #1e293b);
    text-anchor: middle;
    pointer-events: none;
    font-weight: 500;
    background-color: white;
    padding: 2px 4px;
    border-radius: 3px;
    transform: translate(-50%, -50%);
  }

  .arrowhead {
    fill: var(--color, #000000);
    stroke: var(--color, #000000);
  }
</style>

<svg class={edgeClasses} style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;">
  <defs>
    <!-- Arrowhead markers -->
    <marker
      id="arrowhead-normal"
      markerWidth="10"
      markerHeight="7"
      refX="9"
      refY="3.5"
      orient="auto"
    >
      <polygon
        class="arrowhead"
        points="0 0, 10 3.5, 0 7"
        fill="var(--color, #000000)"
      />
    </marker>

    <marker
      id="arrowhead-dot"
      markerWidth="6"
      markerHeight="6"
      refX="3"
      refY="3"
      orient="auto"
    >
      <circle
        class="arrowhead"
        cx="3"
        cy="3"
        r="2.5"
        fill="var(--color, #000000)"
      />
    </marker>

    <marker
      id="arrowhead-inv"
      markerWidth="10"
      markerHeight="10"
      refX="1"
      refY="5"
      orient="auto"
    >
      <polygon
        class="arrowhead"
        points="10 0, 0 5, 10 10"
        fill="var(--color, #000000)"
      />
    </marker>

    <marker
      id="arrowhead-box"
      markerWidth="10"
      markerHeight="10"
      refX="10"
      refY="5"
      orient="auto"
    >
      <rect
        class="arrowhead"
        x="2"
        y="2"
        width="6"
        height="6"
        fill="var(--color, #000000)"
      />
    </marker>

    <marker
      id="arrowhead-diamond"
      markerWidth="14"
      markerHeight="8"
      refX="7"
      refY="4"
      orient="auto"
    >
      <polygon
        class="arrowhead"
        points="0 4, 7 0, 14 4, 7 8"
        fill="var(--color, #000000)"
      />
    </marker>

    <marker
      id="arrowhead-tee"
      markerWidth="10"
      markerHeight="8"
      refX="5"
      refY="4"
      orient="auto"
    >
      <line
        class="arrowhead"
        x1="0"
        y1="0"
        x2="0"
        y2="8"
        stroke="var(--color, #000000)"
        stroke-width="4"
      />
    </marker>

    <marker
      id="arrowhead-crow"
      markerWidth="12"
      markerHeight="8"
      refX="12"
      refY="4"
      orient="auto"
    >
      <path
        class="arrowhead"
        d="M0,0 L12,4 L0,8 L4,4 Z"
        fill="var(--color, #000000)"
      />
    </marker>

    <marker
      id="arrowhead-vee"
      markerWidth="10"
      markerHeight="6"
      refX="10"
      refY="3"
      orient="auto"
    >
      <path
        class="arrowhead"
        d="M0,0 L10,3 L0,6 Z"
        fill="var(--color, #000000)"
      />
    </marker>
  </defs>
  
  <path
    class="edge-line"
    d={path}
    stroke="var(--color, #000000)"
    stroke-width={width}
    fill="none"
    marker-start={sourceMarker}
    marker-end={targetMarker}
    style="--color: {color}; --width: {width};"
  />
  
  {#if label}
    <text
      class="edge-label"
      x={midX}
      y={midY}
      style="transform: translate(-50%, -50%) rotate({angle}deg);"
    >
      {label}
    </text>
  {/if}
</svg>