<script lang="ts">
  // Define local types
  interface Position2D {
    x: number;
    y: number;
  }

  interface GraphNode {
    id: string;
    name: string;
    type: string;
    position?: Position2D;
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

  interface GraphEdge {
    id: string;
    source: string;
    target: string;
    type: string;
    label?: string;
    attributes?: Record<string, any>;
  }

  interface GraphVisualizationData {
    nodes: GraphNode[];
    edges: GraphEdge[];
  }
  // NOTE: We're temporarily commenting out these imports since BaseGraphNode/BaseGraphEdge atoms don't exist
  // In a real implementation, you would either create these atoms or import from the correct location
  // import BaseGraphNode from '../../atoms/GraphNode.svelte';
  // import BaseGraphEdge from '../../atoms/GraphEdge.svelte';
  
  // Using placeholders for now
  import BaseGraphNode from '../visualization/GraphNodeCard.svelte';
  import BaseGraphEdge from '../visualization/GraphvizEdge.svelte';
  import { createEventDispatcher } from 'svelte';


  type Props = {
    data: GraphVisualizationData;
    selectedNode?: GraphNode | null;
    selectedField?: any | null;
  };

  let { 
    data, 
    selectedNode = null, 
    selectedField = null 
  }: Props = $props();

  // Events
  const dispatch = createEventDispatcher<{
    nodeClick: { node: GraphNode };
    fieldClick: { node: GraphNode; field: any };
  }>();

  // Handle node clicks
  function handleNodeClick(node: GraphNode) {
    dispatch('nodeClick', { node });
  }

  // Handle field clicks
  function handleFieldClick(node: GraphNode, field: any) {
    dispatch('fieldClick', { node, field });
  }

  // Determine if a node should be highlighted
  const isNodeHighlighted = (node: GraphNode) => {
    if (!selectedField) return false;
    return (
      (selectedNode && selectedNode.id === node.id) ||
      (node.fields && node.fields.some((f: any) => f.name === selectedField.name))
    );
  };

  // Determine if an edge should be highlighted
  const isEdgeHighlighted = (edge: GraphEdge) => {
    if (!selectedField) return false;
    if (!selectedNode) return false;
    
    // Check if this edge connects to the selected field
    // In a real implementation, this would check field connections
    return edge.source === selectedNode.id || edge.target === selectedNode.id;
  };
</script>

<div class="field-highlighter-visualization">
  {#each data.edges as edge}
    <BaseGraphEdge 
      id={edge.id}
      source={edge.source}
      target={edge.target}
      label={edge.label}
      sourceNode={data.nodes.find((n: GraphNode) => n.id === edge.source)}
      targetNode={data.nodes.find((n: GraphNode) => n.id === edge.target)}
      highlight={isEdgeHighlighted(edge)}
    />
  {/each}
  
  {#each data.nodes as node}
    <BaseGraphNode 
      {node}
      selected={selectedNode?.id === node.id}
      highlight={isNodeHighlighted(node)}
      onclick={() => handleNodeClick(node)}
      onfieldClick={(e: CustomEvent<{field: any}>) => handleFieldClick(node, e.detail.field)}
      style="position: absolute; left: {node.position?.x || 0}px; top: {node.position?.y || 0}px;"
    />
  {/each}
</div>