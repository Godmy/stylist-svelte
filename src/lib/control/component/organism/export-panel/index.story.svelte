<script lang="ts">
  import type { ExportFormat } from '$stylist/control';
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import ExportPanel from './index.svelte';

  function handleExport(detail: { format: ExportFormat; includeLegend: boolean; includeFilters: boolean }) {
    console.log('Export event:', detail);
  }

  const controls: InterfaceControllerSettings[] = [];
</script>

<Story
  id="organisms-export-panel"
  title="Organisms / Interaction / Controls / ExportPanel"
  component={ExportPanel}
  category="Organisms/Interaction/Controls"
  description="Export panel component with format selection and options."
  controls={controls}
>
  {#snippet children()}
    <div class="p-4">
      <ExportPanel onExport={handleExport} />
    </div>
  {/snippet}
</Story>
