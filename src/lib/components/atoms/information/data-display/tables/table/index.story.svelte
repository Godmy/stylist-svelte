<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import Table from './index.svelte';
  import TableHeader from '../table-header/index.svelte';
  import TableBody from '../table-body/index.svelte';
  import TableRow from '../table-row/index.svelte';
  import TableCell from '../table-cell/index.svelte';

  const controls: ControlConfig[] = [
    { name: 'caption', type: 'text', defaultValue: 'Example table' },
    { name: 'striped', type: 'boolean', defaultValue: false },
    { name: 'bordered', type: 'boolean', defaultValue: false },
    { name: 'hoverable', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="atoms-table"
  title="Table"
  component={Table}
  category="Atoms"
  description="A table component for displaying tabular data."
  controls={controls}
>
  {#snippet children(props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Table Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">A table component for displaying tabular data.</p>

        <div class="mt-6 overflow-x-auto">
          <Table {...props}>
            {#snippet content()}
              <TableHeader>
                {#snippet content()}
                  <TableRow>
                    {#snippet content()}
                      <TableCell variant="header">Name</TableCell>
                      <TableCell variant="header">Value</TableCell>
                    {/snippet}
                  </TableRow>
                {/snippet}
              </TableHeader>
              <TableBody>
                {#snippet content()}
                  <TableRow striped={props.striped}>
                    {#snippet content()}
                      <TableCell>Alpha</TableCell>
                      <TableCell>123</TableCell>
                    {/snippet}
                  </TableRow>
                  <TableRow striped={props.striped}>
                    {#snippet content()}
                      <TableCell>Beta</TableCell>
                      <TableCell>456</TableCell>
                    {/snippet}
                  </TableRow>
                {/snippet}
              </TableBody>
            {/snippet}
          </Table>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Table Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different table configurations with various properties.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Striped Table</p>
            <div class="overflow-x-auto">
              <Table caption="Striped example" striped={true}>
                {#snippet content()}
                  <TableHeader>
                    {#snippet content()}
                      <TableRow>
                        {#snippet content()}
                          <TableCell variant="header">Product</TableCell>
                          <TableCell variant="header">Price</TableCell>
                        {/snippet}
                      </TableRow>
                    {/snippet}
                  </TableHeader>
                  <TableBody>
                    {#snippet content()}
                      <TableRow striped>
                        <TableCell>Item 1</TableCell>
                        <TableCell>$10.00</TableCell>
                      </TableRow>
                      <TableRow striped>
                        <TableCell>Item 2</TableCell>
                        <TableCell>$20.00</TableCell>
                      </TableRow>
                    {/snippet}
                  </TableBody>
                {/snippet}
              </Table>
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Bordered Table</p>
            <div class="overflow-x-auto">
              <Table caption="Bordered example" bordered={true}>
                {#snippet content()}
                  <TableHeader>
                    {#snippet content()}
                      <TableRow>
                        {#snippet content()}
                          <TableCell variant="header">ID</TableCell>
                          <TableCell variant="header">Status</TableCell>
                        {/snippet}
                      </TableRow>
                    {/snippet}
                  </TableHeader>
                  <TableBody>
                    {#snippet content()}
                      <TableRow>
                        <TableCell>#001</TableCell>
                        <TableCell>Active</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>#002</TableCell>
                        <TableCell>Inactive</TableCell>
                      </TableRow>
                    {/snippet}
                  </TableBody>
                {/snippet}
              </Table>
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

