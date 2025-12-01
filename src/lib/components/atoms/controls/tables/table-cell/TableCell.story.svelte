<script lang="ts">
  import { Table } from '../table';
  import { TableHeader } from '../table-header';
  import { TableBody } from '../table-body';
  import { TableRow } from '../table-row';
  import TableCell from './TableCell.svelte';

  let variant: 'header' | 'data' = 'data';
  let align: 'left' | 'center' | 'right' = 'left';

  // Define sample data
  let tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', salary: 75000 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', salary: 55000 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', salary: 65000 }
  ];
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">TableCell Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive TableCell</h2>
    <div class="flex flex-col gap-4">
      <Table caption="Table with Interactive TableCell">
        {#snippet content()}
          <TableHeader>
            {#snippet content()}
              <TableRow>
                <TableCell variant="header">ID</TableCell>
                <TableCell variant="header">Name</TableCell>
                <TableCell variant="header" align="right">Salary</TableCell>
              </TableRow>
            {/snippet}
          </TableHeader>
          <TableBody>
            {#snippet content()}
              {#each tableData as row}
                <TableRow>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">${row.salary?.toLocaleString()}</TableCell>
                </TableRow>
              {/each}
            {/snippet}
          </TableBody>
        {/snippet}
      </Table>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="cell-variant" class="block text-sm mb-1">Variant:</label>
        <select id="cell-variant" bind:value={variant} class="border rounded p-1">
          <option value="header">Header</option>
          <option value="data">Data</option>
        </select>
      </div>

      <div>
        <label for="cell-align" class="block text-sm mb-1">Alignment:</label>
        <select id="cell-align" bind:value={align} class="border rounded p-1">
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Header Cells</h2>
      <Table caption="Header Cells Example">
        {#snippet content()}
          <TableHeader>
            {#snippet content()}
              <TableRow>
                <TableCell variant="header" align="left">Name</TableCell>
                <TableCell variant="header" align="center">Role</TableCell>
                <TableCell variant="header" align="right">ID</TableCell>
              </TableRow>
            {/snippet}
          </TableHeader>
          <TableBody>
            {#snippet content()}
              {#each tableData as row}
                <TableRow>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="center">{row.role}</TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                </TableRow>
              {/each}
            {/snippet}
          </TableBody>
        {/snippet}
      </Table>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Data Cells with Different Alignments</h2>
      <Table caption="Alignment Example">
        {#snippet content()}
          <TableHeader>
            {#snippet content()}
              <TableRow>
                <TableCell variant="header">Left Aligned</TableCell>
                <TableCell variant="header">Center Aligned</TableCell>
                <TableCell variant="header">Right Aligned</TableCell>
              </TableRow>
            {/snippet}
          </TableHeader>
          <TableBody>
            {#snippet content()}
              <TableRow>
                <TableCell align="left">Left text</TableCell>
                <TableCell align="center">Center text</TableCell>
                <TableCell align="right">Right text</TableCell>
              </TableRow>
            {/snippet}
          </TableBody>
        {/snippet}
      </Table>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default TableCell</h2>
    <Table caption="Default TableCell">
      {#snippet content()}
        <TableHeader>
          {#snippet content()}
            <TableRow>
              <TableCell variant="header">Name</TableCell>
              <TableCell variant="header">Email</TableCell>
            </TableRow>
          {/snippet}
        </TableHeader>
        <TableBody>
          {#snippet content()}
            {#each tableData.slice(0, 2) as row}
              <TableRow>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            {/each}
          {/snippet}
        </TableBody>
      {/snippet}
    </Table>
  </div>
</div>