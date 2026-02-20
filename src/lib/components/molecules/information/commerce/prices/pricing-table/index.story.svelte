<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import PricingTable from './index.svelte';

  type PricingTableStoryProps = {
    showHighlightedPlan: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showHighlightedPlan',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-pricing-table"
  title="Molecules / Information / Commerce / Prices / PricingTable"
  component={PricingTable}
  category="Molecules/Information/Commerce/Prices"
  description="A pricing table component."
  controls={controls}
>
  {#snippet children(args)}
    <div class="sb-molecules-pricing-table p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PricingTable Story</h2>
      <PricingTable
        plans={[
          {
            name: 'Basic',
            price: '$9',
            period: 'month',
            features: [
              'Up to 5 projects',
              'Basic support',
              '1GB storage'
            ],
            cta: 'Get Started'
          },
          {
            name: 'Pro',
            price: '$29',
            period: 'month',
            features: [
              'Unlimited projects',
              'Priority support',
              '10GB storage',
              'Advanced features'
            ],
            cta: 'Get Started',
            highlighted: args.showHighlightedPlan ?? true
          },
          {
            name: 'Enterprise',
            price: '$99',
            period: 'month',
            features: [
              'Unlimited projects',
              '24/7 support',
              '100GB storage',
              'Advanced features',
              'Custom integrations'
            ],
            cta: 'Contact Sales'
          }
        ]}
      />
    </div>
  {/snippet}
</Story>



