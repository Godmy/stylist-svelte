<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import DataExporter from './index.svelte';

  type ExportFormat = 'csv' | 'json' | 'excel';

  type Props = {
    format: ExportFormat;
    disabled: boolean;
    fileName: string;
  };

  const controls: ControlConfig[] = [
    { name: 'format', type: 'select', options: ['csv', 'json', 'excel'], defaultValue: 'csv' },
    { name: 'fileName', type: 'text', defaultValue: 'customer-metrics' },
    { name: 'disabled', type: 'boolean', defaultValue: false }
  ];

  const dataset = [
    { id: 'U-104', name: 'Mia Warren', plan: 'Scale', mrr: 6800, health: 'Green' },
    { id: 'U-105', name: 'Leo Graham', plan: 'Pro', mrr: 3400, health: 'Amber' },
    { id: 'U-108', name: 'Aria Black', plan: 'Start', mrr: 950, health: 'Green' },
    { id: 'U-111', name: 'Imani Cruz', plan: 'Scale', mrr: 7400, health: 'Red' }
  ];

  const formatNotes: Record<ExportFormat, string> = {
    csv: 'Spreadsheet-ready comma separated file with consistent column headers.',
    json: 'Pretty-printed JSON for API payloads and debugging sessions.',
    excel: 'Placeholder demo exporting JSON; hook into your XLSX generator in production.'
  };
</script>

<Story
  id="molecules-data-exporter"
  title="DataExporter"
  component={DataExporter}
  category="Molecules"
  description="Utility toolbar that lets operators export filtered tables without leaving the page."
  controls={controls}
>
  {#snippet children(props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[2.25rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Pipeline snapshot</p>
            <p class="text-lg text-[--color-text-primary]">
              Preview the rows getting exported, then choose your preferred format.
            </p>
          </div>
          <DataExporter data={dataset} format={props.format} disabled={props.disabled} fileName={props.fileName} />
        </div>

        <div class="mt-6 overflow-hidden rounded-2xl border border-[--color-border-primary]">
          <table class="min-w-full divide-y divide-[--color-border-secondary]">
            <thead class="bg-[--color-background-secondary] text-left text-xs font-semibold uppercase tracking-wide text-[--color-text-secondary]">
              <tr>
                <th class="px-4 py-3">ID</th>
                <th class="px-4 py-3">Customer</th>
                <th class="px-4 py-3">Plan</th>
                <th class="px-4 py-3">MRR</th>
                <th class="px-4 py-3">Health</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[--color-border-secondary] bg-[--color-background-primary] text-sm text-[--color-text-primary]">
              {#each dataset as row}
                <tr>
                  <td class="px-4 py-3 font-mono text-xs text-[--color-text-secondary]">{row.id}</td>
                  <td class="px-4 py-3 font-semibold">{row.name}</td>
                  <td class="px-4 py-3">{row.plan}</td>
                  <td class="px-4 py-3">${row.mrr.toLocaleString()}</td>
                  <td class="px-4 py-3">{row.health}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>

      <div class="rounded-[2.25rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Format reference</h3>
        <p class="text-sm text-[--color-text-secondary]">Explain the difference to your teammates or include custom formats.</p>

        <div class="mt-5 space-y-4">
          {#each Object.entries(formatNotes) as [formatKey, note]}
            <article class={`rounded-2xl border ${props.format === formatKey ? 'border-[--color-primary-500]' : 'border-dashed border-[--color-border-primary]'} bg-[--color-background-primary] p-4`}>
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold text-[--color-text-primary] uppercase">{formatKey}</span>
                {#if props.format === formatKey}
                  <span class="rounded-full bg-[--color-primary-100] px-3 py-0.5 text-xs font-semibold text-[--color-primary-700]">
                    selected
                  </span>
                {/if}
              </div>
              <p class="mt-2 text-xs text-[--color-text-secondary]">{note}</p>
            </article>
          {/each}
        </div>
      </div>
    </section>
  {/snippet}
</Story>




