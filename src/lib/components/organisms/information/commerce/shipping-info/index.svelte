<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Truck = 'truck';
const Package = 'package';
const MapPin = 'map-pin';
const Clock = 'clock';
const Calendar = 'calendar';
const Info = 'info';
const ShieldCheck = 'shield-check';
const XCircle = 'x-circle';
const Globe = 'globe';
const CheckCircle = 'check-circle';

  import { Button } from '$stylist/components/atoms';

  type ShippingOption = {
    id: string;
    name: string;
    description: string;
    price: number;
    estimatedDays: number;
    available?: boolean;
    disabled?: boolean;  // Added the missing property
    cutoffTime?: string; // Time of day when orders must be placed to ship same day
    carrier?: string;
    trackingAvailable?: boolean;
    signatureRequired?: boolean;
    insurance?: boolean;
    carbonNeutral?: boolean;
  };

  type ShippingRegion = {
    id: string;
    name: string;
    countries: string[]; // ISO country codes
    additionalFee?: number;
    restrictions?: string[];
  };

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    shippingOptions: ShippingOption[];
    regions?: ShippingRegion[];
    estimatedDeliveryDate?: Date;
    freeShippingThreshold?: number;
    showOptions?: boolean;
    showRegions?: boolean;
    showDeliveryEstimate?: boolean;
    showFreeShippingInfo?: boolean;
    showRestrictions?: boolean;
    showCarbonNeutralOptions?: boolean;
    showEstimates?: boolean;
    deliveryEstimate?: Date;
    showFreeShipping?: boolean;
    class?: string;
    headerClass?: string;
    optionClass?: string;
    regionClass?: string;
    infoClass?: string;
    onOptionSelect?: (option: ShippingOption) => void;
    onRegionSelect?: (region: ShippingRegion) => void;
    currency?: string;
    locale?: string;
  };

  let {
    shippingOptions = [],
    regions = [],
    estimatedDeliveryDate,
    freeShippingThreshold = 0,
    showOptions = true,
    showRegions = true,
    showDeliveryEstimate = true,
    showFreeShippingInfo = true,
    showRestrictions = true,
    showCarbonNeutralOptions = true,
    class: hostClass = '',
    headerClass = '',
    optionClass = '',
    regionClass = '',
    infoClass = '',
    onOptionSelect,
    onRegionSelect,
    showEstimates = true,
    deliveryEstimate,
    showFreeShipping = false,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();



  let selectedOptionId: string | null = $state(null);
  let selectedRegionId: string | null = $state(null);

  $effect(() => {
    if (shippingOptions.length > 0 && !selectedOptionId) {
      selectedOptionId = shippingOptions[0].id;
    }
  });

  function handleOptionSelect(option: ShippingOption) {
    selectedOptionId = option.id;
    onOptionSelect?.(option);
  }

  function handleRegionSelect(region: ShippingRegion) {
    selectedRegionId = region.id;
    onRegionSelect?.(region);
  }

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  let cheapestOption = $derived.by(() => {
    if (shippingOptions.length === 0) return null;
    return [...shippingOptions].sort((a, b) => a.price - b.price)[0];
  });

  let fastestOption = $derived.by(() => {
    if (shippingOptions.length === 0) return null;
    return [...shippingOptions].sort((a, b) => a.estimatedDays - b.estimatedDays)[0];
  });
</script>

<div class={`c-shipping-info ${hostClass}`} {...restProps}>
  <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${headerClass}`}>
    <div class="flex items-center">
      <BaseIcon name={Truck} class="h-6 w-6 text-[var(--color-primary-500)] mr-3" />
      <h2 class="text-xl font-bold text-[var(--color-text-primary)]">Shipping Information</h2>
    </div>

    {#if showEstimates && deliveryEstimate}
      <div class="mt-4 flex flex-wrap gap-4">
        <div class="flex items-center text-sm text-[var(--color-text-secondary)]">
          <BaseIcon name={Calendar} class="h-4 w-4 mr-2 text-[var(--color-text-secondary)]" />
          <span>Estimated delivery: {formatDate(deliveryEstimate)}</span>
        </div>

        <div class="flex items-center text-sm text-[var(--color-text-secondary)]">
          <BaseIcon name={Clock} class="h-4 w-4 mr-2 text-[var(--color-text-secondary)]" />
          <span>Processing time: 1-2 business days</span>
        </div>
      </div>
    {/if}
  </div>

  <div class="mt-6 space-y-6">
    {#if showOptions && shippingOptions.length > 0}
      <!-- Shipping options -->
      <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${optionClass}`}>
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center">
          <BaseIcon name={Package} class="h-5 w-5 mr-2 text-[var(--color-primary-500)]" />
          Shipping Options
        </h3>

        <div class="space-y-4">
          {#each shippingOptions as option}
            <button
              type="button"
              class={`w-full p-4 border rounded-lg cursor-pointer transition-all ${
                selectedOptionId === option.id
                  ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
                  : 'border-[var(--color-border-primary)] hover:border-[var(--color-primary-300)]'
              } ${option.disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''}`}
              onclick={() => handleOptionSelect(option)}
              disabled={option.disabled}
            >
              <div class="flex items-start justify-between">
                <div>
                  <div class="flex items-center">
                    <h4 class="text-base font-medium text-[var(--color-text-primary)]">{option.name}</h4>
                    {#if option.carbonNeutral}
                      <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-success-100)] text-[var(--color-success-800)]">
                        Carbon Neutral
                      </span>
                    {/if}
                    {#if option.signatureRequired}
                      <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-primary-100)] text-[var(--color-primary-800)]">
                        Signature Required
                      </span>
                    {/if}
                  </div>

                  <p class="mt-1 text-sm text-[var(--color-text-secondary)]">{option.description}</p>

                  <div class="mt-2 flex flex-wrap gap-3">
                    <span class="inline-flex items-center text-sm text-[var(--color-text-secondary)]">
                      <BaseIcon name={Clock} class="h-4 w-4 mr-1 text-[var(--color-text-tertiary)]" />
                      {option.estimatedDays} day{option.estimatedDays !== 1 ? 's' : ''} delivery
                    </span>

                    {#if option.carrier}
                      <span class="inline-flex items-center text-sm text-[var(--color-text-secondary)]">
                        <BaseIcon name={Truck} class="h-4 w-4 mr-1 text-[var(--color-text-tertiary)]" />
                        Via {option.carrier}
                      </span>
                    {/if}

                    {#if option.trackingAvailable}
                      <span class="inline-flex items-center text-sm text-[var(--color-text-secondary)]">
                        <BaseIcon name={Package} class="h-4 w-4 mr-1 text-[var(--color-text-tertiary)]" />
                        Tracking included
                      </span>
                    {/if}

                    {#if option.insurance}
                      <span class="inline-flex items-center text-sm text-[var(--color-text-secondary)]">
                        <BaseIcon name={ShieldCheck} class="h-4 w-4 mr-1 text-[var(--color-text-tertiary)]" />
                        Insurance included
                      </span>
                    {/if}
                  </div>
                </div>

                <div class="text-right">
                  <p class="text-lg font-semibold text-[var(--color-text-primary)]">
                    {option.price === 0 ? 'FREE' : formatCurrency(option.price)}
                  </p>
                  {#if option.cutoffTime}
                    <p class="text-xs text-[var(--color-text-secondary)] mt-1">
                      Order by {option.cutoffTime} for same-day shipping
                    </p>
                  {/if}
                </div>
              </div>
            </button>
          {/each}
        </div>

        {#if cheapestOption && cheapestOption.id !== shippingOptions[0].id}
          <div class="mt-4 p-3 bg-[var(--color-success-50)] border border-[var(--color-success-200)] rounded-md">
            <p class="text-sm font-medium text-[var(--color-success-800)]">
              <span class="font-semibold">Best Value:</span>
              {cheapestOption.name} is the most economical option.
            </p>
          </div>
        {/if}

        {#if fastestOption && fastestOption.id !== shippingOptions[0].id}
          <div class="mt-2 p-3 bg-[var(--color-primary-50)] border border-[var(--color-primary-200)] rounded-md">
            <p class="text-sm font-medium text-[var(--color-primary-800)]">
              <span class="font-semibold">Fastest Option:</span>
              {fastestOption.name} arrives the quickest.
            </p>
          </div>
        {/if}
      </div>
    {/if}

    {#if showFreeShipping && freeShippingThreshold > 0}
      <!-- Free shipping information -->
      <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${infoClass}`}>
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center">
          <BaseIcon name={Truck} class="h-5 w-5 mr-2 text-[var(--color-success-500)]" />
          Free Shipping
        </h3>

        <div class="flex items-start">
          <div class="flex-shrink-0 mt-0.5">
            <BaseIcon name={Info} class="h-5 w-5 text-[var(--color-success-500)]" />
          </div>
          <div class="ml-3">
            <p class="text-sm text-[var(--color-text-primary)]">
              Enjoy <span class="font-semibold">free shipping</span> on orders over {formatCurrency(freeShippingThreshold)}.
              Free shipping is applied automatically at checkout.
            </p>
            <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
              Free shipping options may take additional time for delivery compared to paid options.
            </p>
          </div>
        </div>
      </div>
    {/if}

    {#if showRegions && regions.length > 0}
      <!-- Shipping regions -->
      <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${regionClass}`}>
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center">
          <BaseIcon name={MapPin} class="h-5 w-5 mr-2 text-[var(--color-primary-500)]" />
          Available Regions
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {#each regions as region}
            <button
              type="button"
              class={`w-full p-4 border rounded-lg ${
                selectedRegionId === region.id
                  ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
                  : 'border-[var(--color-border-primary)]'
              } cursor-pointer`}
              onclick={() => handleRegionSelect(region)}
            >
              <div class="flex justify-between">
                <h4 class="font-medium text-[var(--color-text-primary)]">{region.name}</h4>
                {#if region.additionalFee}
                  <span class="text-sm font-medium text-[var(--color-text-primary)]">+{formatCurrency(region.additionalFee)}</span>
                {/if}
              </div>

              <div class="mt-2">
                <p class="text-sm text-[var(--color-text-secondary)]">
                  {region.countries.length} countries
                </p>
                <div class="mt-1 flex flex-wrap gap-1">
                  {#each region.countries.slice(0, 5) as country}
                    <span class="inline-block px-2 py-1 text-xs font-medium bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] rounded">
                      {country}
                    </span>
                  {/each}
                  {#if region.countries.length > 5}
                    <span class="inline-block px-2 py-1 text-xs font-medium bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] rounded">
                      +{region.countries.length - 5} more
                    </span>
                  {/if}
                </div>
              </div>
            </button>
          {/each}
        </div>
      </div>
    {/if}

    {#if showRestrictions}
      <!-- Shipping restrictions -->
      <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${infoClass}`}>
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center">
          <BaseIcon name={Info} class="h-5 w-5 mr-2 text-yellow-500" />
          Restrictions & Limitations
        </h3>

        <ul class="space-y-2">
          <li class="flex items-start">
            <BaseIcon name={XCircle} class="h-5 w-5 text-[var(--color-danger-500)] mr-2 mt-0.5 flex-shrink-0" />
            <span class="text-sm text-[var(--color-text-primary)]">We do not ship to PO Boxes</span>
          </li>
          <li class="flex items-start">
            <BaseIcon name={XCircle} class="h-5 w-5 text-[var(--color-danger-500)] mr-2 mt-0.5 flex-shrink-0" />
            <span class="text-sm text-[var(--color-text-primary)]">Some items may have geographic shipping limitations</span>
          </li>
          <li class="flex items-start">
            <BaseIcon name={Package} class="h-5 w-5 text-[var(--color-primary-500)] mr-2 mt-0.5 flex-shrink-0" />
            <span class="text-sm text-[var(--color-text-primary)]">Heavier items may incur additional shipping charges</span>
          </li>
          <li class="flex items-start">
            <BaseIcon name={Clock} class="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
            <span class="text-sm text-[var(--color-text-primary)]">During holidays, shipping times may be extended</span>
          </li>
        </ul>
      </div>
    {/if}
  </div>
</div>






