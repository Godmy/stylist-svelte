<script lang="ts">
  import TableBody from './index.svelte';
  import TableRow from '../table-row/index.svelte';
  import TableCell from '../table-cell/index.svelte';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">TableBody</h1>
  <table class="min-w-full divide-y divide-gray-200">
    <TableBody>
      {#snippet content()}
        <TableRow striped>
          {#snippet content()}
            <TableCell>Row A</TableCell>
            <TableCell>10</TableCell>
          {/snippet}
        </TableRow>
        <TableRow striped>
          {#snippet content()}
            <TableCell>Row B</TableCell>
            <TableCell>20</TableCell>
          {/snippet}
        </TableRow>
      {/snippet}
    </TableBody>
  </table>
</div>
