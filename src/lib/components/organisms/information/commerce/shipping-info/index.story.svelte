<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import ShippingInfo from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showOptions', type: 'boolean', defaultValue: true },
      { name: 'showFreeShipping', type: 'boolean', defaultValue: true }
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
      trackingAvailable: true,
      signatureRequired: false,
      insurance: false,
      carbonNeutral: false
    },
    {
      id: 'express',
      name: 'Express Shipping',
      description: '2-day expedited shipping',
      price: 14.99,
      estimatedDays: 2,
      carrier: 'FedEx',
      trackingAvailable: true,
      signatureRequired: true,
      insurance: true,
      carbonNeutral: true
    },
    {
      id: 'overnight',
      name: 'Overnight Shipping',
      description: 'Next-day delivery',
      price: 24.99,
      estimatedDays: 1,
      carrier: 'FedEx',
      trackingAvailable: true,
      signatureRequired: true,
      insurance: true,
      carbonNeutral: false
    }
  ];

  // Sample regions
  const regions = [
    {
      id: 'na',
      name: 'North America',
      countries: ['US', 'CA', 'MX'],
      additionalFee: 0
    },
    {
      id: 'eu',
      name: 'Europe',
      countries: ['GB', 'DE', 'FR', 'IT', 'ES'],
      additionalFee: 5.99
    },
    {
      id: 'asia',
      name: 'Asia-Pacific',
      countries: ['JP', 'CN', 'AU', 'SG', 'KR'],
      additionalFee: 8.99
    }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={ShippingInfo}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props: { showOptions?: boolean; showFreeShipping?: boolean })}
    <section class="sb-organisms-shipping-info grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Shipping Info Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Shipping information with options and regions.</p>

        <div class="mt-6">
          <ShippingInfo
            shippingOptions={shippingOptions}
            regions={regions}
            showOptions={props.showOptions}
            showRegions={true}
            showDeliveryEstimate={true}
            showFreeShippingInfo={props.showFreeShipping}
            showRestrictions={true}
            showEstimates={true}
            deliveryEstimate={new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)}
            freeShippingThreshold={50}
            showFreeShipping={true}
            onOptionSelect={(option) => console.log('Selected shipping option:', option)}
            onRegionSelect={(region) => console.log('Selected region:', region)}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Shipping Info Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different shipping information configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Options</p>
            <div>
              <ShippingInfo
                shippingOptions={[]}
                regions={regions.slice(0, 2)}
                showOptions={false}
                showRegions={true}
                showDeliveryEstimate={false}
                showFreeShippingInfo={true}
                showRestrictions={false}
                showEstimates={false}
                freeShippingThreshold={75}
                showFreeShipping={true}
                onOptionSelect={(option) => console.log('Selected shipping option:', option)}
                onRegionSelect={(region) => console.log('Selected region:', region)}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">With Carbon Neutral Options</p>
            <div>
              <ShippingInfo
                shippingOptions={[
                  {
                    id: 'eco-standard',
                    name: 'Eco Standard Shipping',
                    description: 'Carbon neutral ground shipping',
                    price: 9.99,
                    estimatedDays: 7,
                    carrier: 'USPS',
                    trackingAvailable: true,
                    signatureRequired: false,
                    insurance: false,
                    carbonNeutral: true
                  },
                  {
                    id: 'eco-express',
                    name: 'Eco Express Shipping',
                    description: 'Carbon neutral expedited shipping',
                    price: 16.99,
                    estimatedDays: 3,
                    carrier: 'FedEx',
                    trackingAvailable: true,
                    signatureRequired: true,
                    insurance: true,
                    carbonNeutral: true
                  }
                ]}
                regions={[]}
                showOptions={true}
                showRegions={false}
                showDeliveryEstimate={true}
                showFreeShippingInfo={false}
                showRestrictions={true}
                showEstimates={true}
                deliveryEstimate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
                showFreeShipping={false}
                onOptionSelect={(option) => console.log('Selected eco shipping option:', option)}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


