<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import OntologyEdgeComponent from './index.svelte';

  type Position2D = { x: number; y: number };
  type OntologyNode = { id: string; name: string; type: string; position: Position2D; width: number; height: number };
  type OntologyEdge = { id: string; source: string; target: string; relationship: string; label?: string; cardinality?: string };

  type Props = { showLabel: boolean };

  const controls: InterfaceControllerSettings[] = [{ name: 'showLabel', type: 'boolean', defaultValue: true }];

  const accountNode: OntologyNode = { id: 'account', name: 'Account', type: 'entity', position: { x: 80, y: 60 }, width: 140, height: 80 };
  const subscriptionNode: OntologyNode = { id: 'subscription', name: 'SlotSubscription', type: 'entity', position: { x: 260, y: 220 }, width: 160, height: 90 };
  const relationship: OntologyEdge = { id: 'edge-1', source: accountNode.id, target: subscriptionNode.id, relationship: 'owns', label: 'Owns', cardinality: '1..*' };
</script>

<Story
  id="molecules-ontology-edge-component"
  title="Molecules / Information / Ontology / OntologyEdgeComponent"
  component={OntologyEdgeComponent}
  category="Molecules/Information/Ontology"
  description="Edge renderer for ontology graph relationships."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-molecules-ontology-edge-component p-6">
      <div class="max-w-md mx-auto h-64 relative border rounded-lg bg-[var(--color-background-primary)] overflow-hidden">
        <OntologyEdgeComponent showLabel={values.showLabel} edge={relationship} sourceNode={accountNode} targetNode={subscriptionNode} />
      </div>
    </div>
  {/snippet}
</Story>





