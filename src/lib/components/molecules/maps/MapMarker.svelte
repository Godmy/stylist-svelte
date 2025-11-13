<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { MapPin, Info, Heart, Star, Phone, Mail, Navigation, Users, Building, Settings, Bus, HeartPulse, GraduationCap, ShoppingBag, AlertTriangle, Utensils, Car } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type MarkerType = 'default' | 'business' | 'person' | 'place' | 'custom';

  type MarkerCategory =
    | 'restaurant'
    | 'hotel'
    | 'attraction'
    | 'service'
    | 'transport'
    | 'health'
    | 'education'
    | 'shopping'
    | 'emergency';

  type Coordinates = {
    lat: number;
    lng: number;
  };

  type ContactInfo = {
    phone?: string;
    email?: string;
    website?: string;
    hours?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    coordinates: Coordinates;
    title?: string;
    description?: string;
    snippet?: Snippet; // Additional content snippet
    type?: MarkerType;
    category?: MarkerCategory;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
    showPopup?: boolean;
    popupContent?: Snippet;
    pinStyle?: 'standard' | 'flag' | 'custom';
    rating?: number; // 0-5 rating
    contactInfo?: ContactInfo;
    distance?: string; // e.g. "0.5 miles away"
    selected?: boolean;
    onMarkerClick?: (coordinates: Coordinates) => void;
    onInfoClick?: (coordinates: Coordinates) => void;
    onNavigateClick?: (coordinates: Coordinates) => void;
    class?: string;
    iconClass?: string;
    popupClass?: string;
    contentClass?: string;
  };

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
  }: Props = $props();

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

  function getIconForCategory(cat?: MarkerCategory) {
    if (!cat) return MapPin;

    const categoryIcons: Record<MarkerCategory, typeof MapPin> = {
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

  // Size classes
  let sizeClass = $derived({
    'sm': 'h-4 w-4',
    'md': 'h-6 w-6',
    'lg': 'h-8 w-8'
  }[size]);

  // Color classes
  let colorClass = $derived(color || {
    'default': 'text-blue-500',
    'business': 'text-green-500',
    'person': 'text-purple-500',
    'place': 'text-yellow-500',
    'custom': 'text-red-500'
  }[type]);

  // Function to render star ratings
  function renderStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating
          ? '<Star class="w-4 h-4 text-yellow-400 fill-current" />'
          : '<Star class="w-4 h-4 text-gray-300" />'
      );
    }
    return stars;
  }

  // Define placeholder icons for category-specific markers
  let MapPinIcon = MapPin;
  let InfoIcon = Info;
  let PhoneIcon = Phone;
  let MailIcon = Mail;
  let NavigationIcon = Navigation;
  let HeartIcon = Heart;
  let StarIcon = Star;
  let UsersIcon = Users;
</script>

<div class={`map-marker ${selected ? 'z-10' : 'z-0'} relative ${hostClass}`} {...restProps}>
  <div
    class={`flex flex-col items-center cursor-pointer ${iconClass}`}
    onclick={handleClick}
    role="button"
    tabindex={0}
    onkeydown={(e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') handleClick();
    }}
  >
    {#if pinStyle === 'standard'}
      <MapPinIcon
        class={`${sizeClass} ${colorClass} ${selected ? 'scale-125' : ''} transition-transform duration-200`}
      />
    {:else if pinStyle === 'flag'}
      <div class={`relative ${sizeClass}`}>
        <div class={`absolute w-0.5 h-3/4 ${colorClass} bottom-0 left-1/2 transform -translate-x-1/2`}></div>
        <div class={`absolute top-0 left-1/2 transform -translate-x-full ${colorClass} w-4 h-4 rounded-full`}></div>
      </div>
    {:else}
      <div class={`flex items-center justify-center ${sizeClass} ${colorClass} rounded-full border-2 border-white shadow-md`}>
        <CategoryIcon class="w-3/5 h-3/5" />
      </div>
    {/if}

    {#if distance}
      <div class="text-xs bg-white px-1 rounded mt-1 shadow-sm">{distance}</div>
    {/if}
  </div>

  {#if isPopupOpen}
    <div class={`absolute z-20 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4 ${popupClass}`}>
      <div class="flex justify-between items-start">
        <div>
          {#if title}
            <h3 class="font-semibold text-gray-900">{title}</h3>
          {/if}
          {#if description}
            <p class="text-sm text-gray-600 mt-1">{description}</p>
          {/if}
          {#if rating !== undefined}
            <div class="flex items-center mt-2">
              {#each Array(5) as _, i}
                <StarIcon
                  class={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              {/each}
              <span class="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
            </div>
          {/if}
        </div>
        <button
          class="text-gray-400 hover:text-gray-600"
          onclick={() => isPopupOpen = false}
          aria-label="Close popup"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {#if contactInfo}
        <div class="mt-3 pt-3 border-t border-gray-200">
          {#if contactInfo.phone}
            <div class="flex items-center text-sm text-gray-600 mt-2">
              <PhoneIcon class="h-4 w-4 mr-2" />
              <a href={`tel:${contactInfo.phone}`} class="hover:text-blue-600">{contactInfo.phone}</a>
            </div>
          {/if}
          {#if contactInfo.email}
            <div class="flex items-center text-sm text-gray-600 mt-2">
              <MailIcon class="h-4 w-4 mr-2" />
              <a href={`mailto:${contactInfo.email}`} class="hover:text-blue-600 truncate">{contactInfo.email}</a>
            </div>
          {/if}
          {#if contactInfo.hours}
            <div class="flex items-center text-sm text-gray-600 mt-2">
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{contactInfo.hours}</span>
            </div>
          {/if}
        </div>
      {/if}

      {#if snippet}
        <div class={`mt-3 ${contentClass}`}>
          {@render snippet()}
        </div>
      {/if}

      {#if popupContent}
        <div class="mt-3">
          {@render popupContent()}
        </div>
      {/if}

      <div class="flex space-x-2 mt-4">
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
