<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { MapPin, Info, Star, Phone, Mail, Navigation, Building, Settings, HeartPulse, GraduationCap, ShoppingBag, AlertTriangle, Utensils, Car } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  import type { IMapMarkerProps } from '$lib/design-system/props/information/map-marker';
  import { MapMarkerStyleManager } from '$lib/design-system/styles/information/map-marker';

  /**
   * MapMarker component - A map marker with interactive popup and category-based icons
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles map marker rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other marker components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param coordinates - Latitude and longitude of the marker
   * @param title - Title displayed in the popup
   * @param description - Description displayed in the popup
   * @param snippet - Additional content snippet
   * @param type - Type of the marker
   * @param category - Category of the location
   * @param color - Custom color for the marker
   * @param size - Size of the marker ('sm' | 'md' | 'lg')
   * @param showPopup - Whether to initially show the popup
   * @param popupContent - Custom content for the popup
   * @param pinStyle - Style of the pin ('standard' | 'flag' | 'custom')
   * @param rating - Rating from 0-5
   * @param contactInfo - Contact information to display
   * @param distance - Distance string to display
   * @param selected - Whether the marker is currently selected
   * @param onMarkerClick - Callback when marker is clicked
   * @param onInfoClick - Callback when info button is clicked
   * @param onNavigateClick - Callback when navigate button is clicked
   * @param class - Additional CSS classes for the container
   * @param iconClass - Additional CSS classes for the icon
   * @param popupClass - Additional CSS classes for the popup
   * @param contentClass - Additional CSS classes for the content
   * @returns An accessible, styled map marker component
   */
  let {
    coordinates,
    title,
    description,
    snippet,
    type = 'default',
    category,
    color = '',
    size = 'md',
    showPopup = false,
    popupContent,
    pinStyle = 'standard',
    rating,
    contactInfo,
    distance,
    selected = false,
    onMarkerClick,
    onInfoClick,
    onNavigateClick,
    class: hostClass = '',
    iconClass = '',
    popupClass = '',
    contentClass = '',
    ...restProps
  }: IMapMarkerProps = $props();

  let isPopupOpen = $state(showPopup);

  function handleClick() {
    onMarkerClick?.(coordinates);
    isPopupOpen = !isPopupOpen;
  }

  function handleInfoClick() {
    onInfoClick?.(coordinates);
  }

  function handleNavigateClick() {
    onNavigateClick?.(coordinates);
  }

  function getIconForCategory(cat?: string) {
    if (!cat) return MapPin;

    const categoryIcons: Record<string, typeof MapPin> = {
      'restaurant': Utensils,
      'hotel': Building,
      'attraction': Star,
      'service': Settings,
      'transport': Car,
      'health': HeartPulse,
      'education': GraduationCap,
      'shopping': ShoppingBag,
      'emergency': AlertTriangle
    };

    return categoryIcons[cat] || MapPin;
  }

  // Define icon components for categories
  let CategoryIcon = getIconForCategory(category);

  // Derived classes using StyleManager
  let hostClasses = $derived(MapMarkerStyleManager.getBaseClasses(selected, hostClass));
  let markerContainerClasses = $derived(MapMarkerStyleManager.getMarkerContainerClasses(iconClass));
  let colorClass = $derived(MapMarkerStyleManager.getColorClass(color, type));
  let pinStyleClasses = $derived(MapMarkerStyleManager.getPinStyleClasses(size, colorClass, selected, pinStyle));
  let distanceLabelClasses = $derived(MapMarkerStyleManager.getDistanceLabelClasses());
  let popupClasses = $derived(MapMarkerStyleManager.getPopupClasses(popupClass));
  let titleClasses = $derived(MapMarkerStyleManager.getTitleClasses(''));
  let descriptionClasses = $derived(MapMarkerStyleManager.getDescriptionClasses());
  let ratingContainerClasses = $derived(MapMarkerStyleManager.getRatingContainerClasses());
  let closeButtonClasses = $derived(MapMarkerStyleManager.getCloseButtonClasses());
  let contactInfoContainerClasses = $derived(MapMarkerStyleManager.getContactInfoContainerClasses());
  let contactItemClasses = $derived(MapMarkerStyleManager.getContactItemClasses());
  let contactLinkClasses = $derived(MapMarkerStyleManager.getContactLinkClasses());
  let customContentClasses = $derived(MapMarkerStyleManager.getCustomContentClasses(contentClass));
  let actionButtonsContainerClasses = $derived(MapMarkerStyleManager.getActionButtonsContainerClasses());
  let starClasses = (isFilled: boolean, isHalf: boolean = false) => MapMarkerStyleManager.getStarClasses(isFilled, isHalf);
  let flagClasses = $derived(MapMarkerStyleManager.getFlagClasses(colorClass, size));
  let flagTopClasses = $derived(MapMarkerStyleManager.getFlagTopClasses(colorClass, size));

  // Define placeholder icons for category-specific markers
  let MapPinIcon = MapPin;
  let InfoIcon = Info;
  let PhoneIcon = Phone;
  let MailIcon = Mail;
  let NavigationIcon = Navigation;
  let StarIcon = Star;
