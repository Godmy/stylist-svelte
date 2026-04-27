<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { Button } from '$lib';
  import { createMapMarkerState } from '$stylist/geo/function/state/map-marker';
  import { geoHandleKeyDown } from '$stylist/geo/function/script/handle-key-down';

  /**
   * MapMarker component - A map marker with interactive popup and category-based icons
   */
  let props = $props();
  const state = createMapMarkerState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
  <div
    class={state.markerContainerClasses}
    onclick={state.handleClick}
    role="button"
    tabindex={0}
    onkeydown={(e: KeyboardEvent) => state.handleKeyDown(e, state.handleClick)}
  >
    {#if state.pinStyle === 'vector'}
      <BaseIcon
        name="map-pin"
        class={state.pinStyleClasses}
      />
    {:else if state.pinStyle === 'flag'}
      <div class={state.pinStyleClasses}>
        <div class={state.flagClasses}></div>
        <div class={state.flagTopClasses}></div>
      </div>
    {:else}
      <div class={`flex items-center justify-center ${state.pinStyleClasses}`}>
        <BaseIcon name={state.CategoryIcon} class="w-3/5 h-3/5" />
      </div>
    {/if}

    {#if state.distance}
      <div class={state.distanceLabelClasses}>{state.distance}</div>
    {/if}
  </div>

  {#if state.isPopupOpen}
    <div class={state.popupClasses}>
      <div class="flex justify-between items-start">
        <div>
          {#if state.title}
            <h3 class={state.titleClasses}>{state.title}</h3>
          {/if}
          {#if state.description}
            <p class={state.descriptionClasses}>{state.description}</p>
          {/if}
          {#if state.rating !== undefined}
            <div class={state.ratingContainerClasses}>
              {#each Array(5) as _, i}
                <BaseIcon
                  name="star"
                  class={state.getStarClasses(i < Math.floor(state.rating))}
                />
              {/each}
              <span class="ml-1 text-sm text-[--color-text-secondary]">{state.rating.toFixed(1)}</span>
            </div>
          {/if}
        </div>
        <button
          class={state.closeButtonClasses}
          onclick={() => state.isPopupOpen = false}
          aria-label="Close popup"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {#if state.contactInfo}
        <div class={state.contactInfoContainerClasses}>
          {#if state.contactInfo.phone}
            <div class={state.contactItemClasses}>
              <BaseIcon name="phone" class="h-4 w-4 mr-2" />
              <a href={`tel:${state.contactInfo.phone}`} class={state.contactLinkClasses}>{state.contactInfo.phone}</a>
            </div>
          {/if}
          {#if state.contactInfo.email}
            <div class={state.contactItemClasses}>
              <BaseIcon name="mail" class="h-4 w-4 mr-2" />
              <a href={`mailto:${state.contactInfo.email}`} class={state.contactLinkClasses} target="_blank">{state.contactInfo.email}</a>
            </div>
          {/if}
          {#if state.contactInfo.hours}
            <div class={state.contactItemClasses}>
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{state.contactInfo.hours}</span>
            </div>
          {/if}
        </div>
      {/if}

      {#if props.snippet}
        <div class={state.customContentClasses}>
          {@render props.snippet()}
        </div>
      {/if}

      {#if props.popupContent}
        <div class="mt-3">
          {@render props.popupContent()}
        </div>
      {/if}

      <div class={state.actionButtonsContainerClasses}>
        <Button variant="outline" size="sm" onclick={state.handleNavigateClick}>
          <BaseIcon name="navigation" class="h-4 w-4 mr-1" />
          Directions
        </Button>
        <Button variant="outline" size="sm" onclick={state.handleInfoClick}>
          <BaseIcon name="info" class="h-4 w-4 mr-1" />
          Details
        </Button>
      </div>
    </div>
  {/if}
</div>
