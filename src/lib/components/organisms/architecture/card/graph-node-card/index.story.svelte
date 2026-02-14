<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import GraphNodeCard from './index.svelte';
  import type { GraphNode } from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = []
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample node data with correct structure
  const node1: GraphNode = {
    id: '1',
    name: 'User Node',
    type: 'object',
    description: 'Represents a user in the system',
    fields: [
      { name: 'id', type: 'ID', isRequired: true },
      { name: 'name', type: 'String', isRequired: true },
      { name: 'email', type: 'String' }
    ]
  };

  const node2: GraphNode = {
    id: '2',
    name: 'Process Node',
    type: 'process',
    description: 'Handles data processing tasks',
    fields: [
      { name: 'id', type: 'ID', isRequired: true },
      { name: 'status', type: 'String' },
      { name: 'startTime', type: 'DateTime' }
    ]
  };

  const node3: GraphNode = {
    id: '3',
    name: 'Database Node',
    type: 'database',
    description: 'Stores system data',
    fields: [
      { name: 'id', type: 'ID', isRequired: true },
      { name: 'name', type: 'String', isRequired: true },
      { name: 'size', type: 'Int' }
    ]
  };
</script>

<div class="sb-organisms-graph-node-card">
  <Story
    {id}
    {title}
    {description}
    component={GraphNodeCard}
    category="Organisms"
    controls={controls}
  >
    {#snippet children(props: {})}
      <div class="p-4">
        <h1>GraphNodeCard Stories</h1>

        <div class="my-4 p-4 border rounded">
          <h2>Default GraphNodeCard</h2>
          <GraphNodeCard
            node={node1}
          />
        </div>

        <div class="my-4 p-4 border rounded">
          <h2>GraphNodeCard with Custom Type</h2>
          <GraphNodeCard
            node={node2}
          />
        </div>

        <div class="my-4 p-4 border rounded">
          <h2>GraphNodeCard with Fields</h2>
          <GraphNodeCard
            node={node3}
          />
        </div>

        <div class="my-4 p-4 border rounded">
          <h2>GraphNodeCard (Initially Expanded)</h2>
          <GraphNodeCard
            node={node1}
            expanded={true}
          />
        </div>

        <div class="my-4 p-4 border rounded">
          <h2>GraphNodeCard with Selection Highlight</h2>
          <GraphNodeCard
            node={node2}
            selected={true}
            highlight={true}
          />
        </div>
      </div>
    {/snippet}
  </Story>
</div>


