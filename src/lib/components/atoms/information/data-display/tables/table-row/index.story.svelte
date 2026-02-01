<script lang="ts">
  import TableRow from './index.svelte';
  import TableCell from '../table-cell/index.svelte';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">TableRow</h1>
  <table class="min-w-full divide-y divide-gray-200">
    <tbody>
      <TableRow striped>
        {#snippet content()}
          <TableCell>Row</TableCell>
          <TableCell>Value</TableCell>
        {/snippet}
      </TableRow>
    </tbody>
  </table>
</div>
