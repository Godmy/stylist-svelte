<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import TableRow from './index.svelte';
  import TableCell from '../table-cell/index.svelte';

  const controls: ControlConfig[] = [
    { name: 'striped', type: 'boolean', defaultValue: false },
    { name: 'active', type: 'boolean', defaultValue: false }
  ];
</script>

<Story
  id="atoms-table-row"
  title="Table Row"
  component={TableRow}
  category="Atoms"
  description="A row component for tables."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Table Row Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">A row component for tables.</p>

        <div class="mt-6 overflow-x-auto">
          <table class="min-w-full divide-y divide-[--color-border-primary]">
            <tbody>
              <TableRow {...values}>
                {#snippet content()}
                  <TableCell>Row</TableCell>
                  <TableCell>Value</TableCell>
                {/snippet}
              </TableRow>
            </tbody>
          </table>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Row Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different row configurations.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Striped Row</p>
            <table class="min-w-full divide-y divide-[--color-border-primary]">
              <tbody>
                <TableRow striped={true}>
                  <TableCell>Striped Row</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </tbody>
            </table>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Active Row</p>
            <table class="min-w-full divide-y divide-[--color-border-primary]">
              <tbody>
                <TableRow active={true}>
                  <TableCell>Active Row</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </tbody>
            </table>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

