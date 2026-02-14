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
  // Temporary inline rendering is used because dedicated graph primitives are absent in the current tree.
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
    <div
      class="rounded border px-2 py-1 text-xs"
      class:border-blue-400={isEdgeHighlighted(edge)}
      class:border-gray-200={!isEdgeHighlighted(edge)}
    >
      {edge.source} -> {edge.target}{#if edge.label} ({edge.label}){/if}
    </div>
  {/each}
  
  {#each data.nodes as node}
    <button
      type="button"
      class="absolute rounded border bg-white px-3 py-2 text-left shadow-sm"
      class:border-blue-500={selectedNode?.id === node.id || isNodeHighlighted(node)}
      class:border-gray-200={!(selectedNode?.id === node.id || isNodeHighlighted(node))}
      onclick={() => handleNodeClick(node)}
      style="left: {node.position?.x || 0}px; top: {node.position?.y || 0}px;"
    >
      <div class="font-medium">{node.name}</div>
      {#if node.fields?.length}
        <div class="mt-1 text-xs text-gray-600">{node.fields.length} fields</div>
      {/if}
    </button>
  {/each}
</div>
