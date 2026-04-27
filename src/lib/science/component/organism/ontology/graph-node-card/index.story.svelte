<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import GraphNodeCard from './index.svelte';
  import type { GraphNodeCardRecipe } from '$stylist';
  import { TOKEN_CONTROLLER_TYPE } from '$stylist/interaction/const/map/controller-type';

  // Sample node data with correct structure
  const node1: GraphNodeCardRecipe & {
    name: string;
    type: string;
    description?: string;
    fields?: { name: string; type: string; isRequired?: boolean }[];
  } = {
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
      type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
      defaultValue: false
    },
    {
      name: 'selected',
      type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
      defaultValue: false
    },
    {
      name: 'highlight',
      type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
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





