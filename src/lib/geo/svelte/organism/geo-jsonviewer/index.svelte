<script lang="ts">
  import { Icon as BaseIcon, Button } from '$stylist';
  import { createGeoJSONViewerState } from '$stylist/geo/function/state/geo-jsonviewer';
  import { geoHandleKeyDown } from '$stylist/geo/function/script/handle-key-down';
  import type { GeoJsonFeature } from '$stylist/geo/interface/component/geo-jsonviewer/other';

  const Globe = 'globe';
  const Layers = 'layers';
  const Info = 'info';
  const Download = 'download';
  const Upload = 'upload';
  const Plus = 'plus';
  const Minus = 'minus';
  const RotateCcw = 'rotate-ccw';
  const X = 'x';

  let props = $props();
  const state = createGeoJSONViewerState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
  <div class="flex flex-col h-full">
    {#if state.showLayers}
      <div class={state.layersPanelClasses} style={state.layersPanelStyles}>
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-lg font-medium">Layers</h3>
          <label
            class={state.fileUploadButtonClasses}
            style={state.fileUploadButtonStyles}
            onmouseover={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.cssText = `${state.fileUploadButtonStyles}${state.fileUploadButtonHoverStyles}`;
            }}
            onmouseout={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.cssText = state.fileUploadButtonStyles;
            }}
            onfocus={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.cssText = `${state.fileUploadButtonStyles}${state.fileUploadButtonHoverStyles}`;
            }}
            onblur={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.cssText = state.fileUploadButtonStyles;
            }}
          >
            <BaseIcon name={Upload} class="h-4 w-4 inline mr-1" />
            Upload GeoJSON
            <input
              type="file"
              class="hidden"
              accept=".geojson,.json"
              onchange={state.handleFileUpload}
            />
          </label>
        </div>

        <div class="space-y-2 max-h-60 overflow-y-auto">
          {#each state.currentLayers as layer}
            <div class={state.layerControlItemClasses} style={state.layerControlItemStyles}>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  checked={layer.visible}
                  onchange={() => state.toggleLayerVisibility(layer.id)}
                  class={state.layerVisibilityCheckboxClasses}
                  style={state.layerVisibilityCheckboxStyles}
                />
                <span class="ml-2 text-sm">{layer.name}</span>
              </div>

              <div class="flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={layer.opacity}
                  oninput={(e) => state.changeLayerOpacity(layer.id, parseFloat((e.target as HTMLInputElement).value))}
                  class={state.layerOpacitySliderClasses}
                />
                <div class="w-4 h-4 rounded-full" style={`background-color: ${layer.color}`} title={layer.color}></div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <div class={state.mapContainerClasses} style={state.mapContainerStyles}>
      <div
        class={`w-full h-full ${props.mapClass ?? ''}`}
        onclick={state.handleMapClick}
        style="cursor: grab; ${state.isDragging ? 'cursor: grabbing' : ''}"
        role="button"
        tabindex={0}
        onkeydown={(e: KeyboardEvent) => geoHandleKeyDown(e, () => state.handleMapClick(e as unknown as MouseEvent))}
      >
        <svg
          width="100%"
          height="100%"
          class={state.svgClasses}
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="var(--color-border-primary)" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {#each state.currentLayers as layer}
            {#if layer.visible}
              {#each layer.data.features as feature}
                {@const geometry = feature.geometry}

                {#if geometry.type === 'Point'}
                  {@const [lng, lat] = geometry.coordinates as [number, number]}
                  {@const position = state.calculatePixelPosition(lng, lat)}
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r={6}
                    style={state.getPointStyles(layer.color, layer.opacity)}
                    class={state.geometryElementClasses}
                    onclick={(e) => state.handleFeatureClick(feature, e)}
                    role="button"
                    tabindex={-1}
                    onkeydown={(e: KeyboardEvent) => state.handleFeatureKeyDown(feature, e)}
                  />
                {/if}

                {#if geometry.type === 'Polygon'}
                  {#each geometry.coordinates as ring}
                    {@const points = ring.map(([lng, lat]: [number, number]) => {
                      const pos = state.calculatePixelPosition(lng, lat);
                      return `${pos.x},${pos.y}`;
                    }).join(' ')}

                    <polygon
                      points={points}
                      style={state.getPolygonStyles(layer.color, layer.opacity)}
                      class={state.geometryElementClasses}
                      onclick={(e) => state.handleFeatureClick(feature, e)}
                      role="button"
                      tabindex={-1}
                      onkeydown={(e: KeyboardEvent) => state.handleFeatureKeyDown(feature, e)}
                    />
                  {/each}
                {/if}

                {#if geometry.type === 'LineString'}
                  {@const points = geometry.coordinates.map(([lng, lat]) => {
                    const pos = state.calculatePixelPosition(lng, lat);
                    return `${pos.x},${pos.y}`;
                  }).join(' ')}

                  <polyline
                    points={points}
                    fill="none"
                    style={state.getLineStringStyles(layer.color, layer.opacity)}
                    class={state.geometryElementClasses}
                    onclick={(e) => state.handleFeatureClick(feature, e)}
                    role="button"
                    tabindex={-1}
                    onkeydown={(e: KeyboardEvent) => state.handleFeatureKeyDown(feature, e)}
                  />
                {/if}
              {/each}
            {/if}
          {/each}
        </svg>
      </div>

      {#if state.showControls}
        <div class="absolute right-4 top-4 flex flex-col space-y-2">
          <Button variant="secondary" size="sm" onclick={state.handleZoomIn}>
            <BaseIcon name={Plus} class="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="sm" onclick={state.handleZoomOut}>
            <BaseIcon name={Minus} class="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="sm" onclick={state.handleResetView}>
            <BaseIcon name={RotateCcw} class="h-4 w-4" />
          </Button>
        </div>
      {/if}
    </div>

    {#if state.selectedFeature && state.selectedFeature.properties}
      <div class={state.featureInfoPanelClasses} style={state.featureInfoPanelStyles}>
        <div class="flex justify-between items-start">
          <h3 class="text-lg font-medium">Selected Feature</h3>
          <Button variant="ghost" size="sm" onclick={() => state.selectedFeature = null}>
            <BaseIcon name={X} class="h-4 w-4" />
          </Button>
        </div>

        <div class="mt-3 grid grid-cols-2 gap-2">
          {#each Object.entries(state.selectedFeature.properties) as [key, value]}
            <div class="flex flex-col">
              <span class="text-xs text-[var(--color-text-secondary)]">{key}</span>
              <span class="text-sm">{String(value)}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
