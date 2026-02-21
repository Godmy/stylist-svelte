<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

  import TaxCalculator from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showLocationSelector', type: 'boolean', defaultValue: true },
      { name: 'showTaxRateSelector', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample tax data
  const locations = [
    {
      id: 'ny',
      name: 'New York',
      city: 'New York City',
      countryCode: 'US',
      stateCode: 'NY',
      taxRates: [
        {
          id: 'ny-state',
          name: 'NY State Tax',
          rate: 4.0,
          description: 'State tax for New York',
          compound: false
        },
        {
          id: 'ny-city',
          name: 'NY City Tax',
          rate: 4.5,
          description: 'City tax for New York City',
          compound: false
        }
      ]
    },
    {
      id: 'ca',
      name: 'California',
      city: 'Los Angeles',
      countryCode: 'US',
      stateCode: 'CA',
      taxRates: [
        {
          id: 'ca-state',
          name: 'CA State Tax',
          rate: 6.0,
          description: 'State tax for California',
          compound: false
        },
        {
          id: 'ca-local',
          name: 'CA Local Tax',
          rate: 2.5,
          description: 'Local tax for Los Angeles',
          compound: false
        }
      ]
    }
  ];

  const taxRates = [
    {
      id: 'federal',
      name: 'Federal Tax',
      rate: 0.0,
      description: 'Federal tax rate',
      compound: false
    }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={TaxCalculator}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-tax-calculator grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Tax Calculator Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Tax calculator with location and rate selection.</p>

        <div class="mt-6">
          <TaxCalculator
            locations={locations}
            taxRates={taxRates}
            showLocationSelector={values.showLocationSelector}
            showTaxRateSelector={values.showTaxRateSelector}
            showIncludeTaxToggle={true}
            defaultAmount={100}
            defaultLocation="ny"
            currency="USD"
            locale="en-US"
            onCalculate={(result) => console.log('Tax calculation result:', result)}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Tax Calculator Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different tax calculator configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">California Rates</p>
            <div>
              <TaxCalculator
                locations={locations}
                taxRates={taxRates}
                showLocationSelector={true}
                showTaxRateSelector={true}
                showIncludeTaxToggle={false}
                defaultAmount={250}
                defaultLocation="ca"
                currency="USD"
                locale="en-US"
                onCalculate={(result) => console.log('CA tax calculation result:', result)}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Simple Mode</p>
            <div>
              <TaxCalculator
                locations={[]}
                taxRates={[
                  {
                    id: 'simple-vat',
                    name: 'VAT',
                    rate: 20.0,
                    description: 'Value Added Tax',
                    compound: false
                  }
                ]}
                showLocationSelector={false}
                showTaxRateSelector={true}
                showIncludeTaxToggle={true}
                defaultAmount={50}
                currency="USD"
                locale="en-US"
                onCalculate={(result) => console.log('Simple tax calculation result:', result)}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

