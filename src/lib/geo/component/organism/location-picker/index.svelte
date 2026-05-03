<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { Button } from '$stylist/control';
  import { createLocationPickerState } from '$stylist/geo/function/state/location-picker';
  import { geoHandleKeyDown } from '$stylist/geo/function/script/handle-key-down';
  import type { MapMarker } from '$stylist/geo/type/struct/location-picker';

  let props = $props();
  const state = createLocationPickerState(props);
</script>

<div class={`c-location-picker ${props.class ?? ''}`} {...state.restProps}>
  {#if state.showSearch}
    <div class="relative mb-4">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)]" />
      </div>
      <input
        type="text"
        class="block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm"
        placeholder="Search for a place..."
        value={state.searchQuery}
        oninput={(e) => state.searchQuery = (e.target as HTMLInputElement).value}
        onkeypress={(e) => e.key === 'Enter' && state.handleSearch()}
      />
      <button
        class="absolute inset-y-0 right-0 pr-3 flex items-center"
        onclick={state.handleSearch}
      >
        <BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]" />
      </button>
    </div>
  {/if}

  <div class="relative rounded-lg overflow-hidden border border-[var(--color-border-primary)] shadow-sm">
    <div
      class={`relative bg-[var(--color-primary-50)] cursor-crosshair ${props.mapClass ?? ''}`}
      style={`width: 100%; height: 400px;`}
      onclick={state.handleMapClick}
      role="button"
      tabindex={0}
      onkeydown={(e: KeyboardEvent) => geoHandleKeyDown(e, () => state.handleMapClick(e as unknown as MouseEvent))}
    >
      <div class="absolute inset-0 [background-image:var(--gradient-forest)]">
        {#each Array(10).fill(0) as _, i}
          <div
            class="absolute w-full h-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-30)]"
            style={`top: ${i * 10}%`}
          ></div>
          <div
            class="absolute h-full w-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-30)]"
            style={`left: ${i * 10}%`}
          ></div>
        {/each}

        <div
          class="absolute w-3 h-3 bg-[var(--color-danger-500)] rounded-full border-2 border-[var(--color-background-primary)] transform -translate-x-1/2 -translate-y-1/2"
          style={`left: 50%; top: 50%;`}
        ></div>
      </div>

      {#each state.markers as marker}
        {@const pos = state.coordsToPixel(marker.coordinates, state.mapDimensions.width, state.mapDimensions.height)}
        <div
          class={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
            state.selectedMarker === marker.id ? 'z-[var(--z-index-docked)]' : 'z-[var(--z-index-base)]'
          }`}
          style={`left: ${pos.x}px; top: ${pos.y}px;`}
          onclick={(e) => {
            e.stopPropagation();
            state.handleMarkerClick(marker);
          }}
          role="button"
          tabindex={0}
          onkeydown={(e: KeyboardEvent) => state.handleMarkerKeyDown(marker, e)}
        >
          <BaseIcon name="map-pin"
            class={`h-6 w-6 ${
              state.selectedMarker === marker.id
                ? 'text-[var(--color-danger-600)] fill-current scale-125'
                : 'text-[var(--color-primary-600)] fill-current'
            }`}
          />
          {#if state.selectedMarker === marker.id || marker.title}
            <div class="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-[var(--color-background-primary)] shadow-md rounded px-2 py-1 text-xs whitespace-nowrap">
              {marker.title || `Marker ${marker.id}`}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <div class="absolute right-4 top-4 flex flex-col space-y-2">
      <Button variant="secondary" size="sm" onclick={state.handleZoomIn} disabled={state.currentZoom >= state.maxZoom}>
        <BaseIcon name="plus" class="h-4 w-4" />
      </Button>
      <Button variant="secondary" size="sm" onclick={state.handleZoomOut} disabled={state.currentZoom <= state.minZoom}>
        <BaseIcon name="minus" class="h-4 w-4" />
      </Button>
      <Button variant="secondary" size="sm" onclick={state.handleResetView}>
        <BaseIcon name="rotate-ccw" class="h-4 w-4" />
      </Button>
      {#if state.showCurrentLocation}
        <Button variant="secondary" size="sm" onclick={state.handleCurrentLocation}>
          <BaseIcon name="crosshair" class="h-4 w-4" />
        </Button>
      {/if}
    </div>

    {#if state.showCoordinates}
      <div class="absolute bottom-4 left-4 bg-[var(--color-background-primary)]/80 backdrop-blur-sm rounded-md px-3 py-2 text-sm">
        <div>Lat: {state.currentCenter.lat.toFixed(4)}</div>
        <div>Lng: {state.currentCenter.lng.toFixed(4)}</div>
        <div>Zoom: {state.currentZoom}</div>
      </div>
    {/if}
  </div>
</div>
