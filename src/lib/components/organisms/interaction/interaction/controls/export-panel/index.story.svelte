<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import ExportPanel from './index.svelte';

  function handleExport(e: CustomEvent<{ format: 'png' | 'jpeg' | 'svg' | 'pdf'; includeLegend: boolean; includeFilters: boolean }>) {
    console.log('Export event:', e.detail);
  }

  type Props = {
    // No props for this component
  };

  const controls: ControlConfig[] = [];
</script>

<Story
  id="organisms-export-panel"
  title="Organisms / Interaction / Controls / ExportPanel"
  component={ExportPanel}
  category="Organisms/Interaction/Controls"
  description="Export panel component with format selection and options."
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="sb-organisms-export-panel p-4">
      <h1 class="text-lg font-semibold mb-4">ExportPanel Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive ExportPanel</h2>
        <div class="flex flex-col gap-4">
          <ExportPanel
            on:export={handleExport}
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">PNG Export (Legend + Filters)</h2>
          <ExportPanel
            on:export={handleExport}
          />
        </div>

        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">JPEG Export (No Legend)</h2>
          <ExportPanel
            on:export={handleExport}
          />
        </div>

        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">SVG Export (No Filters)</h2>
          <ExportPanel
            on:export={handleExport}
          />
        </div>

        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">PDF Export (Minimal)</h2>
          <ExportPanel
            on:export={handleExport}
          />
        </div>
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Default ExportPanel</h2>
        <ExportPanel on:export={handleExport} />
      </div>
    </div>
  {/snippet}
</Story>

