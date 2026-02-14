<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import ShippingCalculator from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showWeightInput', type: 'boolean', defaultValue: true },
      { name: 'showDimensionsInput', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample shipping options
  const shippingOptions = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      description: 'Ground shipping via major carriers',
      price: 7.99,
      estimatedDays: 5,
      carrier: 'USPS',
      trackingAvailable: true
    },
    {
      id: 'express',
      name: 'Express Shipping',
      description: '2-day expedited shipping',
      price: 14.99,
      estimatedDays: 2,
      carrier: 'FedEx',
      trackingAvailable: true
    },
    {
      id: 'overnight',
      name: 'Overnight Shipping',
      description: 'Next-day delivery',
      price: 24.99,
      estimatedDays: 1,
      carrier: 'FedEx',
      trackingAvailable: true
    }
  ];

  // Sample countries
  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' }
  ];

  // Sample states
  const states = [
    { code: 'NY', name: 'New York', countryCode: 'US' },
    { code: 'CA', name: 'California', countryCode: 'US' },
    { code: 'TX', name: 'Texas', countryCode: 'US' },
    { code: 'ON', name: 'Ontario', countryCode: 'CA' },
    { code: 'QC', name: 'Quebec', countryCode: 'CA' }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={ShippingCalculator}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props: { showWeightInput?: boolean; showDimensionsInput?: boolean })}
    <section class="sb-organisms-shipping-calculator grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Shipping Calculator Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Shipping calculator with weight and dimension inputs.</p>

        <div class="mt-6">
          <ShippingCalculator
            shippingOptions={shippingOptions}
            countries={countries}
            states={states}
            showWeightInput={props.showWeightInput}
            showDimensionsInput={props.showDimensionsInput}
            showCountrySelector={true}
            showStateSelector={true}
            defaultOriginCountry="US"
            defaultDestinationCountry="CA"
            defaultWeight={2.5}
            defaultDimensions={{ length: 12, width: 10, height: 8 }}
            onCalculate={(options) => console.log('Calculated shipping options:', options)}
            onOptionSelect={(option) => console.log('Selected shipping option:', option)}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Shipping Calculator Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different shipping calculator configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Dimensions</p>
            <div>
              <ShippingCalculator
                shippingOptions={shippingOptions.slice(0, 2)}
                countries={countries.slice(0, 3)}
                showWeightInput={true}
                showDimensionsInput={false}
                showCountrySelector={true}
                showStateSelector={false}
                defaultOriginCountry="US"
                defaultDestinationCountry="GB"
                defaultWeight={1.2}
                onCalculate={(options) => console.log('Calculated options without dimensions:', options)}
                onOptionSelect={(option) => console.log('Selected option:', option)}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Weight Input</p>
            <div>
              <ShippingCalculator
                shippingOptions={shippingOptions.slice(1, 3)}
                countries={countries.slice(1, 4)}
                showWeightInput={false}
                showDimensionsInput={true}
                showCountrySelector={true}
                showStateSelector={true}
                defaultOriginCountry="DE"
                defaultDestinationCountry="FR"
                defaultDimensions={{ length: 8, width: 6, height: 4 }}
                onCalculate={(options) => console.log('Calculated options without weight:', options)}
                onOptionSelect={(option) => console.log('Selected option:', option)}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

