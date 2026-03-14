<script lang="ts">
  import { Button } from '$stylist/components/atoms';
  import { createEventDispatcher } from 'svelte';

  // Events
  const dispatch = createEventDispatcher<{
    zoomIn: {};
    zoomOut: {};
    fitView: {};
    resetView: {};
    exportImage: { format: 'png' | 'jpeg' | 'svg' };
    toggleLegend: {};
    toggleSearch: {};
  }>();

  // Local state
  let isLegendVisible = $state(true);
  let isSearchVisible = $state(true);

  // Handle zoom in
  function handleZoomIn() {
    dispatch('zoomIn', {});
  }

  // Handle zoom out
  function handleZoomOut() {
    dispatch('zoomOut', {});
  }

  // Handle fit view
  function handleFitView() {
    dispatch('fitView', {});
  }

  // Handle reset view
  function handleResetView() {
    dispatch('resetView', {});
  }

  // Handle export
  function handleExport(format: 'png' | 'jpeg' | 'svg') {
    dispatch('exportImage', { format });
  }

  // Handle toggle legend
  function handleToggleLegend() {
    isLegendVisible = !isLegendVisible;
    dispatch('toggleLegend', {});
  }

  // Handle toggle search
  function handleToggleSearch() {
    isSearchVisible = !isSearchVisible;
    dispatch('toggleSearch', {});
  }
</script>

<style>
  .toolbar {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
    padding: var(--spacing-2);
    background-color: white;
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-border-primary);
    box-shadow: var(--shadow-custom40);
  }

  .toolbar-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
  }



  .toolbar-separator {
    height: 1px;
    background-color: var(--color-border-primary);
    margin: var(--spacing-1) 0;
  }
</style>

<div class="toolbar">
  <div class="toolbar-group">
    <Button size="sm" onclick={handleZoomIn}>
      <span>+</span> <span>Zoom In</span>
    </Button>
    <Button size="sm" onclick={handleZoomOut}>
      <span>-</span> <span>Zoom Out</span>
    </Button>
    <Button size="sm" onclick={handleFitView}>
      <span> Fit View</span>
    </Button>
    <Button size="sm" onclick={handleResetView}>
      <span> Reset View</span>
    </Button>
  </div>
  
  <div class="toolbar-separator"></div>
  
  <div class="toolbar-group">
    <Button size="sm" onclick={() => handleExport('png')}>
      <span> PNG</span>
    </Button>
    <Button size="sm" onclick={() => handleExport('jpeg')}>
      <span> JPEG</span>
    </Button>
    <Button size="sm" onclick={() => handleExport('svg')}>
      <span> SVG</span>
    </Button>
  </div>
  
  <div class="toolbar-separator"></div>
  
  <div class="toolbar-group">
    <Button 
      size="sm" 
      variant={isLegendVisible ? 'primary' : 'secondary'} 
      onclick={handleToggleLegend}
    >
      <span> Legend</span>
    </Button>
    <Button 
      size="sm" 
      variant={isSearchVisible ? 'primary' : 'secondary'} 
      onclick={handleToggleSearch}
    >
      <span> Search</span>
    </Button>
  </div>
</div>

