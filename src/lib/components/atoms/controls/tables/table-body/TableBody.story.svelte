<script lang="ts">
  import { Table } from '../table';
  import { TableHeader } from '../table-header';
  import TableBody from './TableBody.svelte';
  import { TableRow } from '../table-row';
  import { TableCell } from '../table-cell';

  // Define sample data
  let tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Admin' }
  ];
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">TableBody Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive TableBody</h2>
    <div class="flex flex-col gap-4">
      <Table caption="Table with Custom TableBody">
        {#snippet content()}
          <TableHeader>
            {#snippet content()}
              <TableRow>
                <TableCell variant="header">ID</TableCell>
                <TableCell variant="header">Name</TableCell>
                <TableCell variant="header">Email</TableCell>
                <TableCell variant="header">Role</TableCell>
              </TableRow>
            {/snippet}
          </TableHeader>
          <TableBody class="bg-blue-50">
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
      <h2 class="text-md font-semibold mb-2">TableBody with Custom Styling</h2>
      <Table caption="Custom Styled TableBody">
        {#snippet content()}
          <TableHeader>
            {#snippet content()}
              <TableRow>
                <TableCell variant="header">Name</TableCell>
                <TableCell variant="header">Role</TableCell>
              </TableRow>
            {/snippet}
          </TableHeader>
          <TableBody class="bg-green-50 divide-y divide-green-200">
            {#snippet content()}
              {#each tableData.slice(0, 3) as row}
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
      <h2 class="text-md font-semibold mb-2">TableBody with More Rows</h2>
      <Table caption="TableBody with More Data">
        {#snippet content()}
          <TableHeader>
            {#snippet content()}
              <TableRow>
                <TableCell variant="header">ID</TableCell>
                <TableCell variant="header">Name</TableCell>
                <TableCell variant="header">Email</TableCell>
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
                </TableRow>
              {/each}
            {/snippet}
          </TableBody>
        {/snippet}
      </Table>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default TableBody</h2>
    <Table caption="Default TableBody">
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