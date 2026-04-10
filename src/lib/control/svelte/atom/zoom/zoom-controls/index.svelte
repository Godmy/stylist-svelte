<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const ZoomIn = 'zoom-in';
const ZoomOut = 'zoom-out';
const RotateCcw = 'rotate-ccw';

  import { createZoomControlsState } from '$stylist/control/function/state/zoom-controls';
  import type { ZoomControlsProps } from '$stylist/control/type/struct/zoom-controls-props';

  let props: ZoomControlsProps = $props();

  const state = createZoomControlsState(props);

  const restProps = $derived(
    (() => {
      const { class: _class, initialValue: _initialValue, minZoom: _minZoom, maxZoom: _maxZoom, step: _step, showPercentage: _showPercentage, onChange: _onChange, onValueInput: _onValueInput, onValueChange: _onValueChange, ...rest } = props;
      return rest;
    })()
  );

  $effect(() => {
    state.applyZoom();
  });
</script>

<div class={state.containerClasses} {...restProps}>
  <div class={state.indicatorContainerClasses}>
    <div class={state.indicatorClasses}>
      <span class="text-sm font-medium text-[var(--color-text-primary)]">
        {state.showPercentage ? `${state.currentZoom}%` : state.currentZoom}
      </span>
    </div>
  </div>

  <div class={state.controlsContainerClasses}>
    <button
      type="button"
      class={`${state.controlButtonClasses} ${state.controlButtonFirstClasses} ${state.currentZoom >= state.maxZoom ? state.controlButtonDisabledClasses : ''}`}
      onclick={() => state.handleZoomIn()}
      aria-label="Zoom in"
      disabled={state.currentZoom >= state.maxZoom}
    >
      <BaseIcon name={ZoomIn} class="h-5 w-5" />
    </button>

    <button
      type="button"
      class={`${state.controlButtonClasses} ${state.controlButtonMiddleClasses}`}
      onclick={() => state.handleReset()}
      aria-label="Reset zoom"
    >
      <BaseIcon name={RotateCcw} class="h-5 w-5" />
    </button>

    <button
      type="button"
      class={`${state.controlButtonClasses} ${state.controlButtonLastClasses} ${state.currentZoom <= state.minZoom ? state.controlButtonDisabledClasses : ''}`}
      onclick={() => state.handleZoomOut()}
      aria-label="Zoom out"
      disabled={state.currentZoom <= state.minZoom}
    >
      <BaseIcon name={ZoomOut} class="h-5 w-5" />
    </button>
  </div>

  <div class={state.hintClasses}>
    <div>Zoom controls</div>
    <div class="flex space-x-1">
      <kbd class={state.kbdClasses}>Ctrl</kbd>
      <span>+</span>
      <kbd class={state.kbdClasses}>-</kbd>
    </div>
  </div>
</div>





