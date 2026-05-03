<script lang="ts">
	// @ts-nocheck
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import Toolbar from './index.svelte';

  function handleZoomIn() {
    console.log('Zoom in');
  }

  function handleZoomOut() {
    console.log('Zoom out');
  }

  function handleFitView() {
    console.log('Fit to view');
  }

  function handleResetView() {
    console.log('Reset view');
  }

  function handleExport(e: CustomEvent<{format: string}>) {
    console.log('Export image:', e.detail.format);
  }

  function handleToggleLegend() {
    console.log('SlotToggle legend');
  }

  function handleToggleSearch() {
    console.log('SlotToggle search');
  }
</script>

<Story
  title="Toolbar Component"
  description="Toolbar component with various actions"
>
  <Toolbar
    on:zoomIn={handleZoomIn}
    on:zoomOut={handleZoomOut}
    on:fitView={handleFitView}
    on:resetView={handleResetView}
    on:exportImage={handleExport}
    on:toggleLegend={handleToggleLegend}
    on:toggleSearch={handleToggleSearch}
  />
</Story>

