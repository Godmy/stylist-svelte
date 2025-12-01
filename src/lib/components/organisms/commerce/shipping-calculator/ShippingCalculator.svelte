<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Truck, Package, MapPin, DollarSign, LoaderCircle } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type ShippingOption = {
    id: string;
    name: string;
    description: string;
    price: number;
    estimatedDays: number;
    carrier?: string;
    trackingAvailable?: boolean;
  };

  type Country = {
    code: string;
    name: string;
  };

  type State = {
    code: string;
    name: string;
    countryCode?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    shippingOptions: ShippingOption[];
    countries: Country[];
    states?: State[];
    defaultOriginCountry?: string;
    defaultDestinationCountry?: string;
    defaultWeight?: number;
    defaultDimensions?: { length: number; width: number; height: number };
    class?: string;
    formClass?: string;
    resultClass?: string;
    showWeightInput?: boolean;
    showDimensionsInput?: boolean;
    showCountrySelector?: boolean;
    showStateSelector?: boolean;
    onCalculate?: (options: ShippingOption[]) => void;
    onOptionSelect?: (option: ShippingOption) => void;
    currency?: string;
    locale?: string;
  };

  let {
    shippingOptions = [],
    countries = [],
    states = [],
    defaultOriginCountry = 'US',
    defaultDestinationCountry = 'US',
    defaultWeight = 1,
    defaultDimensions = { length: 10, width: 10, height: 10 },
    class: hostClass = '',
    formClass = '',
    resultClass = '',
    showWeightInput = true,
    showDimensionsInput = true,
    showCountrySelector = true,
    showStateSelector = true,
    onCalculate,
    onOptionSelect,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let originCountry = $state(defaultOriginCountry);
  let destinationCountry = $state(defaultDestinationCountry);
  let destinationState = $state('');
  let destinationZip = $state('');
  let weight = $state(defaultWeight);
  let dimensions = $state({ ...defaultDimensions });
  let calculatedOptions = $state<ShippingOption[]>([]);
  let isCalculating = $state(false);
  let error = $state<string | null>(null);

  async function calculateShipping() {
    isCalculating = true;
    error = null;
    
    try {
      // In a real app, this would be an API call
      // For now, we'll simulate by filtering and slightly modifying the shipping options
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
      
      // Apply some variation based on distance/weight if needed
      const calculated = shippingOptions.map(option => {
        // In a real app, this would come from a real calculation based on origin/destination
        const priceAdjustment = Math.abs(originCountry.localeCompare(destinationCountry)) * 0.1;
        return {
          ...option,
          price: parseFloat((option.price + priceAdjustment).toFixed(2))
        };
      });
      
      calculatedOptions = calculated;
      onCalculate?.(calculated);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Unknown error occurred';
    } finally {
      isCalculating = false;
    }
  }

  function selectOption(option: ShippingOption) {
    onOptionSelect?.(option);
  }

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  const availableStates = $derived.by(() => states.filter(state => state.countryCode === destinationCountry));
</script>

<div class={`shipping-calculator ${hostClass}`} {...restProps}>
  <div class="flex items-center mb-4">
    <Truck class="h-5 w-5 text-blue-500 mr-2" />
    <h2 class="text-lg font-medium text-gray-900">Shipping Calculator</h2>
  </div>
  
  <div class={`grid grid-cols-1 md:grid-cols-2 gap-6 ${formClass}`}>
    <!-- Origin and destination -->
    <div class="space-y-4">
      <div>
        <label for="origin-country" class="block text-sm font-medium text-gray-700 mb-1">Origin Country</label>
        <select
          id="origin-country"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          value={originCountry}
          onchange={(e) => originCountry = (e.target as HTMLSelectElement).value}
        >
          {#each countries as country}
            <option value={country.code}>{country.name}</option>
          {/each}
        </select>
      </div>
      
      <div>
        <label for="destination-country" class="block text-sm font-medium text-gray-700 mb-1">Destination Country</label>
        <select
          id="destination-country"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          value={destinationCountry}
          onchange={(e) => {
            destinationCountry = (e.target as HTMLSelectElement).value;
            destinationState = '';
          }}
        >
          {#each countries as country}
            <option value={country.code}>{country.name}</option>
          {/each}
        </select>
      </div>
      
      {#if showStateSelector && availableStates.length > 0}
        <div>
          <label for="destination-state" class="block text-sm font-medium text-gray-700 mb-1">Destination State</label>
          <select
            id="destination-state"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            value={destinationState}
            onchange={(e) => destinationState = (e.target as HTMLSelectElement).value}
          >
            <option value="">Select a state</option>
            {#each availableStates as state}
              <option value={state.code}>{state.name}</option>
            {/each}
          </select>
        </div>
      {/if}
      
      <div>
        <label for="destination-zip" class="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal Code</label>
        <input
          id="destination-zip"
          type="text"
          value={destinationZip}
          placeholder="Enter destination ZIP"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          oninput={(e) => destinationZip = (e.target as HTMLInputElement).value}
        />
      </div>
    </div>
    
    <!-- Package details -->
    <div class="space-y-4">
      {#if showWeightInput}
        <div>
          <label for="package-weight" class="block text-sm font-medium text-gray-700 mb-1">Weight (lbs)</label>
          <input
            id="package-weight"
            type="number"
            min="0.1"
            step="0.1"
            value={weight}
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            oninput={(e) => weight = parseFloat((e.target as HTMLInputElement).value) || 0}
          />
        </div>
      {/if}
      
      {#if showDimensionsInput}
        <div>
          <p class="text-sm font-medium text-gray-700 mb-1">Dimensions (L x W x H in inches)</p>
          <div class="grid grid-cols-3 gap-2">
            <div class="col-span-1">
              <input
                id="package-length"
                type="number"
                min="0.1"
                step="0.1"
                placeholder="Length"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                value={dimensions.length}
                aria-label="Length in inches"
                oninput={(e) => dimensions = { ...dimensions, length: parseFloat((e.target as HTMLInputElement).value) || 0 }}
              />
            </div>
            <div class="col-span-1">
              <input
                id="package-width"
                type="number"
                min="0.1"
                step="0.1"
                placeholder="Width"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                value={dimensions.width}
                aria-label="Width in inches"
                oninput={(e) => dimensions = { ...dimensions, width: parseFloat((e.target as HTMLInputElement).value) || 0 }}
              />
            </div>
            <div class="col-span-1">
              <input
                id="package-height"
                type="number"
                min="0.1"
                step="0.1"
                placeholder="Height"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                value={dimensions.height}
                aria-label="Height in inches"
                oninput={(e) => dimensions = { ...dimensions, height: parseFloat((e.target as HTMLInputElement).value) || 0 }}
              />
            </div>
          </div>
        </div>
      {/if}
      
      <Button
        variant="primary"
        class="w-full"
        onclick={calculateShipping}
        disabled={isCalculating}
      >
        {#if isCalculating}
          <LoaderCircle class="h-4 w-4 animate-spin mr-2" />
          Calculating...
        {:else}
          Calculate Shipping
        {/if}
      </Button>
    </div>
  </div>
  
  <!-- Results -->
  {#if calculatedOptions.length > 0}
    <div class={`mt-6 space-y-3 ${resultClass}`}>
      <h3 class="text-md font-medium text-gray-900">Shipping Options</h3>
      
      {#each calculatedOptions as option}
        <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
          <div class="flex-1">
            <div class="flex items-center">
              <h4 class="text-sm font-medium text-gray-900">{option.name}</h4>
              {#if option.trackingAvailable}
                <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Tracking
                </span>
              {/if}
            </div>
            
            <p class="text-sm text-gray-500 mt-1">{option.description}</p>
            
            <div class="flex items-center mt-2 text-xs text-gray-500">
              <span class="flex items-center">
                <Package class="h-3 w-3 mr-1" />
                {option.estimatedDays} day{option.estimatedDays !== 1 ? 's' : ''} delivery
              </span>
              {#if option.carrier}
                <span class="mx-2">•</span>
                <span>via {option.carrier}</span>
              {/if}
            </div>
          </div>
          
          <div class="flex items-center">
            <span class="text-lg font-medium text-gray-900 mr-3">{formatCurrency(option.price)}</span>
            <Button 
              variant="primary" 
              size="sm"
              onclick={() => selectOption(option)}
            >
              Select
            </Button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
  
  {#if error}
    <div class="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
      {error}
    </div>
  {/if}
</div>




