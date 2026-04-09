<script lang="ts">
	import type { OntologyEdgeComponentProps } from '$stylist/science/type/struct/ontology-edge-component';
	import { createOntologyEdgeComponentState } from '$stylist/science/function/state/ontology-edge-component';

	let props: OntologyEdgeComponentProps = $props();
	const state = createOntologyEdgeComponentState(props);
</script>

<svg class={state.containerClass} style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  <defs>
    <marker id="arrowhead-subclass" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="blue" /></marker>
    <marker id="arrowhead-equivalent" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="purple" /><polygon points="0 7, 10 3.5, 0 0" fill="purple" /></marker>
    <marker id="arrowhead-disjoint" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="red" /></marker>
    <marker id="arrowhead-domain-range" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="green" /></marker>
    <marker id="arrowhead-subproperty" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="yellow" /></marker>
    <marker id="arrowhead-default" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="gray" /></marker>
  </defs>

  <line x1={state.startX} y1={state.startY} x2={state.endX} y2={state.endY} class="{state.style.color} {state.style.style}" stroke-width="2" marker-end={state.style.marker} />

  {#if props.showLabel && props.edge.label}
    <text x={(state.startX + state.endX) / 2} y={(state.startY + state.endY) / 2 - 10} text-anchor="middle" class="fill-current text-xs font-medium" fill="currentColor">{props.edge.label}</text>
  {/if}

  {#if props.edge.cardinality}
    <text x={(state.startX + state.endX) / 2} y={(state.startY + state.endY) / 2 + 10} text-anchor="middle" class="fill-current text-xs font-medium" fill="currentColor">{props.edge.cardinality}</text>
  {/if}
</svg>


