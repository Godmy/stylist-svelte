<script lang="ts">
  import type { ShippingCalculatorContract } from '$stylist/commerce/interface/component/shipping-calculator';
  import { createShippingCalculatorState as stateFn } from '$stylist/commerce/function/state/shipping-calculator';

  let props: ShippingCalculatorContract = $props();
  const state = stateFn(props);
</script>

<div class={state.containerClasses}>
  <header class={state.headerClasses}>
    <h3 class={state.titleClasses}>Shipping Calculator</h3>
  </header>

  <div class={state.formContainerClasses}>
    {#if props.showCountrySelector}
      <div class={state.fieldGroupClasses}>
        <label class={state.labelClasses} for="shipping-calculator-country">Destination Country</label>
        <select id="shipping-calculator-country" class={state.selectClasses}>
          {#each props.countries as country}
            <option value={country.code} selected={country.code === props.defaultDestinationCountry}>{country.name}</option>
          {/each}
        </select>
      </div>
    {/if}

    {#if props.showStateSelector && props.states?.length}
      <div class={state.fieldGroupClasses}>
        <label class={state.labelClasses} for="shipping-calculator-state">Destination State</label>
        <select id="shipping-calculator-state" class={state.selectClasses}>
          {#each props.states as region}
            <option value={region.code}>{region.name}</option>
          {/each}
        </select>
      </div>
    {/if}

    {#if props.showWeightInput}
      <div class={state.fieldGroupClasses}>
        <label class={state.labelClasses} for="shipping-calculator-weight">Package Weight</label>
        <input id="shipping-calculator-weight" class={state.inputClasses} type="number" min="0" step="0.1" bind:value={state.weight} />
      </div>
    {/if}

    {#if props.showDimensionsInput}
      <div class={state.fieldGroupClasses}>
        <label class={state.labelClasses} for="shipping-calculator-dimension-length">Package Dimensions</label>
        <div class="grid grid-cols-3 gap-3">
          <input
            id="shipping-calculator-dimension-length"
            class={state.inputClasses}
            type="number"
            min="0"
            value={state.dimensions.length}
            oninput={(event) => state.updateDimension('length', Number((event.currentTarget as HTMLInputElement).value))}
          />
          <input
            id="shipping-calculator-dimension-width"
            class={state.inputClasses}
            type="number"
            min="0"
            value={state.dimensions.width}
            oninput={(event) => state.updateDimension('width', Number((event.currentTarget as HTMLInputElement).value))}
          />
          <input
            id="shipping-calculator-dimension-height"
            class={state.inputClasses}
            type="number"
            min="0"
            value={state.dimensions.height}
            oninput={(event) => state.updateDimension('height', Number((event.currentTarget as HTMLInputElement).value))}
          />
        </div>
      </div>
    {/if}

    <button type="button" class={state.calculateButtonClasses} onclick={state.handleCalculate}>
      Calculate Shipping
    </button>
  </div>

  <div class={state.resultsContainerClasses}>
    {#each props.shippingOptions as option}
      <button
        type="button"
        class={state.getShippingOptionClasses(state.selectedOptionId === option.id)}
        onclick={() => state.handleSelectOption(option)}
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class={state.optionNameClasses}>{option.name}</p>
            <p class={state.optionDescriptionClasses}>{option.description}</p>
          </div>
          <div class="text-right">
            <p class={state.optionPriceClasses}>
              {new Intl.NumberFormat(props.locale ?? 'en-US', {
                style: 'currency',
                currency: props.currency ?? 'USD'
              }).format(option.price)}
            </p>
            <p class={state.deliveryTimeClasses}>{option.estimatedDays} days</p>
          </div>
        </div>
      </button>
    {/each}
  </div>
</div>
