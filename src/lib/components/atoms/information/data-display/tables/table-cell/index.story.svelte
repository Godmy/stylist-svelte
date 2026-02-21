<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

  import TableCell from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'variant', type: 'select', options: ['header', 'data'], defaultValue: 'data' },
    { name: 'align', type: 'select', options: ['left', 'center', 'right'], defaultValue: 'left' }
  ];
</script>

<Story
  id="atoms-table-cell"
  title="Table Cell"
  component={TableCell}
  category="Atoms"
  description="A cell component for tables."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Table Cell Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">A cell component for tables.</p>

        <div class="mt-6 overflow-x-auto">
          <table class="min-w-full divide-y divide-[--color-border-primary]">
            <thead>
              <tr>
                <TableCell {...values}>Sample Cell</TableCell>
                <TableCell {...values}>Aligned Cell</TableCell>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>Regular Cell</TableCell>
                <TableCell>Regular Cell</TableCell>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Cell Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different cell configurations.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Header Cell</p>
            <table class="min-w-full divide-y divide-[--color-border-primary]">
              <thead>
                <tr>
                  <TableCell variant="header">Header Cell</TableCell>
                  <TableCell variant="header">Header Cell</TableCell>
                </tr>
              </thead>
            </table>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Data Cell</p>
            <table class="min-w-full divide-y divide-[--color-border-primary]">
              <tbody>
                <tr>
                  <TableCell variant="data">Data Cell</TableCell>
                  <TableCell variant="data">Data Cell</TableCell>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

