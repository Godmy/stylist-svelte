<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ExpandableTableRow from './ExpandableTableRow.svelte';

  type Props = {
    isExpanded: boolean;
    rowIndex: number;
  };

  const controls: ControlConfig[] = [
    {
      name: 'isExpanded',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'rowIndex',
      type: 'number',
      defaultValue: 1,
      min: 1,
      max: 10
    }
  ];
</script>

<Story
  id="molecules-expandable-table-row"
  title="ExpandableTableRow"
  component={ExpandableTableRow}
  category="Molecules"
  description="A table row that can be expanded to show additional details."
  tags={['table', 'row', 'expandable', 'details']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <ExpandableTableRow isExpanded={props.isExpanded}>
            {#snippet rowContent()}
              <td class="px-6 py-4 whitespace-nowrap">#{props.rowIndex}</td>
              <td class="px-6 py-4 whitespace-nowrap">Item {props.rowIndex}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
            {/snippet}
            {#snippet expandableContent()}
              <div class="p-4 border border-gray-200 rounded bg-gray-50">
                <h4 class="font-medium mb-2">Additional Details</h4>
                <p>
                  This is the expanded content for row #{props.rowIndex}. You can include
                  additional information, forms, or other components here.
                </p>
                <div class="mt-3 flex space-x-3">
                  <button class="px-3 py-1 bg-blue-500 text-white rounded text-sm">Edit</button>
                  <button class="px-3 py-1 bg-gray-500 text-white rounded text-sm">Delete</button>
                </div>
              </div>
            {/snippet}
          </ExpandableTableRow>
        </tbody>
      </table>
    </div>
  {/snippet}
</Story>
