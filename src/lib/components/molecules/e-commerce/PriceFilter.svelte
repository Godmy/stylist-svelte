<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { DollarSign, Minus, Plus } from 'lucide-svelte';
  import Input from '../../atoms/input/base/Input.svelte';
  import { Button } from '$lib/components/atoms';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    minPrice: number;
    maxPrice: number;
    defaultMin?: number;
    defaultMax?: number;
    step?: number;
    showInputs?: boolean;
    showToggle?: boolean;
    showPresetRanges?: boolean;
    presetRanges?: { label: string; min: number; max: number }[];
    currency?: string;
    locale?: string;
    class?: string;
    rangeClass?: string;
    inputClass?: string;
    buttonClass?: string;
    onPriceChange?: (min: number, max: number) => void;
    onPresetSelect?: (min: number, max: number) => void;
  };

  let {
    minPrice,
    maxPrice,
    defaultMin = minPrice,
    defaultMax = maxPrice,
    step = 1,
    showInputs = true,
    showToggle = true,
    showPresetRanges = true,
    presetRanges = [
      { label: 'Under $25', min: minPrice, max: 25 },
      { label: '$25 to $50', min: 25, max: 50 },
      { label: '$50 to $100', min: 50, max: 100 },
      { label: '$100+', min: 100, max: maxPrice }
    ],
    currency = 'USD',
    locale = 'en-US',
    class: hostClass = '',
    rangeClass = '',
    inputClass = '',
    buttonClass = '',
    onPriceChange,
    onPresetSelect,
    ...restProps
  }: Props = $props();

  let currentMin = $state(defaultMin);
  let currentMax = $state(defaultMax);
  let expanded = $state(true);

  $effect(() => {
    currentMin = defaultMin;
    currentMax = defaultMax;
  });

  function handleMinChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);
    if (!isNaN(value)) {
      currentMin = Math.max(minPrice, Math.min(value, currentMax));
      onPriceChange?.(currentMin, currentMax);
    }
  }

  function handleMaxChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);
    if (!isNaN(value)) {
      currentMax = Math.min(maxPrice, Math.max(value, currentMin));
      onPriceChange?.(currentMin, currentMax);
    }
  }

  function handlePresetSelect(range: { min: number; max: number }) {
    currentMin = range.min;
    currentMax = range.max;
    onPresetSelect?.(range.min, range.max);
    onPriceChange?.(range.min, range.max);
  }

  function formatCurrency(value: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(value);
  }

  let minFormatted = $derived(formatCurrency(currentMin));
  let maxFormatted = $derived(formatCurrency(currentMax));
</script>

<div class={`price-filter ${hostClass}`} {...restProps}>
  <div class="flex justify-between items-center mb-3">
    <h3 class="text-sm font-medium text-gray-900 flex items-center">
      <DollarSign class="h-4 w-4 mr-2" />
      Price
    </h3>
    
    {#if showToggle}
      <button
        type="button"
        class="text-gray-500 hover:text-gray-700"
        aria-label={expanded ? "Collapse price filter" : "Expand price filter"}
        onclick={() => expanded = !expanded}
      >
        {#if expanded}
          <Minus class="h-4 w-4" />
        {:else}
          <Plus class="h-4 w-4" />
        {/if}
      </button>
    {/if}
  </div>
  
  {#if expanded}
    <div class="space-y-4">
      <div class="flex justify-between text-xs text-gray-600">
        <span>{formatCurrency(minPrice)}</span>
        <span>{formatCurrency(maxPrice)}</span>
      </div>
      
      <div class="relative pt-1">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step={step}
          value={currentMin}
          oninput={handleMinChange}
          class="absolute w-full h-2 bg-gray-200 outline-none appearance-none pointer-events-none"
          aria-label="Minimum price"
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step={step}
          value={currentMax}
          oninput={handleMaxChange}
          class="absolute w-full h-2 bg-gray-200 outline-none appearance-none pointer-events-none"
          aria-label="Maximum price"
        />
        
        <!-- Dual thumb range implementation would be more complex -->
        <!-- For now, using separate inputs and a visual representation -->
        <div class="h-2 bg-gray-200 rounded-full">
          <div 
            class="h-full bg-blue-600 rounded-full" 
            style={`margin-left: ${(currentMin / maxPrice) * 100}%; width: ${((currentMax - currentMin) / maxPrice) * 100}%`}
          ></div>
        </div>
      </div>
      
      {#if showInputs}
        <div class="flex space-x-2">
          <div class="flex-1">
            <label for="min-price" class="block text-xs text-gray-600 mb-1">Min</label>
            <div class="relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign class="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                id="min-price"
                class={`focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 py-2 sm:text-sm border-gray-300 rounded-md ${inputClass}`}
                placeholder="0"
                value={currentMin}
                min={minPrice}
                max={currentMax}
                step={step}
                oninput={handleMinChange}
              />
            </div>
          </div>
          
          <div class="flex items-center self-end pb-1">
            <span class="h-5 w-px bg-gray-300"></span>
          </div>
          
          <div class="flex-1">
            <label for="max-price" class="block text-xs text-gray-600 mb-1">Max</label>
            <div class="relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign class="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                id="max-price"
                class={`focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 py-2 sm:text-sm border-gray-300 rounded-md ${inputClass}`}
                placeholder={maxPrice.toString()}
                value={currentMax}
                min={currentMin}
                max={maxPrice}
                step={step}
                oninput={handleMaxChange}
              />
            </div>
          </div>
        </div>
      {/if}
      
      {#if showPresetRanges}
        <div class="pt-2">
          <p class="text-xs text-gray-600 mb-2">Common ranges:</p>
          <div class="flex flex-wrap gap-2">
            {#each presetRanges as range}
              <button
                type="button"
                class={`inline-flex items-center px-2.5 py-0.5 border border-transparent text-xs font-medium rounded-full ${
                  currentMin === range.min && currentMax === range.max
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onclick={() => handlePresetSelect(range)}
              >
                {range.label}
              </button>
            {/each}
          </div>
        </div>
      {/if}
      
      <div class="pt-2 text-sm text-gray-700">
        <span>Price: {formatCurrency(currentMin)} - {formatCurrency(currentMax)}</span>
      </div>
    </div>
  {/if}
</div>
