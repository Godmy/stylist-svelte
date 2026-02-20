<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import ProductCardExtended from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'title', type: 'text', defaultValue: 'Premium Wireless Headphones' },
      { name: 'price', type: 'number', defaultValue: 299.99 },
      { name: 'currency', type: 'text', defaultValue: '$' },
      { name: 'rating', type: 'number', defaultValue: 4.7 },
      { name: 'reviewCount', type: 'number', defaultValue: 342 },
      { name: 'badge', type: 'text', defaultValue: 'Sale' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  function parseFeatures(featuresString: string): string[] {
    return featuresString.split(',').map(f => f.trim()).filter(f => f.length > 0);
  }

  // Sample product data
  const sampleProduct = {
    title: 'Premium Wireless Headphones',
    price: 299.99,
    currency: '$',
    image: 'https://via.placeholder.com/400x300?text=Headphones',
    rating: 4.7,
    reviewCount: 342,
    description: 'Experience crystal clear sound with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    features: parseFeatures('Active Noise Cancellation,30-hour battery life,Bluetooth 5.0,Memory foam ear cushions'),
    badge: 'Sale'
  };
</script>

<Story
  {id}
  {title}
  {description}
  component={ProductCardExtended}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-product-card-extended grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Product Card Extended Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive product card with detailed information and actions.</p>

        <div class="mt-6">
          <ProductCardExtended
            {...sampleProduct}
            title={values.title}
            price={values.price}
            currency={values.currency}
            rating={values.rating}
            reviewCount={values.reviewCount}
            badge={values.badge}
            onAddToCart={() => console.log('Add to Cart clicked')}
            onWishlist={() => console.log('Add to Wishlist clicked')}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Product Card Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different product card configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Featured Product</p>
            <div>
              <ProductCardExtended
                {...sampleProduct}
                badge="Featured"
                onAddToCart={() => console.log('Add to Cart clicked')}
                onWishlist={() => console.log('Add to Wishlist clicked')}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">New Arrival</p>
            <div>
              <ProductCardExtended
                {...sampleProduct}
                badge="New"
                onAddToCart={() => console.log('Add to Cart clicked')}
                onWishlist={() => console.log('Add to Wishlist clicked')}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

