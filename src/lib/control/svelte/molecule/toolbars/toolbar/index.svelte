<script lang="ts">
  import { Button } from '$stylist';
  import { createToolbarState } from '$stylist/control/function/state/toolbar';
  import {
    toolbarHandleZoomIn,
    toolbarHandleZoomOut,
    toolbarHandleFitView,
    toolbarHandleResetView,
    toolbarHandleExport,
    toolbarHandleLegendToggle,
    toolbarHandleSearchToggle,
    type ToolbarExportFormat
  } from '$stylist/control/function/script/toolbar';

  let props = $props<{
    onZoomIn?: () => void;
    onZoomOut?: () => void;
    onFitView?: () => void;
    onResetView?: () => void;
    onExportImage?: (format: ToolbarExportFormat) => void;
    onToggleLegend?: () => void;
    onToggleSearch?: () => void;
  }>();

  const state = createToolbarState();
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
    <Button size="sm" onclick={() => toolbarHandleZoomIn(props.onZoomIn)}>
      <span>+</span> <span>Zoom In</span>
    </Button>
    <Button size="sm" onclick={() => toolbarHandleZoomOut(props.onZoomOut)}>
      <span>-</span> <span>Zoom Out</span>
    </Button>
    <Button size="sm" onclick={() => toolbarHandleFitView(props.onFitView)}>
      <span> Fit View</span>
    </Button>
    <Button size="sm" onclick={() => toolbarHandleResetView(props.onResetView)}>
      <span> Reset View</span>
    </Button>
  </div>

  <div class="toolbar-separator"></div>

  <div class="toolbar-group">
    <Button size="sm" onclick={() => toolbarHandleExport('png', props.onExportImage)}>
      <span> PNG</span>
    </Button>
    <Button size="sm" onclick={() => toolbarHandleExport('jpeg', props.onExportImage)}>
      <span> JPEG</span>
    </Button>
    <Button size="sm" onclick={() => toolbarHandleExport('svg', props.onExportImage)}>
      <span> SVG</span>
    </Button>
  </div>

  <div class="toolbar-separator"></div>

  <div class="toolbar-group">
    <Button
      size="sm"
      variant={state.isLegendVisible ? 'primary' : 'secondary'}
      onclick={() => toolbarHandleLegendToggle(state.isLegendVisible, props.onToggleLegend)}
    >
      <span> Legend</span>
    </Button>
    <Button
      size="sm"
      variant={state.isSearchVisible ? 'primary' : 'secondary'}
      onclick={() => toolbarHandleSearchToggle(state.isSearchVisible, props.onToggleSearch)}
    >
      <span> Search</span>
    </Button>
  </div>
</div>
