<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import ProductCatalog from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'layout', type: 'select', options: ['grid', 'list'], defaultValue: 'grid' },
      { name: 'showRating', type: 'boolean', defaultValue: true },
      { name: 'showPrice', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  const sampleProducts = [
    { id: '1', title: 'Wireless Headphones', price: 199.99, currency: '$', image: 'https://via.placeholder.com/200x200?text=Headphones', rating: 4.5 },
    { id: '2', title: 'Smart Watch', price: 249.99, currency: '$', image: 'https://via.placeholder.com/200x200?text=Smartwatch', rating: 4.2 },
    { id: '3', title: 'Bluetooth Speaker', price: 89.99, currency: '$', image: 'https://via.placeholder.com/200x200?text=Speaker', rating: 4.0 }
  ];

  function handleProductClick(product: any) {
    console.log('Product clicked:', product.title);
  }

  function handleAddToCart(product: any) {
    console.log('Added to cart:', product.title);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={ProductCatalog}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-product-catalog grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Product Catalog Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive product catalog with customizable options.</p>

        <div class="mt-6">
          <ProductCatalog
            products={sampleProducts}
            layout={values.layout}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Product Catalog Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different product catalog configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">List Layout</p>
            <div>
              <ProductCatalog
                products={sampleProducts}
                layout="list"
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Rating</p>
            <div>
              <ProductCatalog
                products={sampleProducts}
                layout="grid"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

