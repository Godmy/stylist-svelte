<script lang="ts">
  import TableCell from './index.svelte';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">TableCell</h1>
  <table class="min-w-full divide-y divide-gray-200">
    <thead>
      <tr>
        <TableCell variant="header">Header</TableCell>
        <TableCell variant="header">Header</TableCell>
      </tr>
    </thead>
    <tbody>
      <tr>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
      </tr>
    </tbody>
  </table>
</div>
