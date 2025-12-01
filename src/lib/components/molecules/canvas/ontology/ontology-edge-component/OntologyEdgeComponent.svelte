<script lang="ts">
  import { OntologyEdgeComponentStyleManager } from './styles';
  import type { IOntologyEdgeComponentProps, OntologyEdge, OntologyNode } from './types';

  let {
    edge,
    sourceNode,
    targetNode,
    showLabel = true,
    class: className = ''
  }: IOntologyEdgeComponentProps = $props();

  // Calculate position based on node positions
  const startX = $derived((sourceNode.position?.x || 0) + (sourceNode.width || 120) / 2);
  const startY = $derived((sourceNode.position?.y || 0) + (sourceNode.height || 60) / 2);
  const endX = $derived((targetNode.position?.x || 0) + (targetNode.width || 120) / 2);
  const endY = $derived((targetNode.position?.y || 0) + (targetNode.height || 60) / 2);

  const style = $derived(OntologyEdgeComponentStyleManager.getEdgeStyle(edge.relationship));
  const baseClasses = $derived(OntologyEdgeComponentStyleManager.getBaseClasses(className));
</script>

<svg class="{className}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  <!-- Define markers for different relationship types -->
  <defs>
    <!-- Subclass arrowhead -->
    <marker
      id="arrowhead-subclass"
      markerWidth="10"
      markerHeight="7"
      refX="9"
      refY="3.5"
      orient="auto"
    >
      <polygon
        points="0 0, 10 3.5, 0 7"
        fill="blue"
      />
    </marker>

    <!-- Equivalent arrowhead -->
    <marker
      id="arrowhead-equivalent"
      markerWidth="10"
      markerHeight="7"
      refX="9"
      refY="3.5"
      orient="auto"
    >
      <polygon
        points="0 0, 10 3.5, 0 7"
        fill="purple"
      />
      <polygon
        points="0 7, 10 3.5, 0 0"
        fill="purple"
      />
    </marker>

    <!-- Disjoint arrowhead -->
    <marker
      id="arrowhead-disjoint"
      markerWidth="10"
      markerHeight="7"
      refX="9"
      refY="3.5"
      orient="auto"
    >
      <polygon
        points="0 0, 10 3.5, 0 7"
        fill="red"
      />
    </marker>

    <!-- Domain/Range arrowhead -->
    <marker
      id="arrowhead-domain-range"
      markerWidth="10"
      markerHeight="7"
      refX="9"
      refY="3.5"
      orient="auto"
    >
      <polygon
        points="0 0, 10 3.5, 0 7"
        fill="green"
      />
    </marker>

    <!-- Subproperty arrowhead -->
    <marker
      id="arrowhead-subproperty"
      markerWidth="10"
      markerHeight="7"
      refX="9"
      refY="3.5"
      orient="auto"
    >
      <polygon
        points="0 0, 10 3.5, 0 7"
        fill="yellow"
      />
    </marker>

    <!-- Default arrowhead -->
    <marker
      id="arrowhead-default"
      markerWidth="10"
      markerHeight="7"
      refX="9"
      refY="3.5"
      orient="auto"
    >
      <polygon
        points="0 0, 10 3.5, 0 7"
        fill="gray"
      />
    </marker>
  </defs>

  <!-- Draw the edge -->
  <line
    x1={startX}
    y1={startY}
    x2={endX}
    y2={endY}
    class="{style.color} {style.style}"
    stroke-width="2"
    marker-end={style.marker}
  />

  <!-- Draw the label in the middle of the edge if needed -->
  {#if showLabel && edge.label}
    <text
      x={(startX + endX) / 2}
      y={(startY + endY) / 2 - 10}
      text-anchor="middle"
      class="fill-current text-xs font-medium"
      fill="currentColor"
    >
      {edge.label}
    </text>
  {/if}

  <!-- Draw cardinality if available -->
  {#if edge.cardinality}
    <text
      x={(startX + endX) / 2}
      y={(startY + endY) / 2 + 10}
      text-anchor="middle"
      class="fill-current text-xs font-medium"
      fill="currentColor"
    >
      {edge.cardinality}
    </text>
  {/if}
</svg>