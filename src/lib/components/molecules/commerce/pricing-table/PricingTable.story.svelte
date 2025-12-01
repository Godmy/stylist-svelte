<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PricingTable from './PricingTable.svelte';

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
  title="PricingTable"
  component={PricingTable}
  category="Molecules"
  description="A pricing table component."
  tags={['pricing', 'table', 'plans']}
  controls={controls}
>
  {#snippet children(props: PricingTableStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
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
            highlighted: props.showHighlightedPlan
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