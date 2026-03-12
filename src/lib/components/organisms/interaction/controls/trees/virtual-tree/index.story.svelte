<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
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
        { id: '1-2', label: 'Child 1-2', icon: '📄', children: [
          { id: '1-2-1', label: 'Grandchild 1-2-1', icon: '📄' },
          { id: '1-2-2', label: 'Grandchild 1-2-2', icon: '📄' }
        ]} 
      ] 
    },
    { 
      id: '2', 
      label: 'Root 2', 
      icon: '📁',
      children: [
        { id: '2-1', label: 'Child 2-1', icon: '📄' },
        { id: '2-2', label: 'Child 2-2', icon: '📄' }
      ] 
    },
    { 
      id: '3', 
      label: 'Root 3', 
      icon: '📁',
      children: [
        { id: '3-1', label: 'Child 3-1', icon: '📄' },
        { id: '3-2', label: 'Child 3-2', icon: '📄' },
        { id: '3-3', label: 'Child 3-3', icon: '📄' }
      ] 
    }
  ];

  function handleNodeSelect(node: any) {
    console.log('Node selected:', node);
  }

  function handleNodeExpand(node: any) {
    console.log('Node expanded:', node);
  }

  function handleNodeCollapse(node: any) {
    console.log('Node collapsed:', node);
  }
</script>

<Story
  id="organisms-virtual-tree"
  title="Organisms / Interaction / Controls / Trees / Virtual Tree"
  component={TreeView}
  category="Organisms/Interaction/Controls/Trees"
  description="A virtual tree component for displaying hierarchical data with expand/collapse functionality."
  tags={['tree', 'hierarchy', 'navigation']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-virtual-tree p-4">
      <h1 class="text-lg font-semibold mb-4">VirtualTree Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive VirtualTree</h2>
        <div class="max-w-md">
          <TreeView 
            {nodes}
          />
        </div>

        <div class="mt-4 flex flex-wrap gap-4">
          <div class="flex items-end">
            <label for="expandable" class="flex items-center gap-1">
              <input id="expandable" type="checkbox" bind:checked={values.expandable} />
              Expandable
            </label>
          </div>

          <div class="flex items-end">
            <label for="selectable" class="flex items-center gap-1">
              <input id="selectable" type="checkbox" bind:checked={values.selectable} />
              Selectable
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-icons" class="flex items-center gap-1">
              <input id="show-icons" type="checkbox" bind:checked={values.showIcons} />
              Show Icons
            </label>
          </div>

          <div>
            <label for="indent-size" class="block text-sm mb-1">Indent Size:</label>
            <input
              id="indent-size"
              type="number"
              bind:value={values.indentSize}
              class="border rounded p-1 w-16"
              min="10"
              max="40"
              step="5"
            />
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>

