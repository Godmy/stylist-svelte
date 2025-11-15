<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Calculator, DollarSign, Percent, LoaderCircle } from 'lucide-svelte';
  import Select from '../../atoms/controls/selectors/Select.svelte';
  import { Button } from '$lib/components/atoms';

  type TaxRate = {
    id: string;
    name: string;
    rate: number; // Percentage value (e.g., 8.5 for 8.5%)
    description?: string;
    compound?: boolean; // Whether this tax is compounded (applied to total including other taxes)
  };

  type Location = {
    id: string;
    name: string;
    countryCode: string;
    stateCode?: string;
    zipCode?: string;
    city?: string;
    taxRates: TaxRate[];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    locations: Location[];
    taxRates?: TaxRate[];
    defaultLocation?: string;
    defaultTaxRates?: string[]; // IDs of default tax rates to apply
    defaultAmount?: number;
    defaultIncludeTax?: boolean;
    class?: string;
    formClass?: string;
    resultClass?: string;
    showLocationSelector?: boolean;
    showTaxRateSelector?: boolean;
    showIncludeTaxToggle?: boolean;
    onCalculate?: (result: CalculationResult) => void;
    currency?: string;
    locale?: string;
  };

  let {
    locations = [],
    taxRates = [],
    defaultLocation = '',
    defaultTaxRates = [],
    defaultAmount = 0,
    defaultIncludeTax = false,
    class: hostClass = '',
    formClass = '',
    resultClass = '',
    showLocationSelector = true,
    showTaxRateSelector = true,
    showIncludeTaxToggle = true,
    onCalculate,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let selectedLocation = $state(defaultLocation);
  let selectedTaxRates = $state<string[]>([...defaultTaxRates]);
  let amount = $state(defaultAmount);
  let includeTax = $state(defaultIncludeTax);
  let result = $state<CalculationResult | null>(null);
  let isCalculating = $state(false);
  let error = $state<string | null>(null);

  $effect(() => {
    // Update tax rates when location changes
    if (selectedLocation) {
      const location = locations.find(loc => loc.id === selectedLocation);
      if (location) {
        // Auto-select all tax rates for this location if none are selected yet
        if (selectedTaxRates.length === 0) {
          selectedTaxRates = location.taxRates.map(rate => rate.id);
        }
      }
    }
  });

  type CalculationResult = {
    subtotal: number;
    taxAmount: number;
    total: number;
    breakdown: {
      rateId: string;
      rateName: string;
      rateValue: number;
      taxAmount: number;
    }[];
  };

  async function calculateTax() {
    if (amount <= 0) {
      result = null;
      return;
    }
    
    isCalculating = true;
    error = null;
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      let calculatedSubtotal = amount;
      let calculatedTaxAmount = 0;
      let calculatedTotal = amount;
      const breakdown = [];
      
      // Get all selected tax rates (from location and/or individually selected)
      let allTaxRates: TaxRate[] = [];
      
      // Add tax rates from selected location
      if (selectedLocation) {
        const location = locations.find(loc => loc.id === selectedLocation);
        if (location) {
          allTaxRates = [
            ...allTaxRates,
            ...location.taxRates.filter(rate => selectedTaxRates.includes(rate.id))
          ];
        }
      }
      
      // We'll also add individually selected tax rates if they're not duplicates
      const locationTaxRateIds = allTaxRates.map(rate => rate.id);
      const otherTaxRates = taxRates.filter(rate => 
        selectedTaxRates.includes(rate.id) && !locationTaxRateIds.includes(rate.id)
      );
      
      allTaxRates = [...allTaxRates, ...otherTaxRates];
      
      // If including tax, we need to calculate backwards to find the pre-tax amount
      if (includeTax) {
        // Calculate total tax rate for simple inclusion calculation
        let totalTaxRate = 0;
        for (const rate of allTaxRates) {
          if (!rate.compound) {
            totalTaxRate += rate.rate;
          }
        }
        
        calculatedSubtotal = amount / (1 + totalTaxRate / 100);
        calculatedTaxAmount = amount - calculatedSubtotal;
        calculatedTotal = amount;
        
        // Calculate breakdown based on pre-tax amount
        for (const rate of allTaxRates) {
          const taxAmount = calculatedSubtotal * (rate.rate / 100);
          breakdown.push({
            rateId: rate.id,
            rateName: rate.name,
            rateValue: rate.rate,
            taxAmount: parseFloat(taxAmount.toFixed(2))
          });
        }
      } else {
        // If not including tax, calculate normally
        for (const rate of allTaxRates) {
          if (rate.compound) {
            // For compound taxes, apply to the current total
            const taxAmount = calculatedTotal * (rate.rate / 100);
            calculatedTotal += taxAmount;
            calculatedTaxAmount += taxAmount;
            
            breakdown.push({
              rateId: rate.id,
              rateName: rate.name,
              rateValue: rate.rate,
              taxAmount: parseFloat(taxAmount.toFixed(2))
            });
          } else {
            // For non-compound taxes, apply to the original amount
            const taxAmount = amount * (rate.rate / 100);
            calculatedTaxAmount += taxAmount;
            calculatedTotal += taxAmount;
            
            breakdown.push({
              rateId: rate.id,
              rateName: rate.name,
              rateValue: rate.rate,
              taxAmount: parseFloat(taxAmount.toFixed(2))
            });
          }
        }
        
        calculatedSubtotal = amount;
      }
      
      result = {
        subtotal: parseFloat(calculatedSubtotal.toFixed(2)),
        taxAmount: parseFloat(calculatedTaxAmount.toFixed(2)),
        total: parseFloat(calculatedTotal.toFixed(2)),
        breakdown
      };
      
      onCalculate?.(result);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Error calculating tax';
    } finally {
      isCalculating = false;
    }
  }

  function formatCurrency(value: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(value);
  }

  const locationOptions = $derived.by(() =>
    locations.map((location) => ({
      value: location.id,
      label: location.city ? `${location.name} (${location.city})` : location.name
    }))
  );

  let selectedLocationObj = $derived(locations.find(loc => loc.id === selectedLocation));
  const availableTaxRates = $derived.by(() => {
    if (selectedLocationObj) {
      // Include both location-specific rates and general rates
      const locationRates = selectedLocationObj.taxRates;
      const generalRates = taxRates.filter(rate => !locationRates.some(lr => lr.id === rate.id));
      return [...locationRates, ...generalRates];
    }
    
    return taxRates;
  });

  $effect(() => {
    // Trigger calculation when inputs change
    if (!isCalculating) {
      calculateTax();
    }
  });
