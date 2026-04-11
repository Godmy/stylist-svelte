<script lang="ts">
  import type { TaxCalculatorContract } from '$stylist/commerce/interface/component/tax-calculator';
  import { createTaxCalculatorState as stateFn } from '$stylist/commerce/function/state/tax-calculator';

  let props: TaxCalculatorContract = $props();
  const state = stateFn(props);
</script>

<div class={state.containerClasses}>
  <header class={state.headerClasses}>
    <h3 class={state.titleClasses}>Tax Calculator</h3>
  </header>

  <div class={state.formContainerClasses}>
    <div class={state.fieldGroupClasses}>
      <label class={state.labelClasses} for="tax-calculator-amount">Amount</label>
      <input id="tax-calculator-amount" class={state.inputClasses} type="number" min="0" step="0.01" bind:value={state.amount} />
    </div>

    {#if props.showLocationSelector !== false}
      <div class={state.fieldGroupClasses}>
        <label class={state.labelClasses} for="tax-calculator-location">Location</label>
        <select id="tax-calculator-location" class={state.selectClasses} bind:value={state.selectedLocationId}>
          {#each props.locations as location}
            <option value={location.id}>{location.name}</option>
          {/each}
        </select>
      </div>
    {/if}

    {#if props.showIncludeTaxToggle}
      <label class="flex items-center gap-2">
        <input type="checkbox" bind:checked={state.includeTax} />
        <span class={state.labelClasses}>Amount already includes tax</span>
      </label>
    {/if}

    <button type="button" class={state.calculateButtonClasses} onclick={state.handleCalculate}>
      Calculate Tax
    </button>
  </div>

  <div class={state.resultsContainerClasses}>
    <div class={state.resultCardClasses}>
      <div class={state.resultRowClasses}>
        <span class={state.resultLabelClasses}>Subtotal</span>
        <span class={state.resultValueClasses}>{state.formatPrice(state.amount)}</span>
      </div>

      <div class={state.taxListClasses}>
        {#each state.taxRates as taxRate}
          <div class={state.taxItemClasses}>
            <span class={state.taxNameClasses}>{taxRate.name} ({taxRate.rate}%)</span>
            <span class={state.taxValueClasses}>{state.formatPrice(state.amount * taxRate.rate / 100)}</span>
          </div>
        {/each}
      </div>

      <div class={state.resultRowClasses}>
        <span class={state.resultLabelClasses}>Tax Total</span>
        <span class={state.resultValueClasses}>{state.formatPrice(state.totalTaxAmount)}</span>
      </div>

      <div class={state.totalClasses}>
        <span class={state.totalLabelClasses}>Total</span>
        <span class={state.totalValueClasses}>{state.formatPrice(state.totalAmount)}</span>
      </div>
    </div>
  </div>
</div>
