<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import DataExporter from './index.svelte';

  let lastExport = $state('none');

  const controls: InterfaceControllerSettings[] = [
    { name: 'format', type: 'select', options: ['csv', 'json', 'excel'], defaultValue: 'csv' },
    { name: 'fileName', type: 'text', defaultValue: 'customer-report' },
    { name: 'disabled', type: 'boolean', defaultValue: false }
  ];

  const dataset = [
    { id: 'C-101', customer: 'Ava Reed', plan: 'Scale', mrr: 6200 },
    { id: 'C-102', customer: 'Noah Green', plan: 'Pro', mrr: 3200 },
    { id: 'C-103', customer: 'Mila Park', plan: 'Start', mrr: 900 }
  ];
</script>

<Story
  id="molecules-data-exporter"
  title="Molecules / Information / Exporters / DataExporter"
  component={DataExporter}
  category="Molecules/Information/Exporters"
  description="Toolbar for exporting tabular data to common file formats."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 rounded-xl bg-[var(--color-background-secondary)] space-y-4">
      <div class="rounded border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] overflow-hidden">
        <table class="min-w-full text-sm">
          <thead class="bg-[var(--color-background-secondary)] text-left">
            <tr><th class="px-3 py-2">ID</th><th class="px-3 py-2">Customer</th><th class="px-3 py-2">Plan</th><th class="px-3 py-2">MRR</th></tr>
          </thead>
          <tbody>
            {#each dataset as row}
              <tr class="border-t border-[var(--color-border-primary)]"><td class="px-3 py-2">{row.id}</td><td class="px-3 py-2">{row.customer}</td><td class="px-3 py-2">{row.plan}</td><td class="px-3 py-2">${row.mrr}</td></tr>
            {/each}
          </tbody>
        </table>
      </div>
      <DataExporter data={dataset} format={args.format} fileName={args.fileName} disabled={args.disabled} on:export={(e) => (lastExport = `${e.detail.format}:${e.detail.fileName}`)} />
      <p class="text-sm text-[var(--color-text-secondary)]">Last export: {lastExport}</p>
    </div>
  {/snippet}
</Story>