</script>

<div class={`tax-calculator ${hostClass}`} {...restProps}>
  <div class="flex items-center mb-4">
    <Calculator class="h-5 w-5 text-blue-500 mr-2" />
    <h2 class="text-lg font-medium text-gray-900">Tax Calculator</h2>
  </div>
  
  <div class={`space-y-4 ${formClass}`}>
    {#if showLocationSelector && locations.length > 0}
      <Select
        id="tax-location"
        label="Location"
        placeholder="Select a location"
        bind:value={selectedLocation}
        options={locationOptions}
        class="w-full"
      />
    {/if}
    
    {#if showTaxRateSelector}
      <div>
        <p class="block text-sm font-medium text-gray-700 mb-1">Tax Rates</p>
        <div class="space-y-2">
          {#each availableTaxRates as rate}
            <div class="flex items-start">
              <input
                type="checkbox"
                id={`tax-rate-${rate.id}`}
                class="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                checked={selectedTaxRates.includes(rate.id)}
                onchange={(e) => {
                  const target = e.target as HTMLInputElement;
                  if (target.checked) {
                    selectedTaxRates = [...selectedTaxRates, rate.id];
                  } else {
                    selectedTaxRates = selectedTaxRates.filter(id => id !== rate.id);
                  }
                }}
              />
              <label for={`tax-rate-${rate.id}`} class="ml-2 text-sm text-gray-700">
                <div class="font-medium">{rate.name}</div>
                <div class="flex items-center text-xs text-gray-500">
                  <Percent class="h-3 w-3 mr-1" />
                  {rate.rate}% 
                  {#if rate.compound}
                    <span class="ml-1 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Compound
                    </span>
                  {/if}
                </div>
                {#if rate.description}
                  <div class="text-gray-500 mt-1">{rate.description}</div>
                {/if}
              </label>
            </div>
          {/each}
        </div>
      </div>
    {/if}
    
    <div>
      <label for="tax-amount" class="block text-sm font-medium text-gray-700 mb-1">Amount</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <DollarSign class="h-5 w-5 text-gray-400" />
        </div>
        <input
          id="tax-amount"
          type="number"
          min={0}
          step={0.01}
          placeholder="0.00"
          value={amount}
          class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          oninput={(e) => amount = parseFloat((e.target as HTMLInputElement).value) || 0}
        />
      </div>
    </div>
    
    {#if showIncludeTaxToggle}
      <div class="flex items-center">
        <input
          id="include-tax"
          type="checkbox"
          class="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
          checked={includeTax}
          onchange={(e) => includeTax = (e.target as HTMLInputElement).checked}
        />
        <label for="include-tax" class="ml-2 block text-sm text-gray-700">
          Amount includes tax
        </label>
      </div>
    {/if}
  </div>
  
  {#if isCalculating}
    <div class="mt-6 flex justify-center items-center py-4">
      <LoaderCircle class="h-6 w-6 animate-spin text-gray-500" />
    </div>
  {:else if result}
    <div class={`mt-6 border rounded-lg p-6 ${resultClass}`}>
      <div class="space-y-4">
        <div class="flex justify-between">
          <span class="text-gray-600">Subtotal</span>
          <span class="font-medium">{formatCurrency(result.subtotal)}</span>
        </div>
        
        {#if result.breakdown.length > 0}
          <div class="border-t border-gray-200 pt-4">
            <h3 class="text-sm font-medium text-gray-900 mb-2">Tax Breakdown</h3>
            <div class="space-y-2">
              {#each result.breakdown as tax}
                <div class="flex justify-between text-sm">
                  <div>
                    <span>{tax.rateName}</span>
                    <span class="text-gray-500 ml-1">{tax.rateValue}%</span>
                  </div>
                  <span>+{formatCurrency(tax.taxAmount)}</span>
                </div>
              {/each}
            </div>
          </div>
        {/if}
        
        <div class="border-t border-gray-200 pt-4 flex justify-between text-lg font-medium">
          <span>Tax Total</span>
          <span>{formatCurrency(result.taxAmount)}</span>
        </div>
        
        <div class="pt-2 flex justify-between text-xl font-bold border-t border-gray-300">
          <span>Total</span>
          <span class="text-blue-600">{formatCurrency(result.total)}</span>
        </div>
      </div>
    </div>
  {/if}
  
  {#if error}
    <div class="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
      {error}
    </div>
  {/if}
</div>




