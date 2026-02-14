<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import CartSummary from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showItemThumbnails', type: 'boolean', defaultValue: true },
      { name: 'showDiscounts', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample cart items
  const sampleItems = [
    {
      id: '1',
      name: 'Wireless Headphones',
      price: 129.99,
      quantity: 1,
      originalPrice: 149.99,
      discountPercent: 13,
      thumbnail: 'https://placehold.co/100x100?text=Headphones',
      inStock: true,
      maxQuantity: 5
    },
    {
      id: '2',
      name: 'Smart Watch',
      price: 199.99,
      quantity: 2,
      originalPrice: 249.99,
      discountPercent: 20,
      thumbnail: 'https://placehold.co/100x100?text=Watch',
      inStock: true,
      maxQuantity: 3
    },
    {
      id: '3',
      name: 'Bluetooth Speaker',
      price: 79.99,
      quantity: 1,
      thumbnail: 'https://placehold.co/100x100?text=Speaker',
      inStock: false,
      maxQuantity: 10
    }
  ];

  // Sample promotions
  const samplePromotions = [
    {
      id: 'promo1',
      code: 'SAVE10',
      description: 'Save 10% on your order',
      discountType: 'percentage' as const,
      discountValue: 10,
      applied: true
    },
    {
      id: 'promo2',
      code: 'FREESHIP',
      description: 'Free shipping on orders over $50',
      discountType: 'fixed' as const,
      discountValue: 5.99,
      applied: false
    }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={CartSummary}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props: { showItemThumbnails?: boolean; showDiscounts?: boolean })}
    <section class="sb-organisms-cart-summary grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Cart Summary Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive cart summary with item management.</p>

        <div class="mt-6">
          <CartSummary
            items={sampleItems}
            promotions={samplePromotions}
            shippingCost={5.99}
            taxCost={12.50}
            discountAmount={25.50}
            showItemThumbnails={props.showItemThumbnails}
            showDiscounts={props.showDiscounts}
            showShipping={true}
            showTaxes={true}
            showPromoCode={true}
            currency="USD"
            onQuantityChange={(itemId, newQuantity) => console.log(`Quantity changed for ${itemId}: ${newQuantity}`)}
            onItemRemove={(itemId) => console.log(`Item removed: ${itemId}`)}
            onApplyPromotion={(code) => console.log(`Applying promotion: ${code}`)}
            onCheckout={() => console.log('Proceeding to checkout')}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Cart Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different cart configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Empty Cart</p>
            <div>
              <CartSummary
                items={[]}
                shippingCost={0}
                taxCost={0}
                discountAmount={0}
                showItemThumbnails={true}
                showDiscounts={true}
                showShipping={true}
                showTaxes={true}
                showPromoCode={true}
                currency="USD"
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Cart Without Thumbnails</p>
            <div>
              <CartSummary
                items={sampleItems.slice(0, 1)}
                shippingCost={0}
                taxCost={8.25}
                discountAmount={0}
                showItemThumbnails={false}
                showDiscounts={true}
                showShipping={false}
                showTaxes={true}
                showPromoCode={false}
                currency="USD"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

