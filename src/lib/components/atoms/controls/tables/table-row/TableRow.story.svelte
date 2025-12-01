<script lang="ts">
  import { Table } from '../table';
  import { TableHeader } from '../table-header';
  import { TableBody } from '../table-body';
  import TableRow from './TableRow.svelte';
  import { TableCell } from '../table-cell';

  let striped: boolean = false;
  let active: boolean = false;

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
  <h1 class="text-lg font-semibold mb-4">TableRow Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive TableRow</h2>
    <div class="flex flex-col gap-4">
      <Table caption="Table with Interactive TableRow">
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
          <TableBody>
            {#snippet content()}
              {#each tableData as row, index}
                <TableRow {striped} {active} class={index % 2 === 0 && striped ? 'bg-gray-100' : ''}>
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

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="row-striped" class="flex items-center gap-1">
          <input id="row-striped" type="checkbox" bind:checked={striped} />
          Striped
        </label>
      </div>

      <div class="flex items-end">
        <label for="row-active" class="flex items-center gap-1">
          <input id="row-active" type="checkbox" bind:checked={active} />
          Active
        </label>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Striped Table Rows</h2>
      <Table caption="Striped Rows Example">
        {#snippet content()}
          <TableHeader>
            {#snippet content()}
              <TableRow>
                <TableCell variant="header">Name</TableCell>
                <TableCell variant="header">Role</TableCell>
              </TableRow>
            {/snippet}
          </TableHeader>
          <TableBody>
            {#snippet content()}
              {#each tableData.slice(0, 4) as row, index}
                <TableRow striped={true}>
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
      <h2 class="text-md font-semibold mb-2">Active Table Row</h2>
      <Table caption="Active Row Example">
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
              {#each tableData.slice(0, 3) as row, index}
                <TableRow {active} class={index === 1 ? 'bg-blue-100' : ''}>
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

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default TableRow</h2>
    <Table caption="Default TableRow">
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
            {#each tableData.slice(0, 2) as row}
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