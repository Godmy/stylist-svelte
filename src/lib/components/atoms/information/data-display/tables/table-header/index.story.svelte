<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import TableHeader from './index.svelte';
  import TableRow from '../table-row/index.svelte';
  import TableCell from '../table-cell/index.svelte';

  const controls: ControlConfig[] = [];
</script>

<Story
  id="atoms-table-header"
  title="Table Header"
  component={TableHeader}
  category="Atoms"
  description="A header component for tables."
  controls={controls}
>
  {#snippet children(props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Table Header Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">A header component for tables.</p>

        <div class="mt-6 overflow-x-auto">
          <table class="min-w-full divide-y divide-[--color-border-primary]">
            <TableHeader>
              {#snippet content()}
                <TableRow>
                  {#snippet content()}
                    <TableCell variant="header">Column A</TableCell>
                    <TableCell variant="header">Column B</TableCell>
                  {/snippet}
                </TableRow>
              {/snippet}
            </TableHeader>
            <tbody>
              <TableRow>
                <TableCell>Data 1</TableCell>
                <TableCell>Data 2</TableCell>
              </TableRow>
            </tbody>
          </table>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Header Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different header configurations.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Multi-column Header</p>
            <table class="min-w-full divide-y divide-[--color-border-primary]">
              <TableHeader>
                {#snippet content()}
                  <TableRow>
                    {#snippet content()}
                      <TableCell variant="header">Product</TableCell>
                      <TableCell variant="header">Category</TableCell>
                      <TableCell variant="header">Price</TableCell>
                    {/snippet}
                  </TableRow>
                {/snippet}
              </TableHeader>
            </table>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Header with Sorting</p>
            <table class="min-w-full divide-y divide-[--color-border-primary]">
              <TableHeader>
                {#snippet content()}
                  <TableRow>
                    {#snippet content()}
                      <TableCell variant="header">Name в†•пёЏ</TableCell>
                      <TableCell variant="header">Date в†•пёЏ</TableCell>
                    {/snippet}
                  </TableRow>
                {/snippet}
              </TableHeader>
            </table>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

