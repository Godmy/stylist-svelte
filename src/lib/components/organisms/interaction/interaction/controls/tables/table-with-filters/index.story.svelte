<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import TableWithFilters from './index.svelte';

  type Props = {
    showSearch: boolean;
    showColumnFilters: boolean;
    showSortOptions: boolean;
    striped: boolean;
    compact: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'showSearch', type: 'boolean', defaultValue: true },
    { name: 'showColumnFilters', type: 'boolean', defaultValue: true },
    { name: 'showSortOptions', type: 'boolean', defaultValue: true },
    { name: 'striped', type: 'boolean', defaultValue: true },
    { name: 'compact', type: 'boolean', defaultValue: false }
  ];

  const columns = ['id', 'name', 'email', 'role', 'status'];
  
  const data = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'active' },
    { id: 3, name: 'Chris Brown', email: 'chris@example.com', role: 'Manager', status: 'inactive' },
    { id: 4, name: 'Diana Lee', email: 'diana@example.com', role: 'User', status: 'active' },
    { id: 5, name: 'Eve Wilson', email: 'eve@example.com', role: 'Admin', status: 'active' },
    { id: 6, name: 'Frank Miller', email: 'frank@example.com', role: 'User', status: 'pending' },
    { id: 7, name: 'Grace Taylor', email: 'grace@example.com', role: 'Manager', status: 'active' }
  ];

  function handleFilterChange(filters: any) {
    console.log('Filters changed:', filters);
  }

  function handleSortChange(sort: any) {
    console.log('Sort changed:', sort);
  }

  function handleSearch(query: string) {
    console.log('Search query:', query);
  }
</script>

<Story
  id="organisms-table-with-filters"
  title="Organisms / Interaction / Controls / Tables / Table With Filters"
  component={TableWithFilters}
  category="Organisms/Interaction/Controls/Tables"
  description="A table component with built-in filtering, sorting, and search capabilities."
  tags={['table', 'filters', 'search', 'sort']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="sb-organisms-table-with-filters p-4">
      <h1 class="text-lg font-semibold mb-4">TableWithFilters Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive TableWithFilters</h2>
        <div class="max-w-4xl">
          <TableWithFilters 
            {data} 
            {columns}
            showSearch={props.showSearch}
            showColumnFilters={props.showColumnFilters}
            showSortOptions={props.showSortOptions}
            striped={props.striped}
            compact={props.compact}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            onSearch={handleSearch}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

