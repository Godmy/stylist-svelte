<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import DataTable from './index.svelte';

  const data = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'Manager' },
    { id: 3, name: 'Chris', role: 'User' }
  ];
  const columns = [
    { key: 'id', title: 'ID', sortable: true },
    { key: 'name', title: 'Name', sortable: true },
    { key: 'role', title: 'Role', sortable: true }
  ];
</script>

<Story id="organisms-data-table" title="Organisms / Interaction / Controls / Tables / Data Table" component={DataTable} category="Organisms/Interaction/Controls/Tables">
  {#snippet children()}
    <div class="sb-organisms-data-table p-4"><DataTable {data} {columns} /></div>
  {/snippet}
</Story>

