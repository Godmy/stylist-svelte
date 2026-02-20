<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import TreeNodeItem from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'desc',
      type: 'text' as ControlType,
      defaultValue: 'Sample Node',
      description: 'Node description'
    },
    {
      name: 'level',
      type: 'number' as ControlType,
      defaultValue: 0,
      description: 'Node level in the tree'
    },
    {
      name: 'expanded',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the node is expanded'
    },
    {
      name: 'selected',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the node is selected'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the node is disabled'
    }
  ];

  function handleSelect(key: string | undefined) {
    console.log('Node selected:', key);
  }

  function handleToggle(key: string | undefined) {
    console.log('Node toggled:', key);
  }
</script>

<Story
  {controls}
  title="TreeNodeItem Component"
  description="A single node item in a tree view"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <TreeNodeItem
      node={{
        key: 'sample-node',
        desc: controlValues.desc,
        child: []
      }}
      onSelectCallback={handleSelect}
    />
  </div>

  {/snippet}
</Story>
