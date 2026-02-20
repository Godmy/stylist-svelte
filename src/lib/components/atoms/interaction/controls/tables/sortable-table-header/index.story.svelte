<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import SortableTableHeader from './index.svelte';

  let currentSortKey = 'name';
  let currentSortDirection: 'asc' | 'desc' | null = 'asc';

  const directionOptions = ['asc', 'desc', 'null'];

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Name',
      description: 'Title for the table header'
    },
    {
      name: 'sortKey',
      type: 'text',
      defaultValue: 'name',
      description: 'Key to sort by'
    },
    {
      name: 'currentSortDirection',
      type: 'select',
      defaultValue: 'asc',
      options: directionOptions,
      description: 'Current sort direction'
    }
  ];

  function handleSort(key: string) {
    if (currentSortKey === key) {
      // Toggle direction if clicking the same column
      if (currentSortDirection === 'asc') {
        currentSortDirection = 'desc';
      } else if (currentSortDirection === 'desc') {
        currentSortDirection = null;
      } else {
        currentSortDirection = 'asc';
      }
    } else {
      // Set new sort column
      currentSortKey = key;
      currentSortDirection = 'asc';
    }
    console.log(`Sorting by ${key} in ${currentSortDirection} order`);
  }
</script>

<Story
  id="atoms-sortable-table-header"
  title="SortableTableHeader"
  component={SortableTableHeader}
  category="Atoms/Interaction/Controls/Tables"
  description="SortableTableHeader component for table headers with sorting functionality."
  tags={['table', 'header', 'sort', 'sortable']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="p-4">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <SortableTableHeader
              {...props}
              currentSortKey={currentSortKey}
              currentSortDirection={currentSortDirection}
              onValueChange={handleSort}
            />
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Sample data
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  {/snippet}
  
  {#snippet variants}
    <div class="p-4">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <SortableTableHeader
              title="Name"
              sortKey="name"
              currentSortKey={currentSortKey}
              currentSortDirection={currentSortDirection === 'asc' ? 'asc' : null}
              onValueChange={handleSort}
            />
            <SortableTableHeader
              title="Date"
              sortKey="date"
              currentSortKey={currentSortKey}
              currentSortDirection={currentSortDirection === 'desc' ? 'desc' : null}
              onValueChange={handleSort}
            />
            <SortableTableHeader
              title="Status"
              sortKey="status"
              currentSortKey={currentSortKey}
              currentSortDirection={null}
              onValueChange={handleSort}
            />
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Sample data
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Sample data
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Sample data
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  {/snippet}
</Story>
