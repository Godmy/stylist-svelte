<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import TreeView from './index.svelte';

  const nodes = [
    { id: '1', label: 'Root 1', children: [{ id: '1-1', label: 'Child 1-1' }, { id: '1-2', label: 'Child 1-2' }] },
    { id: '2', label: 'Root 2', children: [{ id: '2-1', label: 'Child 2-1' }] }
  ];
</script>

<Story id="organisms-folder-tree" title="Organisms / Interaction / Controls / Trees / Folder Tree" component={TreeView} category="Organisms/Interaction/Controls/Trees">
  {#snippet children()}
    <div class="sb-organisms-folder-tree p-4">
      <TreeView {nodes} />
    </div>
  {/snippet}
</Story>
