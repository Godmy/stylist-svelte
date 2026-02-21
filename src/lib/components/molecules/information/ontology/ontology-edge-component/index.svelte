<script lang="ts">
  import { OntologyEdgeComponentStyleManager } from '$stylist/design-system/styles/information/ontology-edge-component';

  type Position2D = { x: number; y: number };

  type OntologyNode = {
    id: string;
    name: string;
    type?: string;
    label?: string;
    position?: Position2D;
    width?: number;
    height?: number;
    attributes?: string[];
  };

  type OntologyEdge = {
    id: string;
    source: string;
    target: string;
    relationship: string;
    label?: string;
    cardinality?: string;
  };

  interface OntologyEdgeComponentProps {
    edge: OntologyEdge;
    sourceNode: OntologyNode;
    targetNode: OntologyNode;
    showLabel?: boolean;
    class?: string;
  }

  let {
    edge,
    sourceNode,
    targetNode,
    showLabel = true,
    class: className = ''
  }: OntologyEdgeComponentProps = $props();

  const startX = $derived((sourceNode.position?.x || 0) + (sourceNode.width || 120) / 2);
  const startY = $derived((sourceNode.position?.y || 0) + (sourceNode.height || 60) / 2);
  const endX = $derived((targetNode.position?.x || 0) + (targetNode.width || 120) / 2);
  const endY = $derived((targetNode.position?.y || 0) + (targetNode.height || 60) / 2);

  const style = $derived(OntologyEdgeComponentStyleManager.getEdgeStyle(edge.relationship));
</script>

<svg class={OntologyEdgeComponentStyleManager.getBaseClasses(className)} style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  <defs>
    <marker id="arrowhead-subclass" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="blue" /></marker>
    <marker id="arrowhead-equivalent" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="purple" /><polygon points="0 7, 10 3.5, 0 0" fill="purple" /></marker>
    <marker id="arrowhead-disjoint" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="red" /></marker>
    <marker id="arrowhead-domain-range" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="green" /></marker>
    <marker id="arrowhead-subproperty" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="yellow" /></marker>
    <marker id="arrowhead-default" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="gray" /></marker>
  </defs>

  <line x1={startX} y1={startY} x2={endX} y2={endY} class="{style.color} {style.style}" stroke-width="2" marker-end={style.marker} />

  {#if showLabel && edge.label}
    <text x={(startX + endX) / 2} y={(startY + endY) / 2 - 10} text-anchor="middle" class="fill-current text-xs font-medium" fill="currentColor">{edge.label}</text>
  {/if}

  {#if edge.cardinality}
    <text x={(startX + endX) / 2} y={(startY + endY) / 2 + 10} text-anchor="middle" class="fill-current text-xs font-medium" fill="currentColor">{edge.cardinality}</text>
  {/if}
</svg>