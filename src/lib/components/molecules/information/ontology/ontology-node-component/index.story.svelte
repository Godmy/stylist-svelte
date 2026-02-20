<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import OntologyNodeComponent from './index.svelte';

  type Position2D = { x: number; y: number };
  type OntologyNode = { id: string; name: string; type: string; position: Position2D; width: number; height: number };

  type Props = { showLabel: boolean };

  const controls: ControlConfig[] = [{ name: 'showLabel', type: 'boolean', defaultValue: true }];

  const node: OntologyNode = {
    id: 'test-node',
    name: 'Test Node',
    type: 'class',
    position: { x: 100, y: 100 },
    width: 120,
    height: 60
  };
</script>

<Story
  id="molecules-ontology-node-component"
  title="Molecules / Information / Ontology / OntologyNodeComponent"
  component={OntologyNodeComponent}
  category="Molecules/Information/Ontology"
  description="Node renderer for ontology graph nodes."
  controls={controls}
>
  {#snippet children(props)}
    <div class="sb-molecules-ontology-node-component p-6">
      <div class="max-w-md mx-auto h-64 flex items-center justify-center border rounded-lg">
        <OntologyNodeComponent node={node} showLabel={props.showLabel} />
      </div>
    </div>
  {/snippet}
</Story>

