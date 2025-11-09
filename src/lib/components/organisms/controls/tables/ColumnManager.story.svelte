<script lang="ts">
  import { Story } from '$lib/playground';
  import ColumnManager from './ColumnManager.svelte';
  import type { ControlConfig } from '$lib/playground';
  
  // Sample columns for the ColumnManager
  let columns = $state([
    { key: 'name', header: 'Name', visible: true, sortable: true },
    { key: 'email', header: 'Email', visible: true, sortable: true },
    { key: 'role', header: 'Role', visible: true, sortable: true },
    { key: 'status', header: 'Status', visible: true, sortable: true }
  ]);
</script>

# ColumnManager

<Story id="columnmanager-story" title="ColumnManager" component={ColumnManager}>
  <div class="space-y-4 p-8">
    <ColumnManager {columns} />
  </div>
</Story>