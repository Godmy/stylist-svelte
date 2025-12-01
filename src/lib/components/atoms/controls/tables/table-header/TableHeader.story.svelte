<script lang="ts">
  import { Table } from '../table';
  import TableHeader from './TableHeader.svelte';
  import { TableBody } from '../table-body';
  import { TableRow } from '../table-row';
  import { TableCell } from '../table-cell';

  // Define sample data
  let tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
  ];
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">TableHeader Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive TableHeader</h2>
    <div class="flex flex-col gap-4">
      <Table caption="Table with Custom TableHeader">
        {#snippet content()}
          <TableHeader class="bg-blue-100">
            {#snippet content()}
              <TableRow>
                <TableCell variant="header">ID</TableCell>
                <TableCell variant="header">Name</TableCell>
                <TableCell variant="header">Email</TableCell>
                <TableCell variant="header">Role</TableCell>
              </TableRow>
            {/snippet}
          </TableHeader>
          <TableBody>
            {#snippet content()}
              {#each tableData as row}
                <TableRow>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>
              {/each}
            {/snippet}
          </TableBody>
        {/snippet}
      </Table>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">TableHeader with Custom Styling</h2>
      <Table caption="Custom Styled TableHeader">
        {#snippet content()}
          <TableHeader class="bg-green-500 text-white">
            {#snippet content()}
              <TableRow>
                <TableCell variant="header" class="text-white">Name</TableCell>
                <TableCell variant="header" class="text-white">Role</TableCell>
              </TableRow>
            {/snippet}
          </TableHeader>
          <TableBody>
            {#snippet content()}
              {#each tableData as row}
                <TableRow>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>
              {/each}
            {/snippet}
          </TableBody>
        {/snippet}
      </Table>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">TableHeader with More Columns</h2>
      <Table caption="TableHeader with Multiple Columns">
        {#snippet content()}
          <TableHeader>
            {#snippet content()}
              <TableRow>
                <TableCell variant="header">ID</TableCell>
                <TableCell variant="header">Name</TableCell>
                <TableCell variant="header">Email</TableCell>
                <TableCell variant="header">Role</TableCell>
                <TableCell variant="header">Status</TableCell>
              </TableRow>
            {/snippet}
          </TableHeader>
          <TableBody>
            {#snippet content()}
              {#each tableData as row}
                <TableRow>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              {/each}
            {/snippet}
          </TableBody>
        {/snippet}
      </Table>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default TableHeader</h2>
    <Table caption="Default TableHeader">
      {#snippet content()}
        <TableHeader>
          {#snippet content()}
            <TableRow>
              <TableCell variant="header">ID</TableCell>
              <TableCell variant="header">Name</TableCell>
            </TableRow>
          {/snippet}
        </TableHeader>
        <TableBody>
          {#snippet content()}
            {#each tableData.slice(0, 2) as row}
              <TableRow>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
              </TableRow>
            {/each}
          {/snippet}
        </TableBody>
      {/snippet}
    </Table>
  </div>
</div>