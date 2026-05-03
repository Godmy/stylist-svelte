<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import ExpandableTableRow from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

  const controls = [
    {
      name: 'isExpanded',
      type: 'boolean' as TokenControllerType,
      defaultValue: false,
      description: 'Whether the row is expanded'
    },
    {
      name: 'rowIndex',
      type: 'number' as TokenControllerType,
      defaultValue: 1,
      min: 1,
      max: 10,
      description: 'Row index/ID'
    }
  ];
</script>

<Story
  {controls}
  title="ExpandableTableRow Component"
  description="A table row that can be expanded to show additional details"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-6">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-[var(--color-background-secondary)]">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">ID</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">Name</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">Status</th>
        </tr>
      </thead>
      <tbody class="bg-[var(--color-background-primary)] divide-y divide-gray-200">
        <ExpandableTableRow isExpanded={controlValues.isExpanded}>
          {#snippet rowContent()}
            <td class="px-6 py-4 whitespace-nowrap">#{controlValues.rowIndex}</td>
            <td class="px-6 py-4 whitespace-nowrap">Item {controlValues.rowIndex}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[var(--color-success-100)] text-[var(--color-success-800)]">
                Active
              </span>
            </td>
          {/snippet}
          {#snippet expandableContent()}
            <div class="p-4 border border-[var(--color-border-primary)] rounded bg-[var(--color-background-secondary)]">
              <h4 class="font-medium mb-2">Additional Details</h4>
              <p>
                This is the expanded content for row #{controlValues.rowIndex}. You can include
                additional information, forms, or other components here.
              </p>
              <div class="mt-3 flex space-x-3">
                <button class="px-3 py-1 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded text-sm">Edit</button>
                <button class="px-3 py-1 bg-[var(--color-neutral-500)] text-[var(--color-text-inverse)] rounded text-sm">Delete</button>
              </div>
            </div>
          {/snippet}
        </ExpandableTableRow>
      </tbody>
    </table>
  </div>

  {/snippet}
</Story>




