<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import GraphNodeCard from './index.svelte';
  import type { GraphNodeData } from '$stylist/design-system/props';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

  // Sample node data with correct structure
  const node1: GraphNodeData = {
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

  const controls = [
    {
      name: 'expanded',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: false
    },
    {
      name: 'selected',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: false
    },
    {
      name: 'highlight',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: false
    }
  ];
</script>

<Story
  {controls}
  title="GraphNodeCard"
  category="Organisms/Card"
  description="Graph node card component for displaying node information."
  tags={['card', 'graph', 'node', 'ontology']}
>
  {#snippet children(values: any)}
    <GraphNodeCard
      node={node1}
      expanded={values.expanded}
      selected={values.selected}
      highlight={values.highlight}
    />
  {/snippet}
</Story>


