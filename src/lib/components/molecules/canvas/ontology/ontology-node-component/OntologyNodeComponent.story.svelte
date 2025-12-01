<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import OntologyNodeComponent from './OntologyNodeComponent.svelte';
  import type { OntologyNode } from './types';

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
</script>

<Story
  id="molecules-ontology-node-component"
  title="OntologyNodeComponent"
  component={OntologyNodeComponent}
  category="Molecules"
  description="A component to represent nodes in an ontology graph."
  tags={['graph', 'node', 'ontology']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Ontology Node Component</h2>
      <div class="max-w-md mx-auto h-64 flex items-center justify-center border rounded-lg">
        <OntologyNodeComponent
          node={{
            id: 'test-node',
            name: 'Test Node',
            type: 'Entity',
            position: { x: 100, y: 100 },
            width: 120,
            height: 60
          }}
          showLabel={props.showLabel}
        />
      </div>
    </div>
  {/snippet}
</Story>