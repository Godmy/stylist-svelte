<script lang="ts">
  import CurrencyConverter from './CurrencyConverter.svelte';

  let currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'CA$' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' }
  ];

  let exchangeRates = {
    'USD_EUR': 0.93,
    'USD_GBP': 0.79,
    'USD_JPY': 154.32,
    'USD_CAD': 1.36,
    'USD_AUD': 1.55,
    'EUR_USD': 1.07,
    'EUR_GBP': 0.85,
    'EUR_JPY': 165.42,
    'EUR_CAD': 1.46,
    'EUR_AUD': 1.66,
    'GBP_USD': 1.27,
    'GBP_EUR': 1.18,
    'GBP_JPY': 195.02,
    'GBP_CAD': 1.72,
    'GBP_AUD': 1.96,
    'JPY_USD': 0.0065,
    'JPY_EUR': 0.0061,
    'JPY_GBP': 0.0051,
    'JPY_CAD': 0.0088,
    'JPY_AUD': 0.010,
    'CAD_USD': 0.74,
    'CAD_EUR': 0.69,
    'CAD_GBP': 0.58,
    'CAD_JPY': 113.66,
    'CAD_AUD': 1.14,
    'AUD_USD': 0.65,
    'AUD_EUR': 0.60,
    'AUD_GBP': 0.51,
    'AUD_JPY': 99.47,
    'AUD_CAD': 0.88
  };

  let amount: number = 100;
  let fromCurrency: string = 'USD';
  let toCurrency: string = 'EUR';
  let feePercentage: number = 1.5;
  let showInput: boolean = true;
  let showLabels: boolean = true;
  let showConversionRate: boolean = true;
  let showFeeEstimate: boolean = false;
  let disabled: boolean = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CurrencyConverter Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CurrencyConverter</h2>
    <div class="max-w-md mx-auto">
      <CurrencyConverter 
        {amount}
        {fromCurrency}
        {toCurrency}
        {currencies}
        {exchangeRates}
        {feePercentage}
        {showInput}
        {showLabels}
        {showConversionRate}
        {showFeeEstimate}
        {disabled}
        onConvert={(result) => {
          console.log('Conversion result:', result);
        }}
        onCurrencyChange={(from, to) => {
          console.log('Currency changed:', { from, to });
        }}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="converter-amount" class="block text-sm mb-1">Amount:</label>
        <input
          id="converter-amount"
          type="number"
          bind:value={amount}
          class="border rounded p-1 w-24"
          min="0"
          step="0.01"
        />
      </div>

      <div>
        <label for="converter-fee" class="block text-sm mb-1">Fee %:</label>
        <input
          id="converter-fee"
          type="number"
          bind:value={feePercentage}
          class="border rounded p-1 w-20"
          min="0"
          max="10"
          step="0.1"
        />
      </div>

      <div class="flex items-end">
        <label for="show-converter-input" class="flex items-center gap-1">
          <input id="show-converter-input" type="checkbox" bind:checked={showInput} />
          Show Input
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-converter-rate" class="flex items-center gap-1">
          <input id="show-converter-rate" type="checkbox" bind:checked={showConversionRate} />
          Show Rate
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-converter-fee" class="flex items-center gap-1">
          <input id="show-converter-fee" type="checkbox" bind:checked={showFeeEstimate} />
          Show Fee
        </label>
      </div>

      <div class="flex items-end">
        <label for="converter-disabled" class="flex items-center gap-1">
          <input id="converter-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">CurrencyConverter Variations</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 class="text-sm font-medium mb-2">With Fee Estimate</h3>
        <div class="max-w-md mx-auto">
          <CurrencyConverter 
            amount={50}
            fromCurrency="GBP"
            toCurrency="USD"
            {currencies}
            {exchangeRates}
            feePercentage={2.5}
            showFeeEstimate={true}
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">EUR to JPY</h3>
        <div class="max-w-md mx-auto">
          <CurrencyConverter 
            amount={75}
            fromCurrency="EUR"
            toCurrency="JPY"
            {currencies}
            {exchangeRates}
          />
        </div>
      </div>
    </div>
  </div>
</div>