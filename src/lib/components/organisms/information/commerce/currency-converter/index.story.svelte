<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import CurrencyConverter from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showInput', type: 'boolean', defaultValue: true },
      { name: 'showConversionRate', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample currencies
  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: 'в‚¬' },
    { code: 'GBP', name: 'British Pound', symbol: 'ВЈ' },
    { code: 'JPY', name: 'Japanese Yen', symbol: 'ВҐ' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'CA$' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'AU$' }
  ];

  // Sample exchange rates
  const exchangeRates = {
    'USD_EUR': 0.93,
    'USD_GBP': 0.79,
    'USD_JPY': 154.32,
    'USD_CAD': 1.36,
    'USD_AUD': 1.54,
    'EUR_USD': 1.07,
    'EUR_GBP': 0.85,
    'EUR_JPY': 165.87,
    'EUR_CAD': 1.46,
    'EUR_AUD': 1.65,
    'GBP_USD': 1.27,
    'GBP_EUR': 1.18,
    'GBP_JPY': 195.14,
    'GBP_CAD': 1.72,
    'GBP_AUD': 1.94,
    'JPY_USD': 0.0065,
    'JPY_EUR': 0.0060,
    'JPY_GBP': 0.0051,
    'JPY_CAD': 0.0088,
    'JPY_AUD': 0.010,
    'CAD_USD': 0.74,
    'CAD_EUR': 0.68,
    'CAD_GBP': 0.58,
    'CAD_JPY': 113.76,
    'CAD_AUD': 1.13,
    'AUD_USD': 0.65,
    'AUD_EUR': 0.60,
    'AUD_GBP': 0.51,
    'AUD_JPY': 100.39,
    'AUD_CAD': 0.88
  };
</script>

<Story
  {id}
  {title}
  {description}
  component={CurrencyConverter}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-currency-converter grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Currency Converter Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive currency converter with real-time exchange rates.</p>

        <div class="mt-6">
          <CurrencyConverter
            amount={100}
            fromCurrency="USD"
            toCurrency="EUR"
            currencies={currencies}
            exchangeRates={exchangeRates}
            showInput={props.showInput}
            showLabels={true}
            showConversionRate={props.showConversionRate}
            showFeeEstimate={false}
            feePercentage={0.5}
            onConvert={(result) => console.log('Conversion result:', result)}
            onCurrencyChange={(from, to) => console.log(`Currency changed: ${from} to ${to}`)}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Currency Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different currency converter configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">EUR to GBP</p>
            <div>
              <CurrencyConverter
                amount={50}
                fromCurrency="EUR"
                toCurrency="GBP"
                currencies={currencies}
                exchangeRates={exchangeRates}
                showInput={true}
                showLabels={true}
                showConversionRate={true}
                showFeeEstimate={true}
                feePercentage={1.2}
                onConvert={(result) => console.log('Conversion result:', result)}
                onCurrencyChange={(from, to) => console.log(`Currency changed: ${from} to ${to}`)}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">JPY to USD</p>
            <div>
              <CurrencyConverter
                amount={10000}
                fromCurrency="JPY"
                toCurrency="USD"
                currencies={currencies}
                exchangeRates={exchangeRates}
                showInput={true}
                showLabels={true}
                showConversionRate={true}
                showFeeEstimate={false}
                feePercentage={0}
                onConvert={(result) => console.log('Conversion result:', result)}
                onCurrencyChange={(from, to) => console.log(`Currency changed: ${from} to ${to}`)}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


