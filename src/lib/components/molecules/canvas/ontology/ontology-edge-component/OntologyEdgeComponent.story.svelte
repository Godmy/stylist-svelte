<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import OntologyEdgeComponent from './OntologyEdgeComponent.svelte';
  import type { OntologyEdge, OntologyNode } from './types';

  type Props = {
    showLabel: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showLabel',
      type: 'boolean',
      defaultValue: true
    }
  ];

  const accountNode: OntologyNode = {
    id: 'account',
    name: 'Account',
    type: 'entity',
    position: { x: 80, y: 60 },
    width: 140,
    height: 80
  };

  const subscriptionNode: OntologyNode = {
    id: 'subscription',
    name: 'Subscription',
    type: 'entity',
    position: { x: 260, y: 220 },
    width: 160,
    height: 90
  };

  const relationship: OntologyEdge = {
    id: 'edge-1',
    source: accountNode.id,
    target: subscriptionNode.id,
    relationship: 'owns',
    label: 'Owns',
    cardinality: '1..*'
  };
</script>

<Story
  id="molecules-ontology-edge-component"
  title="OntologyEdgeComponent"
  component={OntologyEdgeComponent}
  category="Molecules"
  description="A component to represent edges in an ontology graph."
  tags={['graph', 'edge', 'ontology']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Ontology Edge Component</h2>
      <div class="max-w-md mx-auto h-64 relative border rounded-lg bg-white overflow-hidden">
        <OntologyEdgeComponent
          showLabel={props.showLabel}
          edge={relationship}
          sourceNode={accountNode}
          targetNode={subscriptionNode}
        />
      </div>
    </div>
  {/snippet}
</Story>
