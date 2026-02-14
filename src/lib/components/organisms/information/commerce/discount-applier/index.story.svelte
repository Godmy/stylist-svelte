<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import DiscountApplier from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showCodeInput', type: 'boolean', defaultValue: true },
      { name: 'showRuleList', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample discount rules
  const discountRules = [
    {
      id: 'rule1',
      code: 'SAVE10',
      type: 'percentage' as const,
      value: 10,
      name: '10% Off',
      description: 'Get 10% off your entire order',
      minOrderAmount: 50,
      startDate: new Date(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      usageLimit: 100,
      usedCount: 45
    },
    {
      id: 'rule2',
      code: 'FREESHIP',
      type: 'free_shipping' as const,
      value: 0,
      name: 'Free Shipping',
      description: 'Free shipping on orders over $75',
      minOrderAmount: 75,
      startDate: new Date(),
      endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // 15 days from now
    },
    {
      id: 'rule3',
      code: 'SAVEFIXED',
      type: 'fixed' as const,
      value: 20,
      name: '$20 Off',
      description: 'Get $20 off your order',
      minOrderAmount: 100,
      startDate: new Date(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
    }
  ];

  // Sample cart items
  const cartItems = [
    { id: 'item1', name: 'Wireless Headphones', price: 129.99, quantity: 1 },
    { id: 'item2', name: 'Bluetooth Speaker', price: 79.99, quantity: 1 }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={DiscountApplier}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props: { showCodeInput?: boolean; showRuleList?: boolean })}
    <section class="sb-organisms-discount-applier grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Discount Applier Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive discount applier with promo codes.</p>

        <div class="mt-6">
          <DiscountApplier
            rules={discountRules}
            cartItems={cartItems}
            cartTotal={209.98}
            showCodeInput={props.showCodeInput}
            showRuleList={props.showRuleList}
            showAppliedRules={true}
            onApplyCode={(code) => console.log(`Applying code: ${code}`)}
            onApplyRule={(rule) => console.log(`Applying rule: ${rule.name}`)}
            onRemoveRule={(ruleId) => console.log(`Removing rule: ${ruleId}`)}
            onValidateCode={async (code) => {
              console.log(`Validating code: ${code}`);
              return true; // Simulate valid code
            }}
            currency="USD"
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Discount Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different discount configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Code Input</p>
            <div>
              <DiscountApplier
                rules={discountRules}
                cartItems={cartItems}
                cartTotal={129.99}
                showCodeInput={false}
                showRuleList={true}
                showAppliedRules={true}
                onApplyCode={(code) => console.log(`Applying code: ${code}`)}
                onApplyRule={(rule) => console.log(`Applying rule: ${rule.name}`)}
                currency="USD"
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">With Applied Codes</p>
            <div>
              <DiscountApplier
                rules={discountRules}
                cartItems={cartItems}
                cartTotal={189.99}
                appliedCodes={['SAVE10']}
                showCodeInput={true}
                showRuleList={true}
                showAppliedRules={true}
                onApplyCode={(code) => console.log(`Applying code: ${code}`)}
                onApplyRule={(rule) => console.log(`Applying rule: ${rule.name}`)}
                onRemoveRule={(ruleId) => console.log(`Removing rule: ${ruleId}`)}
                currency="USD"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

