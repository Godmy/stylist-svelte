<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

  import TableHeader from './index.svelte';
  import TableRow from '../table-row/index.svelte';
  import TableCell from '../table-cell/index.svelte';

  const controls: ControlConfig[] = [
    { name: 'showThirdColumn', type: 'boolean', defaultValue: true },
    { name: 'showSortHint', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="atoms-table-header"
  title="Table Header"
  component={TableHeader}
  category="Atoms"
  description="A header component for tables."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Table Header Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Toggle structure and sorting hint visibility.</p>

        <div class="mt-6 overflow-x-auto">
          <table class="min-w-full divide-y divide-[--color-border-primary]">
            <TableHeader>
              {#snippet content()}
                <TableRow>
                  {#snippet content()}
                    <TableCell variant="header">Column A{values.showSortHint ? ' ' : ''}</TableCell>
                    <TableCell variant="header">Column B{values.showSortHint ? ' ' : ''}</TableCell>
                    {#if values.showThirdColumn}
                      <TableCell variant="header">Column C{values.showSortHint ? ' ' : ''}</TableCell>
                    {/if}
                  {/snippet}
                </TableRow>
              {/snippet}
            </TableHeader>
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
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Compact Header</p>
            <table class="min-w-full divide-y divide-[--color-border-primary]">
              <TableHeader>
                {#snippet content()}
                  <TableRow>
                    <TableCell variant="header">Name</TableCell>
                    <TableCell variant="header">Status</TableCell>
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
