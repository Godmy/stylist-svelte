<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { DollarSign, RefreshCw, Info } from 'lucide-svelte';
  import Input from '$stylist/components/atoms/interaction/input/field/input-field/index.svelte';
  import Select from '$stylist/components/molecules/interaction/controls/selectors/selector/index.svelte';
  import { Button } from '$stylist/components/atoms';
  import Tooltip from '$stylist/components/atoms/interaction/controls/tooltip/index.svelte';

  type Currency = {
    code: string;
    name: string;
    symbol: string;
    flag?: string; // Optional flag emoji or URL
  };

  type ExchangeRate = {
    [key: string]: number; // e.g., { 'USD_EUR': 0.93, 'EUR_USD': 1.07 }
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    amount: number;
    fromCurrency: string;
    toCurrency: string;
    currencies: Currency[];
    exchangeRates: ExchangeRate;
    class?: string;
    inputClass?: string;
    selectClass?: string;
    resultClass?: string;
    showInput?: boolean;
    showLabels?: boolean;
    showConversionRate?: boolean;
    showFeeEstimate?: boolean;
    feePercentage?: number;
    onConvert?: (result: ConversionResult) => void;
    onCurrencyChange?: (from: string, to: string) => void;
    disabled?: boolean;
    loading?: boolean;
  };

  type ConversionResult = {
    fromAmount: number;
    fromCurrency: string;
    toAmount: number;
    toCurrency: string;
    exchangeRate: number;
    feeAmount?: number;
  };

  let {
    amount,
    fromCurrency,
    toCurrency,
    currencies,
    exchangeRates,
    class: hostClass = '',
    inputClass = '',
    selectClass = '',
    resultClass = '',
    showInput = true,
    showLabels = true,
    showConversionRate = true,
    showFeeEstimate = false,
    feePercentage = 0,
    onConvert,
    onCurrencyChange,
    disabled = false,
    loading = false,
    ...restProps
  }: Props = $props();

  let amountValue = $state(amount);
  let sourceCurrency = $state(fromCurrency);
  let targetCurrency = $state(toCurrency);
  let convertedAmount = $state(0);
  let conversionRate = $state(1);
  let feeAmount = $state(0);

  $effect(() => {
    amountValue = amount;
    sourceCurrency = fromCurrency;
    targetCurrency = toCurrency;
    convertCurrency();
  });

  function convertCurrency() {
    if (sourceCurrency === targetCurrency) {
      conversionRate = 1;
      convertedAmount = amountValue;
    } else {
      const rateKey = `${sourceCurrency}_${targetCurrency}`;
      const rate = exchangeRates[rateKey];

      if (rate !== undefined) {
        conversionRate = rate;
        convertedAmount = amountValue * rate;
      } else {
        conversionRate = 0;
        convertedAmount = 0;
      }
    }

    if (showFeeEstimate) {
      feeAmount = convertedAmount * (feePercentage / 100);
    }

    onConvert?.({
      fromAmount: amountValue,
      fromCurrency: sourceCurrency,
      toAmount: convertedAmount,
      toCurrency: targetCurrency,
      exchangeRate: conversionRate,
      feeAmount: showFeeEstimate ? feeAmount : undefined
    });
  }

  function handleAmountChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    amountValue = parseFloat(value) || 0;
    convertCurrency();
  }

  function handleSourceCurrencyChange(e: Event) {
    sourceCurrency = (e.target as HTMLSelectElement).value;
    onCurrencyChange?.(sourceCurrency, targetCurrency);
    convertCurrency();
  }

  function handleTargetCurrencyChange(e: Event) {
    targetCurrency = (e.target as HTMLSelectElement).value;
    onCurrencyChange?.(sourceCurrency, targetCurrency);
    convertCurrency();
  }

  function formatCurrency(value: number, currencyCode: string) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode
    }).format(value);
  }

  function getCurrencySymbol(currencyCode: string) {
    return currencies.find(c => c.code === currencyCode)?.symbol || '$';
  }

  let sourceCurrencyInfo = $derived(currencies.find(c => c.code === sourceCurrency));
  let targetCurrencyInfo = $derived(currencies.find(c => c.code === targetCurrency));