</script>

<div class={hostClasses} {...restProps}>
  <div
    class={markerContainerClasses}
    onclick={handleClick}
    role="button"
    tabindex={0}
    onkeydown={(e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') handleClick();
    }}
  >
    {#if pinStyle === 'standard'}
      <MapPinIcon
        class={pinStyleClasses}
      />
    {:else if pinStyle === 'flag'}
      <div class={pinStyleClasses}>
        <div class={flagClasses}></div>
        <div class={flagTopClasses}></div>
      </div>
    {:else}
      <div class={`flex items-center justify-center ${pinStyleClasses}`}>
        <CategoryIcon class="w-3/5 h-3/5" />
      </div>
    {/if}

    {#if distance}
      <div class={distanceLabelClasses}>{distance}</div>
    {/if}
  </div>

  {#if isPopupOpen}
    <div class={popupClasses}>
      <div class="flex justify-between items-start">
        <div>
          {#if title}
            <h3 class={titleClasses}>{title}</h3>
          {/if}
          {#if description}
            <p class={descriptionClasses}>{description}</p>
          {/if}
          {#if rating !== undefined}
            <div class={ratingContainerClasses}>
              {#each Array(5) as _, i}
                <StarIcon
                  class={starClasses(i < Math.floor(rating))}
                />
              {/each}
              <span class="ml-1 text-sm text-[--color-text-secondary]">{rating.toFixed(1)}</span>
            </div>
          {/if}
        </div>
        <button
          class={closeButtonClasses}
          onclick={() => isPopupOpen = false}
          aria-label="Close popup"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {#if contactInfo}
        <div class={contactInfoContainerClasses}>
          {#if contactInfo.phone}
            <div class={contactItemClasses}>
              <PhoneIcon class="h-4 w-4 mr-2" />
              <a href={`tel:${contactInfo.phone}`} class={contactLinkClasses}>{contactInfo.phone}</a>
            </div>
          {/if}
          {#if contactInfo.email}
            <div class={contactItemClasses}>
              <MailIcon class="h-4 w-4 mr-2" />
              <a href={`mailto:${contactInfo.email}`} class={contactLinkClasses} target="_blank">{contactInfo.email}</a>
            </div>
          {/if}
          {#if contactInfo.hours}
            <div class={contactItemClasses}>
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{contactInfo.hours}</span>
            </div>
          {/if}
        </div>
      {/if}

      {#if snippet}
        <div class={customContentClasses}>
          {@render snippet()}
        </div>
      {/if}

      {#if popupContent}
        <div class="mt-3">
          {@render popupContent()}
        </div>
      {/if}

      <div class={actionButtonsContainerClasses}>
        <Button variant="outline" size="sm" onclick={handleNavigateClick}>
          <NavigationIcon class="h-4 w-4 mr-1" />
          Directions
        </Button>
        <Button variant="outline" size="sm" onclick={handleInfoClick}>
          <InfoIcon class="h-4 w-4 mr-1" />
          Details
        </Button>
      </div>
    </div>
  {/if}
</div>
