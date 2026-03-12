<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import DataTableAdvanced from './index.svelte';

  const data = Array.from({ length: 23 }, (_, i) => ({ id: i + 1, name: `User ${i + 1}`, team: i % 2 ? 'A' : 'B' }));
  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'team', header: 'Team' }
  ];

  type Props = { showSearch: boolean; showExport: boolean; loading: boolean };
  const controls: ControlConfig[] = [
    { name: 'showSearch', type: 'boolean', defaultValue: true },
    { name: 'showExport', type: 'boolean', defaultValue: true },
    { name: 'loading', type: 'boolean', defaultValue: false }
  ];
</script>

<Story id="organisms-data-table-advanced" title="Organisms / Interaction / Controls / Tables / Data Table Advanced" component={DataTableAdvanced} category="Organisms/Interaction/Controls/Tables" controls={controls}>
  {#snippet children(values: any)}
    {@const typedProps = values as Props}
    <div class="sb-organisms-data-table-advanced p-4">
      <DataTableAdvanced {data} {columns} showSearch={typedProps.showSearch} showExport={typedProps.showExport} loading={typedProps.loading} />
    </div>
  {/snippet}
</Story>



