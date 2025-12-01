<script lang="ts">
  import Table from './Table.svelte';
  import { TableHeader } from '../table-header';
  import { TableBody } from '../table-body';
  import { TableRow } from '../table-row';
  import { TableCell } from '../table-cell';

  let caption: string = 'Sample Table';
  let striped: boolean = false;
  let bordered: boolean = false;
  let hoverable: boolean = true;

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
  <h1 class="text-lg font-semibold mb-4">Table Components</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Table</h2>
    <div class="flex flex-col gap-4">
      <Table
        {caption}
        {striped}
        {bordered}
        {hoverable}
      >
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
              {#each tableData as row}
                <TableRow {striped} class={hoverable ? 'hover:bg-gray-50' : ''}>
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
      <div>
        <label for="table-caption" class="block text-sm mb-1">Caption:</label>
        <input
          id="table-caption"
          type="text"
          bind:value={caption}
          class="border rounded p-1"
        />
      </div>

      <div class="flex items-end">
        <label for="table-striped" class="flex items-center gap-1">
          <input id="table-striped" type="checkbox" bind:checked={striped} />
          Striped
        </label>
      </div>

      <div class="flex items-end">
        <label for="table-bordered" class="flex items-center gap-1">
          <input id="table-bordered" type="checkbox" bind:checked={bordered} />
          Bordered
        </label>
      </div>

      <div class="flex items-end">
        <label for="table-hoverable" class="flex items-center gap-1">
          <input id="table-hoverable" type="checkbox" bind:checked={hoverable} />
          Hoverable
        </label>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Striped Table</h2>
      <Table
        caption="Striped Table Example"
        striped={true}
        {bordered}
        {hoverable}
      >
        {#snippet content()}
          <TableHeader>
            {#snippet content()}
              <TableRow>
                <TableCell variant="header">ID</TableCell>
                <TableCell variant="header">Name</TableCell>
                <TableCell variant="header">Role</TableCell>
              </TableRow>
            {/snippet}
          </TableHeader>
          <TableBody>
            {#snippet content()}
              {#each tableData as row}
                <TableRow striped={true}>
                  <TableCell>{row.id}</TableCell>
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
      <h2 class="text-md font-semibold mb-2">Bordered Table</h2>
      <Table
        caption="Bordered Table Example"
        {striped}
        bordered={true}
        {hoverable}
      >
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
              {#each tableData.slice(0, 3) as row}
                <TableRow class="border-b border-gray-200">
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
    <h2 class="text-md font-semibold mb-2">Default Table</h2>
    <Table
      caption="Default Table"
      {striped}
      {bordered}
      {hoverable}
    >
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