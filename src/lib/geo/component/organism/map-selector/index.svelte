<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { Button } from '$stylist/control';
  import { createMapSelectorState } from '$stylist/geo/function/state/map-selector';
  import type { MapSelectorLocation } from '$stylist/geo/type/struct/map-selector';

  let props = $props();
  const state = createMapSelectorState(props);
</script>

<div class={`c-map-selector ${props.class ?? ''}`} style={`width: ${props.width ?? '100%'}; height: ${props.height ?? '400px'};`} {...state.restProps}>
  {#if state.showSearch}
    <div class="relative z-[var(--z-index-docked)] mb-4">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)]" />
      </div>
      <input
        type="text"
        class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${props.searchClass ?? ''}`}
        placeholder="Search for places..."
        value={state.searchQuery}
        oninput={(e) => state.searchQuery = (e.target as HTMLInputElement).value}
        onkeypress={(e) => e.key === 'Enter' && state.handleSearch()}
      />
      <button
        class="absolute inset-y-0 right-0 px-3 flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
        onclick={state.handleSearch}
      >
        <BaseIcon name="search" class="h-5 w-5" />
      </button>
    </div>
  {/if}

  <div class={`relative rounded-lg overflow-hidden border border-[var(--color-border-primary)] ${props.mapClass ?? ''}`}>
    <div
      class="w-full h-full bg-[var(--color-primary-50)] relative"
      onclick={state.handleMapClick}
      onmousedown={state.handleMouseDown}
      onmousemove={state.handleMouseMove}
      onmouseup={state.handleMouseUp}
      onmouseleave={state.handleMouseUp}
      role="button"
      tabindex={0}
      onkeydown={(e: KeyboardEvent) => state.handleKeyDown(e, () => state.handleMapClick(e as unknown as MouseEvent))}
    >
      <div class="absolute inset-0 [background-image:var(--gradient-forest)]">
        {#each Array(10) as _, i}
          <div
            class="absolute w-full h-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-30)]"
            style={`top: ${i * 10}%`}
          ></div>
          <div
            class="absolute h-full w-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-30)]"
            style={`left: ${i * 10}%`}
          ></div>
        {/each}

        <div class="absolute w-1/3 h-1/4 bg-[var(--color-primary-200)] rounded-lg opacity-[var(--opacity-50)]" style="top: 20%; left: 30%;"></div>
        <div class="absolute w-1/5 h-1/5 bg-[var(--color-primary-200)] rounded-full opacity-[var(--opacity-50)]" style="top: 60%; left: 20%;"></div>
        <div class="absolute w-full h-1 bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]" style="top: 30%;"></div>
        <div class="absolute h-full w-1 bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]" style="left: 40%;"></div>
        <div class="absolute w-1/4 h-1/6 bg-[var(--color-success-200)] rounded opacity-[var(--opacity-60)]" style="top: 50%; left: 60%;"></div>
      </div>

      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--color-danger-500)] rounded-full border-2 border-[var(--color-background-primary)] shadow-lg"
        style="z-index: var(--z-index-docked);"
      ></div>

      {#if state.showMarkers}
        {#each state.locations as location}
          {@const pos = state.calculateMarkerPosition(location)}
          <div
            class="absolute w-6 h-6 bg-[var(--color-primary-500)] rounded-full border-2 border-[var(--color-background-primary)] shadow-md cursor-pointer transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[var(--color-text-inverse)] text-xs"
            style={`left: ${pos.x}%; top: ${pos.y}%; z-index: var(--z-index-layer20);`}
            onclick={(e) => state.handleMarkerClickEvent(location, e)}
            title={location.name}
            role="button"
            tabindex={0}
            onkeydown={(e: KeyboardEvent) => state.handleMarkerKeyDown(location, e)}
          >
            <BaseIcon name="map-pin" class="h-4 w-4" />
            {#if pos.y > 50}
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-[var(--color-background-primary)] shadow-md rounded px-2 py-1 text-xs whitespace-nowrap">
                {location.name}
              </div>
            {/if}
          </div>
        {/each}
      {/if}
    </div>

    {#if state.showZoomControls}
      <div class={`absolute right-4 top-4 flex flex-col space-y-2 ${props.controlsClass ?? ''}`}>
        <Button variant="secondary" size="sm" onclick={state.handleZoomIn} aria-label="Zoom in">
          <BaseIcon name="plus" class="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="sm" onclick={state.handleZoomOut} aria-label="Zoom out">
          <BaseIcon name="minus" class="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="sm" onclick={state.handleResetView} aria-label="Reset view">
          <BaseIcon name="rotate-ccw" class="h-4 w-4" />
        </Button>
      </div>
    {/if}

    {#if state.showCurrentLocation}
      <div class="absolute bottom-4 right-4">
        <Button variant="secondary" size="sm" onclick={state.handleCurrentLocation} aria-label="Show current location">
          <BaseIcon name="navigation" class="h-4 w-4" />
        </Button>
      </div>
    {/if}

    <div class="absolute bottom-4 left-4 bg-[var(--color-background-primary)]/80 backdrop-blur-sm rounded-md px-3 py-2 text-sm">
      <div>Zoom: {state.currentZoom}</div>
      <div>Center: {state.currentCenter.lat.toFixed(4)}, {state.currentCenter.lng.toFixed(4)}</div>
    </div>
  </div>
</div>
