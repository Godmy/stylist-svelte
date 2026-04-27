<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { Button } from '$lib';
  import { createMapWithMarkersState } from '$stylist/geo/function/state/map-with-markers';

  let props = $props();
  const state = createMapWithMarkersState(props);
</script>

<div class={`map-with-markers ${props.class ?? ''}`} {...state.restProps}>
  <div class="flex flex-col h-full">
    {#if state.showSearch}
      <div class="mb-4">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BaseIcon name="search" class="h-5 w-5 text-[var(--color-text-tertiary)]" />
          </div>
          <input
            type="text"
            class="block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm"
            placeholder="Search for places..."
            value={state.searchQuery}
            oninput={(e) => state.searchQuery = (e.target as HTMLInputElement).value}
          />
        </div>
      </div>
    {/if}

    <div
      class={`relative rounded-lg overflow-hidden border border-[var(--color-border-primary)] ${props.mapClass ?? ''}`}
      style="height: 500px;"
      onclick={state.handleMapClick}
      onmousedown={state.handleMouseDown}
      onmousemove={state.handleMouseMove}
      onmouseup={state.handleMouseUp}
      onmouseleave={state.handleMouseUp}
      role="button"
      tabindex={0}
      onkeydown={(e: KeyboardEvent) => state.handleKeyDown(e, () => state.handleMapClick(e as unknown as MouseEvent))}
    >
      <div class="absolute inset-0 bg-[var(--color-primary-50)]">
        {#each Array(20) as _, i}
          <div
            class="absolute w-full h-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-20)]"
            style={`top: ${i * 5}%`}
          ></div>
          <div
            class="absolute h-full w-px bg-[var(--color-background-tertiary)] opacity-[var(--opacity-20)]"
            style={`left: ${i * 5}%`}
          ></div>
        {/each}

        <div class="absolute w-1/3 h-1/4 bg-[var(--color-primary-200)] rounded-lg opacity-[var(--opacity-50)]" style="top: 20%; left: 30%;"></div>
        <div class="absolute w-1/5 h-1/5 bg-[var(--color-primary-200)] rounded-full opacity-[var(--opacity-50)]" style="top: 60%; left: 20%;"></div>
        <div class="absolute w-full h-1 bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]" style="top: 30%;"></div>
        <div class="absolute h-full w-1 bg-[var(--color-neutral-400)] opacity-[var(--opacity-40)]" style="left: 40%;"></div>
        <div class="absolute w-1/4 h-1/6 bg-[var(--color-success-200)] rounded opacity-[var(--opacity-60)]" style="top: 50%; left: 60%;"></div>
      </div>

      {#each state.markers as marker}
        <div
          class={`absolute transform -translate-x-1/2 -translate-y-1/2 z-[var(--z-index-docked)] cursor-pointer ${props.markerClass ?? ''}`}
          style={`left: calc(50% + ${(marker.lng - state.currentView.center.lng) * 10000 * Math.pow(2, state.currentView.zoom - 10) + state.mapOffset.x}px); top: calc(50% + ${(state.currentView.center.lat - marker.lat) * 10000 * Math.pow(2, state.currentView.zoom - 10) + state.mapOffset.y}px);`}
          onclick={(e) => state.handleMarkerClick(marker, e)}
          onmouseover={() => state.hoveredMarker = marker.id}
          onmouseout={() => state.hoveredMarker = null}
          onfocus={() => state.hoveredMarker = marker.id}
          onblur={() => state.hoveredMarker = null}
          role="button"
          tabindex={0}
          onkeydown={(e: KeyboardEvent) => state.handleMarkerKeyDown(marker, e)}
        >
          <div class={`flex flex-col items-center ${state.hoveredMarker === marker.id ? 'scale-110' : ''} transition-transform`}>
            <div
              class={`rounded-full flex items-center justify-center ${
                marker.size === 'sm' ? 'w-6 h-6' :
                marker.size === 'lg' ? 'w-10 h-10' : 'w-8 h-8'
              } ${
                marker.color || 'bg-[var(--color-primary-500)]'
              } border-2 border-[var(--color-background-primary)] shadow-lg`}
            >
              <BaseIcon name="map-pin" class={`${
                marker.size === 'sm' ? 'w-4 h-4' :
                marker.size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
              } text-[var(--color-text-inverse)]`} />
            </div>

            {#if state.hoveredMarker === marker.id && marker.title}
              <div class="absolute top-full mt-2 bg-[var(--color-background-primary)] shadow-lg rounded px-3 py-2 text-sm whitespace-nowrap z-[var(--z-index-popover)]">
                <div class="font-medium">{marker.title}</div>
                {#if marker.description}
                  <div class="text-[var(--color-text-secondary)]">{marker.description}</div>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      {/each}

      <div class="absolute right-4 top-4 flex flex-col space-y-2">
        {#if state.showZoomControls}
          <Button variant="secondary" size="sm" onclick={state.handleZoomIn} aria-label="Zoom in">
            <BaseIcon name="plus" class="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="sm" onclick={state.handleZoomOut} aria-label="Zoom out">
            <BaseIcon name="minus" class="h-4 w-4" />
          </Button>
        {/if}

        {#if state.showCurrentLocation}
          <Button variant="secondary" size="sm" onclick={state.handleCurrentLocation} aria-label="Current location">
            <BaseIcon name="locate" class="h-4 w-4" />
          </Button>
        {/if}

        {#if state.showResetView}
          <Button variant="secondary" size="sm" onclick={state.handleResetView} aria-label="Reset view">
            <BaseIcon name="rotate-ccw" class="h-4 w-4" />
          </Button>
        {/if}
      </div>

      <div class="absolute bottom-4 left-4 bg-[var(--color-background-primary)]/80 backdrop-blur-sm rounded-md px-3 py-2 text-sm">
        {#if state.showScale}
          <div>Scale: 1:{Math.round(Math.pow(2, 20 - state.currentView.zoom) * 100)}m</div>
        {/if}
        <div>Zoom: {state.currentView.zoom}</div>
      </div>
    </div>
  </div>
</div>
