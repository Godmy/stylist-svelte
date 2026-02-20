<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import DataTable from './index.svelte';

  type Props = {
    striped: boolean;
    hoverable: boolean;
    compact: boolean;
    showHeader: boolean;
    sortable: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'striped', type: 'boolean', defaultValue: true },
    { name: 'hoverable', type: 'boolean', defaultValue: true },
    { name: 'compact', type: 'boolean', defaultValue: false },
    { name: 'showHeader', type: 'boolean', defaultValue: true },
    { name: 'sortable', type: 'boolean', defaultValue: true }
  ];

  const data = [
    { id: 1, name: 'Alice Johnson', role: 'Admin', email: 'alice@example.com', status: 'active' },
    { id: 2, name: 'Bob Smith', role: 'Manager', email: 'bob@example.com', status: 'active' },
    { id: 3, name: 'Chris Brown', role: 'User', email: 'chris@example.com', status: 'inactive' },
    { id: 4, name: 'Diana Lee', role: 'User', email: 'diana@example.com', status: 'active' },
    { id: 5, name: 'Eve Wilson', role: 'Manager', email: 'eve@example.com', status: 'active' }
  ];

  const columns = [
    { key: 'id', title: 'ID', sortable: true },
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { key: 'role', title: 'Role', sortable: true },
    { key: 'status', title: 'Status', sortable: true }
  ];

  function handleSort(column: string) {
    console.log('Sorting by:', column);
  }

  function handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }
</script>

<Story
  id="organisms-data-table"
  title="Organisms / Interaction / Controls / Tables / Data Table"
  component={DataTable}
  category="Organisms/Interaction/Controls/Tables"
  description="A data table component for displaying tabular data with sorting and selection capabilities."
  tags={['table', 'data', 'grid']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-data-table p-4">
      <h1 class="text-lg font-semibold mb-4">DataTable Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive DataTable</h2>
        <div class="max-w-4xl">
          <DataTable 
            {data} 
            {columns}
            onRowClick={handleRowClick}
          />
        </div>

        <div class="mt-4 flex flex-wrap gap-4">
          <div class="flex items-end">
            <label for="striped" class="flex items-center gap-1">
              <input id="striped" type="checkbox" bind:checked={values.striped} />
              Striped
            </label>
          </div>

          <div class="flex items-end">
            <label for="hoverable" class="flex items-center gap-1">
              <input id="hoverable" type="checkbox" bind:checked={values.hoverable} />
              Hoverable
            </label>
          </div>

          <div class="flex items-end">
            <label for="compact" class="flex items-center gap-1">
              <input id="compact" type="checkbox" bind:checked={values.compact} />
              Compact
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-header" class="flex items-center gap-1">
              <input id="show-header" type="checkbox" bind:checked={values.showHeader} />
              Show Header
            </label>
          </div>

          <div class="flex items-end">
            <label for="sortable" class="flex items-center gap-1">
              <input id="sortable" type="checkbox" bind:checked={values.sortable} />
              Sortable
            </label>
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>


