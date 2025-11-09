<script lang="ts">
  import FolderTree from './FolderTree.svelte'; // Путь к вашему компоненту FolderTree
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let defaultExpanded = false;
  let showCounts = true;

  const controls: ControlConfig[] = [
    { name: 'defaultExpanded', type: 'boolean', defaultValue: false },
    { name: 'showCounts', type: 'boolean', defaultValue: true }
  ];
</script>

# FolderTree

<Story title="FolderTree" {controls}>
  <div class="space-y-4 p-8">
    <!-- Пример использования компонента FolderTree -->
    <div class="border rounded p-4 bg-gray-50 h-64 overflow-auto">
      <p>Folder Tree Component would be displayed here with the following settings:</p>
      <ul class="mt-2 space-y-1">
        <li>Default Expanded: {defaultExpanded ? 'Yes' : 'No'}</li>
        <li>Show Counts: {showCounts ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  </div>
</Story>