<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import TableBody from './index.svelte';
  import TableRow from '../table-row/index.svelte';
  import TableCell from '../table-cell/index.svelte';

  const controls: ControlConfig[] = [];
</script>

<Story
  id="atoms-table-body"
  title="Table Body"
  component={TableBody}
  category="Atoms"
  description="A body component for tables."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Table Body Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">A body component for tables.</p>

        <div class="mt-6 overflow-x-auto">
          <table class="min-w-full divide-y divide-[--color-border-primary]">
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
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Body Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different body configurations.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Striped Rows</p>
            <table class="min-w-full divide-y divide-[--color-border-primary]">
              <TableBody>
                {#snippet content()}
                  <TableRow striped>
                    <TableCell>Item 1</TableCell>
                    <TableCell>Value 1</TableCell>
                  </TableRow>
                  <TableRow striped>
                    <TableCell>Item 2</TableCell>
                    <TableCell>Value 2</TableCell>
                  </TableRow>
                  <TableRow striped>
                    <TableCell>Item 3</TableCell>
                    <TableCell>Value 3</TableCell>
                  </TableRow>
                {/snippet}
              </TableBody>
            </table>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Mixed Row Types</p>
            <table class="min-w-full divide-y divide-[--color-border-primary]">
              <TableBody>
                {#snippet content()}
                  <TableRow active>
                    <TableCell>Active Row</TableCell>
                    <TableCell>Highlighted</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Normal Row</TableCell>
                    <TableCell>Standard</TableCell>
                  </TableRow>
                  <TableRow striped>
                    <TableCell>Striped Row</TableCell>
                    <TableCell>Alternating</TableCell>
                  </TableRow>
                {/snippet}
              </TableBody>
            </table>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

