<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import TreeView from './index.svelte';

  type Props = {
    expandable: boolean;
    selectable: boolean;
    showIcons: boolean;
    indentSize: number;
  };

  const controls: ControlConfig[] = [
    { name: 'expandable', type: 'boolean', defaultValue: true },
    { name: 'selectable', type: 'boolean', defaultValue: true },
    { name: 'showIcons', type: 'boolean', defaultValue: true },
    { name: 'indentSize', type: 'number', defaultValue: 20 }
  ];

  const nodes = [
    { 
      id: '1', 
      label: 'Root 1', 
      icon: '📁',
      children: [
        { id: '1-1', label: 'Child 1-1', icon: '📄' }, 
        { id: '1-2', label: 'Child 1-2', icon: '📄' } 
      ] 
    },
    { 
      id: '2', 
      label: 'Root 2', 
      icon: '📁',
      children: [
        { id: '2-1', label: 'Child 2-1', icon: '📄' }
      ] 
    }
  ];

  function handleNodeSelect(node: any) {
    console.log('Node selected:', node);
  }
</script>

<Story
  id="organisms-flat-tree"
  title="Organisms / Interaction / Controls / Trees / Flat Tree"
  component={TreeView}
  category="Organisms/Interaction/Controls/Trees"
  description="A flat tree component for displaying hierarchical data in a simplified view."
  tags={['tree', 'hierarchy', 'flat']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-flat-tree p-4">
      <h1 class="text-lg font-semibold mb-4">FlatTree Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive FlatTree</h2>
        <div class="max-w-md">
          <TreeView 
            {nodes}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

