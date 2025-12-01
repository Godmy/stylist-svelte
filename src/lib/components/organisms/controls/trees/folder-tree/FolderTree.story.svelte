<script lang="ts">
  import { Story } from '$lib/playground';
  import FolderTree from './FolderTree.svelte';
  import type { ControlConfig } from '$lib/playground';

  let defaultExpanded = $state(false);
  let showCounts = $state(true);

  const controls: ControlConfig[] = [
    { name: 'defaultExpanded', type: 'boolean', defaultValue: false },
    { name: 'showCounts', type: 'boolean', defaultValue: true }
  ];
</script>

# FolderTree

<Story id="foldertree-story" title="FolderTree" component={FolderTree} {controls}>
  <div class="space-y-4 p-8">
    <div class="border rounded p-4 bg-gray-50 h-64 overflow-auto">
      <p>Folder Tree Component would be displayed here with the following settings:</p>
      <ul class="mt-2 space-y-1">
        <li>Default Expanded: {defaultExpanded ? 'Yes' : 'No'}</li>
        <li>Show Counts: {showCounts ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  </div>
</Story>