</script>

<div class={`c-currency-converter p-4 border rounded-lg ${hostClass}`} {...restProps}>
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-medium text-gray-900">Currency Converter</h3>
    <Tooltip content="Convert amounts between different currencies using real-time exchange rates">
      <Info class="h-5 w-5 text-gray-500" />
    </Tooltip>
  </div>

  <div class="space-y-4">
    <!-- Amount input -->
    {#if showInput}
      <div>
        <label for="amount" class="block text-sm font-medium text-gray-700 mb-1">
          Amount
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <DollarSign class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            id="amount"
            class={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass} ${
              disabled ? 'bg-gray-100 cursor-not-allowed' : ''
            }`}
            value={amountValue}
            oninput={handleAmountChange}
            disabled={disabled || loading}
            step="any"
            min="0"
          />
        </div>
      </div>
    {/if}

    <!-- Currency selection -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <label for="from-currency" class="block text-sm font-medium text-gray-700 mb-1">
          From
        </label>
        <select
          id="from-currency"
          class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${selectClass} ${
            disabled ? 'bg-gray-100 cursor-not-allowed' : ''
          }`}
          value={sourceCurrency}
          onchange={handleSourceCurrencyChange}
          disabled={disabled || loading}
        >
          {#each currencies as currency}
            <option value={currency.code}>
              {currency.code} - {currency.name}
            </option>
          {/each}
        </select>
      </div>

      <div class="flex items-end justify-center">
        <button
          type="button"
          class="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
          onclick={() => {
            const temp = sourceCurrency;
            sourceCurrency = targetCurrency;
            targetCurrency = temp;
            onCurrencyChange?.(sourceCurrency, targetCurrency);
            convertCurrency();
          }}
          disabled={disabled || loading}
          aria-label="Swap currencies"
        >
          <RefreshCw class="h-6 w-6" />
        </button>
      </div>

      <div>
        <label for="to-currency" class="block text-sm font-medium text-gray-700 mb-1">
          To
        </label>
        <select
          id="to-currency"
          class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${selectClass} ${
            disabled ? 'bg-gray-100 cursor-not-allowed' : ''
          }`}
          value={targetCurrency}
          onchange={handleTargetCurrencyChange}
          disabled={disabled || loading}
        >
          {#each currencies as currency}
            <option value={currency.code}>
              {currency.code} - {currency.name}
            </option>
          {/each}
        </select>
      </div>
    </div>

    <!-- Results -->
    <div class={`mt-6 p-4 bg-gray-50 rounded-lg ${resultClass}`}>
      <div class="flex justify-between items-center">
        <div>
          <p class="text-sm text-gray-600">Converted Amount</p>
          <p class="text-2xl font-semibold text-gray-900">
            {getCurrencySymbol(targetCurrency)}{convertedAmount.toFixed(2)}
          </p>
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-600">Original Amount</p>
          <p class="text-lg text-gray-700">
            {getCurrencySymbol(sourceCurrency)}{amountValue.toFixed(2)}
          </p>
        </div>
      </div>

      {#if showConversionRate}
        <div class="mt-3 pt-3 border-t border-gray-200">
          <p class="text-sm text-gray-600">
            1 {sourceCurrency} = {conversionRate.toFixed(4)} {targetCurrency}
            (as of today)
          </p>
        </div>
      {/if}

      {#if showFeeEstimate && feePercentage > 0}
        <div class="mt-3 pt-3 border-t border-gray-200">
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">Estimated fees ({feePercentage}%):</span>
            <span class="font-medium text-gray-900">
              {getCurrencySymbol(targetCurrency)}{feeAmount.toFixed(2)}
            </span>
          </div>
          <div class="flex justify-between mt-1">
            <span class="text-gray-600 font-medium">Total with fees:</span>
            <span class="font-bold text-lg text-gray-900">
              {getCurrencySymbol(targetCurrency)}{(convertedAmount + feeAmount).toFixed(2)}
            </span>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>


