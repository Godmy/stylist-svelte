<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import Upsell from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showSavings', type: 'boolean', defaultValue: true },
      { name: 'showReason', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample products for the upsell component
  const currentProduct = {
    id: 'plan-basic',
    name: 'Starter Plan',
    description: 'Includes 5 projects, basic analytics, and community support.',
    price: 12
  };

  const upsellProducts = [
    {
      id: 'plan-pro',
      name: 'Professional Plan',
      description: 'Unlimited projects, advanced reports, and CRM sync.',
      price: 32,
      originalPrice: 42,
      discountPercent: 25,
      rating: 4.8,
      reviewCount: 187,
      tags: ['Most popular', 'Save 20%']
    },
    {
      id: 'plan-enterprise',
      name: 'Enterprise Plan',
      description: 'Everything in Pro plus automation rules and premium support.',
      price: 58,
      originalPrice: 74,
      discountPercent: 18,
      tags: ['Automation', 'Teams']
    },
    {
      id: 'plan-premium',
      name: 'Premium Plan',
      description: 'AI-powered insights and predictive analytics for growth teams.',
      price: 86,
      originalPrice: 102,
      discountPercent: 15,
      tags: ['AI Features']
    }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={Upsell}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props: { showSavings?: boolean; showReason?: boolean })}
    <section class="sb-organisms-upsell grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Upsell Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Upsell component with upgrade recommendations.</p>

        <div class="mt-6">
          <Upsell
            currentProduct={currentProduct}
            upsellProducts={upsellProducts}
            title="You might upgrade to"
            description="Consider these premium options"
            showSavings={props.showSavings}
            showReason={props.showReason}
            maxProducts={3}
            onProductUpgrade={(product) => console.log('Upgraded to:', product.name)}
            onProductAddToCart={(product) => console.log('Added to cart:', product.name)}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Upsell Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different upsell configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Limited Products</p>
            <div>
              <Upsell
                currentProduct={currentProduct}
                upsellProducts={upsellProducts.slice(0, 1)}
                title="Premium Upgrade"
                description="Single recommendation for focused upsell"
                showSavings={true}
                showReason={false}
                maxProducts={1}
                onProductUpgrade={(product) => console.log('Upgraded to:', product.name)}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">With Savings Highlight</p>
            <div>
              <Upsell
                currentProduct={{
                  ...currentProduct,
                  name: 'Basic Package',
                  price: 25
                }}
                upsellProducts={[
                  {
                    ...upsellProducts[0],
                    name: 'Pro Package',
                    price: 45,
                    originalPrice: 60,
                    discountPercent: 25
                  }
                ]}
                title="Upgrade Opportunity"
                description="Save money with our premium package"
                showSavings={true}
                showReason={true}
                maxProducts={1}
                onProductUpgrade={(product) => console.log('Upgraded to:', product.name)}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

