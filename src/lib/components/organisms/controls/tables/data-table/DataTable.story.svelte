<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import DataTable from './DataTable.svelte';
  import type { IDataTableColumn } from './types';

  type Props = {
    striped: boolean;
    hoverable: boolean;
  };

  const sampleData = [
    { id: 'U-104', name: 'Mia Warren', email: 'mia@novus.dev', role: 'Admin', lastSeen: '2m ago' },
    { id: 'U-108', name: 'Leo Graham', email: 'leo@feather.io', role: 'Editor', lastSeen: '14m ago' },
    { id: 'U-112', name: 'Aria Black', email: 'aria@liftstudio.com', role: 'Viewer', lastSeen: '1h ago' },
    { id: 'U-114', name: 'Imani Cruz', email: 'imani@driftapps.com', role: 'Admin', lastSeen: 'offline' }
  ];

  const sampleColumns: IDataTableColumn[] = [
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { key: 'role', title: 'Role', sortable: true },
    { key: 'lastSeen', title: 'Last seen', sortable: true }
  ];

  const controls: ControlConfig[] = [
    { name: 'striped', type: 'boolean', defaultValue: true },
    { name: 'hoverable', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="molecules-data-table"
  title="DataTable"
  component={DataTable}
  category="Molecules"
  description="Opinionated table wrapper with sorting, hover states, and themable rows."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Team roster</p>
            <p class="text-lg text-[--color-text-primary]">Toggle striping and hover behavior via the controls.</p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {props.striped ? 'Striped rows' : 'Solid rows'}
          </span>
        </header>

        <div class="mt-6">
          <DataTable
            data={sampleData}
            columns={sampleColumns}
            striped={props.striped}
            hoverable={props.hoverable}
          />
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Why DataTable?</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Compose declarative column configs with optional sortable headers and custom renderers.
        </p>

        <ul class="mt-5 space-y-4 text-sm text-[--color-text-primary]">
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            <strong>Sorting</strong> — columns opt into sortable mode and automatically show chevrons.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            <strong>Styling hooks</strong> — pass class overrides for table, rows, cells, and headers.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            <strong>Row actions</strong> — wire up `onRowClick` to open drawers or detail panels.
          </li>
        </ul>
      </div>
    </section>
  {/snippet}
</Story>
