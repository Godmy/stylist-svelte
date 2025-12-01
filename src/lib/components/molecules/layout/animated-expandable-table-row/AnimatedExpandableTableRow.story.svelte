<script lang="ts">
  import type { Snippet } from 'svelte';
  import AnimatedExpandableTableRow from './AnimatedExpandableTableRow.svelte';
</script>

<svelte:head>
  <title>AnimatedExpandableTableRow Story</title>
</svelte:head>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">AnimatedExpandableTableRow Component</h1>

  {#snippet detailsContent()}
    <div class="p-4">
      <h3 class="font-bold text-lg mb-2">Details Content</h3>
      <p>This is where detailed information would appear when the row is expanded.</p>
      <ul class="list-disc pl-5 mt-2">
        <li>Detail 1</li>
        <li>Detail 2</li>
        <li>Detail 3</li>
      </ul>
    </div>
  {/snippet}

  <table class="border-collapse border border-gray-300 w-full">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-300 px-4 py-2">Column 1</th>
        <th class="border border-gray-300 px-4 py-2">Column 2</th>
      </tr>
    </thead>
    <tbody>
      <AnimatedExpandableTableRow
        expanded={false}
        expandable={true}
        expandIcon="expand_more"
        collapseIcon="expand_less"
        colspan={2}
        details={detailsContent}
      >
        <td>Sample data</td>
        <td>More data</td>
      </AnimatedExpandableTableRow>
    </tbody>
  </table>
</div>