<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import DataTableAdvanced from './DataTableAdvanced.svelte';

  type Props = {
    showSearch: boolean;
    showFilters: boolean;
    showExport: boolean;
  };

  type CustomerRow = {
    account: string;
    owner: string;
    region: string;
    stage: string;
    mrr: number;
  };

  const sampleData: CustomerRow[] = [
    { account: 'Atlas Energy', owner: 'Mina J.', region: 'EMEA', stage: 'Negotiation', mrr: 18500 },
    { account: 'Blue Orchard', owner: 'David K.', region: 'NAMER', stage: 'Committed', mrr: 7200 },
    { account: 'Nimbus Labs', owner: 'Eli S.', region: 'APAC', stage: 'Discovery', mrr: 3200 },
    { account: 'Calibrate', owner: 'Amelia L.', region: 'LATAM', stage: 'Proposal', mrr: 5400 },
    { account: 'Sequoia Health', owner: 'Priya R.', region: 'NAMER', stage: 'Renewal', mrr: 26300 },
    { account: 'Kindred', owner: 'Gabe H.', region: 'EMEA', stage: 'Pilot', mrr: 4100 }
  ];

  const columns = [
    { key: 'account', header: 'Account', sortable: true, filterable: true },
    { key: 'owner', header: 'Owner', sortable: true, filterable: true },
    { key: 'region', header: 'Region', sortable: true, filterable: true },
    { key: 'stage', header: 'Stage', sortable: true, filterable: true },
    { key: 'mrr', header: 'MRR', sortable: true, filterable: true, renderCell: (row: CustomerRow) => `$${row.mrr.toLocaleString()}` }
  ];

  const controls: ControlConfig[] = [
    { name: 'showSearch', type: 'boolean', defaultValue: true },
    { name: 'showFilters', type: 'boolean', defaultValue: true },
    { name: 'showExport', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="molecules-data-table-advanced"
  title="DataTableAdvanced"
  component={DataTableAdvanced}
  category="Molecules"
  description="Enterprise table canvas with search, filters, pagination, and export affordances."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Pipeline overview</p>
            <p class="text-lg text-[--color-text-primary]">Use the toggles to simulate different toolbar configurations.</p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {props.showFilters ? 'Filters enabled' : 'Filters hidden'}
          </span>
        </header>

        <div class="mt-6">
          <DataTableAdvanced
            data={sampleData}
            columns={columns}
            title="Enterprise accounts"
            searchPlaceholder="Search accounts, owners, regions..."
            showSearch={props.showSearch}
            showFilters={props.showFilters}
            showExport={props.showExport}
            defaultPageSize={5}
            pageSizeOptions={[5, 10, 20]}
          />
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Feature highlights</h3>
        <p class="text-sm text-[--color-text-secondary]">Advanced variant ships with surface-level primitives you can toggle individually.</p>
        <ul class="mt-6 space-y-4 text-sm text-[--color-text-primary]">
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            <strong>Search</strong> — filters across every column via lower-cased string matching.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            <strong>Filters</strong> — per-column filters defined in the column config with range support.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            <strong>Export + pagination</strong> — hook into `onExport` and tailor page sizes.
          </li>
        </ul>
      </div>
    </section>
  {/snippet}
</Story>
