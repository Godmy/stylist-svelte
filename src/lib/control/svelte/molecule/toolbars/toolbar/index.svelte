<script lang="ts">
  import { Button } from '$stylist';
  import { createToolbarState } from '$stylist/control/function/state/toolbar';

  let props = $props<{
    onZoomIn?: () => void;
    onZoomOut?: () => void;
    onFitView?: () => void;
    onResetView?: () => void;
    onExportImage?: (format: 'png' | 'jpeg' | 'svg') => void;
    onToggleLegend?: () => void;
    onToggleSearch?: () => void;
  }>();

  const state = createToolbarState();

  function handleZoomIn() {
    props.onZoomIn?.();
  }

  function handleZoomOut() {
    props.onZoomOut?.();
  }

  function handleFitView() {
    props.onFitView?.();
  }

  function handleResetView() {
    props.onResetView?.();
  }

  function handleExport(format: 'png' | 'jpeg' | 'svg') {
    props.onExportImage?.(format);
  }

  function handleToggleLegend() {
    state.handleToggleLegend();
    props.onToggleLegend?.();
  }

  function handleToggleSearch() {
    state.handleToggleSearch();
    props.onToggleSearch?.();
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
      variant={state.isLegendVisible ? 'primary' : 'secondary'} 
      onclick={handleToggleLegend}
    >
      <span> Legend</span>
    </Button>
    <Button 
      size="sm" 
      variant={state.isSearchVisible ? 'primary' : 'secondary'} 
      onclick={handleToggleSearch}
    >
      <span> Search</span>
    </Button>
  </div>
</div>

