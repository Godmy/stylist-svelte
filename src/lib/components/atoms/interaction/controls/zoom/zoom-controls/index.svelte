<script lang="ts">
  import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-svelte';
  import { createZoomControlsState } from '$stylist/design-system/models/zoom-controls.svelte';
  import type { ZoomControlsProps } from '$stylist/design-system/props/zoom-controls';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = ZoomControlsProps & HTMLAttributes<HTMLDivElement>;
  let props: Props = $props();

  const zoomState = createZoomControlsState(props);
  const initialZoom = zoomState.initialValue;

  let zoomLevel = $state(initialZoom);

  const restProps = $derived(
    (() => {
      const { class: _class, initialValue: _initialValue, minZoom: _minZoom, maxZoom: _maxZoom, step: _step, showPercentage: _showPercentage, onChange: _onChange, onValueInput: _onValueInput, onValueChange: _onValueChange, ...rest } = props;
      return rest;
    })()
  );

  function zoomIn() {
    if (zoomLevel < zoomState.maxZoom) {
      zoomLevel = Math.min(zoomLevel + zoomState.step, zoomState.maxZoom);
      applyZoom();
    }
  }

  function zoomOut() {
    if (zoomLevel > zoomState.minZoom) {
      zoomLevel = Math.max(zoomLevel - zoomState.step, zoomState.minZoom);
      applyZoom();
    }
  }

  function resetZoom() {
    zoomLevel = zoomState.initialValue;
    applyZoom();
  }

  function applyZoom() {
    // Apply the zoom transformation to the main content container
    const contentContainer = document.querySelector('.content-container') as HTMLElement || document.body;
    contentContainer.style.transform = `scale(${zoomLevel / 100})`;
    contentContainer.style.transformOrigin = 'top left';
    contentContainer.style.width = `${100 * (100 / zoomLevel)}%`;
    contentContainer.style.height = `${100 * (100 / zoomLevel)}%`;

    props.onValueInput?.(zoomLevel);
    props.onValueChange?.(zoomLevel);
    props.onChange?.(zoomLevel);
  }

  // Initialize zoom
  $effect(() => {
    applyZoom();
  });
</script>

<div class={zoomState.containerClasses} {...restProps}>
  <div class={zoomState.indicatorContainerClasses}>
    <div class={zoomState.indicatorClasses}>
      <span class="text-sm font-medium text-gray-700">
        {zoomState.showPercentage ? `${zoomLevel}%` : zoomLevel}
      </span>
    </div>
  </div>

  <div class={zoomState.controlsContainerClasses}>
    <button
      type="button"
      class={`${zoomState.controlButtonClasses} ${zoomState.controlButtonFirstClasses} ${zoomLevel >= zoomState.maxZoom ? zoomState.controlButtonDisabledClasses : ''}`}
      onclick={zoomIn}
      aria-label="Zoom in"
      disabled={zoomLevel >= zoomState.maxZoom}
    >
      <ZoomIn class="h-5 w-5" />
    </button>

    <button
      type="button"
      class={`${zoomState.controlButtonClasses} ${zoomState.controlButtonMiddleClasses}`}
      onclick={resetZoom}
      aria-label="Reset zoom"
    >
      <RotateCcw class="h-5 w-5" />
    </button>

    <button
      type="button"
      class={`${zoomState.controlButtonClasses} ${zoomState.controlButtonLastClasses} ${zoomLevel <= zoomState.minZoom ? zoomState.controlButtonDisabledClasses : ''}`}
      onclick={zoomOut}
      aria-label="Zoom out"
      disabled={zoomLevel <= zoomState.minZoom}
    >
      <ZoomOut class="h-5 w-5" />
    </button>
  </div>

  <div class={zoomState.hintClasses}>
    <div>Zoom controls</div>
    <div class="flex space-x-1">
      <kbd class={zoomState.kbdClasses}>Ctrl</kbd>
      <span>+</span>
      <kbd class={zoomState.kbdClasses}>-</kbd>
    </div>
  </div>
</div>
